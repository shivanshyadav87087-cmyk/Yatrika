import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Siren, Hospital, Users, CloudSun, Signal, Activity } from 'lucide-react';

const SAFETY_FEATURES = [
  {
    icon: ShieldCheck,
    title: 'Safety Verification',
    detail: 'Verified driver guilds, female-hosted homestays, and local tourism audit data.',
    color: 'emerald'
  },
  {
    icon: Siren,
    title: 'Nearest Police Station',
    detail: 'Precise distance mapping and 24/7 on-call police post contact numbers.',
    color: 'cyan'
  },
  {
    icon: Hospital,
    title: 'Emergency Facilities',
    detail: 'Nearby government clinics, first-aid posts, and emergency ambulance access.',
    color: 'amber'
  },
  {
    icon: Users,
    title: 'Crowd Intelligence',
    detail: 'Footfall density estimation based on seasonal travel data and local reports.',
    color: 'terracotta'
  },
  {
    icon: CloudSun,
    title: 'Local Conditions',
    detail: 'Terrain accessibility, mountain road alerts, and seasonal weather guidance.',
    color: 'blue'
  },
  {
    icon: Signal,
    title: 'Connectivity Status',
    detail: 'Cellular network coverage reports (4G/5G readiness) across remote regions.',
    color: 'purple'
  }
];

export default function SafetyIntelligence() {
  return (
    <section id="safety" className="py-20 bg-[#090d16] text-slate-100 relative overflow-hidden border-t border-slate-800/80">
      
      {/* Background Decorative Orbs */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-terracotta-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider border border-cyan-500/20">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Integrated Safety Telematics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white tracking-tight">
            Before You Explore, Yatrika Checks.
          </h2>
          <p className="text-slate-400 text-base leading-relaxed font-sans">
            Safety information is built directly into destination discovery so travelers venture out with peace of mind.
          </p>
        </div>

        {/* Grid: 6 Safety Features & Visual Safety Assessment Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* 6 Feature Cards (7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SAFETY_FEATURES.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="bg-slate-950/80 border border-slate-800/80 hover:border-slate-700 rounded-2xl p-5 shadow-lg space-y-2"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <h3 className="font-serif font-bold text-sm text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {item.detail}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Visual Safety Score Card Component (5 Cols) */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-slate-950/90 border-2 border-cyan-500/40 p-6 sm:p-8 rounded-3xl shadow-2xl space-y-6 relative overflow-hidden"
            >
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-2">
                  <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
                  Travel Safety Assessment
                </span>
                <span className="text-[10px] font-mono bg-cyan-950 text-cyan-300 px-2.5 py-0.5 rounded-full border border-cyan-800">
                  Verified Data
                </span>
              </div>

              {/* Safety Score Radial Dial Indicator */}
              <div className="text-center py-2 space-y-2">
                <div className="text-5xl font-serif font-extrabold text-cyan-400 tracking-tight">
                  87 <span className="text-2xl font-sans text-slate-400">/ 100</span>
                </div>
                <p className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                  HIGH SAFETY READINESS INDEX
                </p>
                <p className="text-xs text-slate-400 max-w-xs mx-auto">
                  Based on available police proximity data, emergency response times, and reported local infrastructure.
                </p>
              </div>

              {/* Verified Metrics Checklist */}
              <div className="space-y-2 text-xs font-mono pt-2 border-t border-slate-800">
                <div className="flex justify-between items-center bg-slate-900/90 p-2.5 rounded-xl border border-slate-800 text-slate-300">
                  <span>Police Station:</span>
                  <span className="text-cyan-400 font-bold">Verified Nearby (&lt;3 km)</span>
                </div>
                <div className="flex justify-between items-center bg-slate-900/90 p-2.5 rounded-xl border border-slate-800 text-slate-300">
                  <span>Medical Readiness:</span>
                  <span className="text-emerald-400 font-bold">Available Nearby</span>
                </div>
                <div className="flex justify-between items-center bg-slate-900/90 p-2.5 rounded-xl border border-slate-800 text-slate-300">
                  <span>Emergency SOS Mode:</span>
                  <span className="text-amber-400 font-bold">Active & Accessible</span>
                </div>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
