'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, ExternalLink, Zap, Code, Image, Video, PenTool, Globe, Layout, Mic,
  ShieldCheck, Database, Users, Palette, Target, Layers, Smartphone, Box, UserCircle, Scissors,
  Film, Sparkles, Music, FileText, BarChart, Pen, ShoppingBag, Type, CheckCircle, Edit3, MessageSquare,
  Terminal, Cpu, Wind, Puzzle, Gamepad, Coffee, Volume2, Shield, Radio, LineChart, Mail, Share2,
  Calendar, MessageCircle, CheckSquare, Brain, PieChart, BarChart2, Activity, UserPlus, BookOpen,
  Book, Network, Eye, AlertTriangle, Bookmark, ThumbsUp, Scale
} from 'lucide-react';
import { GlassCard } from '@/components/GlassCard';
import { FAQAccordion } from '@/components/FAQAccordion';
import { Section } from '@/components/Section';
import { useStack } from '@/context/StackContext';
import { CATEGORIES, AI_TOOLS, PRICING_TYPES, FAQS } from '@/lib/data';
import { cn } from '@/lib/utils';

const ICON_MAP: Record<string, any> = {
  Globe, Image, Code, Layout, Video, PenTool, Mic, Zap, Database, Users,
  ShieldCheck, Palette, Target, Layers, Smartphone, Box, UserCircle, Scissors, Film, Sparkles,
  Music, FileText, BarChart, Pen, ShoppingBag, Type, CheckCircle, Edit3, MessageSquare,
  Terminal, Cpu, Wind, Puzzle, Gamepad, Coffee, Volume2, Shield, Radio, LineChart, Mail,
  Share2, Calendar, MessageCircle, CheckSquare, Brain, PieChart, BarChart2, Activity,
  UserPlus, BookOpen, Book, Network, Eye, AlertTriangle, Search
};

