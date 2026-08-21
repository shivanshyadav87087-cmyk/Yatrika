import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Users, Compass, ShieldAlert, ArrowRight, XCircle, CheckCircle2, Flame, MapPin, Sparkles } from 'lucide-react';
import { problemData } from '../data/content';

export default function Problem() {
  return (
    <section id="problem" className="py-24 bg-sand-100 text-sand-900 relative overflow-hidden topo-pattern-light border-b border-sand-200">
      
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-terracotta-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-forest-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 border border-red-300 text-red-800 text-xs font-semibold uppercase tracking-wider shadow-sm">
            <AlertTriangle className="w-4 h-4 text-red-600 animate-pulse" />
            <span>The Tourism Overcrowding Paradox</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-sand-900 tracking-tight">
            The Herd Mentality & Over-Explored Guide Trap
          </h2>

          <p className="text-base sm:text-lg text-sand-700 leading-relaxed font-sans">
            Most tourists today only visit famous spots because of herd mentality—they go wherever they see crowds. Even local guides at famous monuments (like Taj Mahal or Shimla) only suggest commercial spots right next door that are already over-explored. <strong className="text-forest-900 font-bold">Yatrika breaks this cycle by uncovering TRULY NEW, UNTOUCHED & UNIQUE places</strong> across all 29 states with complete 24/7 safety and emergency facility backing.
          </p>
        </motion.div>

        {/* 3 Core Challenge Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Challenge 1 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-6 sm:p-8 rounded-3xl border border-sand-200 shadow-xl space-y-4 relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center font-bold">
              <Users className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono text-terracotta-600 font-bold block uppercase tracking-wider">
              Challenge #1: Herd Mentality
            </span>
            <h3 className="text-xl font-serif font-bold text-sand-900">
              Rush to Mainstream Crowds
            </h3>
            <p className="text-xs sm:text-sm text-sand-700 leading-relaxed font-sans">
              80% of domestic tourists rush to just 5% of famous hubs because social media and word-of-mouth only highlight the same 10 overcrowded destinations.
            </p>
          </motion.div>

          {/* Challenge 2 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-6 sm:p-8 rounded-3xl border border-sand-200 shadow-xl space-y-4 relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
              <Compass className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono text-amber-700 font-bold block uppercase tracking-wider">
              Challenge #2: Over-Explored Guides
            </span>
            <h3 className="text-xl font-serif font-bold text-sand-900">
              Adjacent Commercial Radius
            </h3>
            <p className="text-xs sm:text-sm text-sand-700 leading-relaxed font-sans">
              Local guides at famous monuments (e.g. Taj Mahal) only route tourists to nearby over-commercialized spots within 2-3km that are already saturated and over-explored.
            </p>
          </motion.div>

          {/* Challenge 3 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-6 sm:p-8 rounded-3xl border border-sand-200 shadow-xl space-y-4 relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              <Sparkles className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono text-emerald-700 font-bold block uppercase tracking-wider">
              Challenge #3: The Uniqueness Demand
            </span>
            <h3 className="text-xl font-serif font-bold text-sand-900">
              Need for True Offbeat Gems
            </h3>
            <p className="text-xs sm:text-sm text-sand-700 leading-relaxed font-sans">
              Modern travelers crave genuine serenity and untouched culture—but refrain from venturing out due to fear of missing essential food, medical care, transport, and police safety.
            </p>
          </motion.div>

        </div>

        {/* Side-by-Side Comparison: Over-Explored vs. Yatrika Discovered Gem */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Overcrowded Commercial Hub */}
          <div className="bg-red-950/90 text-red-100 p-6 sm:p-8 rounded-3xl border border-red-800 shadow-xl space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-red-800 pb-3">
                <span className="text-red-400 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <XCircle className="w-4 h-4 text-red-400" />
                  Over-Explored Mainstream Hub
                </span>
                <span className="text-[10px] bg-red-900 text-red-200 px-2.5 py-0.5 rounded-full font-mono font-bold">
                  Saturated
                </span>
              </div>

              <h3 className="text-2xl font-serif font-bold text-white">
                Taj Mahal & Adjacent Commercial Radius
              </h3>

              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li className="flex items-start gap-2 text-red-200">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span><strong>Mass Overcrowding:</strong> 12+ hour traffic jams, long ticket queues & heavy noise pollution.</span>
                </li>
                <li className="flex items-start gap-2 text-red-200">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span><strong>Over-Explored Guide Trap:</strong> Guides repeatedly push tourists to the exact same adjacent commercial shops.</span>
                </li>
                <li className="flex items-start gap-2 text-red-200">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span><strong>Inflated Commercial Pricing:</strong> Overpriced souvenir shops, plastic litter & diluted authentic experience.</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-red-900 text-xs font-mono text-red-300">
              Status: High Environmental Stress & Zero Uniqueness
            </div>
          </div>

          {/* Yatrika Discovered Gem */}
          <div className="bg-forest-900 text-white p-6 sm:p-8 rounded-3xl border border-emerald-500/50 shadow-2xl space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-forest-800 pb-3">
                <span className="text-emeraldGlow font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 animate-pulse" />
                  Yatrika Discovered Hidden Gem
                </span>
                <span className="text-[10px] bg-emerald-950 text-emerald-300 px-2.5 py-0.5 rounded-full font-mono font-bold border border-emerald-800">
                  100% Unique & Safe
                </span>
              </div>

              <h3 className="text-2xl font-serif font-bold text-sand-50">
                Chunar Fort, Bateshwar 101 Temples & Beyond
              </h3>

              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li className="flex items-start gap-2 text-forest-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Pristine Uniqueness:</strong> Untouched historical fortresses, ancient stepwells & river sanctuaries across 29 states.</span>
                </li>
                <li className="flex items-start gap-2 text-forest-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>AI Vector Discovery:</strong> RAG engine discovers truly offbeat spots far beyond commercial guide traps.</span>
                </li>
                <li className="flex items-start gap-2 text-forest-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>6-Layer Essential Facilities:</strong> Verified local dhabas, homestays, ER clinics, nearest police stations & 24/7 Night SOS.</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-forest-800 text-xs font-mono text-emeraldGlow flex items-center justify-between">
              <span>Status: Authentic, Uncrowded & Safe</span>
              <a href="#gem-simulator" className="text-terracotta-400 font-bold hover:underline">Explore Gems &rarr;</a>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
