import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import GemSimulator from './components/GemSimulator';
import GemSubmission from './components/GemSubmission';
import Feasibility from './components/Feasibility';
import ImpactBenefits from './components/ImpactBenefits';
import Research from './components/Research';
import PublicReviews from './components/PublicReviews';
import ConciseRatingSummary from './components/ConciseRatingSummary';
import Footer from './components/Footer';
import { sampleHiddenGems } from './data/content';

const SECTION_TITLES = {
  home: 'Home',
  problem: 'The Tourism Paradox & Overcrowding Challenge',
  solution: 'Yatrika Core Solution Pillars (4 Pillars)',
  'how-it-works': 'How Yatrika AI & Search Engine Works',
  'gem-simulator': 'AI Hidden Gem Recommender & Simulator',
  impact: 'Pan-India Impact, Feasibility & Safety Infrastructure',
  reviews: 'Public Traveler Reviews & Community Ratings'
};

export default function App() {
  const [gemsDatabase, setGemsDatabase] = useState(sampleHiddenGems);
  const [currentView, setCurrentView] = useState('home');
  
  // Theme state: User Input Theme Switcher ('dark' or 'light')
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('yatrika_theme');
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
    return 'dark'; // Default dark theme for rich photographic contrast
  });

  // Sync theme to localStorage & root HTML element
  useEffect(() => {
    localStorage.setItem('yatrika_theme', theme);
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Listen to hash changes in URL for seamless SPA navigation without changing tabs
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim();
      if (hash && SECTION_TITLES[hash]) {
        setCurrentView(hash);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (!hash) {
        setCurrentView('home');
      }
    };

    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigateView = (viewKey) => {
    setCurrentView(viewKey);
    if (viewKey === 'home') {
      window.location.hash = '';
    } else {
      window.location.hash = viewKey;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddGemToDatabase = (newGem) => {
    setGemsDatabase(prevGems => [newGem, ...prevGems]);
  };

  const isLight = theme === 'light';

  return (
    <div className={`min-h-screen font-sans antialiased selection:bg-terracotta-500 selection:text-white transition-colors duration-300 ${
      isLight ? 'bg-sand-50 text-slate-900' : 'bg-slate-950 text-slate-100'
    }`}>
      {/* Navbar with active view handler & User Theme Toggle */}
      <Navbar 
        currentView={currentView} 
        onNavigate={handleNavigateView} 
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      
      <main className="pt-20">
        
        {/* Dedicated Section Page Breadcrumb Bar (shown on dedicated section views) */}
        {currentView !== 'home' && (
          <div className={`border-b py-3.5 px-4 sm:px-8 shadow-md transition-colors ${
            isLight ? 'bg-white text-slate-800 border-sand-300' : 'bg-slate-950 text-slate-200 border-slate-800'
          }`}>
            <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
              
              {/* Back to Home Page button */}
              <button
                onClick={() => handleNavigateView('home')}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg font-semibold transition-all hover:scale-105 border ${
                  isLight 
                    ? 'bg-sand-100 hover:bg-sand-200 border-sand-400 text-terracotta-600' 
                    : 'bg-slate-900 hover:bg-slate-800 border-slate-700 text-terracotta-400'
                }`}
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Homepage</span>
              </button>

              {/* Active Dedicated Page Title Badge */}
              <div className="flex items-center gap-2">
                <span className={isLight ? 'text-slate-600 font-medium' : 'text-slate-400 font-medium'}>
                  Viewing Dedicated Page:
                </span>
                <span className="font-serif font-bold text-amber-600 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/30">
                  {SECTION_TITLES[currentView] || currentView}
                </span>
              </div>

            </div>
          </div>
        )}

        {/* Dynamic Content Views */}
        <AnimatePresence mode="wait">
          
          {/* VIEW: HOMEPAGE (High-Impact Hero Photo Slideshow + End Concise Public Rating Summary) */}
          {currentView === 'home' && (
            <motion.div
              key="view-home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Hero Section with Full Edge-to-Edge Photo Slideshow & Headline Copy */}
              <Hero />
              
              {/* Concise Public Rating & Reviews Summary Bar at End of Homepage */}
              <ConciseRatingSummary onNavigate={handleNavigateView} />
            </motion.div>
          )}

          {/* DEDICATED PAGE VIEW: The Challenge */}
          {currentView === 'problem' && (
            <motion.div
              key="view-problem"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <Problem />
            </motion.div>
          )}

          {/* DEDICATED PAGE VIEW: Solution Pillars (4 Core Pillars) */}
          {currentView === 'solution' && (
            <motion.div
              key="view-solution"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <Solution />
            </motion.div>
          )}

          {/* DEDICATED PAGE VIEW: How It Works & AI Search Engine */}
          {currentView === 'how-it-works' && (
            <motion.div
              key="view-how-it-works"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <HowItWorks />
              <Features />
            </motion.div>
          )}

          {/* DEDICATED PAGE VIEW: AI Simulator & Recommender */}
          {currentView === 'gem-simulator' && (
            <motion.div
              key="view-simulator"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <GemSimulator customGems={gemsDatabase} />
              <GemSubmission onAddGemToDatabase={handleAddGemToDatabase} />
            </motion.div>
          )}

          {/* DEDICATED PAGE VIEW: Impact & Safety Telematics */}
          {currentView === 'impact' && (
            <motion.div
              key="view-impact"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <ImpactBenefits />
              <Feasibility />
              <Research />
            </motion.div>
          )}

          {/* DEDICATED PAGE VIEW: Public Reviews */}
          {currentView === 'reviews' && (
            <motion.div
              key="view-reviews"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <PublicReviews />
            </motion.div>
          )}

        </AnimatePresence>

      </main>
      
      <Footer />
    </div>
  );
}
