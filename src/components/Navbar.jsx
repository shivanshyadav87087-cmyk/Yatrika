import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Menu, X, PlusCircle, ShieldCheck, MapPin, Compass } from 'lucide-react';

/* Custom Yatrika Logo: Compass Ring with N/S/E/W Ticks & Terracotta Diamond */
function YatrikaLogoIcon({ className = "w-9 h-9" }) {
  return (
    <svg className={className} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="22" r="19" stroke="#e8734a" strokeWidth="2.5" strokeOpacity="0.9" />
      <circle cx="22" cy="22" r="15" stroke="#f4f1e8" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3 3" />
      
      <line x1="22" y1="3" x2="22" y2="8" stroke="#e8734a" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="22" y1="36" x2="22" y2="41" stroke="#e8734a" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="3" y1="22" x2="8" y2="22" stroke="#e8734a" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="36" y1="22" x2="41" y2="22" stroke="#e8734a" strokeWidth="2.5" strokeLinecap="round" />
      
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
        ? 'bg-[#090d16]/95 backdrop-blur-md border-b border-slate-800/80 shadow-2xl py-3 text-slate-100' 
        : 'bg-[#090d16]/85 backdrop-blur-sm py-4 border-b border-slate-800/50 text-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Top-Left Brand Logo Block: Yatrika */}
          <a 
            href="#" 
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center gap-3 group transition-transform hover:scale-105"
          >
            <YatrikaLogoIcon className="w-9 h-9 text-terracotta-500 transition-transform group-hover:rotate-45" />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-2xl tracking-tight text-[#f4f1e8]">
                Yatrika
              </span>
              <span className="text-[9px] font-mono text-terracotta-400 font-semibold tracking-widest uppercase -mt-1">
                AI Travel Discovery
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-sans font-medium text-slate-300">
            <button 
              onClick={(e) => handleNavClick(e, 'home')} 
              className={`transition-colors hover:text-terracotta-400 ${currentView === 'home' ? 'text-terracotta-400 font-bold border-b-2 border-terracotta-500 pb-0.5' : ''}`}
            >
              Discover
            </button>
            
            <button 
              onClick={(e) => handleNavClick(e, 'how-it-works')} 
              className={`transition-colors hover:text-terracotta-400 ${currentView === 'how-it-works' ? 'text-terracotta-400 font-bold border-b-2 border-terracotta-500 pb-0.5' : ''}`}
            >
              How It Works
            </button>

            <button 
              onClick={(e) => handleNavClick(e, 'impact')} 
              className={`transition-colors hover:text-terracotta-400 ${currentView === 'impact' ? 'text-terracotta-400 font-bold border-b-2 border-terracotta-500 pb-0.5' : ''}`}
            >
              Safety
            </button>

            <button 
              onClick={(e) => handleNavClick(e, 'gem-simulator')} 
              className={`flex items-center gap-1.5 transition-colors ${currentView === 'gem-simulator' ? 'text-amber-400 font-bold border-b-2 border-amber-400 pb-0.5' : 'text-amber-400 font-semibold hover:text-amber-300'}`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI Simulator</span>
            </button>

            <button 
              onClick={(e) => handleNavClick(e, 'submit-gem')} 
              className={`flex items-center gap-1.5 transition-colors ${currentView === 'submit-gem' ? 'text-terracotta-400 font-bold border-b-2 border-terracotta-500 pb-0.5' : 'text-slate-300 hover:text-terracotta-400 font-medium'}`}
            >
              <PlusCircle className="w-3.5 h-3.5 text-terracotta-400" />
              <span>Submit Gem</span>
            </button>
          </nav>

          {/* Desktop Right CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={(e) => handleNavClick(e, 'gem-simulator')}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-terracotta-500 to-amber-600 hover:from-terracotta-600 hover:to-amber-700 text-white font-bold text-xs shadow-lg shadow-terracotta-500/25 flex items-center gap-2 transition-all hover:scale-105 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-200" />
              <span>✨ Try Yatrika</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900 text-slate-200 border border-slate-800"
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
            className="md:hidden bg-[#090d16] border-b border-slate-800 px-4 py-6 space-y-3 font-sans text-sm text-slate-200 shadow-2xl"
          >
            <button 
              onClick={(e) => handleNavClick(e, 'home')}
              className="block w-full text-left hover:text-terracotta-400 py-1.5 font-medium"
            >
              Discover
            </button>
            <button 
              onClick={(e) => handleNavClick(e, 'how-it-works')}
              className="block w-full text-left hover:text-terracotta-400 py-1.5 font-medium"
            >
              How It Works
            </button>
            <button 
              onClick={(e) => handleNavClick(e, 'impact')}
              className="block w-full text-left hover:text-terracotta-400 py-1.5 font-medium"
            >
              Safety Intelligence
            </button>
            <button 
              onClick={(e) => handleNavClick(e, 'gem-simulator')}
              className="block w-full text-left text-amber-400 font-bold py-1.5 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>AI Simulator Engine</span>
            </button>
            <button 
              onClick={(e) => handleNavClick(e, 'submit-gem')}
              className="block w-full text-left text-terracotta-400 font-bold py-1.5 flex items-center gap-2"
            >
              <PlusCircle className="w-4 h-4 text-terracotta-400" />
              <span>Submit a Gem</span>
            </button>

            <div className="pt-3 border-t border-slate-800">
              <button
                onClick={(e) => handleNavClick(e, 'gem-simulator')}
                className="w-full py-3 rounded-xl bg-terracotta-500 text-white font-bold text-xs text-center flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-200" />
                <span>✨ Try Yatrika Simulator</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
