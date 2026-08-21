import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
import Footer from './components/Footer';
import { sampleHiddenGems } from './data/content';

const SECTION_TITLES = {
  home: 'Home',
  problem: 'The Tourism Paradox & Overcrowding Challenge',
  solution: 'Yatrika Core Solution Pillars (4 Pillars)',
  'how-it-works': 'How Yatrika AI & Search Engine Works',
  'gem-simulator': 'AI Hidden Gem Recommender & Simulator',
  'submit-gem': 'User-Submitted Gem & AI Worthiness Verification Portal',
  impact: 'Pan-India Impact, Feasibility & Safety Infrastructure'
};

export default function App() {
  const [gemsDatabase, setGemsDatabase] = useState(sampleHiddenGems);
  const [currentView, setCurrentView] = useState('home');

  // Enforce Light Theme permanently across document
  useEffect(() => {
    localStorage.setItem('yatrika_theme', 'light');
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
  }, []);

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
    <div className="min-h-screen font-sans antialiased selection:bg-terracotta-500 selection:text-white bg-sand-50 text-slate-900">
      {/* Navbar with active view handler */}
      <Navbar 
        currentView={currentView} 
        onNavigate={handleNavigateView} 
      />
      
      <main className="pt-20">
        {/* Dynamic Content Views */}
        <AnimatePresence mode="wait">
          
          {/* VIEW: HOMEPAGE (Streamlined Hero Photo Slideshow Landing Page) */}
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
            </motion.div>
          )}

          {/* DEDICATED PAGE VIEW: User-Submitted Gem & AI Verification Portal */}
          {currentView === 'submit-gem' && (
            <motion.div
              key="view-submit-gem"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
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

        </AnimatePresence>

      </main>
      
      <Footer />
    </div>
  );
}
