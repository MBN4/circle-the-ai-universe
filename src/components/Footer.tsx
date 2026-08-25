import React from 'react';
import Link from 'next/link';
import { Circle, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="pt-20 pb-10 px-4 border-t border-white/5 relative z-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="flex items-center gap-2 mb-6">
            <Circle className="w-6 h-6 text-dark-accent" />
            <span className="font-bold text-xl tracking-tighter text-white">CIRCLE</span>
          </Link>
          <p className="text-gray-400 max-w-sm mb-8 leading-relaxed text-sm">
            The premier directory for discovering and submitting the world&apos;s most
            advanced artificial intelligence tools. Join the universe.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 rounded-full glass dark:glass-dark text-white hover:text-dark-accent transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-full glass dark:glass-dark text-white hover:text-dark-accent transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-white mb-6 text-sm">Platform</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link href="/directory" className="hover:text-dark-accent transition-colors">Directory</Link></li>
            <li><Link href="/submit" className="hover:text-dark-accent transition-colors">Submit Tool</Link></li>
            <li><Link href="/about" className="hover:text-dark-accent transition-colors">Roadmap</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-6 text-sm">Company</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link href="/about" className="hover:text-dark-accent transition-colors">About Us</Link></li>
            <li><Link href="/about" className="hover:text-dark-accent transition-colors">Privacy Policy</Link></li>
            <li><Link href="/about" className="hover:text-dark-accent transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>© 2026 Circle AI Universe. All rights reserved.</p>
        <p>Built with passion for the AI community.</p>
      </div>
    </footer>
  );
}