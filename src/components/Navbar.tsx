import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Circle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { cn } from '../lib/utils';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Directory', path: '/directory' },
  { name: 'Submit', path: '/submit' },
  { name: 'About', path: '/about' },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <div className="w-full max-w-5xl glass dark:glass-dark rounded-full px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Circle className="w-6 h-6 text-dark-accent group-hover:rotate-180 transition-transform duration-500" />
          <span className="font-bold text-xl tracking-tighter dark:text-white">CIRCLE</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "relative text-sm font-medium transition-colors hover:text-dark-accent",
                location.pathname === link.path ? "text-dark-accent" : "text-gray-500 dark:text-gray-400"
              )}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-dark-accent"
                />
              )}
            </Link>
          ))}
        </div>

      </div>
    </nav>
  );
}
