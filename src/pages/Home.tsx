import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Zap, ShieldCheck, Users } from 'lucide-react';
import { WaterButton } from '../components/WaterButton';
import { Section } from '../components/Section';
import { GlassCard } from '../components/GlassCard';
import { FAQAccordion } from '../components/FAQAccordion';
import { AI_TOOLS, FAQS } from '../data';
import { Link } from 'react-router-dom';

export function Home() {
  const featuredTools = AI_TOOLS.slice(0, 3);

  return (
    <div className="pt-32 pb-20 px-4">
      {/* Hero Section */}
      <Section className="text-center mb-32">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass dark:glass-dark text-xs font-medium dark:text-dark-text mb-8"
        >
          <Sparkles className="w-4 h-4 text-dark-accent" />
          <span>Discover the future of AI</span>
        </motion.div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 dark:text-white">
          The Center of the <br />
          <span className="bg-gradient-to-r from-dark-accent to-blue-400 bg-clip-text text-transparent">
            AI Universe
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-gray-500 dark:text-gray-400 text-lg mb-10">
          Circle is the premier destination to discover, explore, and submit 
          the world's most innovative artificial intelligence tools.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/directory">
            <WaterButton>Explore Directory</WaterButton>
          </Link>
          <Link to="/submit">
            <WaterButton variant="secondary">Submit Your AI</WaterButton>
          </Link>
        </div>
      </Section>

      {/* Featured Section */}
      <Section className="max-w-6xl mx-auto mb-32">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold dark:text-white mb-2">Featured Tools</h2>
            <p className="text-gray-500 dark:text-gray-400">Hand-picked innovations from our community.</p>
          </div>
          <Link to="/directory" className="text-dark-accent flex items-center gap-1 hover:gap-2 transition-all font-medium">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredTools.map((tool) => (
            <div key={tool.id}>
              <GlassCard className="flex flex-col h-full">
                <div className="w-12 h-12 rounded-2xl bg-dark-accent/10 flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-dark-accent" />
                </div>
                <h3 className="text-xl font-bold dark:text-white mb-2">{tool.name}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 flex-grow">
                  {tool.desc}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs font-medium px-3 py-1 rounded-full glass dark:glass-dark dark:text-dark-text">
                    {tool.category}
                  </span>
                  <a 
                    href={tool.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-dark-accent text-sm font-semibold hover:underline"
                  >
                    Try Now
                  </a>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold dark:text-white mb-4">Common Questions</h2>
          <p className="text-gray-500 dark:text-gray-400">Everything you need to know about Circle.</p>
        </div>
        <FAQAccordion items={FAQS.home} />
      </Section>
    </div>
  );
}
