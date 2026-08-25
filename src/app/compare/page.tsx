'use client';

import React, { useState, useRef, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Scale, Check, X, ExternalLink, ArrowLeft, ChevronDown,
  Sparkles, Search, Zap, Globe, Code, Video, PenTool,
  Image as ImageIcon, Mic, Database, Shield, ShieldCheck,
  Brain, Layout, Palette, UserCircle, Target, ArrowRight
} from 'lucide-react';
import { GlassCard } from '@/components/GlassCard';
import { Section } from '@/components/Section';
import { AI_TOOLS, getToolBySlugOrId } from '@/lib/data';
import { cn } from '@/lib/utils';

const ICON_MAP: Record<string, any> = {
  Globe, Image: ImageIcon, Code, Layout, Video, PenTool, Mic, Zap,
  Database, ShieldCheck, Palette, Target, UserCircle, Brain, Shield, Search
};

function CustomSelect({
  value,
  onChange,
  label
}: {
  value: string;
  onChange: (id: string) => void;
  label: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedTool = AI_TOOLS.find((t) => t.id.toString() === value) || AI_TOOLS[0];
  const SelectedIcon = ICON_MAP[selectedTool.icon] || Zap;

  const filtered = AI_TOOLS.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase()) ||
    t.category.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <span className="text-[11px] font-bold tracking-wider text-gray-400 uppercase block mb-2">
        {label}
      </span>
      
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-5 py-4 rounded-2xl glass dark:glass-dark border border-white/15 hover:border-dark-accent/50 transition-all text-left group"
      >
        <div className="flex items-center gap-3.5 overflow-hidden">
          <div className="w-9 h-9 rounded-xl bg-dark-accent/20 border border-dark-accent/30 flex items-center justify-center shrink-0">
            <SelectedIcon className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="text-white font-bold text-base truncate">{selectedTool.name}</div>
            <div className="text-xs text-gray-400 flex items-center gap-2">
              <span>{selectedTool.category}</span>
              <span>•</span>
              <span className="text-dark-text font-semibold">{selectedTool.pricingType}</span>
            </div>
          </div>
        </div>
        <ChevronDown className={cn("w-5 h-5 text-gray-400 transition-transform duration-300 shrink-0 ml-2", isOpen && "rotate-180 text-white")} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-3 z-50 rounded-2xl bg-[#0a1931]/95 backdrop-blur-2xl border border-white/20 shadow-2xl p-3 overflow-hidden"
          >
            <div className="relative mb-2">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search tools or categories..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-dark-accent"
              />
            </div>

            <div className="max-h-60 overflow-y-auto space-y-1 pr-1 custom-scroll">
              {filtered.map((tool) => {
                const ToolIcon = ICON_MAP[tool.icon] || Zap;
                const isSelected = tool.id.toString() === value;

                return (
                  <button
                    key={tool.id}
                    type="button"
                    onClick={() => {
                      onChange(tool.id.toString());
                      setIsOpen(false);
                      setSearch('');
                    }}
                    className={cn(
                      "w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-all",
                      isSelected
                        ? "bg-dark-accent text-white"
                        : "hover:bg-white/10 text-gray-300"
                    )}
                  >
                    <div className="flex items-center gap-3 truncate">
                      <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                        <ToolIcon className="w-4 h-4 text-white" />
                      </div>
                      <div className="truncate">
                        <div className="text-sm font-semibold truncate text-white">{tool.name}</div>
                        <div className="text-[10px] text-gray-400">{tool.category}</div>
                      </div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded font-bold uppercase bg-black/20 text-gray-300 shrink-0 ml-2">
                      {tool.pricingType}
                    </span>
                  </button>
                );
              })}
              {filtered.length === 0 && (
                <div className="py-6 text-center text-xs text-gray-400">No tools found matching "{search}"</div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function CompareContent() {
  const searchParams = useSearchParams();
  const [tool1Id, setTool1Id] = useState(searchParams.get('tool1') || '1');
  const [tool2Id, setTool2Id] = useState(searchParams.get('tool2') || '2');

  const tool1 = getToolBySlugOrId(tool1Id) || AI_TOOLS[0];
  const tool2 = getToolBySlugOrId(tool2Id) || AI_TOOLS[1];

  const Icon1 = ICON_MAP[tool1.icon] || Zap;
  const Icon2 = ICON_MAP[tool2.icon] || Zap;

  return (
    <div className="pt-36 pb-28 px-4 max-w-6xl mx-auto">
      <Link
        href="/directory"
        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-400 hover:text-white mb-10 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Directory
      </Link>

      <Section className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-xs font-semibold text-dark-text mb-6">
          <Sparkles className="w-4 h-4 text-dark-accent" />
          <span>AI Software Benchmarking</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
          Compare AI Tools Side-by-Side
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto text-base">
          Analyze core specifications, pricing models, developer API access, and user-tested pros & cons.
        </p>
      </Section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 relative z-30">
        <div className="glass dark:glass-dark rounded-3xl p-6 border border-white/10">
          <CustomSelect
            label="Select Tool #1"
            value={tool1Id}
            onChange={(id) => setTool1Id(id)}
          />
        </div>

        <div className="glass dark:glass-dark rounded-3xl p-6 border border-white/10">
          <CustomSelect
            label="Select Tool #2"
            value={tool2Id}
            onChange={(id) => setTool2Id(id)}
          />
        </div>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch z-10">
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-[#0a1931] border-2 border-dark-accent shadow-xl shadow-dark-accent/30 items-center justify-center font-black text-xs tracking-widest text-dark-text">
          VS
        </div>

        {[
          { tool: tool1, icon: Icon1 },
          { tool: tool2, icon: Icon2 }
        ].map(({ tool, icon: Icon }, idx) => (
          <GlassCard
            key={idx}
            className="p-8 md:p-10 flex flex-col justify-between border-white/15 hover:border-dark-accent/40 transition-all duration-300 shadow-2xl relative"
          >
            <div>
              <div className="flex items-start justify-between gap-4 pb-6 border-b border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-dark-accent/20 border border-dark-accent/30 flex items-center justify-center shrink-0">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-dark-accent block mb-1">
                      {tool.category}
                    </span>
                    <h2 className="text-3xl font-extrabold text-white">{tool.name}</h2>
                  </div>
                </div>

                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass text-gray-400 hover:text-white hover:border-white/30 transition-all"
                  title="Visit Website"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed my-6">
                {tool.desc}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="glass p-4 rounded-2xl border border-white/5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1.5">
                    Pricing Model
                  </span>
                  <span className={cn(
                    "text-xs font-bold px-2.5 py-1 rounded-lg inline-block",
                    tool.pricingType === "Free" || tool.pricingType === "Open Source"
                      ? "bg-green-500/15 text-green-400 border border-green-500/20"
                      : "bg-blue-500/15 text-blue-400 border border-blue-500/20"
                  )}>
                    {tool.pricingType}
                  </span>
                </div>

                <div className="glass p-4 rounded-2xl border border-white/5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1.5">
                    API Access
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-white mt-1">
                    {tool.hasApi ? (
                      <>
                        <Check className="w-4 h-4 text-green-400 shrink-0" />
                        <span>Public API</span>
                      </>
                    ) : (
                      <>
                        <X className="w-4 h-4 text-red-400 shrink-0" />
                        <span>No API</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-green-400 flex items-center gap-2 mb-3">
                    <Check className="w-4 h-4" /> Key Advantages
                  </h4>
                  <div className="space-y-2">
                    {tool.pros && tool.pros.length > 0 ? (
                      tool.pros.map((pro, pIdx) => (
                        <div key={pIdx} className="glass px-3.5 py-2.5 rounded-xl text-xs text-gray-300 leading-normal border border-white/5 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 shrink-0" />
                          <span>{pro}</span>
                        </div>
                      ))
                    ) : (
                      <p className="text-xs text-gray-500 italic">No specific pros listed</p>
                    )}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-red-400 flex items-center gap-2 mb-3">
                    <X className="w-4 h-4" /> Potential Limitations
                  </h4>
                  <div className="space-y-2">
                    {tool.cons && tool.cons.length > 0 ? (
                      tool.cons.map((con, cIdx) => (
                        <div key={cIdx} className="glass px-3.5 py-2.5 rounded-xl text-xs text-gray-300 leading-normal border border-white/5 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                          <span>{con}</span>
                        </div>
                      ))
                    ) : (
                      <p className="text-xs text-gray-500 italic">No limitations documented</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex gap-3">
              <Link
                href={`/tool/${tool.id}`}
                className="flex-1 text-center py-3.5 rounded-2xl glass hover:bg-white/10 text-xs font-bold text-white transition-all border border-white/10"
              >
                View Full Profile & Prompts
              </Link>
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-2xl bg-dark-accent hover:opacity-90 text-xs font-bold text-white transition-all flex items-center justify-center gap-2"
              >
                Visit <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}

export default function ComparePage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-40 text-center text-gray-400">Loading comparison tool...</div>}>
      <CompareContent />
    </Suspense>
  );
}