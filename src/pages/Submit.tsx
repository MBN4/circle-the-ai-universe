import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ArrowRight, ArrowLeft, Send, User, Mail, Phone, Tag, Info, Sparkles } from 'lucide-react';
import { Section } from '../components/Section';
import { GlassCard } from '../components/GlassCard';
import { WaterButton } from '../components/WaterButton';
import { FAQAccordion } from '../components/FAQAccordion';
import { FAQS } from '../data';
import { cn } from '../lib/utils';

export function Submit() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    userPhone: '',
    toolName: '',
    category: '',
    description: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => {
    if (step === 1) {
      if (!formData.userName || !formData.userEmail || !formData.userPhone) return;
    } else if (step === 2) {
      if (!formData.toolName || !formData.category) return;
    }
    setStep(s => s + 1);
  };
  const handleBack = () => setStep(s => s - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.description) return;

    const subject = encodeURIComponent(`New AI Tool Submission: ${formData.toolName}`);
    const body = encodeURIComponent(
      `--- SUBMITTER INFO ---\n` +
      `Name: ${formData.userName}\n` +
      `Email: ${formData.userEmail}\n` +
      `Phone: ${formData.userPhone}\n\n` +
      `--- TOOL INFO ---\n` +
      `Tool Name: ${formData.toolName}\n` +
      `Category: ${formData.category}\n\n` +
      `--- DESCRIPTION ---\n` +
      `${formData.description}`
    );

    window.location.href = `mailto:bn73147@gmail.com?subject=${subject}&body=${body}`;
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
                      <User className="w-5 h-5 text-dark-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold dark:text-white">Contact Info</h3>
                      <p className="text-xs text-gray-500">How can we reach you?</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium dark:text-gray-300">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        value={formData.userName}
                        onChange={e => setFormData({ ...formData, userName: e.target.value })}
                        className="w-full pl-11 pr-4 py-3 rounded-xl glass dark:glass-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-dark-accent/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium dark:text-gray-300">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          required
                          type="email"
                          placeholder="john@example.com"
                          value={formData.userEmail}
                          onChange={e => setFormData({ ...formData, userEmail: e.target.value })}
                          className="w-full pl-11 pr-4 py-3 rounded-xl glass dark:glass-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-dark-accent/50"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium dark:text-gray-300">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          required
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={formData.userPhone}
                          onChange={e => setFormData({ ...formData, userPhone: e.target.value })}
                          className="w-full pl-11 pr-4 py-3 rounded-xl glass dark:glass-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-dark-accent/50"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <WaterButton onClick={handleNext} className="w-full">
                      <span>Next Step</span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="flex items-center"
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
                      <Sparkles className="w-5 h-5 text-dark-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold dark:text-white">Tool Details</h3>
                      <p className="text-xs text-gray-500">What tool are you submitting?</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium dark:text-gray-300">Tool Name</label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Circle AI"
                        value={formData.toolName}
                        onChange={e => setFormData({ ...formData, toolName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl glass dark:glass-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-dark-accent/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium dark:text-gray-300">Category</label>
                      <div className="relative">
                        <Tag className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          required
                          type="text"
                          placeholder="e.g. Plagiarism Checker"
                          value={formData.category}
                          onChange={e => setFormData({ ...formData, category: e.target.value })}
                          className="w-full pl-11 pr-4 py-3 rounded-xl glass dark:glass-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-dark-accent/50"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <WaterButton variant="secondary" onClick={handleBack} className="flex-1">
                      Back
                    </WaterButton>
                    <WaterButton onClick={handleNext} className="flex-1">
                      <span>Next Step</span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="flex items-center"
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
                      onChange={e => setFormData({ ...formData, description: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl glass dark:glass-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-dark-accent/50 resize-none"
                    />
                  </div>

                  <div className="flex gap-4 pt-4">
                    <WaterButton variant="secondary" onClick={handleBack} className="flex-1">
                      Back
                    </WaterButton>
                    <WaterButton type="submit" className="flex-1">
                      <span>Submit Tool</span>
                      <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="flex items-center"
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
