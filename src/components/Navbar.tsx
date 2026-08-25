'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Circle, Bookmark, Scale } from 'lucide-react';
import { useStack } from '@/context/StackContext';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Directory', path: '/directory' },
  { name: 'Compare', path: '/compare', icon: Scale },
  { name: 'Submit', path: '/submit' },
  { name: 'About', path: '/about' },
];

export function Navbar() {
  const pathname = usePathname();
  const { savedIds } = useStack();
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
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4"
    >
      <div className="w-full max-w-5xl glass dark:glass-dark rounded-full px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Circle className="w-6 h-6 text-dark-accent group-hover:rotate-180 transition-transform duration-500" />
          <span className="font-bold text-xl tracking-tighter text-white">CIRCLE</span>
        </Link>

        <div className="flex items-center gap-6 md:gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.path;
            const Icon = link.icon;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-dark-accent flex items-center gap-1.5",
                  isActive ? "text-dark-accent" : "text-gray-400"
                )}
              >
                {Icon && <Icon className="w-4 h-4" />}
                <span>{link.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-dark-accent"
                  />
                )}
              </Link>
            );
          })}

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
        </div>
      </div>
    </motion.nav>
  );
}