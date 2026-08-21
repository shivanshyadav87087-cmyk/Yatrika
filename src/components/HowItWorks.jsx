import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Compass, ShieldCheck, MapPin, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'Tell Yatrika your preferences',
    desc: 'Select your starting city, travel group (solo, couple, family), experience vibe, and crowd preference.',
    icon: '📍'
  },
  {
    step: '02',
    title: 'AI discovers relevant hidden gems',
    desc: 'Our AI discovery engine scans 29 Indian states to find lesser-known places nearby with low footfall congestion.',
    icon: '🤖'
  },
  {
    step: '03',
    title: 'Explore with local insights & safety',
    desc: 'Access verified nearby police stations, medical readiness, regional food specialties, and native crafts.',
    icon: '🛡️'
  }
];

export default function HowItWorks({ onNavigate }) {
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
    <section id="how-it-works" className="py-20 bg-[#090d16] text-slate-100 relative overflow-hidden border-t border-slate-800/80">
      
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider border border-amber-500/20">
            <Compass className="w-4 h-4 text-terracotta-400" />
            <span>3-Step Simple Flow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white tracking-tight">
            How Yatrika Works
          </h2>
          <p className="text-slate-400 text-base leading-relaxed font-sans">
            From preference input to safe offbeat destination exploration in seconds.
          </p>
        </div>

        {/* Connected Travel Route 3-Step Visual Flow */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Dotted Travel Route Connector Line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-12 right-12 -translate-y-1/2 h-0.5 border-t-2 border-dashed border-terracotta-500/40 z-0 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {STEPS.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-slate-950/90 border border-slate-800 hover:border-slate-700 p-7 rounded-3xl shadow-xl space-y-4 text-center relative flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Step Number Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-serif font-extrabold text-terracotta-400 font-mono">
                      {item.step}
                    </span>
                    <span className="text-2xl p-2 rounded-2xl bg-slate-900 border border-slate-800 shadow-inner">
                      {item.icon}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-white leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-900 text-[11px] font-mono text-amber-400 font-semibold">
                  Step {idx + 1} of 3
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <button
            onClick={handleSimClick}
            className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-terracotta-500 to-amber-600 hover:from-terracotta-600 hover:to-amber-700 text-white font-bold text-xs shadow-xl inline-flex items-center gap-2 transition-all hover:scale-105 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-amber-200" />
            <span>Try Yatrika AI Simulator Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
