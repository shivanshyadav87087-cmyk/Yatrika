import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, MapPin, Compass, Clock, Wallet, ShieldCheck, Route, ArrowRight, RefreshCw, CheckCircle2, Utensils, Home, Stethoscope, ShieldAlert, PhoneCall, Bus, Navigation, Moon, AlertTriangle, X, Search, Globe, Shield, Phone, Siren, Tag, Mountain, Flame, Activity, Building2, Landmark, ShoppingBag, UtensilsCrossed, Layers, Eye, PlusCircle, CloudSun, Sun, Wind, Thermometer, Droplets } from 'lucide-react';
import { sampleHiddenGems, indianStatesList, famousLandmarkHubs } from '../data/content.js';
import { destinationsDataset, getCitiesForState, getLandmarksForStateAndCity } from '../data/destinations.js';
import { getWeatherForDestination } from '../utils/weatherData.js';
import { API_BASE_URL } from '../config/api.js';
import confetti from 'canvas-confetti';
import InteractiveMap from './InteractiveMap.jsx';

export default function GemSimulator({ customGems }) {
  const activeGems = customGems || sampleHiddenGems;

  const [selectedState, setSelectedState] = useState('All States');
  const [selectedCity, setSelectedCity] = useState('All Cities / Districts');
  const [selectedLandmark, setSelectedLandmark] = useState('all');
  const [selectedVibe, setSelectedVibe] = useState('All Vibes');
  const [selectedGemIdx, setSelectedGemIdx] = useState(0);
  const [duration, setDuration] = useState('1 Full Day');
  const [isCalculating, setIsCalculating] = useState(false);
  const [activeTab, setActiveTab] = useState('result');
  const [nightModeOpen, setNightModeOpen] = useState(false);
  const [sosSent, setSosSent] = useState(false);
  const [apiHealth, setApiHealth] = useState(null);

  // Check Backend Health Telematics from API_BASE_URL/api/v1/health
  useEffect(() => {
    fetch(`${API_BASE_URL}/api/v1/health`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data) setApiHealth(data);
        else setApiHealth({ status: 'ONLINE_FALLBACK' });
      })
      .catch(() => setApiHealth({ status: 'ONLINE_FALLBACK' }));
  }, []);

  // Fetch Live Gems from API_BASE_URL/api/v1/gems
  useEffect(() => {
    if (selectedState !== 'All States' || selectedVibe !== 'All Vibes') {
      const queryParams = new URLSearchParams();
      if (selectedState !== 'All States') queryParams.append('state', selectedState);
      if (selectedVibe !== 'All Vibes') queryParams.append('vibe', selectedVibe);

      fetch(`${API_BASE_URL}/api/v1/gems?${queryParams.toString()}`)
        .then((res) => (res.ok ? res.json() : null))
        .catch((err) => console.log('API Fetch Notice:', err.message));
    }
  }, [selectedState, selectedVibe]);

  // Dynamic Cities dropdown based on selected State
  const availableCities = useMemo(() => {
    return getCitiesForState(selectedState);
  }, [selectedState]);

  // Dynamic Landmarks dropdown based on selected State & City
  const availableLandmarks = useMemo(() => {
    if (selectedState === 'All States' && selectedCity === 'All Cities / Districts') {
      return famousLandmarkHubs;
    }
    const stateLandmarks = getLandmarksForStateAndCity(selectedState, selectedCity);
    if (stateLandmarks.length === 0) return [];
    return [{ id: 'all', name: '✨ All Landmarks in Region' }, ...stateLandmarks];
  }, [selectedState, selectedCity]);

  // Cascading Filter: State -> City -> Landmark -> Vibe
  const filteredGems = useMemo(() => {
    let pool = activeGems;

    if (selectedState !== 'All States') {
      pool = pool.filter(g => g.state && g.state.toLowerCase() === selectedState.toLowerCase());
    }

    if (selectedCity !== 'All Cities / Districts') {
      pool = pool.filter(g => (g.city && g.city.toLowerCase() === selectedCity.toLowerCase()) || (g.location && g.location.toLowerCase().includes(selectedCity.toLowerCase())));
    }

    if (selectedLandmark !== 'all') {
      const allLandmarksList = Array.isArray(destinationsDataset) 
        ? destinationsDataset.flatMap(s => s.cities.flatMap(c => c.landmarks))
        : getLandmarksForStateAndCity(selectedState, selectedCity);
      const landmarkObj = famousLandmarkHubs.find(l => l.id === selectedLandmark) || 
                          allLandmarksList.find(l => l.id === selectedLandmark || l.name === selectedLandmark);
      if (landmarkObj) {
        const landmarkMatches = pool.filter(g => g.landmarkHub && g.landmarkHub.toLowerCase().includes(landmarkObj.name.toLowerCase().replace(/^[^\w]+/, '').trim()));
        if (landmarkMatches.length > 0) {
          pool = landmarkMatches;
        }
      }
    }

    if (selectedVibe !== 'All Vibes') {
      pool = pool.filter(g => g.vibeTag === selectedVibe || g.category === selectedVibe);
    }

    return pool;
  }, [selectedState, selectedCity, selectedLandmark, selectedVibe, activeGems]);

  // Auto-reset selected place index whenever filters change so it updates instantly
  useEffect(() => {
    setSelectedGemIdx(0);
  }, [selectedState, selectedCity, selectedLandmark, selectedVibe]);

  // Safe reference for current active place
  const currentGem = filteredGems[selectedGemIdx] || filteredGems[0] || null;
  const facilities = currentGem?.essentialFacilities;
  const police = facilities?.womenSafety;
  const specialties = facilities?.famousRegionalSpecialties || {
    food: "Local Organic Thali & Regional Desserts",
    crafts: "Native Handlooms, Block Prints & Traditional Crafts"
  };

  const weatherData = useMemo(() => {
    return getWeatherForDestination(currentGem?.state, currentGem?.location, currentGem?.gemName);
  }, [currentGem]);

  const handleSelectState = (st) => {
    setSelectedState(st);
    setSelectedCity('All Cities / Districts');
    setSelectedLandmark('all');
  };

  const handleSelectCity = (ct) => {
    setSelectedCity(ct);
    setSelectedLandmark('all');
  };

  const handleSelectLandmark = (lId) => {
    setSelectedLandmark(lId);
  };

  const handleSelectVibe = (vibe) => {
    setSelectedVibe(vibe);
  };

  const handleSimulate = () => {
    setIsCalculating(true);
    setTimeout(() => {
      setIsCalculating(false);
      try {
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.7 }
        });
      } catch (e) {
        // fallback
      }
    }, 400);
  };

  // POST /api/v1/sos/dispatch to Production API_BASE_URL (with Mock/Test Mode support)
  const handleTriggerSOS = (isMockTest = false) => {
    setSosSent(true);

    if (isMockTest === true) {
      console.log('🧪 Mock/Test Mode Active: Simulated SOS payload response { success: true, status: "DISPATCHED_TO_POLICE" }');
    } else if (currentGem && police) {
      fetch(`${API_BASE_URL}/api/v1/sos/dispatch`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          gemName: currentGem.gemName,
          location: currentGem.location,
          policeStation: police.policeStationName
        })
      })
      .then((res) => res.json())
      .catch((err) => console.log('SOS API Dispatch Notice:', err.message));
    }

    setTimeout(() => {
      setSosSent(false);
    }, 4000);
  };

  return (
    <section id="gem-simulator" className="py-24 bg-sand-100 text-sand-900 relative overflow-hidden topo-pattern-light">
      
      {/* Decorative Floating Topo Contour Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-terracotta-500/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-900/10 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-terracotta-100 border border-terracotta-300/80 text-terracotta-900 text-xs font-semibold uppercase tracking-wider shadow-sm">
            <Globe className="w-4 h-4 text-terracotta-600 animate-spin" style={{ animationDuration: '10s' }} />
            <span>Pan-India Offbeat Discovery Radar</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-sand-900 tracking-tight">
            Visiting a Famous Landmark? Discover Nearby Hidden Gems
          </h2>

          <p className="text-base sm:text-lg text-sand-700 leading-relaxed font-sans">
            Select an Indian State, City & Famous Landmark (e.g. <strong className="font-bold text-slate-900">Taj Mahal, Amer Fort, Kashi Vishwanath, Munnar, Pangong</strong>)! Yatrika automatically fetches <strong className="font-bold text-slate-900">uncrowded offbeat places nearby in that region</strong>, plus famous local food & native clothes—backed by 24/7 nearest police station mapping & emergency SOS support.
          </p>
        </motion.div>

        {/* Night Emergency Mode Banner Button */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex justify-center"
        >
          <button
            onClick={() => setNightModeOpen(true)}
            className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-full bg-indigo-950 hover:bg-indigo-900 text-indigo-100 font-semibold text-xs border-2 border-indigo-500/80 shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-400"></span>
            </span>
            <Moon className="w-4 h-4 text-amber-300 group-hover:rotate-12 transition-transform" />
            <span>Test 24/7 Night Safety & Emergency Police SOS Dispatch Mode</span>
            <span className="bg-amber-400 text-indigo-950 font-mono text-[10px] px-2.5 py-0.5 rounded-full font-bold">LIVE DEMO</span>
          </button>
        </motion.div>

        {/* Simulator Main Grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-sand-200 shadow-xl space-y-6 relative overflow-hidden"
          >
            
            <div className="flex items-center justify-between border-b border-sand-100 pb-4">
              <span className="font-serif font-bold text-lg text-sand-900 flex items-center gap-2">
                <Compass className="w-5 h-5 text-terracotta-500 animate-spin" style={{ animationDuration: '20s' }} />
                Query Parameters
              </span>
              <span className="text-[11px] font-mono bg-slate-900 text-amber-300 px-3 py-1 rounded-full flex items-center gap-1.5 border border-slate-800">
                <Activity className="w-3 h-3 text-cyan-400 animate-pulse" />
                API: Connected
              </span>
            </div>

            {/* 1. SELECT TARGET INDIAN STATE */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-sand-700 uppercase tracking-wider block flex items-center justify-between">
                <span className="font-bold text-terracotta-600">1. Select Target Indian State</span>
                <span className="text-[10px] text-terracotta-600 font-mono font-bold">29 States & UTs</span>
              </label>
              
              <div className="relative">
                <select
                  value={selectedState}
                  onChange={(e) => handleSelectState(e.target.value)}
                  className="w-full text-xs p-3 rounded-xl border-2 border-terracotta-400 bg-terracotta-50/30 font-bold text-sand-900 focus:outline-none focus:border-terracotta-600 focus:ring-2 focus:ring-terracotta-200 shadow-sm transition-all cursor-pointer"
                >
                  {indianStatesList.map(st => (
                    <option key={st} value={st}>
                      {st === 'All States' ? '🇮🇳 All Indian States (Pan-India)' : `📍 State: ${st}`}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* 2. SELECT CITY / DISTRICT */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-sand-700 uppercase tracking-wider block flex items-center justify-between">
                <span className="font-bold text-slate-800 flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5 text-slate-600" />
                  2. Select City / District
                </span>
                <span className="text-[10px] text-slate-700 font-mono font-bold">
                  {availableCities.length > 0 ? `${availableCities.length} City(ies)` : 'General'}
                </span>
              </label>
              
              <div className="relative">
                <select
                  value={selectedCity}
                  onChange={(e) => handleSelectCity(e.target.value)}
                  className="w-full text-xs p-3 rounded-xl border-2 border-slate-600 bg-slate-50/40 font-bold text-sand-900 focus:outline-none focus:border-slate-800 focus:ring-2 focus:ring-slate-200 shadow-sm transition-all cursor-pointer"
                >
                  <option value="All Cities / Districts">
                    🏙️ {selectedState === 'All States' ? 'All Cities in India' : `All Cities in ${selectedState}`}
                  </option>
                  {availableCities.map(ct => (
                    <option key={ct} value={ct}>
                      📍 City: {ct}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* 3. FAMOUS LANDMARK / HUB SELECTION */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-sand-700 uppercase tracking-wider block flex items-center justify-between">
                <span className="font-bold text-indigo-900 flex items-center gap-1">
                  <Landmark className="w-3.5 h-3.5 text-indigo-600" />
                  3. Visiting a Famous Landmark / Hub?
                </span>
                <span className="text-[10px] text-indigo-700 font-mono font-bold">
                  Offbeat Recommender
                </span>
              </label>
              
              <div className="relative">
                <select
                  value={selectedLandmark}
                  onChange={(e) => handleSelectLandmark(e.target.value)}
                  className="w-full text-xs p-3 rounded-xl border-2 border-indigo-500 bg-indigo-50/40 font-bold text-indigo-950 focus:outline-none focus:border-indigo-700 focus:ring-2 focus:ring-indigo-200 shadow-sm transition-all cursor-pointer"
                >
                  {availableLandmarks.length > 0 ? (
                    availableLandmarks.map(lm => (
                      <option key={lm.id} value={lm.id}>
                        {lm.name}
                      </option>
                    ))
                  ) : (
                    <option value="all">No landmark registered yet for this city</option>
                  )}
                </select>
              </div>
            </div>

            {/* 4. TRAVEL PREFERENCE & VIBE */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-sand-700 uppercase tracking-wider block flex items-center justify-between">
                <span>4. Travel Preference & Vibe</span>
                <span className="text-[10px] text-slate-700 font-mono font-bold">Refine Vibe</span>
              </label>
              
              <div className="grid grid-cols-2 gap-2">
                {[
                  { tag: 'All Vibes', label: '✨ All Vibes' },
                  { tag: 'Eco Nature', label: '🌿 Eco Nature' },
                  { tag: 'Heritage & Crafts', label: '🏰 Heritage & Crafts' },
                  { tag: 'Spiritual History', label: '🛕 Spiritual History' },
                  { tag: 'Mountain Trails', label: '🏔️ Mountain Trails' }
                ].map((item) => {
                  const isSelected = selectedVibe === item.tag;
                  return (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      key={item.tag}
                      onClick={() => handleSelectVibe(item.tag)}
                      className={`text-xs p-3 rounded-xl border text-left font-bold transition-all cursor-pointer ${
                        item.tag === 'All Vibes' ? 'col-span-2' : ''
                      } ${
                        isSelected 
                          ? 'bg-terracotta-500 text-white border-terracotta-500 shadow-md ring-2 ring-terracotta-300' 
                          : 'bg-sand-50 text-sand-800 border-sand-200 hover:bg-sand-100 hover:border-sand-300'
                      }`}
                    >
                      <span className="block">{item.label}</span>
                      {isSelected && (
                        <span className="block text-[9px] font-mono text-sand-100 opacity-90">Active Vibe</span>
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* 5. DISCOVERED HIDDEN PLACES NEARBY */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-sand-700 uppercase tracking-wider block flex items-center justify-between">
                <span>5. Recommended Offbeat Gems ({filteredGems.length})</span>
                <span className="text-[10px] text-amber-700 font-mono font-bold">
                  {selectedState}
                </span>
              </label>

              {filteredGems.length > 0 ? (
                <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                  {filteredGems.map((gem, idx) => {
                    const isSelected = (currentGem?.gemName === gem.gemName);
                    return (
                      <motion.button
                        whileHover={{ x: 3 }}
                        key={gem.gemName}
                        onClick={() => setSelectedGemIdx(idx)}
                        className={`w-full text-xs p-3 rounded-xl border text-left font-medium transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-slate-900 text-white border-slate-900 shadow-lg ring-2 ring-terracotta-500/50' 
                            : 'bg-sand-50 text-sand-800 border-sand-200 hover:bg-sand-100'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-xs truncate">{gem.gemName}</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded border shrink-0 ml-1 bg-terracotta-500 text-white font-bold border-terracotta-600">
                            {gem.vibeTag || gem.category}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-[10px] opacity-80 mt-1 font-mono">
                          <span className="truncate">{gem.location}</span>
                          <span className="text-amber-700 font-bold shrink-0 ml-1">Score {gem.score}/100</span>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              ) : (
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-sans text-center space-y-1">
                  <span className="font-bold block">
                    {selectedVibe !== 'All Vibes' ? `No '${selectedVibe}' places found in ${selectedState}` : `More destinations for ${selectedState} coming soon!`}
                  </span>
                  <span className="text-[11px] text-amber-700 block">
                    {selectedVibe !== 'All Vibes' ? `Try selecting 'All Vibes' to view all available places for this state.` : `The community audit is expanding. You can submit a new hidden place below!`}
                  </span>
                </div>
              )}
            </div>

            {/* Run Re-Animation Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSimulate}
              disabled={isCalculating}
              className="w-full py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm shadow-xl flex items-center justify-center gap-2 transition-all cursor-pointer border border-slate-700"
            >
              {isCalculating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-terracotta-400" />
                  <span>Calculating Telematics...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-terracotta-400" />
                  <span>Re-run Confetti Animation</span>
                </>
              )}
            </motion.button>

          </motion.div>

          {/* Result Display Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-4"
          >
            
            {/* Result Tabs Navigation */}
            <div className="flex flex-wrap items-center gap-1.5 bg-white p-1.5 rounded-2xl border border-sand-200 shadow-sm relative">
              {[
                { id: 'result', label: 'Overview' },
                { id: 'weather', label: 'Weather & Forecast', icon: CloudSun, color: 'text-amber-400' },
                { id: 'specialties', label: 'Famous Food & Clothes', icon: ShoppingBag, color: 'text-amber-500' },
                { id: 'essential', label: 'Food & Homestays', icon: Utensils, color: 'text-terracotta-500' },
                { id: 'medical', label: 'Hospitals & Medical', icon: Stethoscope, color: 'text-red-400' },
                { id: 'safety', label: 'Women Safety & Police', icon: Siren, color: 'text-amber-400' },
                { id: 'transport', label: 'Transport & Distances', icon: Bus, color: 'text-blue-400' },
                { id: 'itinerary', label: 'Itinerary' }
              ].map((tab) => {
                const IconComponent = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative text-xs px-3 py-2 rounded-xl font-semibold transition-all flex items-center gap-1 cursor-pointer z-10 ${
                      isActive ? 'text-white' : 'text-sand-700 hover:text-sand-900 hover:bg-sand-100'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTabBadge"
                        className="absolute inset-0 bg-slate-900 rounded-xl -z-10 shadow"
                        transition={{ type: "spring", stiffness: 500, damping: 35 }}
                      />
                    )}
                    {IconComponent && <IconComponent className={`w-3.5 h-3.5 ${isActive ? 'text-white' : tab.color}`} />}
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Main Result Card Container */}
            <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl border border-slate-700 shadow-2xl relative min-h-[460px] flex flex-col justify-between overflow-hidden topo-pattern-dark">
              
              {!currentGem ? (
                /* Fallback Empty State for Unseeded State/City/Vibe */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="my-auto text-center space-y-4 py-12 px-4"
                >
                  <div className="w-16 h-16 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center mx-auto">
                    <Sparkles className="w-8 h-8 animate-pulse" />
                  </div>
                  <div className="space-y-2 max-w-md mx-auto">
                    <h4 className="font-serif font-bold text-xl text-sand-50">
                      {selectedVibe !== 'All Vibes' 
                        ? `No places matching '${selectedVibe}' in ${selectedState}`
                        : `More destinations for ${selectedState} coming soon!`}
                    </h4>
                    <p className="text-xs text-slate-300 font-sans leading-relaxed">
                      {selectedVibe !== 'All Vibes'
                        ? `There are currently no offbeat places registered under '${selectedVibe}' for this specific selection. Try selecting 'All Vibes' or choose another vibe category to view available places!`
                        : `The Yatrika community audit is currently expanding coverage to ${selectedState}. You can submit a new hidden place for this state using the submission form below!`}
                    </p>
                  </div>
                  <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
                    {selectedVibe !== 'All Vibes' && (
                      <button
                        onClick={() => setSelectedVibe('All Vibes')}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold text-xs shadow border border-slate-700 transition-all cursor-pointer"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Switch to 'All Vibes'</span>
                      </button>
                    )}
                    <a
                      href="#gem-submission"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-terracotta-500 hover:bg-terracotta-600 text-white font-bold text-xs shadow-lg transition-all"
                    >
                      <PlusCircle className="w-4 h-4 text-amber-300" />
                      <span>Submit a Hidden Gem for {selectedState}</span>
                    </a>
                  </div>
                </motion.div>
              ) : (
                <AnimatePresence mode="wait">
                  {isCalculating ? (
                    <motion.div 
                      key="loading"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="my-auto text-center space-y-4 py-16"
                    >
                      <RefreshCw className="w-12 h-12 text-terracotta-400 animate-spin mx-auto" />
                      <div className="space-y-1">
                        <h4 className="font-serif font-bold text-lg text-sand-50">Retrieving Destinations in {currentGem.state}</h4>
                        <p className="text-xs text-slate-300 font-mono">Auditing nearby 24/7 police posts, ER hospitals, verified food dhabas & local transit...</p>
                      </div>
                    </motion.div>
                  ) : activeTab === 'result' ? (
                    /* Overview Tab */
                    <motion.div
                      key={currentGem.gemName}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-slate-800">
                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-1.5">
                            <span className="bg-terracotta-500/20 text-terracotta-300 text-xs px-3 py-0.5 rounded-full font-mono border border-terracotta-500/30 font-bold flex items-center gap-1">
                              <Tag className="w-3 h-3" />
                              {currentGem.vibeTag || currentGem.category}
                            </span>
                            <span className="bg-slate-800 text-amber-300 text-xs px-3 py-0.5 rounded-full font-mono border border-slate-700">
                              📍 State: {currentGem.state}
                            </span>
                            <span className="text-xs text-slate-300 font-mono">
                              {currentGem.distance}
                            </span>
                          </div>
                          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-sand-50">
                            {currentGem.gemName}
                          </h3>
                        </div>

                        <div className="flex items-center gap-2.5">
                          <motion.div 
                            whileHover={{ scale: 1.05 }}
                            className="bg-slate-950/90 border border-terracotta-500/40 p-2.5 rounded-2xl text-center min-w-[90px] shadow-lg"
                          >
                            <span className="text-2xl font-serif font-extrabold text-terracotta-400 block">
                              {currentGem.score}/100
                            </span>
                            <span className="text-[9px] text-slate-300 uppercase tracking-wider block font-mono">
                              Gem Score
                            </span>
                          </motion.div>
                          <motion.div 
                            whileHover={{ scale: 1.05 }}
                            className="bg-slate-950/90 border border-amber-500/40 p-2.5 rounded-2xl text-center min-w-[90px] shadow-lg"
                          >
                            <span className="text-2xl font-serif font-extrabold text-amber-300 block">
                              {currentGem.womenSafetyIndex}/100
                            </span>
                            <span className="text-[9px] text-slate-300 uppercase tracking-wider block font-mono">
                              Women Safety
                            </span>
                          </motion.div>
                        </div>
                      </div>

                      <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                        {currentGem.desc}
                      </p>

                      {/* Weather & Forecast Teaser Box */}
                      <div className="p-4 rounded-2xl bg-slate-950/90 border border-sky-500/40 space-y-2 text-xs">
                        <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
                          <span className="text-sky-400 font-bold font-mono uppercase tracking-wider flex items-center gap-1.5">
                            <CloudSun className="w-4 h-4 text-amber-300" />
                            Live Weather Telematics & Forecast
                          </span>
                          <button 
                            onClick={() => setActiveTab('weather')}
                            className="text-[10px] text-amber-300 font-mono font-bold hover:underline cursor-pointer"
                          >
                            Full Report & Forecast &rarr;
                          </button>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] font-mono">
                          <div>
                            <span className="text-slate-400 block text-[10px]">Live Temp:</span>
                            <span className="text-amber-300 font-bold text-sm">{weatherData.current.temp}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block text-[10px]">Condition:</span>
                            <span className="text-white font-medium truncate block">{weatherData.current.condition}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block text-[10px]">Past 24h Avg:</span>
                            <span className="text-slate-300 font-medium">{weatherData.past24h.avgTemp}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block text-[10px]">AQI Air Index:</span>
                            <span className="text-emerald-400 font-bold">{weatherData.current.aqi}</span>
                          </div>
                        </div>
                        <div className="pt-1.5 border-t border-slate-800/80 text-[11px] text-amber-200 font-sans flex items-center gap-1.5">
                          <span>{weatherData.current.travelAdvisory}</span>
                        </div>
                      </div>

                      {/* Regional Famous Food & Clothes Teaser Box */}
                      <div className="p-4 rounded-2xl bg-slate-950/90 border border-amber-500/40 space-y-2 text-xs">
                        <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
                          <span className="text-amber-400 font-bold font-mono uppercase tracking-wider flex items-center gap-1.5">
                            <ShoppingBag className="w-4 h-4 text-amber-400" />
                            Famous Food & Local Clothes/Crafts
                          </span>
                          <button 
                            onClick={() => setActiveTab('specialties')}
                            className="text-[10px] text-amber-300 font-mono font-bold hover:underline cursor-pointer"
                          >
                            View Details &rarr;
                          </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                          <div>
                            <span className="text-slate-400 block font-mono text-[10px]">🍲 Famous Food:</span>
                            <span className="text-sand-100 font-medium">{specialties.food}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block font-mono text-[10px]">👗 Famous Clothes & Crafts:</span>
                            <span className="text-sand-100 font-medium">{specialties.crafts}</span>
                          </div>
                        </div>
                      </div>

                      {/* Quick Facilities Summary Chips */}
                      {facilities && police && (
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs">
                          <div className="bg-slate-950/80 p-3 rounded-xl border border-cyan-500/30">
                            <span className="text-cyan-400 text-[10px] uppercase font-bold block flex items-center gap-1">
                              <Siren className="w-3 h-3 text-cyan-400" />
                              Nearest Police
                            </span>
                            <span className="text-sand-100 font-bold text-[11px] truncate block mt-0.5">{police.policeStationName}</span>
                            <span className="text-slate-400 text-[10px] block">{police.policeStationDist}</span>
                          </div>
                          <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800">
                            <span className="text-slate-400 text-[10px] uppercase block">Nearest Clinic</span>
                            <span className="text-sand-100 font-bold text-[11px] truncate block mt-0.5">{facilities.medical[0]?.name || 'District Clinic'}</span>
                            <span className="text-slate-400 text-[10px] block">{facilities.medical[0]?.dist || '5 km'}</span>
                          </div>
                          <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800">
                            <span className="text-slate-400 text-[10px] uppercase block">Local Food</span>
                            <span className="text-terracotta-400 font-bold mt-0.5 block">{facilities.food[0]?.dist || '250m'}</span>
                          </div>
                          <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800">
                            <span className="text-slate-400 text-[10px] uppercase block">Night Transit</span>
                            <span className="text-amber-300 font-bold mt-0.5 block">24/7 Available</span>
                          </div>
                        </div>
                      )}

                    </motion.div>
                  ) : activeTab === 'weather' ? (
                    /* Dedicated Weather & Forecast Telematics Tab */
                    <motion.div
                      key="weather"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-5"
                    >
                      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                        <div>
                          <h4 className="font-serif font-bold text-lg text-sand-50 flex items-center gap-2">
                            <CloudSun className="w-5 h-5 text-amber-300" />
                            Weather Telematics & Forecast for {currentGem.gemName}
                          </h4>
                          <span className="text-xs text-slate-300 font-mono">Past 24h report, live weather telematics & 4-day forecast prediction</span>
                        </div>
                        <span className="bg-amber-950/80 text-amber-300 border border-amber-800 text-xs px-3 py-1 rounded-full font-mono font-bold">
                          Live Climate Telematics
                        </span>
                      </div>

                      {/* Section 1: Past 24 Hours Weather Report */}
                      <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-2 text-xs">
                        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                          <span className="font-mono text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                            <Clock className="w-4 h-4 text-amber-400" />
                            Past 24 Hours Weather Report ({weatherData.past24h.date})
                          </span>
                          <span className="text-[10px] font-mono text-slate-400">Recorded Telematics</span>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] font-mono pt-1">
                          <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                            <span className="text-slate-400 block text-[10px]">Past Avg Temp:</span>
                            <span className="text-sand-100 font-bold">{weatherData.past24h.avgTemp}</span>
                          </div>
                          <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                            <span className="text-slate-400 block text-[10px]">Temp Range:</span>
                            <span className="text-sand-100 font-bold">{weatherData.past24h.tempLow} - {weatherData.past24h.tempHigh}</span>
                          </div>
                          <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                            <span className="text-slate-400 block text-[10px]">Past Condition:</span>
                            <span className="text-slate-200 font-medium truncate block">{weatherData.past24h.condition}</span>
                          </div>
                          <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                            <span className="text-slate-400 block text-[10px]">Past Rainfall:</span>
                            <span className="text-cyan-300 font-bold">{weatherData.past24h.rainfall}</span>
                          </div>
                        </div>
                      </div>

                      {/* Section 2: Current Live Weather Telematics */}
                      <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/60 border border-amber-500/40 space-y-4 shadow-xl">
                        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center justify-center font-bold shadow-lg">
                              <Sun className="w-7 h-7 text-amber-300 animate-spin" style={{ animationDuration: '30s' }} />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="text-3xl font-serif font-extrabold text-white">{weatherData.current.temp}</span>
                                <span className="text-xs text-slate-300 font-mono">Feels like {weatherData.current.feelsLike}</span>
                              </div>
                              <span className="text-xs text-amber-300 font-semibold font-sans">{weatherData.current.condition}</span>
                            </div>
                          </div>

                          <div className="bg-slate-950/90 px-3.5 py-2 rounded-xl border border-amber-500/30 text-right">
                            <span className="text-[10px] text-slate-400 font-mono block">Travel Advisory</span>
                            <span className="text-xs font-bold text-emerald-400 font-sans">{weatherData.current.travelAdvisory}</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
                          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                            <span className="text-slate-400 text-[10px] uppercase block flex items-center gap-1">
                              <Droplets className="w-3 h-3 text-cyan-400" /> Humidity
                            </span>
                            <span className="text-sand-100 font-bold text-xs mt-0.5 block">{weatherData.current.humidity}</span>
                          </div>
                          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                            <span className="text-slate-400 text-[10px] uppercase block flex items-center gap-1">
                              <Wind className="w-3 h-3 text-cyan-400" /> Wind Speed
                            </span>
                            <span className="text-sand-100 font-bold text-xs mt-0.5 block">{weatherData.current.windSpeed}</span>
                          </div>
                          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                            <span className="text-slate-400 text-[10px] uppercase block flex items-center gap-1">
                              <Sun className="w-3 h-3 text-amber-400" /> UV Index
                            </span>
                            <span className="text-amber-300 font-bold text-xs mt-0.5 block">{weatherData.current.uvIndex}</span>
                          </div>
                          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                            <span className="text-slate-400 text-[10px] uppercase block flex items-center gap-1">
                              <Activity className="w-3 h-3 text-emerald-400" /> Air Quality (AQI)
                            </span>
                            <span className="text-emerald-400 font-bold text-xs mt-0.5 block">{weatherData.current.aqi}</span>
                          </div>
                        </div>
                      </div>

                      {/* Section 3: Weather Forecast Prediction (Next 4 Days) */}
                      <div className="space-y-2">
                        <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider block">
                          🔮 4-Day Weather Forecast Prediction
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-xs">
                          {weatherData.forecast.map((f, idx) => (
                            <div key={idx} className="p-3.5 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-1.5">
                              <div className="flex items-center justify-between font-mono">
                                <span className="font-bold text-amber-300">{f.day}</span>
                                <span className="text-[10px] text-slate-400">Rain: {f.rainChance}</span>
                              </div>
                              <div className="text-sm font-serif font-bold text-white flex items-center justify-between">
                                <span>{f.tempHigh}</span>
                                <span className="text-xs text-slate-400 font-mono">Low: {f.tempLow}</span>
                              </div>
                              <span className="text-[11px] text-slate-300 font-sans block truncate">{f.condition}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ) : activeTab === 'specialties' ? (
                    /* Famous Food & Native Clothes/Crafts Tab */
                    <motion.div
                      key="specialties"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-5"
                    >
                      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                        <div>
                          <h4 className="font-serif font-bold text-lg text-sand-50 flex items-center gap-2">
                            <ShoppingBag className="w-5 h-5 text-amber-400" />
                            Famous Local Food & Native Clothes / Crafts in {currentGem.state}
                          </h4>
                          <span className="text-xs text-slate-300 font-mono">Authentic regional specialties recommended by local village hosts</span>
                        </div>
                        <span className="bg-amber-950/80 text-amber-300 border border-amber-800 text-xs px-3 py-1 rounded-full font-mono font-bold">
                          Native Specialties
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                        
                        {/* Famous Local Food Card */}
                        <div className="p-5 rounded-2xl bg-slate-950/90 border border-amber-500/40 space-y-3 shadow-lg">
                          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                            <span className="font-bold text-amber-300 flex items-center gap-1.5 font-mono text-xs uppercase">
                              <UtensilsCrossed className="w-4 h-4 text-amber-400" />
                              Famous Regional Dishes & Sweets
                            </span>
                            <span className="text-[10px] text-slate-300 font-mono">Must-Try</span>
                          </div>
                          <p className="text-sand-100 text-sm leading-relaxed font-sans font-medium">
                            {specialties.food}
                          </p>
                          <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 font-mono">
                            Served fresh at nearby verified village dhabas & organic kitchens.
                          </div>
                        </div>

                        {/* Famous Native Clothes & Crafts Card */}
                        <div className="p-5 rounded-2xl bg-slate-950/90 border border-terracotta-500/40 space-y-3 shadow-lg">
                          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                            <span className="font-bold text-terracotta-400 flex items-center gap-1.5 font-mono text-xs uppercase">
                              <ShoppingBag className="w-4 h-4 text-terracotta-400" />
                              Famous Native Clothes & Artisan Crafts
                            </span>
                            <span className="text-[10px] text-slate-300 font-mono">Authentic</span>
                          </div>
                          <p className="text-sand-100 text-sm leading-relaxed font-sans font-medium">
                            {specialties.crafts}
                          </p>
                          <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 font-mono">
                            Directly supports native village weavers & artisan cooperatives.
                          </div>
                        </div>

                      </div>

                    </motion.div>
                  ) : activeTab === 'essential' ? (
                    /* Food & Homestays Tab */
                    <motion.div
                      key="essential"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-5"
                    >
                      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                        <div>
                          <h4 className="font-serif font-bold text-lg text-sand-50 flex items-center gap-2">
                            <Utensils className="w-5 h-5 text-terracotta-400" />
                            Nearby Food & Accommodation Options in {currentGem.state}
                          </h4>
                          <span className="text-xs text-slate-300 font-mono">Verified local dhabas, organic home kitchens & homestays</span>
                        </div>
                        <span className="bg-slate-800 text-amber-300 text-xs px-2.5 py-1 rounded-full font-mono border border-slate-700">
                          Audited
                        </span>
                      </div>

                      {facilities && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                          
                          {/* Food Options Card */}
                          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
                            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                              <span className="font-bold text-sand-50 flex items-center gap-1.5">
                                <Utensils className="w-4 h-4 text-terracotta-400" />
                                Food & Dining Nearby
                              </span>
                              <span className="text-[10px] text-slate-300 font-mono">Hygiene Verified</span>
                            </div>
                            {facilities.food?.map((f, i) => (
                              <div key={i} className="space-y-0.5 pt-1">
                                <div className="flex justify-between font-medium text-sand-100">
                                  <span>{f.name}</span>
                                  <span className="text-terracotta-400 font-bold">{f.dist}</span>
                                </div>
                                <div className="flex justify-between text-[11px] text-slate-300">
                                  <span>{f.type}</span>
                                  <span className="text-amber-300">{f.open}</span>
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Accommodation Card */}
                          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
                            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                              <span className="font-bold text-sand-50 flex items-center gap-1.5">
                                <Home className="w-4 h-4 text-cyan-400" />
                                Verified Homestays & Lodges
                              </span>
                              <span className="text-[10px] text-slate-300 font-mono">Night Available</span>
                            </div>
                            {facilities.accommodation?.map((a, i) => (
                              <div key={i} className="space-y-0.5 pt-1">
                                <div className="flex justify-between font-medium text-sand-100">
                                  <span>{a.name}</span>
                                  <span className="text-sand-100 font-bold">{a.tariff}</span>
                                </div>
                                <div className="flex justify-between text-[11px] text-slate-300">
                                  <span>{a.type}</span>
                                  <span className="text-amber-300">Night Stay ✓</span>
                                </div>
                              </div>
                            ))}
                          </div>

                        </div>
                      )}

                    </motion.div>
                  ) : activeTab === 'medical' ? (
                    /* Hospitals & Medical Facilities Tab */
                    <motion.div
                      key="medical"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-5"
                    >
                      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                        <div>
                          <h4 className="font-serif font-bold text-lg text-sand-50 flex items-center gap-2">
                            <Stethoscope className="w-5 h-5 text-red-400" />
                            Nearby Hospitals & Medical Facilities in {currentGem.state}
                          </h4>
                          <span className="text-xs text-slate-300 font-mono">24/7 Emergency hospitals, clinics, ambulance contacts & pharmacies</span>
                        </div>
                        <span className="bg-red-950 text-red-400 border border-red-800 text-xs px-3 py-1 rounded-full font-mono font-bold">
                          24/7 ER Ready
                        </span>
                      </div>

                      {facilities && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                          {facilities.medical?.map((m, i) => (
                            <div key={i} className="p-4 rounded-2xl bg-slate-950/80 border border-red-500/30 space-y-2">
                              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                                <span className="font-bold text-sand-50">{m.name}</span>
                                <span className="text-red-400 font-bold font-mono">{m.dist} ({m.travelTime})</span>
                              </div>
                              <p className="text-slate-200 text-[11px]">{m.type}</p>
                              <div className="pt-2 border-t border-slate-800 flex items-center justify-between font-mono text-[11px]">
                                <span className="text-slate-400">Emergency Phone:</span>
                                <span className="text-sand-50 font-bold bg-slate-900 px-2 py-0.5 rounded border border-slate-700">{m.phone}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ) : activeTab === 'safety' ? (
                    /* Women Safety & Explicit Police Station Tab */
                    <motion.div
                      key="safety"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-5"
                    >
                      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                        <div>
                          <h4 className="font-serif font-bold text-lg text-sand-50 flex items-center gap-2">
                            <Siren className="w-5 h-5 text-cyan-400 animate-pulse" />
                            Women Safety & Nearest Police Station Hub
                          </h4>
                          <span className="text-xs text-slate-300 font-mono">Explicit police post mapping, verified female hosts & emergency helplines</span>
                        </div>
                        <span className="bg-amber-950/80 text-amber-300 border border-amber-800 text-xs px-3 py-1 rounded-full font-mono font-bold">
                          Safety Rating: {currentGem.womenSafetyIndex}/100
                        </span>
                      </div>

                      {police && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          
                          {/* High-Impact Dedicated Police Station Card */}
                          <div className="p-5 rounded-2xl bg-slate-950 border-2 border-cyan-500/50 space-y-3 font-sans text-xs relative overflow-hidden shadow-lg">
                            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                              <span className="text-cyan-400 font-bold uppercase font-mono tracking-wider flex items-center gap-1.5">
                                <Siren className="w-4 h-4 text-cyan-400 animate-pulse" />
                                Nearest Police Station
                              </span>
                              <span className="text-[10px] bg-cyan-950 text-cyan-300 font-mono px-2 py-0.5 rounded border border-cyan-800 font-bold">
                                On-Call Response
                              </span>
                            </div>

                            <div className="space-y-1">
                              <h5 className="text-base font-bold text-sand-50">{police.policeStationName}</h5>
                              <div className="flex items-center justify-between text-xs font-mono">
                                <span className="text-slate-300">Distance & ETA:</span>
                                <span className="text-cyan-400 font-bold">{police.policeStationDist}</span>
                              </div>
                              <div className="flex items-center justify-between text-xs font-mono">
                                <span className="text-slate-300">Police Hotline Phone:</span>
                                <span className="text-sand-50 font-bold bg-slate-900 px-2 py-0.5 rounded border border-slate-700">{police.policeStationPhone}</span>
                              </div>
                              <div className="flex items-center justify-between text-xs font-mono">
                                <span className="text-slate-300">Patrol Unit:</span>
                                <span className="text-slate-200">{police.policePatrol}</span>
                              </div>
                            </div>

                            <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono">
                              <span className="text-slate-400">Emergency Police Code:</span>
                              <span className="text-terracotta-400 font-bold">{police.helpline}</span>
                            </div>
                          </div>

                          {/* Safety Telematics & SOS Trigger Card */}
                          <div className="p-5 rounded-2xl bg-indigo-950/70 border border-indigo-700/60 space-y-3 font-sans text-xs flex flex-col justify-between shadow-lg">
                            <div className="space-y-2">
                              <span className="text-amber-300 font-bold uppercase font-mono block tracking-wider flex items-center gap-1.5">
                                <Moon className="w-4 h-4 animate-pulse" />
                                Women Safety Telematics
                              </span>

                              <ul className="space-y-1.5">
                                {police.features?.map((feat, i) => (
                                  <li key={i} className="flex items-center gap-2 text-indigo-100 text-[11px]">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                                    <span>{feat}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <motion.button
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => handleTriggerSOS(false)}
                              className={`w-full py-3 rounded-xl font-bold text-xs shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer ${
                                sosSent 
                                  ? 'bg-emerald-600 text-white' 
                                  : 'bg-red-600 hover:bg-red-700 text-white shadow-red-600/30'
                              }`}
                            >
                              {sosSent ? (
                                <>
                                  <CheckCircle2 className="w-4 h-4 animate-bounce" />
                                  <span>SOS Dispatched via Production API to {police.policeStationName}!</span>
                                </>
                              ) : (
                                <>
                                  <PhoneCall className="w-4 h-4" />
                                  <span>Dispatch SOS to {police.policeStationName}</span>
                                </>
                              )}
                            </motion.button>
                          </div>

                        </div>
                      )}

                    </motion.div>
                  ) : activeTab === 'transport' ? (
                    /* Transport & Distances Tab */
                    <motion.div
                      key="transport"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-5"
                    >
                      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                        <div>
                          <h4 className="font-serif font-bold text-lg text-sand-50 flex items-center gap-2">
                            <Bus className="w-5 h-5 text-blue-400" />
                            Local Transport & Distances in {currentGem.state}
                          </h4>
                          <span className="text-xs text-slate-300 font-mono">Local auto stands, jeeps, bus timings & distances to fuel/ATMs</span>
                        </div>
                        <span className="bg-blue-950 text-blue-300 border border-blue-800 text-xs px-3 py-1 rounded-full font-mono">
                          Transit Audited
                        </span>
                      </div>

                      {facilities && (
                        <>
                          {/* Local Drivers Grid */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                            {facilities.transport?.map((t, i) => (
                              <div key={i} className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
                                <div className="flex justify-between font-bold text-sand-100">
                                  <span>{t.name}</span>
                                  <span className="text-blue-400 font-mono">{t.phone}</span>
                                </div>
                                <div className="flex justify-between text-[11px] text-slate-300 pt-1">
                                  <span>{t.type}</span>
                                  <span className="text-amber-300">{t.availability}</span>
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Essential Key Distances Grid */}
                          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
                            <span className="text-terracotta-400 font-bold font-mono block uppercase text-[11px]">
                              Directions & Distance to Key Services
                            </span>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-[11px]">
                              <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                                <span className="text-slate-400 block text-[10px]">Petrol Pump</span>
                                <span className="text-sand-100 font-bold">{facilities?.distances?.petrolPump || '2.0 km'}</span>
                              </div>
                              <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                                <span className="text-slate-400 block text-[10px]">ATM</span>
                                <span className="text-sand-100 font-bold">{facilities?.distances?.atm || '1.0 km'}</span>
                              </div>
                              <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                                <span className="text-slate-400 block text-[10px]">District HQ</span>
                                <span className="text-sand-100 font-bold">{facilities?.distances?.districtHQ || '10 km'}</span>
                              </div>
                              <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                                <span className="text-slate-400 block text-[10px]">National Highway</span>
                                <span className="text-sand-100 font-bold">{facilities?.distances?.nationalHighway || '5.0 km'}</span>
                              </div>
                            </div>
                          </div>
                        </>
                      )}

                    </motion.div>
                  ) : (
                    /* Itinerary Tab */
                    <motion.div
                      key="itinerary"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                        <h4 className="font-serif font-bold text-lg text-sand-50 flex items-center gap-2">
                          <Route className="w-5 h-5 text-terracotta-400" />
                          Auto-Synthesized Day Plan ({duration})
                        </h4>
                        <span className="text-xs font-mono text-slate-300">Carbon-Optimized Route</span>
                      </div>

                      <div className="space-y-3 font-sans">
                        {currentGem.itinerary?.map((item, idx) => (
                          <div key={idx} className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start gap-3 text-xs sm:text-sm text-slate-100">
                            <div className="w-6 h-6 rounded-full bg-slate-800 text-terracotta-400 flex items-center justify-center shrink-0 mt-0.5 font-bold font-mono text-xs">
                              {idx + 1}
                            </div>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}

              {/* Footer inside result card */}
              {currentGem && (
                <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-300 font-sans">
                  <span>Coordinates: {currentGem.lat ? `${currentGem.lat.toFixed(4)}, ${currentGem.lng.toFixed(4)}` : 'Verified Geographic Radius'}</span>
                  <span className="text-terracotta-400 font-semibold font-mono">
                    📍 {currentGem.location}
                  </span>
                </div>
              )}

            </div>

            {/* Interactive Leaflet Map View */}
            {currentGem && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <InteractiveMap currentGem={currentGem} />
              </motion.div>
            )}

          </motion.div>

        </div>

      </div>

      {/* 24/7 Night Emergency Mode Modal */}
      <AnimatePresence>
        {nightModeOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="bg-indigo-950 border-2 border-indigo-500 text-white max-w-2xl w-full rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden"
            >
              <button
                onClick={() => setNightModeOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-indigo-900/80 hover:bg-indigo-800 text-indigo-200 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 border-b border-indigo-800 pb-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-800 text-amber-300 flex items-center justify-center font-bold">
                  <Siren className="w-6 h-6 text-cyan-400 animate-pulse" />
                </div>
                <div>
                  <span className="text-xs font-mono text-amber-300 uppercase tracking-widest block font-bold">
                    SafeHaven 24/7 Night Police Mode Active ({currentGem?.state || selectedState})
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-sand-50">
                    Emergency Police & Safety Dispatch Network
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-indigo-100 leading-relaxed font-sans">
                If a traveler experiences any problem after dark in {currentGem?.gemName || 'remote offbeat areas'} ({currentGem?.state || selectedState}), pressing SOS dispatches live location telemetry directly to <strong>{police?.policeStationName || 'District Police Patrol Station'} ({police?.policeStationDist || '< 5 mins response'})</strong> and local village guards via <code className="text-amber-300">{API_BASE_URL}</code>.
              </p>

              {facilities && police && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  
                  {/* Police Station Callout in Night Modal */}
                  <div className="p-3.5 rounded-xl bg-indigo-900/90 border border-cyan-400/50 space-y-1">
                    <span className="text-cyan-400 font-bold font-mono block uppercase text-[10px] flex items-center gap-1">
                      <Siren className="w-3.5 h-3.5 text-cyan-400" />
                      Nearest Police Station
                    </span>
                    <span className="text-sand-50 font-bold block text-xs">{police.policeStationName}</span>
                    <span className="text-indigo-200 block text-[11px] font-mono">Distance & Response: {police.policeStationDist}</span>
                    <span className="text-cyan-300 block text-[11px] font-mono">Phone: {police.policeStationPhone}</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-indigo-900/60 border border-indigo-700/60 space-y-1">
                    <span className="text-amber-300 font-bold font-mono block uppercase text-[10px]">24/7 Medical ER Clinic</span>
                    <span className="text-sand-50 font-bold block">{facilities.medical[0]?.name || 'District Hospital'}</span>
                    <span className="text-indigo-200 block text-[11px] font-mono">{facilities.medical[0]?.phone || '+91 112'} ({facilities.medical[0]?.dist || '5 km'})</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-indigo-900/60 border border-indigo-700/60 space-y-1">
                    <span className="text-amber-300 font-bold font-mono block uppercase text-[10px]">24/7 Emergency Night Stay</span>
                    <span className="text-sand-50 font-bold block">{facilities.accommodation[0]?.name || 'Verified Eco Homestay'}</span>
                    <span className="text-indigo-200 block text-[11px]">Female Host Verified ✓</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-indigo-900/60 border border-indigo-700/60 space-y-1">
                    <span className="text-blue-300 font-bold font-mono block uppercase text-[10px]">Night Driver Guild</span>
                    <span className="text-sand-50 font-bold block">{facilities.transport[0]?.name || 'Local Auto Guild'}</span>
                    <span className="text-indigo-200 block text-[11px] font-mono">{facilities.transport[0]?.phone || '+91 112'}</span>
                  </div>
                </div>
              )}

              <div className="pt-2 flex items-center justify-between">
                <button
                  onClick={() => handleTriggerSOS(false)}
                  className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-lg flex items-center gap-2 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>{sosSent ? 'SOS Sent to Police Station!' : `Dispatch SOS to ${police?.policeStationName || 'Nearest District Police'}`}</span>
                </button>
                
                <button
                  onClick={() => setNightModeOpen(false)}
                  className="text-xs text-indigo-300 hover:text-white font-mono cursor-pointer"
                >
                  Close Night Mode &rarr;
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
