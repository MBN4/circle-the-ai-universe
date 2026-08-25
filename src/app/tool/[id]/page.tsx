'use client';

import React, { use, useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  ExternalLink, ArrowLeft, CheckCircle2, Shield, Bookmark, ThumbsUp,
  Copy, Check, Scale, Sparkles
} from 'lucide-react';
import { AI_TOOLS, getToolBySlugOrId } from '@/lib/data';
import { GlassCard } from '@/components/GlassCard';
import { WaterButton } from '@/components/WaterButton';
import { useStack } from '@/context/StackContext';
import { cn } from '@/lib/utils';

interface Props {
  params: Promise<{ id: string }>;
}

export default function ToolDetailPage({ params }: Props) {
  const resolvedParams = use(params);
  const tool = getToolBySlugOrId(resolvedParams.id);
  const { isSaved, toggleSave, upvotes, upvoteTool } = useStack();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!tool) {
    notFound();
  }

  const saved = isSaved(tool.id);
  const toolVotes = upvotes[tool.id] ?? tool.upvotes;

  const handleCopyPrompt = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": tool.name,
    "applicationCategory": tool.category,
    "description": tool.desc,
    "url": tool.url,
    "offers": {
      "@type": "Offer",
      "price": tool.pricingType === "Paid" ? "10.00" : "0.00",
      "priceCurrency": "USD"
    }
  };

  return (
    <div className="pt-36 pb-24 px-4 max-w-4xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Link href="/directory" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Directory
      </Link>

      <GlassCard className="p-8 md:p-12 mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs uppercase tracking-widest px-3 py-1 rounded-md bg-dark-accent/20 text-dark-text font-bold">
                {tool.category}
              </span>
              <span className="text-xs uppercase tracking-widest px-3 py-1 rounded-md bg-green-500/10 text-green-400 font-bold">
                {tool.pricingType}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-1">{tool.name}</h1>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <button
              type="button"
              onClick={() => toggleSave(tool.id)}
              className={cn(
                "p-3.5 rounded-2xl border transition-all flex items-center gap-2",
                saved ? "bg-dark-accent text-white border-dark-accent" : "glass text-gray-300 hover:text-white border-white/10"
              )}
            >
              <Bookmark className="w-4 h-4" />
              <span className="text-xs font-bold">{saved ? 'Saved' : 'Save'}</span>
            </button>

            <button
              type="button"
              onClick={() => upvoteTool(tool.id)}
              className="p-3.5 rounded-2xl glass border border-white/10 text-xs font-bold text-gray-300 hover:text-white flex items-center gap-2"
            >
              <ThumbsUp className="w-4 h-4 text-dark-accent" />
              <span>{toolVotes}</span>
            </button>

            <a href={tool.url} target="_blank" rel="noopener noreferrer" className="flex-1 md:flex-none">
              <WaterButton className="w-full">
                <span>Visit Official Site</span>
                <ExternalLink className="w-4 h-4" />
              </WaterButton>
            </a>
          </div>
        </div>

        <div className="space-y-6 text-gray-300 leading-relaxed text-base md:text-lg">
          <p>{tool.desc}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="glass p-4 rounded-xl">
              <span className="text-xs text-gray-400 block mb-1">Pricing Model</span>
              <span className="font-bold text-white">{tool.pricingType}</span>
            </div>
            <div className="glass p-4 rounded-xl">
              <span className="text-xs text-gray-400 block mb-1">API Integration</span>
              <span className="font-bold text-white">{tool.hasApi ? 'Available' : 'No Public API'}</span>
            </div>
            <div className="glass p-4 rounded-xl">
              <span className="text-xs text-gray-400 block mb-1">Status</span>
              <span className="font-bold text-green-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> Verified & Active
              </span>
            </div>
          </div>
        </div>
      </GlassCard>

      {tool.prompts && tool.prompts.length > 0 && (
        <GlassCard className="p-8 mb-8">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-dark-accent" />
            <h3 className="text-xl font-bold text-white">Recommended Prompts & Presets</h3>
          </div>
          <div className="space-y-3">
            {tool.prompts.map((prompt, index) => (
              <div key={index} className="glass p-4 rounded-xl flex items-center justify-between gap-4">
                <p className="text-sm text-gray-300 font-mono select-all">{prompt}</p>
                <button
                  type="button"
                  onClick={() => handleCopyPrompt(prompt, index)}
                  className="p-2 rounded-lg glass hover:text-white text-gray-400 transition-colors shrink-0"
                  title="Copy Prompt"
                >
                  {copiedIndex === index ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            ))}
          </div>
        </GlassCard>
      )}

      {tool.alternatives && tool.alternatives.length > 0 && (
        <GlassCard className="p-8">
          <h3 className="text-xl font-bold text-white mb-6">Similar Alternatives to Explore</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tool.alternatives.map((altId) => {
              const altTool = AI_TOOLS.find((t) => t.id === altId);
              if (!altTool) return null;
              return (
                <Link key={altId} href={`/tool/${altTool.id}`} className="glass p-4 rounded-xl hover:border-white/20 transition-all block">
                  <span className="text-[10px] uppercase font-bold text-dark-accent">{altTool.category}</span>
                  <h4 className="font-bold text-white mt-1">{altTool.name}</h4>
                  <p className="text-xs text-gray-400 line-clamp-2 mt-1">{altTool.desc}</p>
                </Link>
              );
            })}
          </div>
        </GlassCard>
      )}
    </div>
  );
}