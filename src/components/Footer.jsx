import React from 'react';
import { Compass, Sparkles, Heart, ShieldCheck, MapPin, Globe, Github } from 'lucide-react';
import { projectDetails } from '../data/content';

function YatrikaLogoIcon({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="22" r="19" stroke="#e8734a" strokeWidth="2.5" strokeOpacity="0.5" />
      <circle cx="22" cy="22" r="15" stroke="currentColor" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="3 3" />
      <line x1="22" y1="3" x2="22" y2="8" stroke="#e8734a" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="22" y1="36" x2="22" y2="41" stroke="#e8734a" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="3" y1="22" x2="8" y2="22" stroke="#e8734a" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="36" y1="22" x2="41" y2="22" stroke="#e8734a" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M22 12 L29 22 L22 32 L15 22 Z" fill="#e8734a" />
      <path d="M22 12 L29 22 L22 22 Z" fill="#f4f1e8" fillOpacity="0.35" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-forest-950 text-white pt-16 pb-12 border-t border-forest-800 relative overflow-hidden topo-pattern-dark">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <YatrikaLogoIcon className="w-8 h-8 text-sand-50" />
              <span className="font-serif font-medium text-2xl tracking-tight text-[#f4f1e8]">
                Yatrika
              </span>
            </a>
            
            <p className="text-xs text-forest-200 leading-relaxed font-sans max-w-sm">
              An AI-powered hidden gem discovery & safe tourism engine for all 28 Indian States & UTs. Equipping travelers with verified nearby food, medical care, transport, nearest police stations, and 24/7 night emergency SOS assistance.
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-900 border border-forest-800 text-[11px] font-mono text-terracotta-300">
              <span>Empowering Responsible & Safe Tourism Across India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3 font-sans text-xs">
            <h4 className="font-serif font-bold text-sand-50 text-sm uppercase tracking-wider text-terracotta-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-forest-200">
              <li><a href="#problem" className="hover:text-white transition-colors">The Challenge</a></li>
              <li><a href="#solution" className="hover:text-white transition-colors">Solution Pillars</a></li>
              <li><a href="#gem-simulator" className="hover:text-emeraldGlow font-semibold transition-colors">Offbeat Recommender Engine</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">Implementation Process</a></li>
              <li><a href="#impact" className="hover:text-white transition-colors">Women Safety & Police Hub</a></li>
            </ul>
          </div>

          {/* Emergency Helplines */}
          <div className="md:col-span-4 space-y-3 font-sans text-xs">
            <h4 className="font-serif font-bold text-sand-50 text-sm uppercase tracking-wider text-emeraldGlow">
              Emergency & Safety Telematics
            </h4>
            <div className="p-4 rounded-2xl bg-forest-900 border border-forest-800 space-y-2 font-mono text-[11px]">
              <div className="flex justify-between text-sand-100">
                <span>National Emergency:</span>
                <span className="text-emeraldGlow font-bold">112</span>
              </div>
              <div className="flex justify-between text-sand-100">
                <span>Women Helpline:</span>
                <span className="text-terracotta-400 font-bold">1091</span>
              </div>
              <div className="flex justify-between text-sand-100">
                <span>Tourist Police Hotline:</span>
                <span className="text-sand-50 font-bold">1363</span>
              </div>
              <div className="pt-1 border-t border-forest-800 text-[10px] text-forest-300">
                24/7 Nearest Police Post Relay & Emergency Response Active
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-forest-900 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-forest-400">
          <div>
            &copy; 2026 <strong className="text-sand-200 font-normal">Yatrika Technologies</strong>. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Pan-India Safe Tourism Platform</span>
          </div>
        </div>

      </div>

    </footer>
  );
}
