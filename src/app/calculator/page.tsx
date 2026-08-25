'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Calculator, ArrowLeft, DollarSign, Clock, Download, Crown, Sparkles, CheckCircle2 } from 'lucide-react';
import { GlassCard } from '@/components/GlassCard';
import { Section } from '@/components/Section';
import { WaterButton } from '@/components/WaterButton';
import { useAuth } from '@/context/AuthContext';

export default function CalculatorPage() {
  const { isPro, openProModal } = useAuth();
  const [teamSize, setTeamSize] = useState(3);
  const [hourlyRate, setHourlyRate] = useState(45);
  const [hoursSpentOnRepetitive, setHoursSpentOnRepetitive] = useState(15);
  const [exported, setExported] = useState(false);

  const hoursSavedPerPersonPerWeek = Math.round(hoursSpentOnRepetitive * 0.6);
  const totalHoursSavedMonthly = hoursSavedPerPersonPerWeek * 4 * teamSize;
  const totalMonthlySavingsDollars = totalHoursSavedMonthly * hourlyRate;
  const estimatedAnnualSavings = totalMonthlySavingsDollars * 12;

  const handleExport = () => {
    if (!isPro) {
      openProModal();
      return;
    }
    setExported(true);
    setTimeout(() => setExported(false), 3000);
  };

  return (
    <div className="pt-36 pb-28 px-4 max-w-5xl mx-auto">
      <Link
        href="/directory"
        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-400 hover:text-white mb-10 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Directory
      </Link>

      <Section className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-xs font-semibold text-dark-text mb-6">
          <Calculator className="w-4 h-4 text-dark-accent" />
          <span>Financial ROI Estimator</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
          AI Time & Cost ROI Calculator
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto text-base">
          Calculate the exact monthly time and dollar savings your team unlocks by adopting modern AI tools.
        </p>
      </Section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <GlassCard className="lg:col-span-6 p-8 space-y-6">
          <div>
            <div className="flex justify-between text-sm font-bold text-gray-300 mb-2">
              <span>Team Size (Users)</span>
              <span className="text-dark-accent">{teamSize} people</span>
            </div>
            <input
              type="range"
              min="1"
              max="50"
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              className="w-full accent-dark-accent cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-sm font-bold text-gray-300 mb-2">
              <span>Average Hourly Rate ($/hr)</span>
              <span className="text-green-400">${hourlyRate} / hr</span>
            </div>
            <input
              type="range"
              min="15"
              max="200"
              step="5"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(Number(e.target.value))}
              className="w-full accent-dark-accent cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-sm font-bold text-gray-300 mb-2">
              <span>Weekly Repetitive Task Time</span>
              <span className="text-blue-400">{hoursSpentOnRepetitive} hrs / person</span>
            </div>
            <input
              type="range"
              min="5"
              max="35"
              value={hoursSpentOnRepetitive}
              onChange={(e) => setHoursSpentOnRepetitive(Number(e.target.value))}
              className="w-full accent-dark-accent cursor-pointer"
            />
          </div>

          <div className="p-4 rounded-2xl glass text-xs text-gray-400 space-y-1">
            <span className="font-bold text-white block">Assumed Efficiency Benchmark:</span>
            <p>Calculated at a conservative 60% automation rate for writing, coding boilerplate, mockups, and research.</p>
          </div>
        </GlassCard>

        <GlassCard className="lg:col-span-6 p-8 flex flex-col justify-between space-y-6 border-dark-accent/40">
          <div className="space-y-6">
            <span className="text-[10px] font-black uppercase tracking-widest text-dark-accent bg-dark-accent/10 px-3 py-1 rounded-md">
              Estimated Monthly Value
            </span>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass p-5 rounded-2xl">
                <span className="text-xs text-gray-400 flex items-center gap-1 mb-1">
                  <Clock className="w-3.5 h-3.5 text-blue-400" /> Time Saved
                </span>
                <span className="text-3xl font-extrabold text-white">
                  {totalHoursSavedMonthly} <span className="text-sm font-normal text-gray-400">hrs/mo</span>
                </span>
              </div>

              <div className="glass p-5 rounded-2xl">
                <span className="text-xs text-gray-400 flex items-center gap-1 mb-1">
                  <DollarSign className="w-3.5 h-3.5 text-green-400" /> Money Saved
                </span>
                <span className="text-3xl font-extrabold text-green-400">
                  ${totalMonthlySavingsDollars.toLocaleString()} <span className="text-sm font-normal text-gray-400">/mo</span>
                </span>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl border border-green-500/20 bg-green-500/5 text-center">
              <span className="text-xs text-gray-300 uppercase tracking-widest font-semibold block mb-1">
                Projected Annual ROI
              </span>
              <span className="text-4xl md:text-5xl font-black text-white">
                ${estimatedAnnualSavings.toLocaleString()}
              </span>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10">
            <WaterButton onClick={handleExport} className="w-full justify-center">
              <Download className="w-4 h-4 mr-1" />
              <span>{isPro ? (exported ? "Report Generated!" : "Export Executive ROI PDF") : "Export Report (PRO)"}</span>
              {!isPro && <Crown className="w-3.5 h-3.5 text-amber-300 ml-1" />}
            </WaterButton>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}