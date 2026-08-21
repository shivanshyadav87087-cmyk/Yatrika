import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Sparkles, Menu, X, ArrowRight, ShieldCheck, PlusCircle } from 'lucide-react';

/* Custom Yatrika Logo: Compass Ring with N/S/E/W Ticks & Terracotta Orange Diamond Gem */
function YatrikaLogoIcon({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer Compass Ring */}
      <circle cx="22" cy="22" r="19" stroke="#e8734a" strokeWidth="2.5" strokeOpacity="0.8" />
      <circle cx="22" cy="22" r="15" stroke="#1e293b" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="3 3" />
      
      {/* N / S / E / W Ticks */}
      <line x1="22" y1="3" x2="22" y2="8" stroke="#e8734a" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="22" y1="36" x2="22" y2="41" stroke="#e8734a" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="3" y1="22" x2="8" y2="22" stroke="#e8734a" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="36" y1="22" x2="41" y2="22" stroke="#e8734a" strokeWidth="2.5" strokeLinecap="round" />
      
      {/* Center Terracotta Diamond / Gem */}
      <path d="M22 12 L29 22 L22 32 L15 22 Z" fill="#e8734a" />
      <path d="M22 12 L29 22 L22 22 Z" fill="#ffffff" fillOpacity="0.4" />
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
        ? 'bg-white/95 backdrop-blur-md border-b border-sand-300 shadow-md py-3 text-slate-900' 
        : 'bg-white/90 backdrop-blur-sm py-4 border-b border-sand-200 text-slate-900 shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Top-Left Brand Logo Block: Yatrika */}
          <a 
            href="#" 
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center gap-3 group transition-transform hover:scale-105"
          >
            <YatrikaLogoIcon className="w-10 h-10 transition-transform group-hover:rotate-45" />
            <span className="font-serif font-bold text-2xl tracking-tight text-slate-900">
              Yatrika
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-sans font-semibold text-slate-700">
            <button 
              onClick={(e) => handleNavClick(e, 'problem')} 
              className={`transition-colors hover:text-terracotta-600 ${currentView === 'problem' ? 'text-terracotta-600 font-bold border-b-2 border-terracotta-500 pb-0.5' : ''}`}
            >
              The Challenge
            </button>
            
            <button 
              onClick={(e) => handleNavClick(e, 'solution')} 
              className={`transition-colors hover:text-terracotta-600 ${currentView === 'solution' ? 'text-terracotta-600 font-bold border-b-2 border-terracotta-500 pb-0.5' : ''}`}
            >
              Solution Pillars
            </button>

            <button 
              onClick={(e) => handleNavClick(e, 'how-it-works')} 
              className={`transition-colors hover:text-terracotta-600 ${currentView === 'how-it-works' ? 'text-terracotta-600 font-bold border-b-2 border-terracotta-500 pb-0.5' : ''}`}
            >
              How It Works
            </button>

            <button 
              onClick={(e) => handleNavClick(e, 'gem-simulator')} 
              className={`flex items-center gap-1.5 transition-colors ${currentView === 'gem-simulator' ? 'text-amber-700 font-bold border-b-2 border-amber-500 pb-0.5' : 'text-amber-700 font-bold hover:text-amber-800'}`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI Simulator</span>
            </button>

            {/* Submit Gem Navigation Tab Link */}
            <button 
              onClick={(e) => handleNavClick(e, 'submit-gem')} 
              className={`transition-colors hover:text-terracotta-600 ${currentView === 'submit-gem' ? 'text-terracotta-600 font-bold border-b-2 border-terracotta-500 pb-0.5' : ''}`}
            >
              Submit Gem
            </button>

            <button 
              onClick={(e) => handleNavClick(e, 'impact')} 
              className={`transition-colors hover:text-terracotta-600 ${currentView === 'impact' ? 'text-terracotta-600 font-bold border-b-2 border-terracotta-500 pb-0.5' : ''}`}
            >
              Impact & Safety
            </button>
          </nav>

          {/* Desktop Right CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={(e) => handleNavClick(e, 'gem-simulator')}
              className="px-5 py-2.5 rounded-xl bg-terracotta-500 hover:bg-terracotta-600 text-white font-bold text-xs shadow-md shadow-terracotta-500/20 flex items-center gap-2 transition-all hover:scale-105"
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
              className="block w-full text-left hover:text-terracotta-600 py-1 font-medium"
            >
              Submit Gem
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
