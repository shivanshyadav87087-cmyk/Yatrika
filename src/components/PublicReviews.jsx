import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ThumbsUp, MessageSquare, Send, CheckCircle2, User, MapPin, Sparkles, Filter, Award, ShieldCheck, Heart } from 'lucide-react';

const INITIAL_REVIEWS = [
  {
    id: 'rev-1',
    name: 'Ananya Deshmukh',
    location: 'Mumbai, Maharashtra',
    destination: 'Jibhi & Tirthan Valley, Himachal Pradesh',
    rating: 5,
    title: 'Complete peace of mind as a solo female traveler!',
    comment: 'Bypassed overcrowded Manali for Jibhi using Yatrika. The mapped nearest police station (< 8 mins response) and verified female-hosted homestay gave me complete safety assurance. The local Pahadi Siddu was incredible!',
    travelerType: 'Solo Female Traveler',
    date: '2 days ago',
    helpful: 48,
    verified: true
  },
  {
    id: 'rev-2',
    name: 'Rohan & Neha Gupta',
    location: 'Bengaluru, Karnataka',
    destination: 'Anegundi Village, Karnataka',
    rating: 5,
    title: 'Discovered authentic heritage far from Hampi crowds',
    comment: 'Instead of standing in long queues at Hampi main ruins, Yatrika recommended Anegundi coracle village across the river. The banana fiber craft workshop and organic thali were the highlights of our trip!',
    travelerType: 'Couple Retreat',
    date: '5 days ago',
    helpful: 35,
    verified: true
  },
  {
    id: 'rev-3',
    name: 'Dr. Vikramaditya Sen',
    location: 'Kolkata, West Bengal',
    destination: 'Lamahatta Eco Village, Darjeeling',
    rating: 5,
    title: 'Untouched pine forests and pristine Kanchenjunga view',
    comment: 'Escaped Darjeeling Mall Road traffic for Lamahatta sacred pine trails. The 24/7 medical contact info on Yatrika was reassuring for my senior parents. Truly a 5-star experience!',
    travelerType: 'Family Vacation',
    date: '1 week ago',
    helpful: 29,
    verified: true
  },
  {
    id: 'rev-4',
    name: 'Pooja & Sameer Verma',
    location: 'New Delhi',
    destination: 'Kachhpura Heritage Village, Agra',
    rating: 5,
    title: 'Crowd-free Taj Mahal view over Yamuna River',
    comment: 'Yatrika directed us to Kachhpura village opposite Taj Mahal. We got breathtaking sunset views from Mehtab Bagh with zero crowds, plus tasted authentic Bedai & Jalebi from local village vendors.',
    travelerType: 'Couple Retreat',
    date: '2 weeks ago',
    helpful: 42,
    verified: true
  },
  {
    id: 'rev-5',
    name: 'Kavita Krishnan',
    location: 'Chennai, Tamil Nadu',
    destination: 'Kovalam Backwaters, Tamil Nadu',
    rating: 5,
    title: 'Serene surfing & fresh seafood near Mahabalipuram',
    comment: 'Loved the quiet fishing hamlet in Kovalam. The verified driver guild hotline and local seafood recommendations on Yatrika were 100% accurate and helpful.',
    travelerType: 'Backpacker / Trekker',
    date: '3 weeks ago',
    helpful: 19,
    verified: true
  },
  {
    id: 'rev-6',
    name: 'Stanzin Norbu',
    location: 'Leh, Ladakh',
    destination: 'Hanle Dark Sky Reserve, Ladakh',
    rating: 5,
    title: 'Stargazing sanctuary at 14,300 ft!',
    comment: 'As a Ladakhi local, I am impressed by how Yatrika guides travelers to Hanle dark sky reserve while encouraging responsible homestay tourism and night safety preparedness.',
    travelerType: 'Backpacker / Trekker',
    date: '1 month ago',
    helpful: 56,
    verified: true
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

  // Form State
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [travelerType, setTravelerType] = useState('Solo Female Traveler');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('yatrika_public_reviews', JSON.stringify(reviews));
  }, [reviews]);

  // Rating Stats Calculation
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
    if (!name.trim() || !comment.trim() || !title.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const newRev = {
        id: `rev-${Date.now()}`,
        name: name.trim(),
        location: location.trim() || 'India',
        destination: destination.trim() || 'Yatrika Offbeat Gem',
        rating: Number(rating),
        title: title.trim(),
        comment: comment.trim(),
        travelerType: travelerType,
        date: 'Just now',
        helpful: 1,
        verified: true
      };

      setReviews(prev => [newRev, ...prev]);
      setIsSubmitting(false);
      setShowSuccessToast(true);

      // Reset form
      setName('');
      setLocation('');
      setDestination('');
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
      case 5: return 'Exceptional (5 Stars)';
      case 4: return 'Great Experience (4 Stars)';
      case 3: return 'Average Stay (3 Stars)';
      case 2: return 'Fair (2 Stars)';
      case 1: return 'Needs Improvement (1 Star)';
      default: return '';
    }
  };

  return (
    <section id="reviews" className="py-24 bg-slate-900 text-slate-100 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-terracotta-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-terracotta-500/20 text-terracotta-400 text-xs font-semibold uppercase tracking-wider mb-4 border border-terracotta-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Community Traveler Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-100 tracking-tight mb-4">
            Real Experiences from Yatrika Explorers
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            See how travelers across India use Yatrika to discover uncrowded offbeat gems backed by verified 24/7 police, medical, food, and safety infrastructure.
          </p>
        </div>

        {/* Top Summary Bar & Rating Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-slate-950/80 border border-slate-800/80 rounded-2xl p-6 sm:p-8 mb-12 shadow-xl backdrop-blur-sm">
          
          {/* Rating Score Card */}
          <div className="flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-slate-800 pb-6 lg:pb-0 lg:pr-8 text-center">
            <div className="text-5xl sm:text-6xl font-serif font-extrabold text-amber-400 mb-2">
              {avgRating}
            </div>
            <div className="flex items-center gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-xs text-slate-400 font-medium">
              Based on <span className="text-slate-200 font-bold">{totalReviewsCount} Verified Public Reviews</span>
            </p>
            <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Verified Community Feedback</span>
            </div>
          </div>

          {/* Rating Bars Breakdown */}
          <div className="space-y-2.5 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-800 pb-6 lg:pb-0 lg:pr-8">
            {[5, 4, 3, 2, 1].map((num) => {
              const count = ratingCounts[num] || 0;
              const pct = totalReviewsCount > 0 ? (count / totalReviewsCount) * 100 : 0;
              return (
                <div key={num} className="flex items-center gap-3 text-xs text-slate-300">
                  <div className="flex items-center gap-1 w-14 font-medium">
                    <span>{num}</span>
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  </div>
                  <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-amber-500 to-terracotta-500 rounded-full transition-all duration-500" 
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="w-8 text-right font-mono text-slate-400">{count}</span>
                </div>
              );
            })}
          </div>

          {/* Call to Action Box */}
          <div className="flex flex-col justify-center items-start space-y-4">
            <h4 className="font-serif font-bold text-lg text-slate-100 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-terracotta-400" />
              <span>Have you visited an offbeat gem?</span>
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Share your honest rating and review to help fellow travelers explore safe, uncrowded destinations across India.
            </p>
            <a 
              href="#review-form"
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-terracotta-500 hover:bg-terracotta-600 text-white font-bold text-xs shadow-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
            >
              <Star className="w-4 h-4 text-amber-300 fill-amber-300" />
              <span>Write a Public Review</span>
            </a>
          </div>

        </div>

        {/* Main Content Grid: Review Submission Form (Left) & Reviews Feed (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Write Review Form (5 Cols) */}
          <div id="review-form" className="lg:col-span-5 bg-slate-950/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="flex items-center gap-2 text-terracotta-400 font-serif font-bold text-xl mb-2">
              <Star className="w-5 h-5 fill-terracotta-400 text-terracotta-400" />
              <h3>Leave a Public Review</h3>
            </div>
            <p className="text-xs text-slate-400 mb-6">
              Your feedback is published publicly to assist travelers seeking safe, offbeat places.
            </p>

            {showSuccessToast && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <p className="font-bold">Review Published Successfully!</p>
                  <p className="text-emerald-400/90">Thank you for contributing to the Yatrika travel community.</p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmitReview} className="space-y-4">
              
              {/* Interactive 5-Star Selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Select Rating out of 5 Stars <span className="text-terracotta-400">*</span>
                </label>
                <div className="flex items-center gap-2 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <div className="flex items-center gap-1.5">
                    {[1, 2, 3, 4, 5].map((starNum) => (
                      <button
                        type="button"
                        key={starNum}
                        onClick={() => setRating(starNum)}
                        onMouseEnter={() => setHoverRating(starNum)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="p-1 transition-transform hover:scale-125 focus:outline-none"
                      >
                        <Star 
                          className={`w-7 h-7 transition-colors ${
                            starNum <= (hoverRating || rating)
                              ? 'fill-amber-400 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]'
                              : 'text-slate-600 fill-slate-800'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                  <span className="ml-auto text-xs font-semibold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-md border border-amber-400/20">
                    {getStarLabel(hoverRating || rating)}
                  </span>
                </div>
              </div>

              {/* Name & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Your Name <span className="text-terracotta-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-terracotta-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Home City / State
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Pune, Maharashtra"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-terracotta-500 transition-colors"
                  />
                </div>
              </div>

              {/* Destination & Traveler Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Destination Visited
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Jibhi / Top Station"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-terracotta-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Traveler Type
                  </label>
                  <select
                    value={travelerType}
                    onChange={(e) => setTravelerType(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-terracotta-500 transition-colors"
                  >
                    <option value="Solo Female Traveler">Solo Female Traveler</option>
                    <option value="Family Vacation">Family Vacation</option>
                    <option value="Couple Retreat">Couple Retreat</option>
                    <option value="Backpacker / Trekker">Backpacker / Trekker</option>
                    <option value="Senior Citizens Group">Senior Citizens Group</option>
                  </select>
                </div>
              </div>

              {/* Review Title */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Review Headline / Title <span className="text-terracotta-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Unbelievable peace & 100% safe!"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-terracotta-500 transition-colors"
                />
              </div>

              {/* Review Comment */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Your Detailed Review <span className="text-terracotta-400">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Write your honest review here... Mention safety, food, homestays, or police station availability."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-terracotta-500 transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl bg-terracotta-500 hover:bg-terracotta-600 text-white font-bold text-xs shadow-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
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
            <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-950/80 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                <Filter className="w-4 h-4 text-terracotta-400" />
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
                        : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
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
                    className="bg-slate-950/80 border border-slate-800 hover:border-slate-700/80 rounded-2xl p-5 sm:p-6 transition-all shadow-lg"
                  >
                    {/* Review Header: User Avatar & Info */}
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-terracotta-500 to-amber-600 text-white font-serif font-bold text-sm flex items-center justify-center shadow-md">
                          {rev.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-serif font-bold text-sm text-slate-100">{rev.name}</h4>
                            {rev.verified && (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-semibold border border-emerald-500/20">
                                <CheckCircle2 className="w-3 h-3" /> Verified
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-slate-400 flex items-center gap-2 mt-0.5">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-terracotta-400" />
                              {rev.location}
                            </span>
                            <span>•</span>
                            <span className="text-slate-500">{rev.date}</span>
                          </p>
                        </div>
                      </div>

                      {/* Star Rating Display */}
                      <div className="flex items-center gap-1 bg-amber-400/10 px-2.5 py-1 rounded-lg border border-amber-400/20">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${
                              i < rev.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-700 fill-slate-800'
                            }`}
                          />
                        ))}
                        <span className="text-xs font-bold text-amber-400 ml-1">{rev.rating}.0</span>
                      </div>
                    </div>

                    {/* Destination & Category Badges */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 text-[11px] font-medium border border-slate-800 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-terracotta-400" />
                        Visited: <strong className="text-slate-200">{rev.destination}</strong>
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-terracotta-500/10 text-terracotta-300 text-[11px] font-medium border border-terracotta-500/20">
                        {rev.travelerType}
                      </span>
                    </div>

                    {/* Review Title & Comment Body */}
                    <h5 className="font-serif font-bold text-sm text-slate-100 mb-2">
                      "{rev.title}"
                    </h5>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {rev.comment}
                    </p>

                    {/* Card Footer: Helpful Voting */}
                    <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-[11px]">
                      <span className="text-slate-500">Was this review helpful to you?</span>
                      <button
                        onClick={() => handleHelpfulVote(rev.id)}
                        disabled={votedHelpful[rev.id]}
                        className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-medium transition-all ${
                          votedHelpful[rev.id]
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                            : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
                        }`}
                      >
                        <ThumbsUp className={`w-3.5 h-3.5 ${votedHelpful[rev.id] ? 'text-emerald-400' : 'text-slate-400'}`} />
                        <span>{votedHelpful[rev.id] ? 'Thank you!' : `Helpful (${rev.helpful})`}</span>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {filteredReviews.length === 0 && (
                <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-8 text-center text-slate-400">
                  <Star className="w-8 h-8 text-slate-600 mx-auto mb-2" />
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
