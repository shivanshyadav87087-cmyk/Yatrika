import React from 'react';
import { motion } from 'framer-motion';
import { Search, CalendarCheck, MapPin, HeartHandshake, BarChart3, ArrowUpRight, Layers } from 'lucide-react';
import { keyFeatures } from '../data/content';

export default function Features() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Search': return <Search className="w-6 h-6" />;
      case 'CalendarCheck': return <CalendarCheck className="w-6 h-6" />;
      case 'MapPin': return <MapPin className="w-6 h-6" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6" />;
      case 'BarChart3': return <BarChart3 className="w-6 h-6" />;
      default: return <Search className="w-6 h-6" />;
    }
  };

  return (
    <section id="features" className="py-24 bg-sand-50 text-sand-900 relative topo-pattern-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-100 border border-forest-200 text-forest-800 text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-4 h-4 text-forest-700" />
            <span>Platform Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-sand-900 tracking-tight">
            5 Engine Capabilities
          </h2>

          <p className="text-base sm:text-lg text-sand-700 font-sans">
            Engineered specifically to solve the tourist discovery gap with real-time AI intelligence, geospatial awareness, and direct native vendor connections.
          </p>
        </div>

        {/* 5 Features Grid (Responsive 3 top + 2 bottom centered or 5 grid) */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {keyFeatures.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group p-8 rounded-3xl bg-white border border-sand-200 shadow-xl hover:shadow-2xl transition-all duration-300 relative flex flex-col justify-between hover:-translate-y-1 ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="space-y-6">
                
                {/* Icon Header */}
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-forest-900 text-terracotta-400 flex items-center justify-center shadow-lg group-hover:bg-terracotta-500 group-hover:text-white transition-colors duration-300">
                    {getIcon(feature.icon)}
                  </div>
                  <span className="text-xs font-mono font-bold text-sand-400 group-hover:text-terracotta-500 transition-colors">
                    0{feature.id}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="font-serif font-bold text-xl text-sand-900 group-hover:text-forest-900 transition-colors flex items-center gap-1.5">
                    <span>{feature.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-terracotta-500" />
                  </h3>
                  <p className="text-sm text-sand-700 leading-relaxed font-sans">
                    {feature.desc}
                  </p>
                </div>

              </div>

              <div className="mt-6 pt-4 border-t border-sand-100 flex items-center justify-between text-xs font-semibold text-sand-500">
                <span className="font-mono uppercase tracking-wider text-[10px]">AI Subsystem Ready</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
