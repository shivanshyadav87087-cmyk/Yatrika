import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles, Bot, User, RefreshCw, Compass, ShieldCheck } from 'lucide-react';
import { sampleHiddenGems } from '../data/content.js';

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

  // Knowledge base lookup generator for YatrikaAI
  const generateAIResponse = (userText) => {
    const query = userText.toLowerCase();

    if (query.includes('taj mahal') || query.includes('agra') || query.includes('uttar pradesh')) {
      return "Near Taj Mahal, Agra, YatrikaAI recommends exploring **Kachhpura Heritage Village** for moonlight Yamuna views, **Bateshwar Temple Complex** (40km), and tasting authentic Agra Petha & Bedai!";
    }
    if (query.includes('kerala') || query.includes('munnar') || query.includes('nature')) {
      return "In Kerala, skip overcrowded spots and head to **Anakkulam Wild Elephant Mineral Spring**, **Marayoor Sandalwood Forests**, or **Ranipuram Hills** in Kasaragod!";
    }
    if (query.includes('rajasthan') || query.includes('jaipur') || query.includes('fort')) {
      return "In Rajasthan, discover **Sagar Stepwell** right behind Amer Fort, **Abhaneri Chand Baori**, or **Kumbhalgarh Great Wall**! Enjoy Dal Baati Churma & Bandhani silk crafts.";
    }
    if (query.includes('sos') || query.includes('safety') || query.includes('police') || query.includes('emergency')) {
      return "🛡️ **Yatrika 24/7 Safety**: All offbeat gems are linked to verified nearest police posts (<4 min response time), 24/7 ER hospitals, and 1-tap Night SOS dispatch!";
    }
    if (query.includes('weather') || query.includes('rain') || query.includes('climate')) {
      return "🌤️ **Yatrika Weather AI**: Select any place in the AI Simulator to view Past 24h temperature reports, live AQI & UV metrics, and 4-Day Weather Predictions!";
    }
    if (query.includes('food') || query.includes('eat') || query.includes('cloth') || query.includes('craft')) {
      return "🍲 **Local Culture**: Yatrika maps organic village dhabas serving famous regional thalis alongside authentic native handlooms and artisan village crafts.";
    }

    // Default intelligent fallback
    return `YatrikaAI can help you explore uncrowded hidden places across all 29 Indian States & UTs! You can ask me about offbeat spots near Taj Mahal, Munnar, Shimla, Jaipur, or ask about safety SOS and local food!`;
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
    }, 800);
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
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[380px] h-[520px] bg-slate-950 text-white rounded-3xl border-2 border-amber-500/40 shadow-2xl flex flex-col overflow-hidden backdrop-blur-2xl"
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
                  <p className="text-[10px] text-slate-400 font-mono">Your AI Travel & Safety Assistant</p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Prompt Chips */}
            <div className="px-4 py-2 bg-slate-900/60 border-b border-slate-800 flex items-center gap-1.5 overflow-x-auto text-[11px] scrollbar-none">
              {[
                "Hidden places near Taj Mahal",
                "Kerala nature spots",
                "24/7 Safety SOS",
                "Famous food"
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
                    className={`max-w-[80%] p-3 rounded-2xl leading-relaxed ${
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
                  <span>YatrikaAI is thinking...</span>
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
                placeholder="Ask YatrikaAI about any destination..."
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
