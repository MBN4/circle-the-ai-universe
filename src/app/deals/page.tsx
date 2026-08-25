'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Tag, ArrowLeft, Copy, Check, Lock, ExternalLink, Sparkles } from 'lucide-react';
import { GlassCard } from '@/components/GlassCard';
import { Section } from '@/components/Section';
import { WaterButton } from '@/components/WaterButton';
import { AI_DEALS } from '@/lib/data';
import { useAuth } from '@/context/AuthContext';

export default function DealsPage() {
  const { isPro, openProModal } = useAuth();
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

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
          <Tag className="w-4 h-4 text-dark-accent" />
          <span>Verified Discounts & Promo Codes</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
          AI Tools Deals & Coupons
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto text-base">
          Exclusive discounts and limited-time promotional codes for the top artificial intelligence software.
        </p>
      </Section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {AI_DEALS.map((deal) => {
          const locked = deal.isProOnly && !isPro;

          return (
            <GlassCard
              key={deal.id}
              className={`p-8 flex flex-col justify-between ${
                deal.isProOnly ? 'border-amber-500/30 shadow-amber-500/5' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black px-3 py-1 rounded-lg bg-green-500/15 text-green-400 border border-green-500/20">
                    {deal.discount}
                  </span>
                  {deal.isProOnly ? (
                    <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/30 flex items-center gap-1">
                      <Lock className="w-3 h-3" /> PRO EXCLUSIVE
                    </span>
                  ) : (
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      {deal.expiry}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{deal.toolName}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">{deal.description}</p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4">
                {locked ? (
                  <WaterButton onClick={openProModal} className="w-full justify-center">
                    <Lock className="w-4 h-4 mr-1" />
                    <span>Unlock 50% Promo Code (PRO)</span>
                  </WaterButton>
                ) : (
                  <>
                    <div className="glass px-4 py-2.5 rounded-xl flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-dark-text select-all">{deal.code}</span>
                      <button
                        type="button"
                        onClick={() => handleCopy(deal.code, deal.id)}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {copiedId === deal.id ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>

                    <a
                      href={deal.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-dark-accent text-xs font-bold text-white hover:opacity-90 transition-opacity flex items-center gap-1.5"
                    >
                      <span>Claim Deal</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </>
                )}
              </div>
            </GlassCard>
          );
        })}
      </div>
    </div>
  );
}