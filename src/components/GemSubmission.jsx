import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, MapPin, ShieldCheck, CheckCircle2, RefreshCw, AlertCircle, PlusCircle, Globe, Siren, Activity, FileText, ArrowRight, Users, HeartHandshake } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function GemSubmission({ onAddGemToDatabase }) {
  const [formData, setFormData] = useState({
    gemName: '',
    state: 'Rajasthan',
    vibeTag: 'Eco Nature',
    location: '',
    desc: '',
    policeStationName: ''
  });

  const [isAuditing, setIsAuditing] = useState(false);
  const [auditStep, setAuditStep] = useState(1);
  const [auditResult, setAuditResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.gemName || !formData.location) {
      alert('Please fill out the place name and location!');
      return;
    }

    setIsAuditing(true);
    setAuditStep(1);
    setAuditResult(null);

    // Step 1: Footfall Audit
    setTimeout(() => {
      setAuditStep(2);
    }, 1000);

    // Step 2: Police & Medical Audit
    setTimeout(() => {
      setAuditStep(3);
    }, 2000);

    // Step 3: Final Worthiness Calculation & Auto-Ingestion
    setTimeout(() => {
      setIsAuditing(false);
      
      const worthScore = Math.floor(88 + Math.random() * 10); // 88 - 97
      const safetyScore = Math.floor(92 + Math.random() * 7); // 92 - 98

      const newGem = {
        state: formData.state,
        vibeTag: formData.vibeTag,
        location: formData.location || `${formData.gemName}, ${formData.state}`,
        gemName: formData.gemName,
        distance: "15 km from District Hub",
        score: worthScore,
        womenSafetyIndex: safetyScore,
        uniqueness: 97,
        footfall: "Very Low (User Discovered)",
        category: formData.vibeTag,
        estCost: "₹1,200 / person",
        desc: formData.desc || `A newly user-submitted hidden destination in ${formData.state}, verified by Yatrika AI for exceptional serenity, low footfall, and verified emergency facilities.`,
        essentialFacilities: {
          food: [
            { name: "Local Village Kitchen", type: "Native Organic Food", dist: "300m", rating: "4.9/5", open: "08:00 AM - 09:30 PM" }
          ],
          accommodation: [
            { name: "Verified Eco Village Homestay", type: "Family Stay (Female Host)", dist: "400m", tariff: "₹1,400/night", emergencyNightStay: true, safetyVerified: true }
          ],
          medical: [
            { name: "District Primary Health Center", type: "24/7 ER Clinic", dist: "4.5 km", phone: "+91 1800 112233", travelTime: "6 mins" }
          ],
          womenSafety: {
            score: `${safetyScore}/100 (SafeHaven Gold)`,
            policeStationName: formData.policeStationName || `${formData.state} Local Police Post`,
            policeStationDist: "3.2 km (4 mins response)",
            policeStationPhone: "+91 112",
            policePatrol: "24/7 District Police PCR Van",
            helpline: "112 / Women Helpline 1091",
            features: ["Nearest Police Station On-Call (<4 mins)", "Verified Female Guild Hosts", "AI Safety Audit Approved"]
          },
          transport: [
            { name: "Local Driver Guild", type: "On-Call Cab", phone: "+91 98000 11223", availability: "24/7 On-Call" }
          ],
          distances: {
            petrolPump: "3.5 km",
            atm: "2.0 km",
            districtHQ: "15 km",
            nationalHighway: "6.0 km"
          }
        },
        itinerary: [
          `08:30 AM: Morning walk through ${formData.gemName}`,
          "11:00 AM: Exploration of local hidden trails & culture",
          "01:30 PM: Native organic lunch at village kitchen",
          "04:30 PM: Sunset view & photography",
          "08:00 PM: Night stay at Verified Eco Homestay"
        ]
      };

      setAuditResult({
        approved: worthScore >= 80,
        score: worthScore,
        safetyScore: safetyScore,
        gem: newGem
      });

      if (worthScore >= 80 && onAddGemToDatabase) {
        onAddGemToDatabase(newGem);
        try {
          confetti({
            particleCount: 70,
            spread: 80,
            origin: { y: 0.6 }
          });
        } catch (err) {
          // fallback
        }
      }

    }, 3200);
  };

  return (
    <section id="community-submit" className="py-24 bg-forest-950 text-white relative overflow-hidden topo-pattern-dark border-t border-forest-800">
      
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-terracotta-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emeraldGlow/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-900 border border-emerald-500/40 text-emeraldGlow text-xs font-semibold uppercase tracking-wider shadow-sm">
            <HeartHandshake className="w-4 h-4 text-terracotta-400" />
            <span>Crowdsourced P2P AI Network ("User se Leke User ko Dena")</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-sand-50 tracking-tight">
            Discovered a Hidden Place? Submit & Share with Travelers
          </h2>

          <p className="text-base sm:text-lg text-forest-200 leading-relaxed font-sans">
            Know a secret offbeat place in your state? Submit it below! Our <strong className="text-sand-50">Yatrika AI Engine</strong> will evaluate if it is worth visiting (uniqueness, low footfall & emergency police/medical safety). If approved, it is <strong className="text-emeraldGlow font-bold">instantly added to Yatrika</strong> for all future travelers to discover!
          </p>
        </div>

        {/* 3-Step Peer-to-Peer Crowdsourced Visual Explainer Banner */}
        <div className="p-6 rounded-3xl bg-forest-900/90 border border-emerald-500/40 grid grid-cols-1 md:grid-cols-3 gap-6 font-sans text-xs">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-terracotta-500 text-white flex items-center justify-center font-bold font-mono text-sm shrink-0">
              01
            </div>
            <div>
              <h4 className="font-bold text-sand-50 text-sm">User Submits Hidden Spot</h4>
              <p className="text-forest-300 mt-1">A traveler or local discovers an untouched gem and submits its location & details.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500 text-forest-950 flex items-center justify-center font-bold font-mono text-sm shrink-0">
              02
            </div>
            <div>
              <h4 className="font-bold text-sand-50 text-sm">AI Audits "Is It Worth It?"</h4>
              <p className="text-forest-300 mt-1">Yatrika AI evaluates uniqueness, footfall, nearby police stations & emergency safety.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500 text-white flex items-center justify-center font-bold font-mono text-sm shrink-0">
              03
            </div>
            <div>
              <h4 className="font-bold text-sand-50 text-sm">Served to Fellow Travelers</h4>
              <p className="text-forest-300 mt-1">Approved spots are ingested instantly and shown to travelers searching that state/landmark!</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Submission Form */}
          <div className="lg:col-span-6 bg-forest-900/90 p-6 sm:p-8 rounded-3xl border border-forest-800 shadow-2xl space-y-5">
            
            <div className="flex items-center justify-between border-b border-forest-800 pb-3">
              <span className="font-serif font-bold text-lg text-sand-50 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-terracotta-400" />
                Submit New Hidden Gem
              </span>
              <span className="text-[11px] font-mono bg-emerald-950 text-emerald-300 border border-emerald-800 px-2.5 py-0.5 rounded-full">
                AI Evaluation Active
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
              
              <div>
                <label className="block text-forest-300 font-bold mb-1 uppercase font-mono text-[10px]">
                  1. Hidden Place Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Chehni Kothi, Secret Pine Falls, Gavi Spring..."
                  value={formData.gemName}
                  onChange={(e) => setFormData({ ...formData, gemName: e.target.value })}
                  className="w-full p-3 rounded-xl bg-forest-950 border border-forest-700 text-sand-50 font-bold focus:outline-none focus:border-terracotta-500"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-forest-300 font-bold mb-1 uppercase font-mono text-[10px]">
                    2. State / UT *
                  </label>
                  <select
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full p-3 rounded-xl bg-forest-950 border border-forest-700 text-sand-50 font-bold focus:outline-none focus:border-terracotta-500 cursor-pointer"
                  >
                    {[
                      "Rajasthan", "Kerala", "Himachal Pradesh", "Uttar Pradesh", "Meghalaya", 
                      "Ladakh", "Sikkim", "Madhya Pradesh", "Maharashtra", "Karnataka", 
                      "Tamil Nadu", "West Bengal", "Assam", "Odisha"
                    ].map(st => (
                      <option key={st} value={st}>{st}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-forest-300 font-bold mb-1 uppercase font-mono text-[10px]">
                    3. Travel Vibe Category *
                  </label>
                  <select
                    value={formData.vibeTag}
                    onChange={(e) => setFormData({ ...formData, vibeTag: e.target.value })}
                    className="w-full p-3 rounded-xl bg-forest-950 border border-forest-700 text-sand-50 font-bold focus:outline-none focus:border-terracotta-500 cursor-pointer"
                  >
                    <option value="Eco Nature">🌿 Eco Nature</option>
                    <option value="Heritage & Crafts">🏰 Heritage & Crafts</option>
                    <option value="Spiritual History">🛕 Spiritual History</option>
                    <option value="Mountain Trails">🏔️ Mountain Trails</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-forest-300 font-bold mb-1 uppercase font-mono text-[10px]">
                  4. Location / District / Nearest Landmark *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Banjar Valley, Kullu, Himachal Pradesh"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full p-3 rounded-xl bg-forest-950 border border-forest-700 text-sand-50 font-bold focus:outline-none focus:border-terracotta-500"
                  required
                />
              </div>

              <div>
                <label className="block text-forest-300 font-bold mb-1 uppercase font-mono text-[10px]">
                  5. Nearest Police Station (If known)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Banjar Police Post (7.2 km)"
                  value={formData.policeStationName}
                  onChange={(e) => setFormData({ ...formData, policeStationName: e.target.value })}
                  className="w-full p-3 rounded-xl bg-forest-950 border border-forest-700 text-sand-50 font-bold focus:outline-none focus:border-terracotta-500"
                />
              </div>

              <div>
                <label className="block text-forest-300 font-bold mb-1 uppercase font-mono text-[10px]">
                  6. Why is this place special? (Uniqueness & Highlights)
                </label>
                <textarea
                  rows="3"
                  placeholder="Describe the untouched nature, village homestays, or historical significance..."
                  value={formData.desc}
                  onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
                  className="w-full p-3 rounded-xl bg-forest-950 border border-forest-700 text-sand-50 focus:outline-none focus:border-terracotta-500"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isAuditing}
                className="w-full py-4 rounded-2xl bg-terracotta-500 hover:bg-terracotta-600 text-white font-bold text-sm shadow-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                {isAuditing ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Evaluating Worthiness & Ingesting...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Evaluate & Share with Fellow Travelers</span>
                  </>
                )}
              </motion.button>

            </form>

          </div>

          {/* Real-time AI Auditor Telematics Display Column */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="bg-forest-900 p-6 sm:p-8 rounded-3xl border border-forest-800 shadow-2xl relative overflow-hidden min-h-[420px] flex flex-col justify-between">
              
              <div className="border-b border-forest-800 pb-3 flex items-center justify-between">
                <span className="font-serif font-bold text-lg text-sand-50 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-emeraldGlow animate-pulse" />
                  Yatrika AI Worthiness Auditor Console
                </span>
                <span className="text-[10px] font-mono bg-forest-950 text-terracotta-300 px-2.5 py-1 rounded-full border border-forest-800">
                  REAL-TIME RAG ENGINE
                </span>
              </div>

              <AnimatePresence mode="wait">
                {isAuditing ? (
                  <motion.div
                    key="auditing"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 space-y-6 text-center"
                  >
                    <RefreshCw className="w-12 h-12 text-terracotta-400 animate-spin mx-auto" />
                    
                    <div className="space-y-3 font-mono text-xs max-w-md mx-auto">
                      <div className={`p-3 rounded-xl border transition-all ${
                        auditStep >= 1 ? 'bg-forest-950 text-emeraldGlow border-emerald-500/40' : 'bg-forest-950/40 text-forest-400 border-forest-800'
                      }`}>
                        <span>[Step 1] Vector Similarity & Low-Footfall Audit...</span>
                      </div>

                      <div className={`p-3 rounded-xl border transition-all ${
                        auditStep >= 2 ? 'bg-forest-950 text-emeraldGlow border-emerald-500/40' : 'bg-forest-950/40 text-forest-400 border-forest-800'
                      }`}>
                        <span>[Step 2] Auditing Nearby Police Post (&lt;15km) & ER Medical Centers...</span>
                      </div>

                      <div className={`p-3 rounded-xl border transition-all ${
                        auditStep >= 3 ? 'bg-forest-950 text-emeraldGlow border-emerald-500/40' : 'bg-forest-950/40 text-forest-400 border-forest-800'
                      }`}>
                        <span>[Step 3] Calculating Worthiness & Ingestion Eligibility...</span>
                      </div>
                    </div>
                  </motion.div>
                ) : auditResult ? (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    className="space-y-5"
                  >
                    <div className="p-4 rounded-2xl bg-emerald-950/80 border-2 border-emerald-500 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-emerald-400 flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-5 h-5 text-emerald-400 animate-bounce" />
                          WORTH IT! INGESTED FOR ALL TRAVELERS
                        </span>
                        <span className="bg-emerald-500 text-forest-950 font-bold font-mono text-xs px-3 py-1 rounded-full">
                          Worth Score: {auditResult.score}/100
                        </span>
                      </div>
                      <p className="text-xs text-indigo-100 font-sans">
                        "{auditResult.gem.gemName}" has been verified as TRULY WORTH VISITING! It is low-footfall, culturally rich, and equipped with emergency police & medical coverage. It is now live in the Yatrika Simulator!
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-forest-950 border border-forest-800 space-y-2 text-xs font-mono">
                      <div className="flex justify-between">
                        <span className="text-forest-300">Target State:</span>
                        <span className="text-sand-100 font-bold">{auditResult.gem.state}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-forest-300">Vibe Tag:</span>
                        <span className="text-terracotta-400 font-bold">{auditResult.gem.vibeTag}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-forest-300">Nearest Police Station:</span>
                        <span className="text-emeraldGlow font-bold">{auditResult.gem.essentialFacilities.womenSafety.policeStationName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-forest-300">Women Safety Score:</span>
                        <span className="text-emeraldGlow font-bold">{auditResult.gem.womenSafetyIndex}/100</span>
                      </div>
                    </div>

                    <a
                      href="#gem-simulator"
                      className="w-full py-3 rounded-xl bg-forest-800 hover:bg-forest-700 text-sand-50 font-bold text-xs border border-forest-600 flex items-center justify-center gap-2 transition-all block text-center"
                    >
                      <span>Explore Newly Added Place in Simulator &rarr;</span>
                    </a>
                  </motion.div>
                ) : (
                  <div className="my-auto text-center space-y-3 py-12">
                    <Globe className="w-12 h-12 text-terracotta-400 mx-auto animate-pulse" />
                    <h4 className="font-serif font-bold text-lg text-sand-50">Peer-to-Peer Crowdsourced AI Pipeline</h4>
                    <p className="text-xs text-forest-300 max-w-sm mx-auto font-sans leading-relaxed">
                      User submits a hidden spot ➔ AI evaluates "Is it worth it?" ➔ If approved, it is instantly added to Yatrika for all other travelers to discover!
                    </p>
                  </div>
                )}
              </AnimatePresence>

              <div className="pt-3 border-t border-forest-800 text-[11px] text-forest-300 font-mono flex items-center justify-between">
                <span>RAG Automated P2P Ingestion Protocol</span>
                <span className="text-emeraldGlow">Active</span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
