import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Landmark, Sparkles, CheckCircle2, FileText, Database, ShieldCheck, ArrowRight } from 'lucide-react';
import { researchData } from '../data/content';

export default function Research() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => (prev < 3295 ? prev + 115 : 3295));
    }, 40);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="research" className="py-24 bg-sand-100 text-sand-900 relative topo-pattern-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-terracotta-100 border border-terracotta-200 text-terracotta-800 text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-4 h-4 text-terracotta-600" />
            <span>Research & Policy Validation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-sand-900 tracking-tight">
            Backed By National Tourism Data
          </h2>

          <p className="text-base sm:text-lg text-sand-700 leading-relaxed font-sans">
            Our architecture directly responds to published Ministry of Tourism priorities, addressing the fundamental algorithmic gaps in existing government portals.
          </p>
        </div>

        {/* Animated Main Stat Showcase Box */}
        <div className="mt-14 bg-forest-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative border border-forest-700 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-terracotta-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-terracotta-400 bg-forest-950 px-3 py-1 rounded-md border border-forest-800">
                <Landmark className="w-4 h-4" />
                <span>Ministry of Tourism Citation (2024)</span>
              </div>

              <div className="space-y-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-6xl font-serif font-extrabold text-terracotta-400">
                    ₹{count.toLocaleString()}
                  </span>
                  <span className="text-2xl font-serif text-sand-100 font-bold">Crore</span>
                </div>
                <p className="text-xs text-forest-300 font-mono uppercase tracking-widest">
                  Public Capital Allocation for Decongestion
                </p>
              </div>

              <p className="text-sm sm:text-base text-forest-100 leading-relaxed font-sans">
                {researchData.govCitation.detail}
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="bg-forest-800/90 p-6 rounded-2xl border border-forest-700 space-y-2">
                <span className="text-3xl font-serif font-extrabold text-sand-50 block">40 Spots</span>
                <span className="text-xs text-forest-200 font-medium block">Targeted New Destinations</span>
                <p className="text-[11px] text-forest-300 font-mono">Infrastructure ready, requiring digital footfall direction</p>
              </div>

              <div className="bg-forest-800/90 p-6 rounded-2xl border border-forest-700 space-y-2">
                <span className="text-3xl font-serif font-extrabold text-emeraldGlow block">23 States</span>
                <span className="text-xs text-forest-200 font-medium block">Pan-India Geographic Scope</span>
                <p className="text-[11px] text-forest-300 font-mono">From Himachal valleys to Kerala backwaters</p>
              </div>
            </div>

          </div>
        </div>

        {/* 3 Research Pillars / Validation Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {researchData.gapsInCurrentSystem.map((gap, idx) => (
            <motion.div
              key={gap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-7 rounded-3xl border border-sand-200 shadow-xl space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-forest-900 text-terracotta-400 flex items-center justify-center font-bold font-mono text-sm">
                  0{idx + 1}
                </div>
                <h3 className="font-serif font-bold text-xl text-sand-900">
                  {gap.title}
                </h3>
                <p className="text-xs sm:text-sm text-sand-700 leading-relaxed font-sans">
                  {gap.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-sand-100 flex items-center gap-1.5 text-xs font-semibold text-forest-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Empirically Validated Precedent</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
