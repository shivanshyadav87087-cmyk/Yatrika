import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, MapPin, ArrowRight, ShieldCheck, Compass, Users, ChevronLeft, ChevronRight, Activity, Info, X } from 'lucide-react';

const heroSlides = [
  {
    id: 1,
    title: "Chunar & Vindhya Basin",
    subtitle: "Ancient Sandstone Forts & River Confluences",
    state: "Uttar Pradesh",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1920&q=90",
    vibe: "Ancient Royal Architecture"
  },
  {
    id: 2,
    title: "Jibhi & Tirthan Valley",
    subtitle: "Sacred Pine Trails & Pristine Mineral Streams",
    state: "Himachal Pradesh",
    image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=1920&q=90",
    vibe: "Eco Nature & Alpine Trails"
  },
  {
    id: 3,
    title: "Anegundi Heritage Village",
    subtitle: "Coracle River Crossings & Banana Fiber Crafts",
    state: "Karnataka",
    image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=1920&q=90",
    vibe: "Heritage & Native Crafts"
  },
  {
    id: 4,
    title: "Munnar Anakkulam Springs",
    subtitle: "Wild Elephant Mineral Springs & Organic Tea Hills",
    state: "Kerala",
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1920&q=90",
    vibe: "Serene Nature & Spice Gardens"
  }
];

