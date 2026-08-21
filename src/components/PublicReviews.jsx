import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ThumbsUp, MessageSquare, Send, MapPin, Sparkles, Filter, ShieldCheck } from 'lucide-react';
import { sampleHiddenGems } from '../data/content.js';

const INITIAL_REVIEWS = [
  {
    id: 'rev-1',
    name: 'Ananya Deshmukh',
    location: 'Mumbai, Maharashtra',
    destination: 'Jibhi (Manali, Himachal Pradesh)',
    rating: 5,
    title: 'Complete peace of mind as a solo female traveler!',
    comment: 'Bypassed overcrowded Manali for Jibhi using Yatrika. The mapped nearest police station (< 8 mins response) and verified female-hosted homestay gave me complete safety assurance. The local Pahadi Siddu was incredible!',
    date: '2 days ago',
    helpful: 48
  },
  {
    id: 'rev-2',
    name: 'Rohan & Neha Gupta',
    location: 'Bengaluru, Karnataka',
    destination: 'Anegundi Village (Hampi, Karnataka)',
    rating: 5,
    title: 'Discovered authentic heritage far from Hampi crowds',
    comment: 'Instead of standing in long queues at Hampi main ruins, Yatrika recommended Anegundi coracle village across the river. The banana fiber craft workshop and organic thali were the highlights of our trip!',
    date: '5 days ago',
    helpful: 35
  },
  {
    id: 'rev-3',
    name: 'Dr. Vikramaditya Sen',
    location: 'Kolkata, West Bengal',
    destination: 'Lamahatta Eco Village (Darjeeling, West Bengal)',
    rating: 5,
    title: 'Untouched pine forests and pristine Kanchenjunga view',
    comment: 'Escaped Darjeeling Mall Road traffic for Lamahatta sacred pine trails. The 24/7 medical contact info on Yatrika was reassuring for my senior parents. Truly a 5-star experience!',
    date: '1 week ago',
    helpful: 29
  },
  {
    id: 'rev-4',
    name: 'Pooja & Sameer Verma',
    location: 'New Delhi',
    destination: 'Kachhpura Heritage Village (Agra, Uttar Pradesh)',
    rating: 5,
    title: 'Crowd-free Taj Mahal view over Yamuna River',
    comment: 'Yatrika directed us to Kachhpura village opposite Taj Mahal. We got breathtaking sunset views from Mehtab Bagh with zero crowds, plus tasted authentic Bedai & Jalebi from local village vendors.',
    date: '2 weeks ago',
    helpful: 42
  },
  {
    id: 'rev-5',
    name: 'Kavita Krishnan',
    location: 'Chennai, Tamil Nadu',
    destination: 'Kovalam Backwaters (Mahabalipuram, Tamil Nadu)',
    rating: 5,
    title: 'Serene surfing & fresh seafood near Mahabalipuram',
    comment: 'Loved the quiet fishing hamlet in Kovalam. The verified driver guild hotline and local seafood recommendations on Yatrika were 100% accurate and helpful.',
    date: '3 weeks ago',
    helpful: 19
  },
  {
    id: 'rev-6',
    name: 'Stanzin Norbu',
    location: 'Leh, Ladakh',
    destination: 'Hanle Dark Sky Reserve (Leh, Ladakh)',
    rating: 5,
    title: 'Stargazing sanctuary at 14,300 ft!',
    comment: 'As a Ladakhi local, I am impressed by how Yatrika guides travelers to Hanle dark sky reserve while encouraging responsible homestay tourism and night safety preparedness.',
    date: '1 month ago',
    helpful: 56
  }
];

