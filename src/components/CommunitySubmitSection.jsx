import React from 'react';
import { motion } from 'framer-motion';
import { PlusCircle, Compass, ArrowRight } from 'lucide-react';

const COMMUNITY_EXAMPLES = [
  {
    icon: '🏞️',
    title: 'Hidden Waterfall',
    location: 'Chopta Valley, Uttarakhand',
    desc: 'Unmapped alpine cascading spring tucked behind ancient pine trails.'
  },
  {
    icon: '🍛',
    title: 'Local Food Spot',
    location: 'Agra Suburbs, Uttar Pradesh',
    desc: 'Authentic Bedai & Jalebi prepared using 100-year-old family recipes.'
  },
  {
    icon: '🧵',
    title: 'Village Craft',
    location: 'Anegundi, Karnataka',
    desc: 'Banana fiber handloom weaving workshops run by local women collectives.'
  },
  {
    icon: '🏛️',
    title: 'Historic Site',
    location: 'Chunar Fort, Uttar Pradesh',
    desc: 'Untouched 6th-century fortress overlooking serene Ganga river bends.'
  },
  {
    icon: '🎪',
    title: 'Cultural Experience',
    location: 'Hanle, Ladakh',
    desc: 'High-altitude astronomical stargazing under zero light pollution skies.'
  }
];

export default function CommunitySubmitSection({ onNavigate }) {
  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('submit-gem');
    } else {
      window.location.hash = 'submit-gem';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-[#090d16] text-slate-100 relative overflow-hidden border-t border-slate-800/80">
      
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-terracotta-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-terracotta-500/10 text-terracotta-400 text-xs font-mono font-bold uppercase tracking-wider border border-terracotta-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>Community Crowdsourced Tourism Pipeline</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white tracking-tight">
            Know a Place Tourists Haven't Discovered Yet?
          </h2>
          
          <p className="text-slate-400 text-base leading-relaxed font-sans max-w-2xl mx-auto">
            Help travelers discover the hidden stories, food and culture of your region.
          </p>

          <div className="pt-2">
            <button
              onClick={handleSubmitClick}
              className="px-7 py-3.5 rounded-2xl bg-terracotta-500 hover:bg-terracotta-600 text-white font-bold text-sm shadow-xl flex items-center gap-2.5 mx-auto transition-all hover:scale-105 cursor-pointer"
            >
              <PlusCircle className="w-4 h-4 text-amber-200" />
              <span>＋ Submit a Gem</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 5 Small Example Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {COMMUNITY_EXAMPLES.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-slate-950/80 border border-slate-800 hover:border-slate-700 rounded-2xl p-4 shadow-lg space-y-2 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="text-2xl">{item.icon}</div>
                <h3 className="font-serif font-bold text-sm text-white">
                  {item.title}
                </h3>
                <p className="text-[11px] font-mono text-terracotta-400 font-semibold">
                  📍 {item.location}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>

              <div className="pt-2 text-[10px] font-mono text-slate-500 border-t border-slate-900">
                Community Audited
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
