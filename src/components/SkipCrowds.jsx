import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export default function SkipCrowds({ onNavigate }) {
  const handleSimClick = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('gem-simulator');
    } else {
      window.location.hash = 'gem-simulator';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-[#090d16] text-slate-100 relative overflow-hidden border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-terracotta-500/10 text-terracotta-400 text-xs font-mono font-bold uppercase tracking-wider border border-terracotta-500/20">
            <span>Crowd Intelligence & Discovery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white tracking-tight">
            Skip the Crowds. Discover the Real India.
          </h2>
          <p className="text-slate-400 text-base leading-relaxed font-sans">
            See how Yatrika transforms standard commercial tourism into serene, safe, and authentic exploration.
          </p>
        </div>

        {/* Clean Side-by-Side Comparison Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Card 1: Traditional Tourism */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-950/90 border border-red-900/60 rounded-3xl p-7 shadow-xl space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-red-900/40 pb-3">
                <span className="text-red-400 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-red-500" />
                  Traditional Tourism
                </span>
                <span className="text-[10px] font-mono bg-red-950 text-red-300 px-2.5 py-0.5 rounded-full border border-red-800">
                  Overcrowded
                </span>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm">
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="p-1 rounded bg-red-500/10 text-red-400 mt-0.5">✕</span>
                  <div>
                    <strong className="text-slate-200 block text-sm">Famous Hotspots Only</strong>
                    <span className="text-slate-400 text-xs">Mass congestion at the same 10 commercial destinations.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="p-1 rounded bg-red-500/10 text-red-400 mt-0.5">✕</span>
                  <div>
                    <strong className="text-slate-200 block text-sm">Generic Recommendations</strong>
                    <span className="text-slate-400 text-xs">Standardized itineraries that ignore individual travel preferences.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="p-1 rounded bg-red-500/10 text-red-400 mt-0.5">✕</span>
                  <div>
                    <strong className="text-slate-200 block text-sm">Safety as an Afterthought</strong>
                    <span className="text-slate-400 text-xs">No integration of nearby police stations or emergency medical facilities.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="p-1 rounded bg-red-500/10 text-red-400 mt-0.5">✕</span>
                  <div>
                    <strong className="text-slate-200 block text-sm">Limited Local Discovery</strong>
                    <span className="text-slate-400 text-xs">Tourists miss out on authentic regional food and native crafts.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-red-900/40 text-[11px] font-mono text-red-400">
              Outcome: Congested Traffic & Diluted Experience
            </div>
          </motion.div>

          {/* Card 2: Yatrika */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-950/90 border-2 border-terracotta-500/50 rounded-3xl p-7 shadow-2xl space-y-6 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-terracotta-500/30 pb-3">
                <span className="text-terracotta-400 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Yatrika Discovery Engine
                </span>
                <span className="text-[10px] font-mono bg-terracotta-500/20 text-terracotta-300 px-2.5 py-0.5 rounded-full border border-terracotta-500/40 font-bold">
                  Intelligent & Safe
                </span>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm">
                <li className="flex items-start gap-3 text-slate-200">
                  <span className="p-1 rounded bg-emerald-500/10 text-emerald-400 mt-0.5">✓</span>
                  <div>
                    <strong className="text-white block text-sm">Lesser-Known Destinations</strong>
                    <span className="text-slate-300 text-xs">Discovers serene, pristine offbeat places near major landmarks.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-slate-200">
                  <span className="p-1 rounded bg-emerald-500/10 text-emerald-400 mt-0.5">✓</span>
                  <div>
                    <strong className="text-white block text-sm">AI-Personalized Discovery</strong>
                    <span className="text-slate-300 text-xs">Matches options to your travel group, experience vibe, and crowd choice.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-slate-200">
                  <span className="p-1 rounded bg-emerald-500/10 text-emerald-400 mt-0.5">✓</span>
                  <div>
                    <strong className="text-white block text-sm">Safety Built into Discovery</strong>
                    <span className="text-slate-300 text-xs">Every gem includes nearby police post readiness and emergency contacts.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-slate-200">
                  <span className="p-1 rounded bg-emerald-500/10 text-emerald-400 mt-0.5">✓</span>
                  <div>
                    <strong className="text-white block text-sm">Local Food, Crafts and Culture</strong>
                    <span className="text-slate-300 text-xs">Highlights authentic regional cuisine, village handicrafts, and stories.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
              <span className="text-emerald-400">Outcome: Authentic & Safe</span>
              <button onClick={handleSimClick} className="text-amber-400 font-bold hover:underline flex items-center gap-1 cursor-pointer">
                <span>Explore AI Simulator</span> &rarr;
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
