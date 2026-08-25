'use client';

import React from 'react';
import Link from 'next/link';
import { Workflow, ArrowRight, Lock, Clock, Sparkles, CheckCircle2, ArrowLeft } from 'lucide-react';
import { GlassCard } from '@/components/GlassCard';
import { Section } from '@/components/Section';
import { WaterButton } from '@/components/WaterButton';
import { AI_WORKFLOWS } from '@/lib/data';
import { useAuth } from '@/context/AuthContext';

export default function WorkflowsPage() {
  const { isPro, openProModal } = useAuth();

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
          <Workflow className="w-4 h-4 text-dark-accent" />
          <span>Multi-Tool Automation Recipes</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
          AI Tool Workflows & Pipelines
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto text-base">
          Connect the best AI tools together into step-by-step automated recipes that save 10+ hours every week.
        </p>
      </Section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {AI_WORKFLOWS.map((wf) => {
          const locked = wf.isProOnly && !isPro;

          return (
            <GlassCard
              key={wf.id}
              className={`p-8 flex flex-col justify-between relative border-white/10 ${
                locked ? 'border-amber-500/30' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-widest font-black text-dark-accent bg-dark-accent/10 px-3 py-1 rounded-md">
                      Workflow Recipe
                    </span>
                    {wf.isProOnly && (
                      <span className="text-[10px] uppercase tracking-widest font-black text-amber-400 bg-amber-500/10 px-3 py-1 rounded-md border border-amber-500/30 flex items-center gap-1">
                        <Lock className="w-3 h-3" /> PRO ONLY
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-bold text-green-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> Saves {wf.timeSaved}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{wf.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">{wf.description}</p>

                <div className="space-y-3 mb-8">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">
                    Execution Pipeline:
                  </span>
                  {wf.steps.map((step, sIdx) => (
                    <div
                      key={sIdx}
                      className={`glass p-3.5 rounded-xl flex items-center justify-between text-xs ${
                        locked && sIdx > 0 ? 'filter blur-[3px] select-none' : ''
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-5 h-5 rounded-full bg-dark-accent/20 text-dark-text font-black text-[10px] flex items-center justify-center">
                          {step.step}
                        </span>
                        <span className="font-semibold text-white">{step.action}</span>
                      </div>
                      <span className="font-bold text-dark-accent bg-dark-accent/10 px-2 py-0.5 rounded">
                        {step.toolName}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                {locked ? (
                  <WaterButton onClick={openProModal} className="w-full justify-center">
                    <Lock className="w-4 h-4 mr-1" />
                    <span>Unlock with Circle Pro</span>
                  </WaterButton>
                ) : (
                  <Link href={`/directory?category=${encodeURIComponent(wf.steps[0].category)}`}>
                    <button
                      type="button"
                      className="w-full py-3.5 rounded-2xl glass hover:bg-white/10 text-xs font-bold text-white transition-all flex items-center justify-center gap-2"
                    >
                      <span>Explore Recipe Tools</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </Link>
                )}
              </div>
            </GlassCard>
          );
        })}
      </div>
    </div>
  );
}