export function DirectoryClient({ initialCategory = 'All' }: { initialCategory?: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { isSaved, toggleSave, upvotes, upvoteTool } = useStack();

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [activePricing, setActivePricing] = useState('All');
  const [apiOnly, setApiOnly] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTools = useMemo(() => {
    return AI_TOOLS.filter((tool) => {
      const matchesCategory =
        activeCategory === 'All' || tool.category.toLowerCase() === activeCategory.toLowerCase();
      const matchesPricing =
        activePricing === 'All' || tool.pricingType === activePricing;
      const matchesApi = !apiOnly || tool.hasApi;
      const matchesSearch =
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.desc.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesPricing && matchesApi && matchesSearch;
    });
  }, [activeCategory, activePricing, apiOnly, searchQuery]);

  const handleCategoryClick = (cat: string) => {
    const nextCategory = activeCategory === cat ? 'All' : cat;
    setActiveCategory(nextCategory);

    const params = new URLSearchParams(searchParams.toString());
    if (nextCategory === 'All') {
      params.delete('category');
    } else {
      params.set('category', nextCategory);
    }
    router.replace(`/directory?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="pt-32 pb-20 px-4">
      <Section className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-white">
          Explore AI Tools
        </h1>
        <div className="relative max-w-3xl mx-auto w-full px-4">
          <div className="absolute left-8 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 z-10">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            placeholder="Search by name, feature, or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-14 pr-6 py-5 rounded-2xl glass dark:glass-dark text-white focus:outline-none focus:ring-2 focus:ring-dark-accent/30 transition-all text-lg"
          />
        </div>
      </Section>

      <Section className="max-w-6xl mx-auto mb-10">
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <button
            type="button"
            onClick={() => handleCategoryClick('All')}
            className={cn(
              "px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all border",
              activeCategory === 'All'
                ? "bg-white/20 text-white border-white/30 shadow-lg"
                : "glass text-gray-400 border-white/5 hover:bg-white/10"
            )}
          >
            All Categories
          </button>
          {CATEGORIES.map((cat) => (
            <button
              type="button"
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={cn(
                "px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all border",
                activeCategory === cat
                  ? "bg-white/20 text-white border-white/30 shadow-lg"
                  : "glass text-gray-400 border-white/5 hover:bg-white/10"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 pt-4 border-t border-white/5">
          <span className="text-xs font-semibold text-gray-400 mr-2">Pricing:</span>
          {PRICING_TYPES.map((type) => (
            <button
              type="button"
              key={type}
              onClick={() => setActivePricing(type)}
              className={cn(
                "px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all border",
                activePricing === type
                  ? "bg-dark-accent text-white border-dark-accent"
                  : "glass text-gray-400 border-white/5 hover:text-white"
              )}
            >
              {type}
            </button>
          ))}

          <button
            type="button"
            onClick={() => setApiOnly(!apiOnly)}
            className={cn(
              "px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all border ml-2",
              apiOnly
                ? "bg-blue-600 text-white border-blue-500"
                : "glass text-gray-400 border-white/5 hover:text-white"
            )}
          >
            Has API
          </button>
        </div>
      </Section>

      <Section className="max-w-7xl mx-auto mb-32 min-h-[400px] px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredTools.map((tool) => {
              const Icon = ICON_MAP[tool.icon] || Zap;
              const saved = isSaved(tool.id);
              const toolVotes = upvotes[tool.id] ?? tool.upvotes;

              return (
                <motion.div
                  key={tool.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <GlassCard className="h-full flex flex-col p-8 group hover:border-white/20 transition-colors">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-dark-accent/20 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => toggleSave(tool.id)}
                          className={cn(
                            "p-2 rounded-xl border transition-all",
                            saved
                              ? "bg-dark-accent text-white border-dark-accent"
                              : "glass text-gray-400 border-white/10 hover:text-white"
                          )}
                        >
                          <Bookmark className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => upvoteTool(tool.id)}
                          className="px-2.5 py-1.5 rounded-xl glass border border-white/10 text-xs font-bold text-gray-300 hover:text-white flex items-center gap-1.5 transition-colors"
                        >
                          <ThumbsUp className="w-3.5 h-3.5 text-dark-accent" />
                          <span>{toolVotes}</span>
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] uppercase tracking-widest font-black text-white/50 bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                        {tool.category}
                      </span>
                      <span className={cn(
                        "text-[10px] uppercase tracking-widest font-black px-2.5 py-1 rounded-md",
                        tool.pricingType === "Free" || tool.pricingType === "Open Source"
                          ? "bg-green-500/10 text-green-400"
                          : "bg-blue-500/10 text-blue-400"
                      )}>
                        {tool.pricingType}
                      </span>
                    </div>

                    <div className="flex-grow">
                      <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-dark-accent transition-colors">
                        <Link href={`/tool/${tool.id}`}>
                          {tool.name}
                        </Link>
                      </h2>
                      <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        {tool.desc}
                      </p>
                    </div>

                    <div className="mt-auto flex gap-2">
                      <Link
                        href={`/tool/${tool.id}`}
                        className="flex-1 py-3.5 rounded-xl glass text-white text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-white/10 transition-all border border-white/10"
                      >
                        Details
                      </Link>
                      <Link
                        href={`/compare?tool1=${tool.id}`}
                        className="p-3.5 rounded-xl glass text-gray-400 hover:text-white text-xs font-bold flex items-center justify-center transition-all border border-white/10"
                        title="Compare with another tool"
                      >
                        <Scale className="w-4 h-4" />
                      </Link>
                      <a
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-3.5 rounded-xl bg-dark-accent text-white text-xs font-bold flex items-center justify-center gap-1.5 hover:opacity-90 transition-all"
                      >
                        Visit <ExternalLink className="w-3.5 h-3.5" />
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
            <p className="text-gray-400 text-lg">No tools found matching your current filters.</p>
          </div>
        )}
      </Section>

      <Section className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Directory FAQ</h2>
          <p className="text-gray-400">Common questions about our curated list.</p>
        </div>
        <FAQAccordion items={FAQS.directory} />
      </Section>
    </div>
  );
}