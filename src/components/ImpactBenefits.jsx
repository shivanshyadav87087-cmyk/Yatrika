import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake, Sparkles, CheckCircle2, Globe, Users, Trees, Landmark, TrendingUp } from 'lucide-react';
import { impactBenefitsData } from '../data/content';

export default function ImpactBenefits() {
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'impacts' | 'benefits'

  return (
    <section id="impact" className="py-24 bg-forest-950 text-white relative overflow-hidden topo-pattern-dark">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-terracotta-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-800 border border-forest-700 text-terracotta-400 text-xs font-semibold uppercase tracking-wider">
            <HeartHandshake className="w-4 h-4 text-terracotta-400" />
            <span>Socio-Economic Value</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-sand-50 tracking-tight">
            Impacts vs. Stakeholder Benefits
          </h2>

          <p className="text-base sm:text-lg text-forest-200 leading-relaxed font-sans">
            Measurable societal advancements paired with direct financial advantages for travelers, local homestays, and government partners.
          </p>
        </div>

        {/* Two-Column Matrix */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Column: 5 Key Impacts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-forest-900 border border-terracotta-500/30 p-8 rounded-3xl shadow-2xl space-y-6"
          >
            <div className="flex items-center justify-between border-b border-forest-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-terracotta-500/20 text-terracotta-400 flex items-center justify-center font-bold">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-sand-50">5 Macro Impacts</h3>
                  <span className="text-xs text-terracotta-400 font-mono">National & Ecological Level</span>
                </div>
              </div>
              <span className="bg-forest-800 text-sand-200 text-xs px-2.5 py-1 rounded-full font-mono border border-forest-700">
                Societal
              </span>
            </div>

            <div className="space-y-4">
              {impactBenefitsData.impacts.map((imp, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-forest-950/80 border border-forest-800 space-y-1 group hover:border-terracotta-500/40 transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-terracotta-400">0{idx + 1}.</span>
                    <h4 className="font-serif font-bold text-base text-sand-50 group-hover:text-terracotta-300 transition-colors">
                      {imp.title}
                    </h4>
                  </div>
                  <p className="text-xs text-forest-200 leading-relaxed font-sans pl-6">
                    {imp.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: 5 Key Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-forest-900 border border-forest-700 p-8 rounded-3xl shadow-2xl space-y-6"
          >
            <div className="flex items-center justify-between border-b border-forest-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-forest-800 text-emeraldGlow flex items-center justify-center font-bold">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-sand-50">5 Key Stakeholder Benefits</h3>
                  <span className="text-xs text-emeraldGlow font-mono">Micro & Local Level</span>
                </div>
              </div>
              <span className="bg-forest-800 text-sand-200 text-xs px-2.5 py-1 rounded-full font-mono border border-forest-700">
                Economic
              </span>
            </div>

            <div className="space-y-4">
              {impactBenefitsData.benefits.map((ben, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-forest-950/80 border border-forest-800 space-y-1 group hover:border-emerald-500/40 transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-emeraldGlow">0{idx + 1}.</span>
                    <h4 className="font-serif font-bold text-base text-sand-50 group-hover:text-emerald-300 transition-colors">
                      {ben.title}
                    </h4>
                  </div>
                  <p className="text-xs text-forest-200 leading-relaxed font-sans pl-6">
                    {ben.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
