'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle, RefreshCw } from 'lucide-react';
import { GlassCard } from '@/components/GlassCard';
import { WaterButton } from '@/components/WaterButton';
import { AI_TOOLS, AITool } from '@/lib/data';

export function AIMatchmaker() {
  const [role, setRole] = useState<'designer' | 'developer' | 'writer' | 'researcher' | ''>('');
  const [goal, setGoal] = useState<'free' | 'speed' | 'quality' | ''>('');
  const [results, setResults] = useState<AITool[]>([]);
  const [hasCalculated, setHasCalculated] = useState(false);

  const handleMatch = () => {
    if (!role || !goal) return;

    let matched = AI_TOOLS.filter((tool) => {
      if (role === 'designer') return tool.category === 'Design' || tool.category === 'Image Gen';
      if (role === 'developer') return tool.category === 'Coding';
      if (role === 'writer') return tool.category === 'Copywriting';
      if (role === 'researcher') return tool.category === 'Research' || tool.category === 'Data';
      return true;
    });

    if (goal === 'free') {
      matched = matched.filter((t) => t.pricingType === 'Free' || t.pricingType === 'Open Source' || t.pricingType === 'Freemium');
    }

    setResults(matched.slice(0, 3));
    setHasCalculated(true);
  };

  const handleReset = () => {
    setRole('');
    setGoal('');
    setResults([]);
    setHasCalculated(false);
  };

  return (
    <GlassCard className="p-8 md:p-10 max-w-4xl mx-auto border-dark-accent/30">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-dark-accent/20 flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-dark-accent" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">AI Matchmaker</h3>
          <p className="text-sm text-gray-400">Answer 2 quick questions to find your exact tool match</p>
        </div>
      </div>

      {!hasCalculated ? (
        <div className="space-y-6">
          <div>
            <label className="text-sm font-semibold text-gray-300 block mb-3">1. What is your primary focus?</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { id: 'designer', label: 'UI / Design' },
                { id: 'developer', label: 'Software / Code' },
                { id: 'writer', label: 'Copy & Content' },
                { id: 'researcher', label: 'Research & Data' },
              ].map((item) => (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => setRole(item.id as any)}
                  className={`py-3 px-4 rounded-xl text-sm font-bold border transition-all ${
                    role === item.id ? 'bg-dark-accent text-white border-dark-accent shadow-lg' : 'glass text-gray-400 border-white/5 hover:border-white/20'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-300 block mb-3">2. What is your top priority?</label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: 'free', label: '100% Free / Open Source' },
                { id: 'speed', label: 'Fastest Workflow' },
                { id: 'quality', label: 'Highest Output Quality' },
              ].map((item) => (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => setGoal(item.id as any)}
                  className={`py-3 px-4 rounded-xl text-sm font-bold border transition-all ${
                    goal === item.id ? 'bg-dark-accent text-white border-dark-accent shadow-lg' : 'glass text-gray-400 border-white/5 hover:border-white/20'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <WaterButton
              onClick={handleMatch}
              disabled={!role || !goal}
              className={`w-full ${!role || !goal ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <span>Generate My Top Matches</span>
              <ArrowRight className="w-4 h-4" />
            </WaterButton>
          </div>
        </div>
      ) : (
        <AnimatePresence>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-sm font-semibold text-green-400 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" /> Best Matched AI Tools for Your Workflow
              </span>
              <button
                type="button"
                onClick={handleReset}
                className="text-xs text-gray-400 hover:text-white flex items-center gap-1 transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Start Over
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {results.map((tool) => (
                <div key={tool.id} className="glass p-5 rounded-2xl flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-dark-accent bg-dark-accent/10 px-2 py-1 rounded">
                      {tool.pricingType}
                    </span>
                    <h4 className="text-lg font-bold text-white mt-2">{tool.name}</h4>
                    <p className="text-xs text-gray-400 line-clamp-2 mt-1">{tool.desc}</p>
                  </div>
                  <Link
                    href={`/tool/${tool.id}`}
                    className="mt-4 text-xs font-bold text-dark-accent hover:underline flex items-center gap-1"
                  >
                    View Details & Prompts &rarr;
                  </Link>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </GlassCard>
  );
}