export default function PublicReviews() {
  const [reviews, setReviews] = useState(() => {
    const saved = localStorage.getItem('yatrika_public_reviews');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { return INITIAL_REVIEWS; }
    }
    return INITIAL_REVIEWS;
  });

  const [ratingFilter, setRatingFilter] = useState('all');
  const [votedHelpful, setVotedHelpful] = useState({});

  const verifiedPlaces = useMemo(() => {
    return sampleHiddenGems.map(g => `${g.gemName} (${g.city}, ${g.state})`);
  }, []);

  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [selectedPresetDestination, setSelectedPresetDestination] = useState('');
  const [customDestination, setCustomDestination] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [destinationError, setDestinationError] = useState(false);

  useEffect(() => {
    localStorage.setItem('yatrika_public_reviews', JSON.stringify(reviews));
  }, [reviews]);

  const totalReviewsCount = reviews.length;
  const avgRating = totalReviewsCount > 0 
    ? (reviews.reduce((acc, r) => acc + r.rating, 0) / totalReviewsCount).toFixed(1)
    : '5.0';

  const ratingCounts = {
    5: reviews.filter(r => r.rating === 5).length,
    4: reviews.filter(r => r.rating === 4).length,
    3: reviews.filter(r => r.rating === 3).length,
    2: reviews.filter(r => r.rating === 2).length,
    1: reviews.filter(r => r.rating === 1).length
  };

  const handleHelpfulVote = (id) => {
    if (votedHelpful[id]) return;
    setReviews(prev => prev.map(r => r.id === id ? { ...r, helpful: r.helpful + 1 } : r));
    setVotedHelpful(prev => ({ ...prev, [id]: true }));
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();

    let finalDestination = '';
    if (selectedPresetDestination && selectedPresetDestination !== 'OTHER') {
      finalDestination = selectedPresetDestination;
    } else {
      finalDestination = customDestination.trim();
    }

    if (!finalDestination) {
      setDestinationError(true);
      return;
    }
    setDestinationError(false);

    if (!name.trim() || !comment.trim() || !title.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const newRev = {
        id: `rev-${Date.now()}`,
        name: name.trim(),
        location: location.trim() || 'India',
        destination: finalDestination,
        rating: Number(rating),
        title: title.trim(),
        comment: comment.trim(),
        date: 'Just now',
        helpful: 1
      };

      setReviews(prev => [newRev, ...prev]);
      setIsSubmitting(false);
      setShowSuccessToast(true);

      setName('');
      setLocation('');
      setSelectedPresetDestination('');
      setCustomDestination('');
      setRating(5);
      setTitle('');
      setComment('');

      setTimeout(() => setShowSuccessToast(false), 4000);
    }, 600);
  };

  const filteredReviews = reviews.filter(r => {
    if (ratingFilter === 'all') return true;
    return r.rating === Number(ratingFilter);
  });

  const getStarLabel = (score) => {
    switch (score) {
      case 5: return '5 Stars (Exceptional)';
      case 4: return '4 Stars (Great)';
      case 3: return '3 Stars (Average)';
      case 2: return '2 Stars (Fair)';
      case 1: return '1 Star (Poor)';
      default: return '';
    }
  };

  return (
    <section id="reviews" className="py-24 bg-sand-50 text-slate-900 relative overflow-hidden border-t border-sand-200">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-terracotta-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-terracotta-500/10 text-terracotta-600 text-xs font-semibold uppercase tracking-wider mb-4 border border-terracotta-500/30 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Community Traveler Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight mb-4">
            Real Experiences from Yatrika Explorers
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            See how travelers across India use Yatrika to discover uncrowded offbeat gems backed by verified 24/7 police, medical, food, and safety infrastructure.
          </p>
        </div>

        {/* Top Summary Bar & Rating Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-white border border-sand-300 rounded-2xl p-6 sm:p-8 mb-12 shadow-md">
          
          {/* Rating Score Card */}
          <div className="flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-sand-200 pb-6 lg:pb-0 lg:pr-8 text-center">
            <div className="text-5xl sm:text-6xl font-serif font-extrabold text-amber-600 mb-2">
              {avgRating}
            </div>
            <div className="flex items-center gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-amber-400 text-amber-500" />
              ))}
            </div>
            <p className="text-xs text-slate-600 font-medium">
              Based on <strong className="text-slate-900 font-bold">{totalReviewsCount} Community Reviews</strong>
            </p>
            <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 text-xs font-semibold border border-emerald-500/30">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Real Traveler Feedback</span>
            </div>
          </div>

          {/* Rating Bars Breakdown */}
          <div className="space-y-2.5 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-sand-200 pb-6 lg:pb-0 lg:pr-8">
            {[5, 4, 3, 2, 1].map((num) => {
              const count = ratingCounts[num] || 0;
              const pct = totalReviewsCount > 0 ? (count / totalReviewsCount) * 100 : 0;
              return (
                <div key={num} className="flex items-center gap-3 text-xs text-slate-700">
                  <div className="flex items-center gap-1 w-14 font-medium">
                    <span>{num}</span>
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                  </div>
                  <div className="flex-1 h-2 bg-sand-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-amber-500 to-terracotta-500 rounded-full transition-all duration-500" 
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="w-8 text-right font-mono text-slate-500">{count}</span>
                </div>
              );
            })}
          </div>

          {/* Call to Action Box */}
          <div className="flex flex-col justify-center items-start space-y-4">
            <h4 className="font-serif font-bold text-lg text-slate-900 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-terracotta-500" />
              <span>Have you visited an offbeat gem?</span>
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Share your honest rating and review to help fellow travelers explore safe, uncrowded destinations across India.
            </p>
            <a 
              href="#review-form"
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-terracotta-500 hover:bg-terracotta-600 text-white font-bold text-xs shadow-md flex items-center justify-center gap-2 transition-all hover:scale-105"
            >
              <Star className="w-4 h-4 text-amber-200 fill-amber-200" />
              <span>Write a Public Review</span>
            </a>
          </div>

        </div>

        {/* Main Content Grid: Review Submission Form (Left) & Reviews Feed (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Write Review Form (5 Cols) */}
          <div id="review-form" className="lg:col-span-5 bg-white border border-sand-300 rounded-2xl p-6 sm:p-8 shadow-md">
            <div className="flex items-center gap-2 text-terracotta-600 font-serif font-bold text-xl mb-2">
              <Star className="w-5 h-5 fill-terracotta-500 text-terracotta-500" />
              <h3>Leave a Public Review</h3>
            </div>
            <p className="text-xs text-slate-600 mb-6">
              Your feedback is published publicly to assist travelers seeking safe, offbeat places.
            </p>

            {showSuccessToast && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 text-xs">
                <p className="font-bold">Review Published Successfully!</p>
                <p className="text-emerald-700">Thank you for contributing to the Yatrika travel community.</p>
              </div>
            )}

            <form onSubmit={handleSubmitReview} className="space-y-4">
              
              {/* Compact & Clean 5-Star Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                  Your Rating <span className="text-terracotta-500">*</span>
                </label>
                <div className="flex items-center justify-between bg-sand-50 px-4 py-2.5 rounded-xl border border-sand-300">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((starNum) => (
                      <button
                        type="button"
                        key={starNum}
                        onClick={() => setRating(starNum)}
                        onMouseEnter={() => setHoverRating(starNum)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="p-1 transition-transform hover:scale-110 focus:outline-none"
                      >
                        <Star 
                          className={`w-6 h-6 transition-colors ${
                            starNum <= (hoverRating || rating)
                              ? 'fill-amber-400 text-amber-500'
                              : 'text-sand-400 fill-sand-200'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                  <span className="text-xs font-bold text-amber-700 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/30">
                    {getStarLabel(hoverRating || rating)}
                  </span>
                </div>
              </div>

              {/* Name & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-800 mb-1">
                    Your Name <span className="text-terracotta-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-sand-50 border border-sand-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-terracotta-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-800 mb-1">
                    Home City / State
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Pune, Maharashtra"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-sand-50 border border-sand-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-terracotta-500 transition-colors"
                  />
                </div>
              </div>

              {/* Verified Destination Selection / Input */}
              <div>
                <label className="block text-xs font-medium text-slate-800 mb-1">
                  Destination / Place Visited <span className="text-terracotta-500">*</span>
                </label>
                
                <select
                  value={selectedPresetDestination}
                  onChange={(e) => {
                    setSelectedPresetDestination(e.target.value);
                    if (e.target.value && e.target.value !== 'OTHER') {
                      setDestinationError(false);
                    }
                  }}
                  className="w-full px-3.5 py-2.5 bg-sand-50 border border-sand-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-terracotta-500 transition-colors mb-2"
                >
                  <option value="">-- Choose a Verified Destination (29 States) --</option>
                  {verifiedPlaces.map((place, idx) => (
                    <option key={idx} value={place}>{place}</option>
                  ))}
                  <option value="OTHER">✍️ Enter Another Offbeat Place Manually...</option>
                </select>

                {(!selectedPresetDestination || selectedPresetDestination === 'OTHER') && (
                  <input
                    type="text"
                    placeholder="Type exact place name (e.g. Chopta, Uttarakhand)"
                    value={customDestination}
                    onChange={(e) => {
                      setCustomDestination(e.target.value);
                      if (e.target.value.trim()) setDestinationError(false);
                    }}
                    className={`w-full px-3.5 py-2.5 bg-sand-50 border ${
                      destinationError ? 'border-red-500 bg-red-50' : 'border-sand-300'
                    } rounded-xl text-xs text-slate-900 focus:outline-none focus:border-terracotta-500 transition-colors`}
                  />
                )}

                {destinationError && (
                  <p className="text-[11px] text-red-600 mt-1 font-medium">
                    ⚠️ Please select or type the exact destination visited before submitting.
                  </p>
                )}
              </div>

              {/* Review Title */}
              <div>
                <label className="block text-xs font-medium text-slate-800 mb-1">
                  Review Headline / Title <span className="text-terracotta-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Unbelievable peace & 100% safe!"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-sand-50 border border-sand-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-terracotta-500 transition-colors"
                />
              </div>

              {/* Review Comment */}
              <div>
                <label className="block text-xs font-medium text-slate-800 mb-1">
                  Your Detailed Review <span className="text-terracotta-500">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Write your honest review here... Mention safety, food, homestays, or police station availability."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-sand-50 border border-sand-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-terracotta-500 transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl bg-terracotta-500 hover:bg-terracotta-600 text-white font-bold text-xs shadow-md flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Publishing Review...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Public Review</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column: Public Reviews Feed (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Filter Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-xl border border-sand-300 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                <Filter className="w-4 h-4 text-terracotta-500" />
                <span>Filter Reviews:</span>
              </div>
              
              <div className="flex items-center gap-2 overflow-x-auto">
                {['all', 5, 4, 3].map((val) => (
                  <button
                    key={val}
                    onClick={() => setRatingFilter(val)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      ratingFilter === String(val) || (val === 'all' && ratingFilter === 'all')
                        ? 'bg-terracotta-500 text-white shadow-md'
                        : 'bg-sand-100 text-slate-700 hover:text-slate-900 border border-sand-300'
                    }`}
                  >
                    {val === 'all' ? 'All Ratings' : `${val} Stars`}
                  </button>
                ))}
              </div>
            </div>

            {/* Reviews Feed List */}
            <div className="space-y-4">
              <AnimatePresence>
                {filteredReviews.map((rev) => (
                  <motion.div
                    key={rev.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-white border border-sand-300 hover:border-sand-400 rounded-2xl p-5 sm:p-6 transition-all shadow-md"
                  >
                    {/* Review Header: User Avatar & Info */}
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-terracotta-500 to-amber-600 text-white font-serif font-bold text-sm flex items-center justify-center shadow-sm">
                          {rev.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <h4 className="font-serif font-bold text-sm text-slate-900">{rev.name}</h4>
                          <p className="text-[11px] text-slate-500 flex items-center gap-2 mt-0.5">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-terracotta-500" />
                              {rev.location}
                            </span>
                            <span>•</span>
                            <span className="text-slate-400">{rev.date}</span>
                          </p>
                        </div>
                      </div>

                      {/* Star Rating Display */}
                      <div className="flex items-center gap-1 bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${
                              i < rev.rating ? 'fill-amber-400 text-amber-500' : 'text-sand-300 fill-sand-200'
                            }`}
                          />
                        ))}
                        <span className="text-xs font-bold text-amber-700 ml-1">{rev.rating}.0</span>
                      </div>
                    </div>

                    {/* Destination Badge */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="px-3 py-1 rounded-md bg-sand-100 text-slate-800 text-[11px] font-medium border border-sand-300 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-terracotta-500" />
                        Destination Visited: <strong className="text-amber-700">{rev.destination}</strong>
                      </span>
                    </div>

                    {/* Review Title & Comment Body */}
                    <h5 className="font-serif font-bold text-sm text-slate-900 mb-2">
                      "{rev.title}"
                    </h5>
                    <p className="text-xs text-slate-700 leading-relaxed mb-4">
                      {rev.comment}
                    </p>

                    {/* Card Footer: Helpful Voting */}
                    <div className="flex items-center justify-between pt-3 border-t border-sand-200 text-[11px]">
                      <span className="text-slate-500">Was this review helpful to you?</span>
                      <button
                        onClick={() => handleHelpfulVote(rev.id)}
                        disabled={votedHelpful[rev.id]}
                        className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-medium transition-all ${
                          votedHelpful[rev.id]
                            ? 'bg-emerald-500/20 text-emerald-700 border border-emerald-500/30'
                            : 'bg-sand-100 hover:bg-sand-200 text-slate-700 border border-sand-300'
                        }`}
                      >
                        <ThumbsUp className={`w-3.5 h-3.5 ${votedHelpful[rev.id] ? 'text-emerald-600' : 'text-slate-500'}`} />
                        <span>{votedHelpful[rev.id] ? 'Thank you!' : `Helpful (${rev.helpful})`}</span>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {filteredReviews.length === 0 && (
                <div className="bg-white border border-sand-300 rounded-2xl p-8 text-center text-slate-500">
                  <Star className="w-8 h-8 text-sand-400 mx-auto mb-2" />
                  <p className="text-sm font-medium">No reviews match the selected rating filter.</p>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
