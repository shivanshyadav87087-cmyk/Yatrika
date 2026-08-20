import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, AlertCircle, CheckCircle2, TrendingUp, Cpu, Coins, Lock, Sparkles } from 'lucide-react';
import { feasibilityData } from '../data/content.js';

export default function Feasibility() {
  const challengesList = feasibilityData?.challenges || [];
  const feasibilityList = feasibilityData?.feasibility || feasibilityData?.highlights?.feasibility || [];
  const viabilityList = feasibilityData?.viability || feasibilityData?.highlights?.viability || [];

  return (
    <section id="feasibility" className="py-24 bg-sand-50 text-sand-900 relative topo-pattern-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-100 border border-forest-200 text-forest-800 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-forest-700" />
            <span>Execution Readiness</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-sand-900 tracking-tight">
            Feasibility & Business Viability
          </h2>

          <p className="text-base sm:text-lg text-sand-700 font-sans">
            How we mitigate technical risks while establishing a sustainable, long-term operational and economic framework.
          </p>
        </div>

        {/* Two-Column Grid Layout */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Challenges vs Solutions */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-serif font-bold text-2xl text-sand-900 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-terracotta-500" />
              <span>Challenges & Mitigations</span>
            </h3>

            <div className="space-y-4">
              {challengesList.map((cItem, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-white border border-sand-200 shadow-md space-y-3"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold shrink-0 mt-0.5 text-xs">
                      ✕
                    </div>
                    <div>
                      <span className="text-xs font-mono text-red-600 font-bold uppercase tracking-wider block">
                        Challenge {idx + 1}
                      </span>
                      <h4 className="font-serif font-bold text-lg text-sand-900">
                        {cItem.problem}
                      </h4>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-forest-50 border border-forest-100 flex items-start gap-3 text-xs sm:text-sm text-forest-900 font-sans">
                    <div className="w-6 h-6 rounded-full bg-forest-800 text-terracotta-400 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                      ✓
                    </div>
                    <div>
                      <span className="font-bold text-forest-900 block font-mono text-xs">Architectural Fix:</span>
                      {cItem.solution}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Feasibility & Viability Highlights */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Feasibility Block */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-forest-900 text-white p-8 rounded-3xl border border-forest-700 shadow-2xl space-y-6"
            >
              <div className="flex items-center gap-3 border-b border-forest-800 pb-4">
                <div className="w-10 h-10 rounded-xl bg-terracotta-500/20 text-terracotta-400 flex items-center justify-center font-bold">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl text-sand-50">Technical Feasibility</h4>
                  <span className="text-xs text-forest-300 font-mono">Build & Deployment Viability</span>
                </div>
              </div>

              <ul className="space-y-3">
                {feasibilityList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-forest-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Business Viability Block */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-3xl border border-sand-200 shadow-xl space-y-6"
            >
              <div className="flex items-center gap-3 border-b border-sand-100 pb-4">
                <div className="w-10 h-10 rounded-xl bg-forest-100 text-forest-800 flex items-center justify-center font-bold">
                  <Coins className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl text-sand-900">Commercial & Social Viability</h4>
                  <span className="text-xs text-sand-600 font-mono">Financial Sustainability</span>
                </div>
              </div>

              <ul className="space-y-3">
                {viabilityList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-sand-800">
                    <CheckCircle2 className="w-4 h-4 text-terracotta-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