export default function Hero({ onNavigate }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showReasoningModal, setShowReasoningModal] = useState(false);

  // AI Discovery Panel Interactive Form State
  const [startLocation, setStartLocation] = useState('New Delhi');
  const [experience, setExperience] = useState('Nature');
  const [travelGroup, setTravelGroup] = useState('Solo');
  const [crowdPref, setCrowdPref] = useState('Quiet');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleLaunchSimulator = (e) => {
    if (e) e.preventDefault();
    if (onNavigate) {
      onNavigate('gem-simulator');
    } else {
      window.location.hash = 'gem-simulator';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleHowItWorksClick = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('how-it-works');
    } else {
      window.location.hash = 'how-it-works';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[92vh] w-full text-slate-100 overflow-hidden flex items-center justify-center bg-[#090d16]">
      
      {/* 100% Edge-to-Edge Cinematic Background Photo Slideshow */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat filter brightness-[0.88] contrast-105"
            style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
          />
        </AnimatePresence>

        {/* Premium Dark Gradient Overlay behind text to keep text high contrast and reduce visual noise */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#090d16] via-[#090d16]/80 to-transparent z-10" />
        <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[#090d16] via-transparent to-[#090d16]/60 z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-12 pb-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Hero Copy & Interactive AI Discovery Panel */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Top Subtitle Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-terracotta-500/40 text-terracotta-400 text-xs font-semibold uppercase tracking-wider shadow-xl"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
              </span>
              <span>Intelligent Pan-India Travel Discovery</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-white tracking-tight leading-[1.15] [text-shadow:_0_2px_12px_rgba(0,0,0,0.9)]"
            >
              Discover India's <span className="text-terracotta-400 italic">Hidden Side.</span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-200 leading-relaxed font-sans max-w-2xl [text-shadow:_0_1px_6px_rgba(0,0,0,0.85)]"
            >
              AI-powered discovery of lesser-known destinations, local experiences, and safer ways to explore India.
            </motion.p>

            {/* Primary & Secondary Action CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap items-center gap-4 pt-1"
            >
              <button
                onClick={handleLaunchSimulator}
                className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-terracotta-500 to-amber-600 hover:from-terracotta-600 hover:to-amber-700 text-white font-bold text-sm shadow-xl shadow-terracotta-500/30 flex items-center gap-2.5 transition-all hover:scale-105 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-200" />
                <span>✨ Find My Hidden Gem</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleHowItWorksClick}
                className="px-6 py-3.5 rounded-2xl bg-slate-900/90 backdrop-blur-md hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-sm transition-all hover:scale-105 flex items-center gap-2 shadow-lg cursor-pointer"
              >
                <Compass className="w-4 h-4 text-amber-400" />
                <span>How Yatrika Works</span>
              </button>
            </motion.div>

            {/* AI DISCOVERY INPUT PANEL */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 bg-slate-950/85 backdrop-blur-xl border border-slate-800 p-5 sm:p-6 rounded-2xl shadow-2xl space-y-4"
            >
              <div className="flex items-center gap-2 font-serif font-bold text-sm text-slate-200">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <h3>Tell Yatrika what you're looking for</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                
                {/* Starting From */}
                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-2.5">
                  <label className="block text-[10px] font-mono uppercase text-slate-400 font-bold mb-1">
                    📍 Starting from
                  </label>
                  <select
                    value={startLocation}
                    onChange={(e) => setStartLocation(e.target.value)}
                    className="w-full bg-transparent text-xs font-semibold text-slate-200 focus:outline-none cursor-pointer"
                  >
                    <option value="New Delhi" className="bg-slate-900 text-white">New Delhi</option>
                    <option value="Mumbai" className="bg-slate-900 text-white">Mumbai</option>
                    <option value="Bengaluru" className="bg-slate-900 text-white">Bengaluru</option>
                    <option value="Kolkata" className="bg-slate-900 text-white">Kolkata</option>
                    <option value="Jaipur" className="bg-slate-900 text-white">Jaipur</option>
                  </select>
                </div>

                {/* Experience */}
                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-2.5">
                  <label className="block text-[10px] font-mono uppercase text-slate-400 font-bold mb-1">
                    🎯 Experience
                  </label>
                  <select
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="w-full bg-transparent text-xs font-semibold text-slate-200 focus:outline-none cursor-pointer"
                  >
                    <option value="Nature" className="bg-slate-900 text-white">Nature & Trails</option>
                    <option value="Culture" className="bg-slate-900 text-white">Culture & Crafts</option>
                    <option value="Food" className="bg-slate-900 text-white">Authentic Food</option>
                    <option value="Adventure" className="bg-slate-900 text-white">Mountain Adventure</option>
                    <option value="Spiritual" className="bg-slate-900 text-white">Spiritual Serenity</option>
                  </select>
                </div>

                {/* Travelling */}
                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-2.5">
                  <label className="block text-[10px] font-mono uppercase text-slate-400 font-bold mb-1">
                    👥 Travelling
                  </label>
                  <select
                    value={travelGroup}
                    onChange={(e) => setTravelGroup(e.target.value)}
                    className="w-full bg-transparent text-xs font-semibold text-slate-200 focus:outline-none cursor-pointer"
                  >
                    <option value="Solo" className="bg-slate-900 text-white">Solo Traveler</option>
                    <option value="Couple" className="bg-slate-900 text-white">Couple Trip</option>
                    <option value="Family" className="bg-slate-900 text-white">Family</option>
                    <option value="Friends" className="bg-slate-900 text-white">Friends Group</option>
                  </select>
                </div>

                {/* Crowd preference */}
                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-2.5">
                  <label className="block text-[10px] font-mono uppercase text-slate-400 font-bold mb-1">
                    🌿 Crowd preference
                  </label>
                  <select
                    value={crowdPref}
                    onChange={(e) => setCrowdPref(e.target.value)}
                    className="w-full bg-transparent text-xs font-semibold text-slate-200 focus:outline-none cursor-pointer"
                  >
                    <option value="Quiet" className="bg-slate-900 text-white">Quiet & Serene</option>
                    <option value="Balanced" className="bg-slate-900 text-white">Balanced</option>
                    <option value="Doesn't matter" className="bg-slate-900 text-white">Doesn't Matter</option>
                  </select>
                </div>

              </div>

              <button
                onClick={handleLaunchSimulator}
                className="w-full py-3 rounded-xl bg-terracotta-500 hover:bg-terracotta-600 text-white font-bold text-xs shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-200" />
                <span>✨ Find My Hidden Gem</span>
              </button>

            </motion.div>

          </div>

          {/* Right Column: Redesigned AI RECOMMENDATION CARD (AI Travel Brief) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="lg:col-span-5 relative"
          >
            <div className="bg-slate-950/90 backdrop-blur-xl p-6 sm:p-7 rounded-3xl border-2 border-amber-500/40 shadow-2xl space-y-5 relative overflow-hidden">
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3.5">
                <div className="flex items-center gap-2 font-mono text-xs text-amber-400 font-bold tracking-wider">
                  <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
                  <span>✨ AI RECOMMENDS FOR YOU</span>
                </div>
                <span className="text-[10px] font-mono bg-amber-950/90 text-amber-300 px-3 py-1 rounded-full border border-amber-700 font-bold">
                  Matched 98%
                </span>
              </div>

              {/* Destination Title & Subtitle */}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-terracotta-400 shrink-0" />
                  <h3 className="text-2xl font-serif font-bold text-white tracking-tight">
                    Chunar, Uttar Pradesh
                  </h3>
                </div>
                <p className="text-xs text-slate-300 font-sans pl-6">
                  Ancient Forts & River Confluences
                </p>
              </div>

              {/* 4 Compact Badges */}
              <div className="grid grid-cols-2 gap-2 text-xs font-medium">
                <div className="flex items-center gap-2 bg-slate-900/90 px-3 py-2 rounded-xl border border-slate-800 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
                  <span>🟢 Low Crowd</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/90 px-3 py-2 rounded-xl border border-slate-800 text-cyan-400">
                  <span>🛡️ Safety Verified</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/90 px-3 py-2 rounded-xl border border-slate-800 text-amber-300">
                  <span>🍛 Authentic Local Cuisine</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/90 px-3 py-2 rounded-xl border border-slate-800 text-purple-300">
                  <span>🧵 Local Handicrafts</span>
                </div>
              </div>

              {/* Safety Information */}
              <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2 text-xs font-mono">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <span>🚔</span> Nearest Police Post:
                  </span>
                  <span className="text-cyan-400 font-bold">Police — 2.4 km</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <span>🏥</span> Emergency Medical Facility:
                  </span>
                  <span className="text-emerald-400 font-bold">Hospital — 4.1 km</span>
                </div>
              </div>

              {/* Expandable Action: Why Yatrika picked this */}
              <div>
                <button
                  onClick={() => setShowReasoningModal(!showReasoningModal)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-amber-500/30 text-amber-300 font-semibold text-xs flex items-center justify-between transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5 text-amber-400" />
                    Why Yatrika picked this →
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">{showReasoningModal ? 'Hide Brief' : 'View AI Brief'}</span>
                </button>

                {showReasoningModal && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2.5 p-3.5 rounded-xl bg-slate-900/95 border border-slate-800 text-xs text-slate-300 space-y-2"
                  >
                    <p className="leading-relaxed">
                      <strong>AI Reasoning Engine:</strong> Selected Chunar as an alternative to overcrowded Varanasi Ghats. Offers 92% lower footfall density, 6th-century fortress architecture overlooking Ganga, and verified 24/7 police coverage within 2.4km.
                    </p>
                  </motion.div>
                )}
              </div>

              <button
                onClick={handleLaunchSimulator}
                className="w-full py-3.5 rounded-xl bg-terracotta-500 hover:bg-terracotta-600 text-white font-bold text-xs shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Explore Full 29-State Recommender &rarr;</span>
              </button>

            </div>
          </motion.div>

        </div>

        {/* THREE ELEGANT FEATURE CARDS (Replacing old dashboard pills) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16">
          
          {/* Feature Card 1 */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="bg-slate-950/85 backdrop-blur-md p-6 rounded-2xl border border-slate-800/90 shadow-xl space-y-2"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center font-bold text-sm">
              🗺️
            </div>
            <h4 className="font-serif font-bold text-base text-white">
              29 States & UTs
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Explore beyond the usual tourist hotspots with verified hidden gems across all 29 Indian states.
            </p>
          </motion.div>

          {/* Feature Card 2 */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="bg-slate-950/85 backdrop-blur-md p-6 rounded-2xl border border-slate-800/90 shadow-xl space-y-2"
          >
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center font-bold text-sm">
              🛡️
            </div>
            <h4 className="font-serif font-bold text-base text-white">
              Safety Intelligence
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Nearby police and emergency support, verified medical clinics, and crowd intelligence built into discovery.
            </p>
          </motion.div>

          {/* Feature Card 3 */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="bg-slate-950/85 backdrop-blur-md p-6 rounded-2xl border border-slate-800/90 shadow-xl space-y-2"
          >
            <div className="w-10 h-10 rounded-xl bg-terracotta-500/10 text-terracotta-400 border border-terracotta-500/20 flex items-center justify-center font-bold text-sm">
              ✨
            </div>
            <h4 className="font-serif font-bold text-base text-white">
              AI Discovery
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Personalized hidden-gem recommendations matched to your travel preference, group size, and low-crowd choices.
            </p>
          </motion.div>

        </div>

      </div>

    </section>
  );
}
