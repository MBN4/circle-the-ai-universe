import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Zap, ShieldCheck, Users } from 'lucide-react';
import { WaterButton } from '../components/WaterButton';
import { Section } from '../components/Section';
import { GlassCard } from '../components/GlassCard';
import { FAQAccordion } from '../components/FAQAccordion';
import { AI_TOOLS, FAQS, CATEGORIES } from '../data';
import { Link, useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';

export function Home() {
  const navigate = useNavigate();
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
            <WaterButton variant="secondary">Add Category</WaterButton>
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

        <div className="flex justify-center mt-12">
          <Link to="/directory">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center gap-3 px-8 py-4 rounded-2xl bg-dark-accent text-white font-bold text-lg shadow-xl shadow-dark-accent/20 hover:shadow-dark-accent/40 transition-all overflow-hidden"
            >
              <span className="relative z-10">Explore All Tools</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="relative z-10"
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </motion.button>
          </Link>
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
