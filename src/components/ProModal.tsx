'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Check, X, Crown, Zap, Shield, Rocket } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { WaterButton } from '@/components/WaterButton';

export function ProModal() {
  const { isProModalOpen, closeProModal, upgradeToPro, isPro, downgradeToFree } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleCheckout = () => {
    setLoading(true);
    setTimeout(() => {
      upgradeToPro();
      setLoading(false);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isProModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProModal}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative z-10 w-full max-w-lg rounded-3xl bg-[#0a1931] border border-dark-accent/40 shadow-2xl p-8 overflow-hidden text-center"
          >
            <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-dark-accent via-blue-400 to-indigo-500" />
            
            <button
              type="button"
              onClick={closeProModal}
              className="absolute top-5 right-5 p-2 rounded-full glass hover:text-white text-gray-400"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-16 h-16 rounded-3xl bg-dark-accent/20 border border-dark-accent/30 flex items-center justify-center mx-auto mb-6">
              <Crown className="w-8 h-8 text-dark-accent" />
            </div>

            <span className="text-[10px] font-black uppercase tracking-widest text-dark-accent bg-dark-accent/10 px-3 py-1 rounded-full border border-dark-accent/20">
              Circle Pro Membership
            </span>

            <h3 className="text-3xl font-extrabold text-white mt-3 mb-2">
              Unlock the Full AI Universe
            </h3>
            <p className="text-sm text-gray-400 mb-8 max-w-sm mx-auto">
              Get unlimited access to advanced enterprise workflows, ROI report exports, live latency alerts, and exclusive 50% tool discounts.
            </p>

            <div className="space-y-3 text-left mb-8 glass p-5 rounded-2xl border border-white/5">
              {[
                "Access all Pro Multi-Tool AI Workflows",
                "Unlock Exclusive 50% OFF AI Tool Deals & Promo Codes",
                "Export Custom Executive ROI Calculator Reports",
                "Live API Latency & Outage Status Radar",
                "Unlimited Live Gemini In-Browser Prompt Sandbox"
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs text-gray-200">
                  <div className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-green-400" />
                  </div>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mb-6">
              <div className="text-3xl font-black text-white">
                $9 <span className="text-xs font-normal text-gray-400">/ month or $49 lifetime</span>
              </div>
            </div>

            {isPro ? (
              <div className="space-y-3">
                <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 text-xs font-bold">
                  ✓ You are currently an active Pro Member!
                </div>
                <button
                  type="button"
                  onClick={downgradeToFree}
                  className="text-xs text-gray-500 hover:text-red-400 transition-colors"
                >
                  Switch back to Free tier for testing
                </button>
              </div>
            ) : (
              <WaterButton
                onClick={handleCheckout}
                disabled={loading}
                className="w-full justify-center py-4"
              >
                {loading ? (
                  <span>Activating Pro Pass...</span>
                ) : (
                  <>
                    <span>Activate Pro Access Instantly</span>
                    <Sparkles className="w-4 h-4" />
                  </>
                )}
              </WaterButton>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}