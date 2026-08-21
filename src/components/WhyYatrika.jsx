import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Bot, Shield, Utensils } from 'lucide-react';

const WHY_CARDS = [
  {
    icon: '✨',
    lucideIcon: Sparkles,
    title: 'Hidden Gems',
    description: 'Discover lesser-known destinations beyond overcrowded tourist traps across all 29 Indian states.',
    color: 'amber'
  },
  {
    icon: '🤖',
    lucideIcon: Bot,
    title: 'AI Personalization',
    description: 'Recommendations intelligently matched based on your starting city, group size, and travel vibe preferences.',
    color: 'terracotta'
  },
  {
    icon: '🛡️',
    lucideIcon: Shield,
    title: 'Safety Intelligence',
    description: 'Safety information, verified nearby police stations, medical emergency facilities, and crowd intelligence.',
    color: 'cyan'
  },
  {
    icon: '🧵',
    lucideIcon: Utensils,
    title: 'Local Culture',
    description: 'Discover authentic regional food specialties, native crafts, clothes, traditions, and local stories.',
    color: 'emerald'
  }
];

export default function WhyYatrika() {
  return (
    <section className="py-20 bg-[#090d16] text-slate-100 relative overflow-hidden border-t border-slate-800/80">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-terracotta-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider border border-amber-500/20">
            <span>The Yatrika Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white tracking-tight">
            Not Another Tourist Guide.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-sans">
            Yatrika helps travelers discover the India that usually gets missed.
          </p>
        </div>

        {/* 4 Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CARDS.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-slate-950/80 border border-slate-800 hover:border-slate-700/80 rounded-2xl p-6 shadow-xl transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-2xl shadow-inner">
                  {card.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-white">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {card.description}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-900 text-[11px] font-mono text-terracotta-400 font-semibold flex items-center gap-1">
                <span>Intelligent Module</span> &rarr;
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
