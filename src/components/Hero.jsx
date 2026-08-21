import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Sparkles, MapPin, ArrowRight, ShieldCheck, Route, Users, Globe, Siren, Activity, ChevronLeft, ChevronRight } from 'lucide-react';

const heroSlides = [
  {
    id: 1,
    title: "Taj Mahal & Agra Suburbs",
    subtitle: "Kachhpura Heritage Village & Moonlight Yamuna View",
    state: "Uttar Pradesh",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1920&q=90",
    vibe: "Heritage & Mughal History"
  },
  {
    id: 2,
    title: "Munnar Tea Hills & Springs",
    subtitle: "Anakkulam Wild Elephant Mineral Spring",
    state: "Kerala",
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1920&q=90",
    vibe: "Eco Nature & Tribal Springs"
  },
  {
    id: 3,
    title: "Amer Fort & Aravalli Ridge",
    subtitle: "Sagar Stepwell & Elephant Village",
    state: "Rajasthan",
    image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=1920&q=90",
    vibe: "Ancient Royal Architecture"
  },
  {
    id: 4,
    title: "Hanle High Altitude Reserve",
    subtitle: "India's 1st Dark Sky Astronomical Sanctuary",
    state: "Ladakh",
    image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=1920&q=90",
    vibe: "Mountain Trails & Stargazing"
  },
  {
    id: 5,
    title: "Varanasi Ganges & Chunar",
    subtitle: "Ancient Fortresses & River Confluences",
    state: "Uttar Pradesh",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1920&q=90",
    vibe: "Spiritual History & Sacred Ghats"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section id="hero" className="relative min-h-[85vh] w-full text-white overflow-hidden flex items-center justify-center">
      
      {/* 100% Vivid High-Resolution Edge-to-Edge Background Photo Slideshow */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat filter brightness-95 contrast-105"
            style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
          />
        </AnimatePresence>

        {/* Clean Balanced Overlay: Dark Midnight Navy on left behind text */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-slate-950/95 via-transparent to-black/40 z-10 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-16 pb-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Headline & Call to Action */}
          <div className="lg:col-span-7 space-y-6 text-left">

            {/* Main Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-white tracking-tight leading-tight [text-shadow:_0_2px_10px_rgba(0,0,0,0.8)]"
            >
              Discover Hidden Gems Across <span className="text-terracotta-400 italic">29 Indian States</span> Safely with <span className="text-[#f4f1e8] font-medium">Yatrika</span>.
            </motion.h1>

            {/* Distinct Subheadline Text (No box, distinct soft amber/gold color & left accent line) */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-amber-200/90 font-sans font-medium leading-relaxed max-w-2xl [text-shadow:_0_1px_6px_rgba(0,0,0,0.85)] pl-4 border-l-2 border-amber-400/80"
            >
              Discover lesser-known places, local culture and safer routes — <span className="text-white font-semibold">powered by AI</span>.
            </motion.p>

            {/* CTA Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#gem-simulator"
                className="px-8 py-4 rounded-2xl bg-terracotta-500 hover:bg-terracotta-600 text-white font-bold text-sm shadow-2xl shadow-terracotta-500/50 flex items-center gap-2.5 transition-all hover:scale-105"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Launch Yatrika Recommender</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#how-it-works"
                className="px-7 py-4 rounded-2xl bg-slate-900/90 backdrop-blur-md hover:bg-slate-800 text-white border border-slate-700 font-semibold text-sm transition-all hover:scale-105 flex items-center gap-2 shadow-xl"
              >
                <Compass className="w-4 h-4 text-amber-400" />
                <span>How Yatrika Works</span>
              </a>
            </motion.div>

          </div>

          {/* Visual Interactive Glassmorphism Card Preview with Live Slideshow Location Telematics */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="bg-slate-900/90 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border-2 border-amber-500/40 shadow-2xl space-y-6 relative overflow-hidden">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2 font-mono text-xs text-slate-300">
                  <Activity className="w-4 h-4 text-amber-400 animate-pulse" />
                  <span>SLIDESHOW FEATURED DESTINATION</span>
                </div>
                <span className="text-[10px] font-mono bg-amber-950/80 text-amber-300 px-3 py-1 rounded-full border border-amber-700 font-bold">
                  {heroSlides[currentSlide].state}
                </span>
              </div>

              {/* Active Slide Information Telematics */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4"
                >
                  <div className="p-4 rounded-2xl bg-slate-950/90 border border-terracotta-500/40 space-y-1.5 shadow-inner">
                    <span className="text-[10px] font-mono text-terracotta-400 uppercase tracking-widest block font-bold">
                      {heroSlides[currentSlide].vibe}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-white">
                      {heroSlides[currentSlide].title}
                    </h3>
                    <p className="text-xs text-slate-300 font-sans">
                      {heroSlides[currentSlide].subtitle}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-950/90 border border-cyan-500/40 space-y-2 text-xs font-mono shadow-inner">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Police Safety Audit:</span>
                      <span className="text-cyan-400 font-bold">Verified On-Call (&lt;4 mins)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Famous Regional Food:</span>
                      <span className="text-white font-bold">Local Authentic Cuisine</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slideshow Manual Controls & Indicators */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                <div className="flex items-center gap-1.5">
                  {heroSlides.map((slide, idx) => (
                    <button
                      key={slide.id}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        currentSlide === idx ? 'w-6 bg-terracotta-500' : 'w-2 bg-slate-700 hover:bg-slate-600'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prevSlide}
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <a
                href="#gem-simulator"
                className="w-full py-3.5 rounded-xl bg-terracotta-500 hover:bg-terracotta-600 text-white font-bold text-xs shadow-lg flex items-center justify-center gap-2 transition-all block text-center cursor-pointer"
              >
                <span>Explore All 29 States in Simulator &rarr;</span>
              </a>

            </div>
          </motion.div>

        </div>

      </div>

    </section>
  );
}
