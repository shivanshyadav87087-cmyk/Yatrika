import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Sparkles, ShoppingBag, ShieldCheck, ArrowRight, CheckCircle2, Globe, Heart, Siren, Compass } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      id: "01",
      title: "Choose State or Famous Landmark",
      icon: MapPin,
      color: "bg-terracotta-500 text-white",
      badge: "Step 1",
      desc: "Select any Indian State or a famous crowded landmark you're visiting (like Taj Mahal, Amer Fort, Munnar, or Shimla)."
    },
    {
      id: "02",
      title: "AI Finds Nearby Offbeat Hidden Gems",
      icon: Sparkles,
      color: "bg-amber-500 text-slate-950",
      badge: "Step 2",
      desc: "Yatrika AI instantly scans surrounding 5-30km regions to recommend untouched, low-footfall hidden places worth visiting."
    },
    {
      id: "03",
      title: "Famous Regional Food & Native Clothes",
      icon: ShoppingBag,
      color: "bg-cyan-500 text-slate-950",
      badge: "Step 3",
      desc: "Discover verified local dhabas serving famous regional dishes alongside native handloom clothes and artisan village crafts."
    },
    {
      id: "04",
      title: "Travel Safely with 24/7 Police & SOS",
      icon: ShieldCheck,
      color: "bg-emerald-500 text-slate-950",
      badge: "Step 4",
      desc: "Every offbeat spot is mapped to its nearest police station, 24/7 ER hospital, verified female homestay host, and 1-tap Night SOS."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-slate-900 text-white relative overflow-hidden topo-pattern-dark border-b border-slate-800">
      
      {/* Decorative Orbs */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-terracotta-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-amber-300 text-xs font-semibold uppercase tracking-wider shadow-sm">
            <Compass className="w-4 h-4 text-terracotta-400" />
            <span>Simple 4-Step Experience</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            How Yatrika Works For You
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            From discovering uncrowded spots near famous landmarks to enjoying authentic local food and 24/7 police safety protection—here is how Yatrika transforms your travel journey.
          </p>
        </motion.div>

        {/* 4 Clean Consumer Feature Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                whileHover={{ y: -6 }}
                key={item.id}
                className="bg-slate-950/90 p-6 rounded-3xl border border-slate-800 shadow-2xl flex flex-col justify-between space-y-4 relative overflow-hidden"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center font-bold shadow-lg`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono bg-slate-900 text-amber-300 px-3 py-1 rounded-full border border-slate-800 font-bold">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-lg text-white pt-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center gap-1.5 text-xs text-amber-400 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Verified & Active</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="p-8 rounded-3xl bg-slate-950 border-2 border-amber-500/40 shadow-2xl flex flex-wrap items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-xl font-serif font-bold text-white flex items-center gap-2">
              <Siren className="w-5 h-5 text-cyan-400" />
              Ready to Explore India Beyond the Crowds?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 font-sans">
              Select your state or landmark in the simulator below to discover instant hidden places nearby!
            </p>
          </div>

          <a
            href="#gem-simulator"
            className="px-6 py-3.5 rounded-2xl bg-terracotta-500 hover:bg-terracotta-600 text-white font-bold text-xs shadow-xl flex items-center gap-2 transition-all hover:scale-105"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Launch AI Recommender</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>

    </section>
  );
}
