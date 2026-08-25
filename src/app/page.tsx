import type { Metadata } from 'next';
import Link from 'next/link';
import { Sparkles, Zap, ArrowRight, TrendingUp } from 'lucide-react';
import { GlassCard } from '@/components/GlassCard';
import { WaterButton } from '@/components/WaterButton';
import { FAQAccordion } from '@/components/FAQAccordion';
import { Section } from '@/components/Section';
import { AIMatchmaker } from '@/components/AIMatchmaker';
import { NewsletterBox } from '@/components/NewsletterBox';
import { AI_TOOLS, FAQS } from '@/lib/data';

export const metadata: Metadata = {
  title: "Explore 120+ Best AI Tools in 2026",
  description: "Browse curated artificial intelligence tools for design, coding, video generation, copywriting, and marketing.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  const featuredTools = AI_TOOLS.slice(0, 3);
  const trendingTools = [...AI_TOOLS].sort((a, b) => b.upvotes - a.upvotes).slice(0, 3);

  return (
    <div className="pt-32 pb-20 px-4">
      <Section className="text-center mb-24">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-xs font-medium text-dark-text mb-8">
          <Sparkles className="w-4 h-4 text-dark-accent" />
          <span>Discover the future of AI</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-white">
          The Center of the <br />
          <span className="bg-gradient-to-r from-dark-accent to-blue-400 bg-clip-text text-transparent">
            AI Universe
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-gray-400 text-lg mb-10">
          Circle is the premier destination to discover, compare, stack, and submit
          the world&apos;s most innovative artificial intelligence tools.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/directory">
            <WaterButton>Explore Directory</WaterButton>
          </Link>
          <Link href="/compare">
            <WaterButton variant="secondary">Compare AI Tools</WaterButton>
          </Link>
        </div>
      </Section>

      <Section className="mb-32">
        <AIMatchmaker />
      </Section>

      <Section className="max-w-6xl mx-auto mb-32">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-dark-accent flex items-center gap-1.5 mb-2">
              <TrendingUp className="w-4 h-4" /> Community Favorites
            </span>
            <h2 className="text-3xl font-bold text-white">Top Trending AI Tools</h2>
          </div>
          <Link href="/directory" className="text-sm font-semibold text-dark-accent hover:underline hidden md:block">
            View all &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trendingTools.map((tool) => (
            <GlassCard key={tool.id} className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-dark-accent/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-dark-accent" />
                </div>
                <span className="text-xs font-bold text-green-400 bg-green-500/10 px-2.5 py-1 rounded-md">
                  {tool.pricingType}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{tool.name}</h3>
              <p className="text-gray-400 text-sm mb-6 flex-grow">
                {tool.desc}
              </p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                <span className="text-xs font-medium px-3 py-1 rounded-full glass text-dark-text">
                  {tool.category}
                </span>
                <Link
                  href={`/tool/${tool.id}`}
                  className="text-dark-accent text-sm font-semibold hover:underline"
                >
                  View Details &rarr;
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section className="mb-32">
        <NewsletterBox />
      </Section>

      <Section className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Common Questions</h2>
          <p className="text-gray-400">Everything you need to know about Circle.</p>
        </div>
        <FAQAccordion items={FAQS.home} />
      </Section>
    </div>
  );
}