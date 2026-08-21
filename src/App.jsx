import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Sparkles, Home, Layers, Compass, ShieldCheck, MessageSquare, Route, ShieldAlert, Award } from 'lucide-react';
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
import Footer from './components/Footer';
import { sampleHiddenGems } from './data/content';

const SECTION_TITLES = {
  home: 'All Sections & Overview',
  problem: 'The Tourism Paradox & Overcrowding Challenge',
  solution: 'Yatrika Core Solution Pillars',
  'how-it-works': 'How Yatrika AI & Safety Telematics Work',
  'gem-simulator': 'AI Hidden Gem Recommender & Simulator',
  impact: 'Pan-India Impact, Feasibility & Safety Infrastructure',
  reviews: 'Public Traveler Reviews & Community Ratings'
};

export default function App() {
  const [gemsDatabase, setGemsDatabase] = useState(sampleHiddenGems);
  const [currentView, setCurrentView] = useState('home');
  const [viewMode, setViewMode] = useState('focused'); // 'focused' = dedicated section view mode, 'full' = full scrollable landing page

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

    // Initial check on page load
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
        
        {/* Dedicated Section Page Breadcrumb Bar (when not in full home mode) */}
        {currentView !== 'home' && (
          <div className="bg-slate-950 text-slate-200 border-b border-slate-800 py-3.5 px-4 sm:px-8 shadow-md">
            <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
              
              {/* Back to Home / All Sections button */}
              <button
                onClick={() => handleNavigateView('home')}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-terracotta-400 font-semibold transition-all hover:scale-105"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Full Home Page</span>
              </button>

              {/* Active Dedicated Page Title Badge */}
              <div className="flex items-center gap-2">
                <span className="text-slate-400 font-medium">Viewing Dedicated Page:</span>
                <span className="font-serif font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-md border border-amber-400/20">
                  {SECTION_TITLES[currentView] || currentView}
                </span>
              </div>

              {/* View Mode Selector (Focused Page vs Full Landing Page) */}
              <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-lg border border-slate-800 text-[11px]">
                <button
                  onClick={() => setViewMode('focused')}
                  className={`px-2.5 py-1 rounded-md font-medium transition-all ${
                    viewMode === 'focused'
                      ? 'bg-terracotta-500 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Focused Page
                </button>
                <button
                  onClick={() => setViewMode('full')}
                  className={`px-2.5 py-1 rounded-md font-medium transition-all ${
                    viewMode === 'full'
                      ? 'bg-terracotta-500 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Full Page Scroll
                </button>
              </div>

            </div>
          </div>
        )}

        {/* Dynamic Content Views */}
        <AnimatePresence mode="wait">
          
          {/* VIEW: HOME (Full Landing Page) */}
          {(currentView === 'home' || viewMode === 'full') && (
            <motion.div
              key="view-home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Hero />
              <div id="problem"><Problem /></div>
              <div id="solution"><Solution /></div>
              <div id="how-it-works"><HowItWorks /></div>
              <Features />
              
              {/* Interactive AI Simulator */}
              <div id="gem-simulator">
                <GemSimulator customGems={gemsDatabase} />
              </div>
              
              {/* User Submission Portal */}
              <GemSubmission onAddGemToDatabase={handleAddGemToDatabase} />
              
              <Feasibility />
              <div id="impact"><ImpactBenefits /></div>
              <Research />

              {/* Public Reviews */}
              <div id="reviews"><PublicReviews /></div>
            </motion.div>
          )}

          {/* DEDICATED FOCUSED PAGE VIEW: The Challenge */}
          {currentView === 'problem' && viewMode === 'focused' && (
            <motion.div
              key="view-problem"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <Problem />
              <Features />
            </motion.div>
          )}

          {/* DEDICATED FOCUSED PAGE VIEW: Solution Pillars */}
          {currentView === 'solution' && viewMode === 'focused' && (
            <motion.div
              key="view-solution"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <Solution />
              <Features />
            </motion.div>
          )}

          {/* DEDICATED FOCUSED PAGE VIEW: How It Works */}
          {currentView === 'how-it-works' && viewMode === 'focused' && (
            <motion.div
              key="view-how-it-works"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <HowItWorks />
            </motion.div>
          )}

          {/* DEDICATED FOCUSED PAGE VIEW: AI Simulator */}
          {currentView === 'gem-simulator' && viewMode === 'focused' && (
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

          {/* DEDICATED FOCUSED PAGE VIEW: Impact & Safety Telematics */}
          {currentView === 'impact' && viewMode === 'focused' && (
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

          {/* DEDICATED FOCUSED PAGE VIEW: Public Reviews */}
          {currentView === 'reviews' && viewMode === 'focused' && (
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
