import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Compass, Route, Users, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { solutionPillars } from '../data/content';

export default function Solution() {
  const [activePillar, setActivePillar] = useState(0);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      case 'Compass': return <Compass className="w-6 h-6" />;
      case 'Route': return <Route className="w-6 h-6" />;
      case 'Users': return <Users className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section id="solution" className="py-24 bg-forest-950 text-white relative overflow-hidden topo-pattern-dark">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-terracotta-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-forest-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-800 border border-forest-700 text-terracotta-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-terracotta-400" />
            <span>The Solution</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-sand-50 tracking-tight leading-tight">
            Architected Across <span className="text-terracotta-400">4 Core Pillars</span>
          </h2>

          <p className="text-base sm:text-lg text-forest-200/90 leading-relaxed font-sans">
            Our platform combines Retrieval-Augmented Generation (RAG), dynamic spatial search, and community verification to systematically redirect tourist footfall while enriching travel journeys.
          </p>
        </div>

        {/* 4 Pillars Grid Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutionPillars.map((pillar, idx) => {
            const isSelected = activePillar === idx;
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setActivePillar(idx)}
                className={`cursor-pointer p-6 rounded-3xl transition-all duration-300 relative flex flex-col justify-between ${
                  isSelected 
                    ? 'bg-forest-800 border-2 border-terracotta-500 shadow-2xl scale-[1.02]' 
                    : 'bg-forest-900/80 border border-forest-700/60 hover:bg-forest-800/60 hover:border-forest-600'
                }`}
              >
                {/* Pillar Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                    isSelected ? 'bg-terracotta-500 text-white shadow-lg' : 'bg-forest-800 text-terracotta-400 border border-forest-700'
                  }`}>
                    {getIcon(pillar.icon)}
                  </div>
                  <span className="font-mono text-xs font-bold text-forest-400">Pillar 0{idx + 1}</span>
                </div>

                {/* Card Title & Desc */}
                <div className="space-y-3">
                  <h3 className="font-serif font-bold text-xl text-sand-50">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-forest-200 leading-relaxed">
                    {pillar.shortDesc}
                  </p>
                </div>

                {/* Footer Link / Active State */}
                <div className="mt-6 pt-4 border-t border-forest-700/60 flex items-center justify-between text-xs font-semibold">
                  <span className={isSelected ? 'text-terracotta-300' : 'text-forest-300'}>
                    {isSelected ? 'Active Focus' : 'Click to inspect'}
                  </span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-1 text-terracotta-400' : 'text-forest-400'}`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Deep-Dive Active Pillar Panel */}
        <motion.div
          key={activePillar}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-10 bg-forest-900 border border-terracotta-500/30 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-terracotta-400 bg-forest-950 px-3 py-1 rounded-md border border-forest-800">
                <span>Architecture Spotlight</span>
                <span>•</span>
                <span>Pillar 0{activePillar + 1}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-sand-50">
                {solutionPillars[activePillar].title}
              </h3>

              <p className="text-sm sm:text-base text-forest-100 leading-relaxed">
                {solutionPillars[activePillar].details}
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-xs font-medium text-forest-200 bg-forest-800/80 px-3.5 py-2 rounded-xl border border-forest-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Real-Time Contextual Adaptation</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-forest-200 bg-forest-800/80 px-3.5 py-2 rounded-xl border border-forest-700">
                  <CheckCircle2 className="w-4 h-4 text-terracotta-400" />
                  <span>Sub-second Latency Querying</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-forest-950/80 p-6 rounded-2xl border border-forest-800 space-y-3 font-mono text-xs text-forest-200">
              <div className="flex justify-between pb-2 border-b border-forest-800 text-forest-400 uppercase tracking-wider text-[10px]">
                <span>Technical Attribute</span>
                <span>Specification</span>
              </div>
              <div className="flex justify-between">
                <span>Algorithmic Weight:</span>
                <span className="text-terracotta-400 font-bold">Dynamic Scale</span>
              </div>
              <div className="flex justify-between">
                <span>Primary Framework:</span>
                <span className="text-sand-100 font-bold">LangChain + Gemini</span>
              </div>
              <div className="flex justify-between">
                <span>Data Indexing:</span>
                <span className="text-emeraldGlow font-bold">Vector Embeddings</span>
              </div>
              <div className="flex justify-between">
                <span>Privacy Standard:</span>
                <span className="text-sand-100 font-bold">Anonymized Telematics</span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
