import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Sparkles, Menu, X, ArrowRight, ShieldCheck, PlusCircle, Home } from 'lucide-react';

/* Distinct, Highlighted Custom Yatrika Logo Icon */
function YatrikaLogoIcon({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer Glowing Compass Ring */}
      <circle cx="22" cy="22" r="19" stroke="#e8734a" strokeWidth="2.5" strokeOpacity="0.9" />
      <circle cx="22" cy="22" r="15" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="3 3" />
      
      {/* N / S / E / W Compass Ticks */}
      <line x1="22" y1="3" x2="22" y2="8" stroke="#e8734a" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="22" y1="36" x2="22" y2="41" stroke="#e8734a" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="3" y1="22" x2="8" y2="22" stroke="#e8734a" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="36" y1="22" x2="41" y2="22" stroke="#e8734a" strokeWidth="2.5" strokeLinecap="round" />
      
      {/* Center Terracotta Gem Core */}
      <path d="M22 12 L29 22 L22 32 L15 22 Z" fill="#e8734a" />
      <path d="M22 12 L29 22 L22 22 Z" fill="#ffffff" fillOpacity="0.45" />
    </svg>
  );
}

export default function Navbar({ currentView = 'home', onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, viewKey) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(viewKey);
    } else {
      window.location.hash = viewKey === 'home' ? '' : viewKey;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-sand-300 shadow-md py-2.5 text-slate-900' 
        : 'bg-white/90 backdrop-blur-sm py-3.5 border-b border-sand-200 text-slate-900 shadow-sm'
    }`}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Distinct, Highlighted Brand Logo Block (Shifted gracefully to the left) */}
          <a 
            href="#" 
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center gap-3 group transition-transform hover:scale-105 shrink-0"
          >
            <div className="relative p-1 rounded-2xl bg-gradient-to-br from-terracotta-500/20 via-amber-500/10 to-transparent border border-terracotta-500/30 shadow-sm">
              <YatrikaLogoIcon className="w-9 h-9 transition-transform group-hover:rotate-45" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-extrabold text-2xl tracking-tight bg-gradient-to-r from-terracotta-600 via-amber-700 to-terracotta-500 bg-clip-text text-transparent drop-shadow-sm">
                Yatrika
              </span>
              <span className="text-[9px] font-mono text-terracotta-600 font-bold tracking-widest uppercase -mt-1">
                AI Travel Platform
              </span>
            </div>
          </a>

          {/* Wisely Proportioned Desktop Navigation Links with Glowing Pointer States */}
          <nav className="hidden md:flex items-center gap-5 text-xs font-sans font-semibold text-slate-700">
            {/* Home Navigation Link */}
            <button 
              onClick={(e) => handleNavClick(e, 'home')} 
              className={`px-2.5 py-1 rounded-lg transition-all duration-200 hover:scale-105 hover:text-terracotta-600 hover:drop-shadow-[0_0_8px_rgba(232,115,74,0.3)] ${
                currentView === 'home' ? 'text-terracotta-600 font-bold border-b-2 border-terracotta-500 pb-0.5' : ''
              }`}
            >
              Home
            </button>

            <button 
              onClick={(e) => handleNavClick(e, 'problem')} 
              className={`px-2.5 py-1 rounded-lg transition-all duration-200 hover:scale-105 hover:text-terracotta-600 hover:drop-shadow-[0_0_8px_rgba(232,115,74,0.3)] ${
                currentView === 'problem' ? 'text-terracotta-600 font-bold border-b-2 border-terracotta-500 pb-0.5' : ''
              }`}
            >
              The Challenge
            </button>
            
            <button 
              onClick={(e) => handleNavClick(e, 'solution')} 
              className={`px-2.5 py-1 rounded-lg transition-all duration-200 hover:scale-105 hover:text-terracotta-600 hover:drop-shadow-[0_0_8px_rgba(232,115,74,0.3)] ${
                currentView === 'solution' ? 'text-terracotta-600 font-bold border-b-2 border-terracotta-500 pb-0.5' : ''
              }`}
            >
              Solution Pillars
            </button>

            <button 
              onClick={(e) => handleNavClick(e, 'how-it-works')} 
              className={`px-2.5 py-1 rounded-lg transition-all duration-200 hover:scale-105 hover:text-terracotta-600 hover:drop-shadow-[0_0_8px_rgba(232,115,74,0.3)] ${
                currentView === 'how-it-works' ? 'text-terracotta-600 font-bold border-b-2 border-terracotta-500 pb-0.5' : ''
              }`}
            >
              How It Works
            </button>

            <button 
              onClick={(e) => handleNavClick(e, 'gem-simulator')} 
              className={`px-2.5 py-1 rounded-lg flex items-center gap-1.5 transition-all duration-200 hover:scale-105 hover:text-amber-800 hover:drop-shadow-[0_0_8px_rgba(245,158,11,0.3)] ${
                currentView === 'gem-simulator' ? 'text-amber-700 font-bold border-b-2 border-amber-500 pb-0.5' : 'text-amber-700 font-bold'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI Simulator</span>
            </button>

            <button 
              onClick={(e) => handleNavClick(e, 'impact')} 
              className={`px-2.5 py-1 rounded-lg transition-all duration-200 hover:scale-105 hover:text-terracotta-600 hover:drop-shadow-[0_0_8px_rgba(232,115,74,0.3)] ${
                currentView === 'impact' ? 'text-terracotta-600 font-bold border-b-2 border-terracotta-500 pb-0.5' : ''
              }`}
            >
              Impact & Safety
            </button>
          </nav>

          {/* Desktop Right Highlighted Action Buttons */}
          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            
            {/* Highlighted Submit Gem CTA Button */}
            <button
              onClick={(e) => handleNavClick(e, 'submit-gem')}
              className={`px-3.5 py-2 rounded-xl font-bold text-xs shadow-md flex items-center gap-1.5 transition-all duration-200 hover:scale-105 border ${
                currentView === 'submit-gem'
                  ? 'bg-amber-600 text-white border-amber-500 shadow-amber-600/40 drop-shadow-[0_0_10px_rgba(245,158,11,0.4)]'
                  : 'bg-slate-900 hover:bg-slate-800 text-amber-300 border-slate-700 hover:shadow-amber-500/20'
              }`}
            >
              <PlusCircle className="w-3.5 h-3.5 text-amber-400" />
              <span>Submit Gem</span>
            </button>

            {/* Explore AI Simulator CTA Button */}
            <button
              onClick={(e) => handleNavClick(e, 'gem-simulator')}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-terracotta-500 to-amber-600 hover:from-terracotta-600 hover:to-amber-700 text-white font-bold text-xs shadow-md shadow-terracotta-500/30 flex items-center gap-1.5 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-terracotta-500/40"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-200" />
              <span>Explore AI Simulator</span>
            </button>

          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-sand-100 text-slate-800 border border-sand-300"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-sand-200 px-4 py-6 space-y-3 font-sans text-sm text-slate-800 shadow-xl"
          >
            <button 
              onClick={(e) => handleNavClick(e, 'home')}
              className="block w-full text-left hover:text-terracotta-600 py-1 font-medium"
            >
              Home
            </button>
            <button 
              onClick={(e) => handleNavClick(e, 'problem')}
              className="block w-full text-left hover:text-terracotta-600 py-1 font-medium"
            >
              The Challenge
            </button>
            <button 
              onClick={(e) => handleNavClick(e, 'solution')}
              className="block w-full text-left hover:text-terracotta-600 py-1 font-medium"
            >
              Solution Pillars
            </button>
            <button 
              onClick={(e) => handleNavClick(e, 'how-it-works')}
              className="block w-full text-left hover:text-terracotta-600 py-1 font-medium"
            >
              How It Works
            </button>
            <button 
              onClick={(e) => handleNavClick(e, 'gem-simulator')}
              className="block w-full text-left text-amber-700 font-bold py-1 flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4" />
              <span>AI Recommender Simulator</span>
            </button>
            <button 
              onClick={(e) => handleNavClick(e, 'submit-gem')}
              className="block w-full text-left text-amber-700 font-bold py-1 flex items-center gap-1.5"
            >
              <PlusCircle className="w-4 h-4 text-amber-600" />
              <span>Submit Gem Portal</span>
            </button>
            <button 
              onClick={(e) => handleNavClick(e, 'impact')}
              className="block w-full text-left hover:text-terracotta-600 py-1 font-medium"
            >
              Impact & Safety
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
