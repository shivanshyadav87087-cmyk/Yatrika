import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Server, Database, Code, Shield, Globe, Layers, CheckCircle2 } from 'lucide-react';
import { techStackData } from '../data/content';

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...techStackData.map(group => group.category)];

  return (
    <section id="tech-stack" className="py-24 bg-forest-950 text-white relative overflow-hidden topo-pattern-dark">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-800 border border-forest-700 text-terracotta-400 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-4 h-4 text-terracotta-400" />
            <span>Robust Engineering Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-sand-50 tracking-tight">
            Production-Grade Tech Stack
          </h2>

          <p className="text-base sm:text-lg text-forest-200 leading-relaxed font-sans">
            Built on decoupled microservices, high-speed vector retrieval, and enterprise geospatial APIs to ensure low latency and continuous global availability.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs px-4 py-2 rounded-full font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-terracotta-500 text-white shadow-lg shadow-terracotta-500/20'
                  : 'bg-forest-900 text-forest-300 hover:bg-forest-800 hover:text-white border border-forest-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Stack Groups Grid */}
        <div className="mt-12 space-y-10">
          {techStackData
            .filter(group => selectedCategory === 'All' || group.category === selectedCategory)
            .map((group, gIdx) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: gIdx * 0.1 }}
                className="space-y-4"
              >
                <h3 className="font-serif font-bold text-xl text-sand-50 flex items-center gap-2 border-b border-forest-800 pb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-terracotta-500" />
                  <span>{group.category}</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {group.items.map((item, iIdx) => (
                    <div
                      key={item.name}
                      className="p-5 rounded-2xl bg-forest-900/80 border border-forest-800 hover:border-terracotta-500/50 hover:bg-forest-800/80 transition-all duration-300 flex flex-col justify-between group"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs text-terracotta-400 bg-forest-950 px-2 py-0.5 rounded border border-forest-800">
                            {item.tag}
                          </span>
                          <CheckCircle2 className="w-4 h-4 text-forest-600 group-hover:text-emerald-400 transition-colors" />
                        </div>
                        <h4 className="font-serif font-bold text-lg text-sand-50 group-hover:text-terracotta-300 transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-xs text-forest-300 leading-relaxed font-sans">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

              </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
}
