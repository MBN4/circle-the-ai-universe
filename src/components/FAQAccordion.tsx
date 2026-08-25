'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItem {
  q: string;
  a: string;
}

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-6xl mx-auto">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="glass dark:glass-dark rounded-2xl overflow-hidden h-fit border border-white/5 hover:border-white/15 transition-all duration-300"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left group"
            >
              <span className="font-semibold text-sm md:text-base text-white group-hover:text-dark-accent transition-colors pr-4">
                {item.q}
              </span>
              <div className="w-8 h-8 rounded-xl bg-white/5 group-hover:bg-dark-accent/20 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-dark-accent/30 transition-all">
                <motion.div
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <Plus
                    className={cn(
                      "w-4 h-4 transition-colors",
                      isOpen ? "text-dark-accent" : "text-gray-400 group-hover:text-white"
                    )}
                  />
                </motion.div>
              </div>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-5 pt-1 text-gray-400 text-sm leading-relaxed border-t border-white/5">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}