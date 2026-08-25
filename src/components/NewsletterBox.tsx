'use client';

import React, { useState } from 'react';
import { Mail, CheckCircle2, Send } from 'lucide-react';
import { GlassCard } from '@/components/GlassCard';
import { WaterButton } from '@/components/WaterButton';

export function NewsletterBox() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <GlassCard className="max-w-4xl mx-auto p-8 md:p-12 text-center relative overflow-hidden">
      <div className="w-14 h-14 rounded-2xl bg-dark-accent/20 flex items-center justify-center mx-auto mb-6">
        <Mail className="w-7 h-7 text-dark-accent" />
      </div>

      <h3 className="text-3xl font-extrabold text-white mb-3">
        Weekly AI Universe Digest
      </h3>
      <p className="text-gray-400 text-sm max-w-md mx-auto mb-8 leading-relaxed">
        Get the 5 best newly launched and verified AI tools sent to your inbox every Monday. Zero spam.
      </p>

      {subscribed ? (
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500/10 text-green-400 text-sm font-semibold">
          <CheckCircle2 className="w-5 h-5" />
          <span>You are on the list! Check your inbox soon.</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            required
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow px-5 py-3.5 rounded-2xl glass text-white text-sm focus:outline-none focus:ring-2 focus:ring-dark-accent/40"
          />
          <WaterButton type="submit" className="shrink-0">
            <span>Subscribe</span>
            <Send className="w-4 h-4 ml-1" />
          </WaterButton>
        </form>
      )}
    </GlassCard>
  );
}