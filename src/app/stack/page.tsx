'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Bookmark, Trash2, Share2, ArrowLeft, ExternalLink } from 'lucide-react';
import { GlassCard } from '@/components/GlassCard';
import { WaterButton } from '@/components/WaterButton';
import { Section } from '@/components/Section';
import { useStack } from '@/context/StackContext';

export default function MyStackPage() {
  const { savedTools, toggleSave } = useStack();
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-36 pb-24 px-4 max-w-6xl mx-auto">
      <Link href="/directory" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Directory
      </Link>

      <Section className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12 pb-8 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-dark-accent/20 text-xs font-bold text-dark-text mb-3">
            <Bookmark className="w-3.5 h-3.5" />
            <span>Personal Collection</span>
          </div>
          <h1 className="text-4xl font-extrabold text-white">My AI Stack</h1>
          <p className="text-gray-400 text-sm mt-1">
            {savedTools.length} saved {savedTools.length === 1 ? 'tool' : 'tools'} in your personal workflow.
          </p>
        </div>

        {savedTools.length > 0 && (
          <WaterButton onClick={handleShare} variant="secondary">
            <Share2 className="w-4 h-4" />
            <span>{copied ? 'Link Copied!' : 'Share My Stack'}</span>
          </WaterButton>
        )}
      </Section>

      {savedTools.length === 0 ? (
        <div className="text-center py-24 glass rounded-3xl p-12">
          <Bookmark className="w-12 h-12 text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Your stack is empty</h3>
          <p className="text-gray-400 text-sm max-w-md mx-auto mb-8">
            Click the bookmark icon on any tool card in the directory to save it to your stack.
          </p>
          <Link href="/directory">
            <WaterButton>Browse Directory</WaterButton>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {savedTools.map((tool) => (
            <GlassCard key={tool.id} className="flex flex-col justify-between p-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase font-bold text-dark-accent bg-dark-accent/10 px-2 py-1 rounded">
                    {tool.category}
                  </span>
                  <button
                    type="button"
                    onClick={() => toggleSave(tool.id)}
                    className="text-gray-500 hover:text-red-400 transition-colors p-1"
                    title="Remove from stack"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{tool.name}</h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-6">{tool.desc}</p>
              </div>

              <div className="flex gap-2 pt-4 border-t border-white/5">
                <Link
                  href={`/tool/${tool.id}`}
                  className="flex-1 text-center py-2.5 rounded-xl glass text-xs font-bold text-white hover:bg-white/10 transition-colors"
                >
                  Details
                </Link>
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2.5 rounded-xl bg-dark-accent text-xs font-bold text-white hover:opacity-90 flex items-center justify-center gap-1"
                >
                  Visit <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </GlassCard>
          ))}
        </div>
      )}
    </div>
  );
}