import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Sparkles, Menu, X, ArrowRight, ShieldCheck, Moon } from 'lucide-react';

/* Custom Yatrika Logo: Compass Ring with N/S/E/W Ticks & Terracotta Orange Diamond Gem */
function YatrikaLogoIcon({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer Compass Ring */}
      <circle cx="22" cy="22" r="19" stroke="#e8734a" strokeWidth="2.5" strokeOpacity="0.5" />
      <circle cx="22" cy="22" r="15" stroke="currentColor" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="3 3" />
      
      {/* N / S / E / W Ticks */}
      <line x1="22" y1="3" x2="22" y2="8" stroke="#e8734a" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="22" y1="36" x2="22" y2="41" stroke="#e8734a" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="3" y1="22" x2="8" y2="22" stroke="#e8734a" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="36" y1="22" x2="41" y2="22" stroke="#e8734a" strokeWidth="2.5" strokeLinecap="round" />
      
      {/* Center Terracotta Diamond / Gem */}
      <path d="M22 12 L29 22 L22 32 L15 22 Z" fill="#e8734a" />
      <path d="M22 12 L29 22 L22 22 Z" fill="#f4f1e8" fillOpacity="0.35" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800 shadow-xl py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Top-Left Brand Logo Block: Yatrika */}
          <a href="#" className="flex items-center gap-3 group transition-transform hover:scale-105">
            <YatrikaLogoIcon className="w-10 h-10 text-white transition-transform group-hover:rotate-45" />
            <span className="font-serif font-medium text-2xl tracking-tight text-[#f4f1e8]">
              Yatrika
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-sans font-medium text-slate-300">
            <a href="#problem" className="hover:text-terracotta-400 transition-colors">The Challenge</a>
            <a href="#solution" className="hover:text-terracotta-400 transition-colors">Solution Pillars</a>
            <a href="#how-it-works" className="hover:text-terracotta-400 transition-colors">How It Works</a>
            <a href="#gem-simulator" className="hover:text-terracotta-400 transition-colors flex items-center gap-1 text-amber-400 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI Simulator</span>
            </a>
            <a href="#tech-stack" className="hover:text-terracotta-400 transition-colors">Tech Architecture</a>
            <a href="#impact" className="hover:text-terracotta-400 transition-colors">Impact & Safety</a>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#gem-simulator"
              className="px-4 py-2 rounded-xl bg-terracotta-500 hover:bg-terracotta-600 text-white font-bold text-xs shadow-lg flex items-center gap-2 transition-all hover:scale-105"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Explore Yatrika</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-slate-800 text-white border border-slate-700"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-slate-800 px-4 py-6 space-y-4 font-sans text-sm text-slate-200"
          >
            <a 
              href="#problem" 
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-terracotta-400 py-1"
            >
              The Challenge
            </a>
            <a 
              href="#solution" 
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-terracotta-400 py-1"
            >
              Solution Pillars
            </a>
            <a 
              href="#how-it-works" 
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-terracotta-400 py-1"
            >
              How It Works
            </a>
            <a 
              href="#gem-simulator" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-amber-400 font-semibold py-1 flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4" />
              <span>AI Recommender Simulator</span>
            </a>
            <a 
              href="#tech-stack" 
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-terracotta-400 py-1"
            >
              Tech Architecture
            </a>
            <a 
              href="#impact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-terracotta-400 py-1"
            >
              Impact & Safety
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
