import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Sparkles, MapPin, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const heroSlides = [
  {
    id: 1,
    title: "Taj Mahal, Agra",
    location: "Agra, Uttar Pradesh",
    description: "Iconic 17th-century white marble mausoleum built by Mughal Emperor Shah Jahan on the banks of Yamuna River, renowned globally as one of the Seven Wonders of the World.",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1920&q=90"
  },
  {
    id: 2,
    title: "Amer Fort & Hawa Mahal",
    location: "Jaipur, Rajasthan",
    description: "Majestic 16th-century Amber Fort atop Aravalli hills and the famous 953-window red and pink sandstone Hawa Mahal (Palace of Winds).",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1920&q=90"
  },
  {
    id: 3,
    title: "Varanasi Ganges Ghats",
    location: "Varanasi, Uttar Pradesh",
    description: "One of the world's oldest living cities, famous for its ancient stone Ghats along the sacred Ganges river, spiritual evening Ganga Aarti rituals, and heritage temples.",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1920&q=90"
  },
  {
    id: 4,
    title: "Golden Temple, Amritsar",
    location: "Amritsar, Punjab",
    description: "Sacred 16th-century Harmandir Sahib gilded in pure gold leaf, surrounded by the holy Amrit Sarovar lake and hosting the world's largest community kitchen.",
    image: "https://images.unsplash.com/photo-1514222709107-a180c68d72b4?auto=format&fit=crop&w=1920&q=90"
  },
  {
    id: 5,
    title: "Qutub Minar & Red Fort",
    location: "New Delhi",
    description: "UNESCO World Heritage 73-meter red sandstone victory tower built in 1192 AD alongside Mughal royal sandstone fortresses showcasing imperial history.",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1920&q=90"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
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

          {/* Semi-Transparent Glassmorphism Historic Monument Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="bg-slate-950/40 backdrop-blur-xl p-6 sm:p-7 rounded-3xl border border-white/20 shadow-2xl space-y-5 relative overflow-hidden">
              
              {/* Dynamic Content Matched to Active Photo */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-3"
                >
                  <div className="flex items-center gap-2 text-terracotta-400 font-mono text-xs font-bold uppercase tracking-wider">
                    <MapPin className="w-4 h-4 text-terracotta-400 shrink-0" />
                    <span>{heroSlides[currentSlide].location}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif font-extrabold text-white tracking-tight leading-snug">
                    {heroSlides[currentSlide].title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans pt-1">
                    {heroSlides[currentSlide].description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Slideshow Manual Controls & Indicators */}
              <div className="flex items-center justify-between pt-4 border-t border-white/15">
                <div className="flex items-center gap-1.5">
                  {heroSlides.map((slide, idx) => (
                    <button
                      key={slide.id}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        currentSlide === idx ? 'w-6 bg-terracotta-500' : 'w-2 bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prevSlide}
                    className="p-2 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-white/20 text-white transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="p-2 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-white/20 text-white transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>

    </section>
  );
}
