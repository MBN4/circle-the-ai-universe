'use client';

import React from 'react';
import Link from 'next/link';
import { Activity, ArrowLeft, CheckCircle2, AlertTriangle, ShieldCheck, Zap } from 'lucide-react';
import { GlassCard } from '@/components/GlassCard';
import { Section } from '@/components/Section';
import { MODEL_RADAR } from '@/lib/data';

export default function StatusPage() {
  return (
    <div className="pt-36 pb-28 px-4 max-w-5xl mx-auto">
      <Link
        href="/directory"
        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-400 hover:text-white mb-10 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Directory
      </Link>

      <Section className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-xs font-semibold text-dark-text mb-6">
          <Activity className="w-4 h-4 text-dark-accent" />
          <span>Live API Latency & Health Radar</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
          AI Model Status Monitor
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto text-base">
          Real-time operational availability, response latency, and 90-day reliability tracking for top AI endpoints.
        </p>
      </Section>

      <div className="glass p-6 rounded-3xl mb-8 flex items-center justify-between flex-wrap gap-4 border border-green-500/20 bg-green-500/5">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm font-bold text-white">All Core AI Foundation Models Operational</span>
        </div>
        <span className="text-xs text-gray-400">Updated every 60 seconds</span>
      </div>

      <div className="space-y-4">
        {MODEL_RADAR.map((item, idx) => (
          <GlassCard key={idx} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                  {item.provider}
                </span>
                <span className="text-green-400 text-xs font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> {item.status}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">{item.name}</h3>
            </div>

            <div className="flex items-center gap-6 text-left md:text-right">
              <div>
                <span className="text-[10px] uppercase text-gray-400 font-bold block mb-0.5">Average Latency</span>
                <span className="text-sm font-extrabold text-white flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-yellow-400" /> {item.latencyMs} ms
                </span>
              </div>

              <div>
                <span className="text-[10px] uppercase text-gray-400 font-bold block mb-0.5">90-Day Uptime</span>
                <span className="text-sm font-extrabold text-green-400">
                  {item.uptime90d}
                </span>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}