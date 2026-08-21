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

  return (
    <div className="min-h-screen bg-sand-100 text-sand-900 font-sans selection:bg-terracotta-500 selection:text-white">
      {/* Navbar with active view handler */}
      <Navbar currentView={currentView} onNavigate={handleNavigateView} />
      
      <main className="pt-20">
        
        {/* Dedicated Section Page Breadcrumb Bar (shown on dedicated section views) */}
        {currentView !== 'home' && (
          <div className="bg-slate-950 text-slate-200 border-b border-slate-800 py-3.5 px-4 sm:px-8 shadow-md">
            <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
              
              {/* Back to Home Page button */}
              <button
                onClick={() => handleNavigateView('home')}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-terracotta-400 font-semibold transition-all hover:scale-105"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Homepage</span>
              </button>

              {/* Active Dedicated Page Title Badge */}
              <div className="flex items-center gap-2">
                <span className="text-slate-400 font-medium">Viewing Dedicated Page:</span>
                <span className="font-serif font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-md border border-amber-400/20">
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
