import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquare, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';

const TOP_FEATURED_REVIEWS = [
  {
    name: 'Ananya Deshmukh',
    location: 'Mumbai',
    destination: 'Jibhi, Himachal Pradesh',
    rating: 5,
    quote: 'Bypassed crowded Manali for Jibhi using Yatrika. The 24/7 nearest police mapping & homestay verification gave me complete safety assurance.'
  },
  {
    name: 'Rohan & Neha Gupta',
    location: 'Bengaluru',
    destination: 'Anegundi Village, Karnataka',
    rating: 5,
    quote: 'Instead of standing in long queues at Hampi ruins, Yatrika recommended Anegundi coracle village. The local thali & banana fiber crafts were unforgettable!'
  },
  {
    name: 'Dr. Vikramaditya Sen',
    location: 'Kolkata',
    destination: 'Lamahatta, West Bengal',
    rating: 5,
    quote: 'Escaped Darjeeling Mall Road traffic for Lamahatta sacred pine forest. The 24/7 medical info gave our family total peace of mind.'
  }
];

export default function ConciseRatingSummary({ onNavigate }) {
  const handleClickViewAll = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('reviews');
    } else {
      window.location.hash = 'reviews';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-slate-950 text-slate-100 border-t border-slate-900 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-terracotta-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Rating Overview Header Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-slate-900/90 border border-slate-800/90 rounded-2xl p-6 sm:p-8 shadow-xl backdrop-blur-md mb-10">
          
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <span className="text-4xl sm:text-5xl font-serif font-extrabold text-amber-400">4.9</span>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-400 font-medium mt-1">
                  Average Public Traveler Rating
                </p>
              </div>
            </div>

            <div className="hidden sm:block w-px h-10 bg-slate-800" />

            <div className="flex items-center gap-2 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                <strong className="text-white font-bold">1,284+ Community Reviews</strong> across 29 Indian States
              </span>
            </div>
          </div>

          <button
            onClick={handleClickViewAll}
            className="px-5 py-3 rounded-xl bg-terracotta-500 hover:bg-terracotta-600 text-white font-bold text-xs shadow-lg flex items-center gap-2 transition-all hover:scale-105 shrink-0"
          >
            <MessageSquare className="w-4 h-4 text-amber-300" />
            <span>Read All Reviews & Leave Feedback</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

        </div>

        {/* 3 Featured Traveler Quotes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TOP_FEATURED_REVIEWS.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 hover:border-slate-700/80 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-terracotta-400 font-semibold bg-terracotta-500/10 px-2 py-0.5 rounded border border-terracotta-500/20 flex items-center gap-1">
                    <MapPin className="w-2.5 h-2.5" />
                    {rev.destination}
                  </span>
                </div>
                <p className="text-xs text-slate-300 italic leading-relaxed mb-4">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                <span className="font-serif font-bold text-slate-200">{rev.name}</span>
                <span className="text-slate-500">{rev.location}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
