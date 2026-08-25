import type { Metadata } from 'next';
import { Zap, Users, ShieldCheck, Target, Rocket } from 'lucide-react';
import { Section } from '@/components/Section';
import { GlassCard } from '@/components/GlassCard';
import { FAQAccordion } from '@/components/FAQAccordion';
import { FAQS, VALUES } from '@/lib/data';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: "About Circle | Our Vision & AI Roadmap",
  description: "Learn about Circle's mission to curate and democratize access to the world's most cutting-edge AI software.",
  alternates: {
    canonical: "/about",
  },
};

const ICON_MAP: Record<string, any> = {
  Zap, Users, ShieldCheck
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 px-4">
      <Section className="text-center mb-24">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-white">
          Our Vision
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          We believe artificial intelligence should be accessible, transparent, 
          and empowering for everyone. Circle is our contribution to that future.
        </p>
      </Section>

      <Section className="max-w-6xl mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VALUES.map((value, index) => {
            const Icon = ICON_MAP[value.icon] || Zap;
            return (
              <GlassCard 
                key={index}
                tilt 
                className="text-center flex flex-col items-center p-10"
              >
                <div className="w-16 h-16 rounded-2xl bg-dark-accent/10 flex items-center justify-center mb-8">
                  <Icon className="w-8 h-8 text-dark-accent" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {value.desc}
                </p>
              </GlassCard>
            );
          })}
        </div>
      </Section>

      <Section className="max-w-4xl mx-auto mb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">The Roadmap</h2>
          <p className="text-gray-400">Where we are headed next.</p>
        </div>
        
        <div className="space-y-8">
          {[
            { phase: "Phase 1", title: "The Directory", desc: "Launch the core directory and submission platform.", icon: Rocket, status: "Completed" },
            { phase: "Phase 2", title: "Community Hub", desc: "Add user reviews, ratings, and tool collections.", icon: Users, status: "In Progress" },
            { phase: "Phase 3", title: "AI Comparison Engine", desc: "Advanced tools to compare AI models and features side-by-side.", icon: Target, status: "Planned" }
          ].map((item, i) => (
            <GlassCard key={i} className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-xl bg-dark-accent/10 flex items-center justify-center shrink-0">
                <item.icon className="w-6 h-6 text-dark-accent" />
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-dark-accent">{item.phase}</span>
                  <span className={cn(
                    "text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded",
                    item.status === "Completed" ? "bg-green-500/10 text-green-500" : 
                    item.status === "In Progress" ? "bg-blue-500/10 text-blue-500" : "bg-gray-500/10 text-gray-500"
                  )}>
                    {item.status}
                  </span>
                </div>
                <h4 className="font-bold text-white">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Project FAQ</h2>
          <p className="text-gray-400">Learn more about the Circle initiative.</p>
        </div>
        <FAQAccordion items={FAQS.about} />
      </Section>
    </div>
  );
}