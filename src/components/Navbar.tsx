'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Circle, Bookmark, Scale, Workflow, Calculator, Tag, Activity, Crown, HelpCircle } from 'lucide-react';
import { useStack } from '@/context/StackContext';
import { useAuth } from '@/context/AuthContext';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { name: 'Directory', path: '/directory' },
  { name: 'Workflows', path: '/workflows', icon: Workflow },
  { name: 'Compare', path: '/compare', icon: Scale },
  { name: 'Calculator', path: '/calculator', icon: Calculator },
  { name: 'Deals', path: '/deals', icon: Tag },
  { name: 'Status', path: '/status', icon: Activity },
];

export function Navbar() {
  const pathname = usePathname();
  const { savedIds } = useStack();
  const { isPro, openProModal, isEli5, toggleEli5 } = useAuth();
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-3 md:p-4"
    >
      <div className="w-full max-w-6xl glass dark:glass-dark rounded-full px-5 py-3 flex items-center justify-between border border-white/10 shadow-2xl">
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <Circle className="w-6 h-6 text-dark-accent group-hover:rotate-180 transition-transform duration-500" />
          <span className="font-bold text-lg md:text-xl tracking-tighter text-white">CIRCLE</span>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.path;
            const Icon = link.icon;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  "relative text-xs font-semibold transition-colors hover:text-dark-accent flex items-center gap-1.5",
                  isActive ? "text-dark-accent" : "text-gray-300"
                )}
              >
                {Icon && <Icon className="w-3.5 h-3.5" />}
                <span>{link.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-dark-accent"
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleEli5}
            title="Toggle Explain Like I'm 5 beginner mode"
            className={cn(
              "px-3 py-1.5 rounded-full text-[11px] font-bold border transition-all flex items-center gap-1.5",
              isEli5
                ? "bg-purple-500/20 text-purple-300 border-purple-500/40"
                : "glass text-gray-400 border-white/5 hover:text-white"
            )}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">ELI5 Mode</span>
          </button>

          <Link
            href="/stack"
            className={cn(
              "relative p-2 rounded-full glass hover:text-white transition-all flex items-center justify-center",
              pathname === '/stack' ? "bg-dark-accent text-white" : "text-gray-400"
            )}
          >
            <Bookmark className="w-4 h-4" />
            {savedIds.length > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-dark-accent text-[10px] font-bold rounded-full flex items-center justify-center text-white">
                {savedIds.length}
              </span>
            )}
          </Link>

          <button
            type="button"
            onClick={openProModal}
            className={cn(
              "px-3.5 py-1.5 rounded-full text-xs font-extrabold flex items-center gap-1.5 transition-all shadow-lg",
              isPro
                ? "bg-gradient-to-r from-amber-500 to-yellow-400 text-black shadow-amber-500/20"
                : "bg-dark-accent text-white hover:opacity-90 shadow-dark-accent/20"
            )}
          >
            <Crown className="w-3.5 h-3.5" />
            <span>{isPro ? "PRO" : "Get Pro"}</span>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}