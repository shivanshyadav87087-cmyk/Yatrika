import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles, Bot, User, RefreshCw, Compass, ShieldCheck, MapPin, Utensils, CloudSun, Siren, Phone } from 'lucide-react';
import { sampleHiddenGems } from '../data/content.js';
import { destinationsDataset } from '../data/destinations.js';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: 'Hi! How could I help you?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  // Comprehensive, Intelligent Custom Query Engine for YatrikaAI
  const generateAIResponse = (userText) => {
    const rawQuery = userText.trim();
    const query = rawQuery.toLowerCase();

    // 1. Safety / SOS / Police / Emergency Queries
    if (query.includes('sos') || query.includes('safety') || query.includes('police') || query.includes('female') || query.includes('woman') || query.includes('safe') || query.includes('emergency') || query.includes('hospital')) {
      return `🛡️ **Yatrika 24/7 Safety & Telematics Support**:
      
• **Verified Police Posts**: Every offbeat destination on Yatrika is audited and linked to its nearest police station (<4 min response window).
• **1-Tap Night Emergency SOS**: Instant location dispatch to regional helpline & trusted emergency contacts.
• **Solo Female Traveler Guarantee**: Verified local female homestay hosts & emergency transport available.
• **Helplines**: National Emergency: 112 | Women Helpline: 1091 | Ambulance: 102.`;
    }

    // 2. Weather / Climate / Forecast Queries
    if (query.includes('weather') || query.includes('rain') || query.includes('climate') || query.includes('temp') || query.includes('temperature') || query.includes('forecast') || query.includes('season')) {
      return `🌤️ **Yatrika Weather Telematics & Forecast**:
      
• **Live Weather Audit**: Real-time temperature, humidity, wind speed & Air Quality Index (AQI) available for all 29 Indian States & UTs.
• **Past 24h Telematics**: View recorded past temperatures and rainfall data.
• **4-Day Forecast Prediction**: Day-by-day temperature range & travel suitability advisory in the Yatrika Recommender Simulator!`;
    }

    // 3. Food / Dishes / Crafts / Shopping Queries
    if (query.includes('food') || query.includes('eat') || query.includes('dish') || query.includes('cuisine') || query.includes('cloth') || query.includes('craft') || query.includes('shopping') || query.includes('dress') || query.includes('saree')) {
      return `🍲 **Famous Regional Food & Native Crafts**:
      
• **North India**: Bedai & Agra Petha (UP), Dal Baati Churma & Bandhani Silk (Rajasthan), Makki Roti & Phulkari (Punjab).
• **South India**: Appam with Stew (Kerala), Bisi Bele Bath & Channapatna Toys (Karnataka), Chettinad Spices (Tamil Nadu).
• **East & NE India**: Litti Chokha (Bihar), Rasgulla & Kantha Stitch (Bengal), Bamboo Shoot & Muga Silk (Assam).
• **West & Central**: Poha Jalebi (MP), Misal Pav & Paithani (Maharashtra), Dhokla & Patola (Gujarat).`;
    }

    // 4. Route / Reach / Transport / Distance Queries
    if (query.includes('reach') || query.includes('how to go') || query.includes('route') || query.includes('bus') || query.includes('train') || query.includes('flight') || query.includes('distance') || query.includes('cab')) {
      return `🚗 **Yatrika Transit & Directions Engine**:
      
Yatrika calculates carbon-optimized routes from major transit hubs:
• Direct auto & jeep contacts available for last-mile village transit.
• Exact distance to nearest Petrol Pump, ATM, District Hospital & National Highway mapped in the Simulator!`;
    }

    // 5. Dynamic Dataset Search across sampleHiddenGems and destinationsDataset
    let matchedGems = sampleHiddenGems.filter(g => 
      (g.state && g.state.toLowerCase().includes(query)) ||
      (g.city && g.city.toLowerCase().includes(query)) ||
      (g.gemName && g.gemName.toLowerCase().includes(query)) ||
      (g.location && g.location.toLowerCase().includes(query)) ||
      (g.vibeTag && g.vibeTag.toLowerCase().includes(query)) ||
      (g.landmarkHub && g.landmarkHub.toLowerCase().includes(query))
    );

    // If no direct gem match, search state names in destinationsDataset
    if (matchedGems.length === 0 && Array.isArray(destinationsDataset)) {
      const stateMatch = destinationsDataset.find(s => 
        s.state.toLowerCase().includes(query) || query.includes(s.state.toLowerCase())
      );
      if (stateMatch) {
        const cityList = stateMatch.cities.map(c => c.name).join(', ');
        return `📍 **Yatrika Destinations in ${stateMatch.state}**:
        
Yatrika has registered verified offbeat places across **${cityList}** in ${stateMatch.state}!
• **Popular Cities**: ${cityList}
• **AI Recommendation**: Open the **AI Simulator** above, select **${stateMatch.state}**, and launch instant offbeat recommendations with local food & safety telematics!`;
      }
    }

    // If matching gems were found in dataset
    if (matchedGems.length > 0) {
      const topGem = matchedGems[0];
      return `📍 **Yatrika Recommendation for "${rawQuery}"**:

✨ **${topGem.gemName}** (${topGem.state})
• **Vibe**: ${topGem.vibeTag || topGem.category} (Score: ${topGem.score}/100)
• **Location**: ${topGem.location} (${topGem.distance})
• **Overview**: ${topGem.desc}
• **Famous Food**: ${topGem.essentialFacilities?.famousRegionalSpecialties?.food || 'Local Organic Thali'}
• **Native Crafts**: ${topGem.essentialFacilities?.famousRegionalSpecialties?.crafts || 'Traditional Handlooms'}
• **Police Safety**: ${topGem.essentialFacilities?.womenSafety?.policeStationName || 'Verified Local Police Post'}`;
    }

    // 6. Intelligent Contextual Custom Travel Advisor for ANY general query
    return `🤖 **YatrikaAI Travel Assistant**:

I understand you are asking about: **"${rawQuery}"**!

YatrikaAI covers all **29 Indian States & UTs**. Here is how I can best assist you:
1. **Find Offbeat Places**: Ask about any state or landmark (e.g. *"Hidden places in Himachal"*, *"Offbeat spots near Shimla"*).
2. **Local Food & Shopping**: Ask about famous dishes or native handicrafts (e.g. *"What food to eat in Jaipur?"*).
3. **Safety & Emergency**: Ask about police stations, female safety, or night SOS.
4. **Weather Forecast**: Ask about weather telematics and travel advisories.

Try selecting your state in the **AI Simulator** above for interactive 3D map exploration!`;
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputQuery.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: inputQuery.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    const currentInput = inputQuery.trim();
    setInputQuery('');
    setIsTyping(true);

    setTimeout(() => {
      const aiReplyText = generateAIResponse(currentInput);
      const aiMsg = {
        id: Date.now() + 1,
        sender: 'ai',
        text: aiReplyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 700);
  };

  const handleQuickPrompt = (promptText) => {
    setInputQuery(promptText);
  };

  return (
    <>
      {/* Floating Action Trigger Button (Bottom-Right) */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative group p-4 rounded-2xl bg-gradient-to-r from-terracotta-500 via-amber-600 to-terracotta-600 text-white shadow-2xl shadow-terracotta-500/40 border-2 border-amber-300/40 flex items-center gap-2.5 cursor-pointer"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <>
              <div className="relative">
                <Bot className="w-6 h-6 text-amber-200 animate-bounce" style={{ animationDuration: '3s' }} />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full ring-2 ring-slate-900" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-serif font-extrabold text-xs tracking-wide">YatrikaAI</span>
                <span className="text-[9px] font-mono text-amber-200 uppercase tracking-wider -mt-0.5">Help Chat</span>
              </div>
            </>
          )}
        </motion.button>
      </div>

      {/* Floating Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[400px] h-[540px] bg-slate-950 text-white rounded-3xl border-2 border-amber-500/40 shadow-2xl flex flex-col overflow-hidden backdrop-blur-2xl"
          >
            {/* Chat Modal Header */}
            <div className="p-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-terracotta-500 to-amber-600 p-0.5 shadow-md">
                  <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                    <Bot className="w-5 h-5 text-amber-300" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif font-extrabold text-sm text-white flex items-center gap-1.5">
                    <span>YatrikaAI</span>
                    <span className="text-[9px] font-mono bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.2 rounded-full font-bold">ONLINE</span>
                  </h3>
                  <p className="text-[10px] text-slate-400 font-mono">29 States AI Travel & Safety Assistant</p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Prompt Chips */}
            <div className="px-4 py-2 bg-slate-900/60 border-b border-slate-800 flex items-center gap-1.5 overflow-x-auto text-[11px] scrollbar-none">
              {[
                "Places in Bihar",
                "Places in Himachal",
                "24/7 Safety SOS",
                "Famous food",
                "Weather forecast"
              ].map((chip) => (
                <button
                  key={chip}
                  onClick={() => handleQuickPrompt(chip)}
                  className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 whitespace-nowrap border border-slate-700 text-[10px] font-mono shrink-0 transition-colors cursor-pointer"
                >
                  ✨ {chip}
                </button>
              ))}
            </div>

            {/* Messages Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 font-sans text-xs">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start gap-2.5 ${
                    msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                      msg.sender === 'user'
                        ? 'bg-amber-500 text-slate-950'
                        : 'bg-terracotta-500 text-white'
                    }`}
                  >
                    {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>

                  <div
                    className={`max-w-[85%] p-3 rounded-2xl leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-amber-500 text-slate-950 font-medium rounded-tr-none'
                        : 'bg-slate-900 border border-slate-800 text-slate-100 rounded-tl-none shadow-md'
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.text}</p>
                    <span
                      className={`text-[9px] font-mono block mt-1 ${
                        msg.sender === 'user' ? 'text-slate-900 opacity-70 text-right' : 'text-slate-400'
                      }`}
                    >
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2 text-slate-400 text-xs font-mono py-1">
                  <Bot className="w-4 h-4 text-amber-300 animate-spin" />
                  <span>YatrikaAI is searching 29 states...</span>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Chat Input Form */}
            <form onSubmit={handleSendMessage} className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2">
              <input
                type="text"
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                placeholder="Ask YatrikaAI any travel question..."
                className="flex-1 text-xs p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
              />
              <button
                type="submit"
                className="p-2.5 rounded-xl bg-terracotta-500 hover:bg-terracotta-600 text-white font-bold transition-all shadow-md cursor-pointer shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
