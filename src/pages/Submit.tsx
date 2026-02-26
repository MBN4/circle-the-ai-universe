import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ArrowRight, ArrowLeft, Send, Globe, Info, Tag } from 'lucide-react';
import { Section } from '../components/Section';
import { GlassCard } from '../components/GlassCard';
import { WaterButton } from '../components/WaterButton';
import { FAQAccordion } from '../components/FAQAccordion';
import { FAQS, CATEGORIES } from '../data';
import { cn } from '../lib/utils';

export function Submit() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    url: '',
    category: '',
    description: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => setStep(s => s + 1);
  const handleBack = () => setStep(s => s - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="pt-32 pb-20 px-4 flex items-center justify-center min-h-[80vh]">
        <Section className="text-center max-w-md">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-10 h-10 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold dark:text-white mb-4">Submission Received!</h1>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Thank you for contributing to the Circle ecosystem. Our team will review 
            your tool and get back to you within 48 hours.
          </p>
          <WaterButton onClick={() => setIsSubmitted(false)}>Submit Another</WaterButton>
        </Section>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-4">
      <Section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 dark:text-white">
          Submit Your AI
        </h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
          Help us grow the AI universe by sharing your innovation with our community.
        </p>
      </Section>

      <Section className="max-w-2xl mx-auto mb-32">
        <GlassCard className="p-8">
          {/* Progress Bar */}
          <div className="flex gap-2 mb-12">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={cn(
                  "h-1.5 flex-grow rounded-full transition-all duration-500",
                  s <= step ? "bg-dark-accent" : "bg-gray-200 dark:bg-gray-800"
                )}
              />
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-dark-accent/10 flex items-center justify-center">
                      <Globe className="w-5 h-5 text-dark-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold dark:text-white">Basic Info</h3>
                      <p className="text-xs text-gray-500">Tell us what your tool is called.</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium dark:text-gray-300">Tool Name</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Circle AI"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl glass dark:glass-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-dark-accent/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium dark:text-gray-300">Website URL</label>
                    <input
                      required
                      type="url"
                      placeholder="https://..."
                      value={formData.url}
                      onChange={e => setFormData({...formData, url: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl glass dark:glass-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-dark-accent/50"
                    />
                  </div>
                  
                  <div className="pt-4">
                    <WaterButton onClick={handleNext} className="w-full">
                      Next Step 
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.span>
                    </WaterButton>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-dark-accent/10 flex items-center justify-center">
                      <Tag className="w-5 h-5 text-dark-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold dark:text-white">Categorization</h3>
                      <p className="text-xs text-gray-500">Where does your tool fit best?</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {CATEGORIES.map(cat => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setFormData({...formData, category: cat})}
                        className={cn(
                          "px-4 py-3 rounded-xl text-sm font-medium transition-all text-left",
                          formData.category === cat
                            ? "bg-dark-accent text-white"
                            : "glass dark:glass-dark dark:text-gray-400 hover:text-dark-accent"
                        )}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <WaterButton variant="secondary" onClick={handleBack} className="flex-1">
                      Back
                    </WaterButton>
                    <WaterButton onClick={handleNext} className="flex-1">
                      Next Step 
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.span>
                    </WaterButton>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-dark-accent/10 flex items-center justify-center">
                      <Info className="w-5 h-5 text-dark-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold dark:text-white">Final Details</h3>
                      <p className="text-xs text-gray-500">Describe what makes it special.</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium dark:text-gray-300">Description</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="A brief overview of your tool's features..."
                      value={formData.description}
                      onChange={e => setFormData({...formData, description: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl glass dark:glass-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-dark-accent/50 resize-none"
                    />
                  </div>

                  <div className="flex gap-4 pt-4">
                    <WaterButton variant="secondary" onClick={handleBack} className="flex-1">
                      Back
                    </WaterButton>
                    <WaterButton type="submit" className="flex-1">
                      Submit Tool 
                      <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                      >
                        <Send className="w-4 h-4" />
                      </motion.span>
                    </WaterButton>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </GlassCard>
      </Section>

      {/* FAQ Section */}
      <Section className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold dark:text-white mb-4">Submission FAQ</h2>
          <p className="text-gray-500 dark:text-gray-400">What to expect after you submit.</p>
        </div>
        <FAQAccordion items={FAQS.submit} />
      </Section>
    </div>
  );
}
