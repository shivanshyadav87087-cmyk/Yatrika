import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import GemSimulator from './components/GemSimulator';
import GemSubmission from './components/GemSubmission';
import TechStack from './components/TechStack';
import Feasibility from './components/Feasibility';
import ImpactBenefits from './components/ImpactBenefits';
import Research from './components/Research';
import Footer from './components/Footer';
import { sampleHiddenGems } from './data/content';

export default function App() {
  const [gemsDatabase, setGemsDatabase] = useState(sampleHiddenGems);

  const handleAddGemToDatabase = (newGem) => {
    setGemsDatabase(prevGems => [newGem, ...prevGems]);
  };

  return (
    <div className="min-h-screen bg-sand-100 text-sand-900 font-sans selection:bg-terracotta-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Features />
        
        {/* Interactive AI Simulator */}
        <GemSimulator customGems={gemsDatabase} />
        
        {/* User Submission & AI Worthiness Verification Portal */}
        <GemSubmission onAddGemToDatabase={handleAddGemToDatabase} />
        
        <TechStack />
        <Feasibility />
        <ImpactBenefits />
        <Research />
      </main>
      <Footer />
    </div>
  );
}
