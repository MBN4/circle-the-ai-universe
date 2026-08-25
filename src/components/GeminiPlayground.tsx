'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Send, X, Bot, Copy, Check } from 'lucide-react';
import { GlassCard } from '@/components/GlassCard';
import { WaterButton } from '@/components/WaterButton';

export function GeminiPlayground() {
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleTest = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    setResponse('');

    setTimeout(() => {
      setResponse(
        `[Gemini AI Sandbox Result]\n\nAnalysis for: "${prompt}"\n\n1. Suggested Strategy: Utilize high-temperature creative mode for visual ideation, and strictly structured JSON schemas for coding.\n2. Best Paired Directory Tools: Cursor, Midjourney, and Perplexity AI.\n3. Estimated Execution Time: 0.42 seconds.`
      );
      setLoading(false);
    }, 1000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(response);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-gradient-to-r from-dark-accent to-blue-500 text-white font-bold text-xs shadow-2xl shadow-blue-500/30 border border-white/20"
        >
          <Bot className="w-4 h-4" />
          <span>AI Prompt Sandbox</span>
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative z-10 w-full max-w-2xl bg-[#0a1931] border border-white/15 rounded-3xl p-6 md:p-8 shadow-2xl"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-dark-accent/20 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-dark-accent" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-white text-lg">In-Browser AI Sandbox</h3>
                    <p className="text-xs text-gray-400">Live prompt testing & tool workflow feedback</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full glass hover:text-white text-gray-400"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form onSubmit={handleTest} className="space-y-4 mb-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Test Your Prompt</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="e.g. Give me a strategy to launch an AI SaaS in 14 days..."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="w-full p-4 rounded-2xl glass text-white text-sm focus:outline-none focus:ring-2 focus:ring-dark-accent/50 resize-none"
                  />
                </div>

                <div className="flex justify-end">
                  <WaterButton type="submit" disabled={loading}>
                    <span>{loading ? 'Processing...' : 'Run Simulation'}</span>
                    <Send className="w-3.5 h-3.5 ml-1" />
                  </WaterButton>
                </div>
              </form>

              {response && (
                <div className="p-4 rounded-2xl bg-black/40 border border-white/10 relative">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/5">
                    <span className="text-[10px] uppercase font-bold text-green-400">AI Response</span>
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="text-xs text-gray-400 hover:text-white flex items-center gap-1"
                    >
                      {copied ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
                      <span>{copied ? 'Copied' : 'Copy Output'}</span>
                    </button>
                  </div>
                  <pre className="text-xs text-gray-300 font-mono whitespace-pre-wrap leading-relaxed">
                    {response}
                  </pre>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}