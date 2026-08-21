import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Sparkles, Navigation, ShieldCheck } from 'lucide-react';

const REGIONAL_MARKERS = [
  {
    id: 'north',
    name: 'Jibhi & Tirthan Valley',
    region: 'North India (Himachal Pradesh)',
    landmark: 'Near Manali & Kullu',
    vibe: 'Pine Trails & Mineral Streams',
    x: '38%',
    y: '22%',
    police: '2.1 km'
  },
  {
    id: 'north-east',
    name: 'Hanle Dark Sky Reserve',
    region: 'Ladakh High Plateau',
    landmark: 'Near Leh',
    vibe: 'Stargazing Sanctuary',
    x: '46%',
    y: '14%',
    police: '5.8 km'
  },
  {
    id: 'west',
    name: 'Chunar Sandstone Fortress',
    region: 'Central North (Uttar Pradesh)',
    landmark: 'Near Varanasi',
    vibe: 'Mughal Architecture & Ganga View',
    x: '58%',
    y: '38%',
    police: '2.4 km'
  },
  {
    id: 'south',
    name: 'Anegundi Coracle Village',
    region: 'South India (Karnataka)',
    landmark: 'Near Hampi Ruins',
    vibe: 'Banana Fiber Crafts',
    x: '42%',
    y: '72%',
    police: '3.2 km'
  },
  {
    id: 'kerala',
    name: 'Munnar Anakkulam Springs',
    region: 'South India (Kerala)',
    landmark: 'Near Munnar Hills',
    vibe: 'Wild Elephant Springs',
    x: '38%',
    y: '85%',
    police: '1.9 km'
  },
  {
    id: 'east',
    name: 'Lamahatta Sacred Forests',
    region: 'East India (West Bengal)',
    landmark: 'Near Darjeeling',
    vibe: 'Kanchenjunga Vista',
    x: '78%',
    y: '36%',
    police: '4.0 km'
  }
];

export default function IndiaMapSection({ onNavigate }) {
  const [activeMarker, setActiveMarker] = useState(REGIONAL_MARKERS[0]);

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
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider border border-amber-500/20">
            <Navigation className="w-3.5 h-3.5 text-terracotta-400" />
            <span>Pan-India Discovery Grid</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white tracking-tight">
            29 States. Thousands of Stories. One Intelligent Explorer.
          </h2>
          <p className="text-slate-400 text-base leading-relaxed font-sans">
            Tap glowing destination nodes across India to inspect real hidden gems with verified safety telematics.
          </p>
        </div>

        {/* Map Container & Interactive Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Visual India Map Representation with Dotted Routes & Glowing Nodes (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-950/90 border border-slate-800 rounded-3xl p-6 sm:p-8 relative min-h-[420px] flex items-center justify-center overflow-hidden shadow-2xl">
            
            {/* Dotted Map Grid Overlay Background */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#e8734a_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

            {/* Travel Route Visual Language: Dotted Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-terracotta-500/30" strokeWidth="1.5" strokeDasharray="4 4">
              <line x1="38%" y1="22%" x2="58%" y2="38%" />
              <line x1="58%" y1="38%" x2="78%" y2="36%" />
              <line x1="58%" y1="38%" x2="42%" y2="72%" />
              <line x1="42%" y1="72%" x2="38%" y2="85%" />
              <line x1="38%" y1="22%" x2="46%" y2="14%" />
            </svg>

            {/* Dotted India Silhouette Map Contour */}
            <div className="relative w-full h-[360px] max-w-[420px] mx-auto flex items-center justify-center">
              
              <div className="text-center font-serif text-slate-700/40 text-7xl font-bold uppercase select-none pointer-events-none">
                BHARAT
              </div>

              {/* Glowing Destination Markers */}
              {REGIONAL_MARKERS.map((marker) => {
                const isActive = activeMarker.id === marker.id;
                return (
                  <button
                    key={marker.id}
                    onClick={() => setActiveMarker(marker)}
                    style={{ left: marker.x, top: marker.y }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-125 focus:outline-none group cursor-pointer z-20"
                  >
                    <span className="relative flex h-5 w-5 items-center justify-center">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isActive ? 'bg-terracotta-400 opacity-75' : 'bg-amber-400/50 opacity-50'}`} />
                      <span className={`relative inline-flex rounded-full h-3 w-3 ${isActive ? 'bg-terracotta-500 shadow-[0_0_12px_rgba(232,115,74,0.9)]' : 'bg-amber-400'}`} />
                    </span>

                    {/* Hover Label */}
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 hidden group-hover:block bg-slate-900 text-[10px] font-mono text-amber-300 px-2 py-0.5 rounded border border-slate-700 whitespace-nowrap shadow-lg">
                      {marker.name}
                    </span>
                  </button>
                );
              })}

            </div>

            {/* Map Legend */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-xl border border-slate-800 backdrop-blur-sm">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-terracotta-500 inline-block" />
                <span>Connected Route Node</span>
              </span>
              <span className="text-amber-400 font-bold">29 States Mapped</span>
            </div>

          </div>

          {/* Active Node Detail Card (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMarker.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-950/90 border-2 border-amber-500/40 p-6 sm:p-7 rounded-3xl shadow-2xl space-y-5"
              >
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-mono text-terracotta-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-terracotta-400" />
                    {activeMarker.region}
                  </span>
                  <span className="text-[10px] font-mono bg-emerald-950 text-emerald-300 px-2.5 py-0.5 rounded-full border border-emerald-800 font-bold">
                    Low Crowd
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl font-serif font-bold text-white">
                    {activeMarker.name}
                  </h3>
                  <p className="text-xs font-mono text-slate-400">
                    Alternative to: <strong className="text-slate-200">{activeMarker.landmark}</strong>
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2 text-xs font-mono">
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Vibe / Experience Tag:</span>
                    <span className="text-amber-400 font-bold">{activeMarker.vibe}</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Police Station Proximity:</span>
                    <span className="text-cyan-400 font-bold">{activeMarker.police}</span>
                  </div>
                </div>

                <button
                  onClick={handleSimClick}
                  className="w-full py-3 rounded-xl bg-terracotta-500 hover:bg-terracotta-600 text-white font-bold text-xs shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-amber-200" />
                  <span>Inspect State in AI Simulator &rarr;</span>
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
