import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search, ExternalLink, Zap, Code, Image, Video, PenTool, Globe, Layout, Mic, Search as SearchIcon,
  ShieldCheck, Database, Users, Palette, Target, Layers, Smartphone, Box, UserCircle, Scissors,
  Film, Sparkles, Music, FileText, BarChart, Pen, ShoppingBag, Type, CheckCircle, Edit3, MessageSquare,
  Terminal, Cpu, Wind, Puzzle, Gamepad, Coffee, Volume2, Shield, Radio, LineChart, Mail, Share2,
  Calendar, MessageCircle, CheckSquare, Brain, PieChart, BarChart2, Activity, UserPlus, BookOpen,
  Book, Network, Eye, AlertTriangle
} from 'lucide-react';
import { Section } from '../components/Section';
import { GlassCard } from '../components/GlassCard';
import { FAQAccordion } from '../components/FAQAccordion';
import { CATEGORIES, AI_TOOLS, FAQS } from '../data';
import { cn } from '../lib/utils';

const ICON_MAP: Record<string, any> = {
  Globe, Image, Code, Layout, Video, PenTool, Mic, Search: SearchIcon, Zap, Database, Users,
  ShieldCheck, Palette, Target, Layers, Smartphone, Box, UserCircle, Scissors, Film, Sparkles,
  Music, FileText, BarChart, Pen, ShoppingBag, Type, CheckCircle, Edit3, MessageSquare,
  Terminal, Cpu, Wind, Puzzle, Gamepad, Coffee, Volume2, Shield, Radio, LineChart, Mail,
  Share2, Calendar, MessageCircle, CheckSquare, Brain, PieChart, BarChart2, Activity,
  UserPlus, BookOpen, Book, Network, Eye, AlertTriangle
};

export function Directory() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTools = useMemo(() => {
    return AI_TOOLS.filter(tool => {
      const matchesCategory = activeCategory === 'All' || tool.category === activeCategory;
      const matchesSearch =
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleCategoryClick = (cat: string) => {
    setActiveCategory(prev => prev === cat ? 'All' : cat);
  };

  return (
    <div className="pt-32 pb-20 px-4">
      {/* Search Header Section */}
      <Section className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 dark:text-white">
          Explore AI Tools
        </h1>
        <div className="relative max-w-3xl mx-auto w-full px-4">
          <div className="absolute left-8 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 z-10">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            placeholder="Search by name or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-14 pr-6 py-5 rounded-2xl glass dark:glass-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-dark-accent/30 transition-all text-lg"
          />
        </div>
      </Section>

      {/* Category Filter Section */}
      <Section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setActiveCategory('All')}
            className={cn(
              "px-8 py-3 rounded-xl text-sm font-bold transition-all border border-transparent",
              activeCategory === 'All'
                ? "bg-white/20 text-white border-white/20 shadow-lg"
                : "glass dark:glass-dark dark:text-gray-400 hover:bg-white/10"
            )}
          >
            All Tools
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={cn(
                "px-6 py-3 rounded-xl text-sm font-bold transition-all border border-transparent",
                activeCategory === cat
                  ? "bg-white/20 text-white border-white/20 shadow-lg"
                  : "glass dark:glass-dark dark:text-gray-400 hover:bg-white/10"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </Section>

      {/* Tools Grid Section */}
      <Section className="max-w-7xl mx-auto mb-32 min-h-[400px] px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredTools.map((tool) => {
              const Icon = ICON_MAP[tool.icon] || Zap;
              return (
                <motion.div
                  key={tool.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <GlassCard className="h-full flex flex-col p-8 group hover:border-white/20 transition-colors">
                    <div className="flex items-start justify-between mb-8">
                      <div className="w-12 h-12 rounded-2xl bg-dark-accent/20 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.2em] font-black text-white/50 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                        {tool.category}
                      </span>
                    </div>

                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold dark:text-white mb-3 group-hover:text-dark-accent transition-colors">
                        {tool.name}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-8">
                        {tool.desc}
                      </p>
                    </div>

                    <div className="mt-auto">
                      <a
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-4 rounded-xl glass-dark text-white text-sm font-bold flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all border border-white/10"
                      >
                        Try Now <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-32">
            <p className="text-gray-400 text-lg">No tools found matching your criteria.</p>
          </div>
        )}
      </Section>

      {/* FAQ Section - Updated to match Home page style */}
      <Section className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold dark:text-white mb-4">Directory FAQ</h2>
          <p className="text-gray-500 dark:text-gray-400">Common questions about our curated list.</p>
        </div>
        <FAQAccordion items={FAQS.directory} />
      </Section>
    </div>
  );
}