import { flattenDestinationsToGems } from './destinations.js';

export const projectDetails = {
  teamName: "Yatrika",
  productName: "Yatrika",
  projectTitle: "Yatrika — AI-Powered Hidden Gem Discovery & Pan-India Safe Tourism Engine",
  theme: "Travel & Tourism",
  category: "Software",
  tagline: "Empowering people. Enriching places. Enhancing journeys. Together for Safe & Responsible Tourism across all Indian States.",
  heroHeadline: "Pan-India Hidden Gem Discovery with Yatrika.",
  heroSubheadline: "Yatrika is an intelligent travel platform covering all 28 Indian States & Union Territories—diverting crowds from over-touristed hubs (like Taj Mahal, Shimla, Munnar) to pristine hidden gems while recommending famous local food, native handicrafts/clothes, 24/7 nearby medical, transport, nearest police stations, and night emergency support.",
  githubUrl: "https://github.com/yatrika-travel/yatrika-app",
  demoUrl: "#gem-simulator"
};

export const indianStatesList = [
  "All States",
  "Uttar Pradesh",
  "Rajasthan",
  "West Bengal",
  "Kerala",
  "Himachal Pradesh",
  "Ladakh",
  "Goa",
  "Karnataka",
  "Tamil Nadu",
  "Meghalaya",
  "Sikkim",
  "Madhya Pradesh",
  "Maharashtra",
  "Uttarakhand",
  "Gujarat",
  "Assam",
  "Punjab",
  "Odisha",
  "Jammu & Kashmir",
  "Arunachal Pradesh",
  "Nagaland",
  "Manipur",
  "Mizoram",
  "Tripura",
  "Chhattisgarh",
  "Jharkhand",
  "Bihar",
  "Haryana",
  "Telangana",
  "Andhra Pradesh"
];

/* List of Famous Crowded Tourist Landmarks & Their State Mapping */
export const famousLandmarkHubs = [
  { id: "all", name: "✨ All Landmarks & Cities", state: "All States" },
  { id: "taj", name: "🕌 Taj Mahal & Agra Hub", state: "Uttar Pradesh" },
  { id: "kashi-vishwanath", name: "🛕 Kashi Vishwanath & Varanasi Ghats", state: "Uttar Pradesh" },
  { id: "hawa-mahal", name: "🏰 Hawa Mahal & Amer Fort Hub", state: "Rajasthan" },
  { id: "city-palace-udaipur", name: "🏰 City Palace & Lake Pichola Hub", state: "Rajasthan" },
  { id: "darjeeling-mall", name: "🌲 Darjeeling Mall Road Hub", state: "West Bengal" },
  { id: "victoria-memorial", name: "🏛️ Victoria Memorial & Kolkata Hub", state: "West Bengal" },
  { id: "munnar-tea", name: "🌿 Munnar Town & Tea Hub", state: "Kerala" },
  { id: "manali-mall", name: "🏔️ Manali Mall Road Hub", state: "Himachal Pradesh" },
  { id: "leh-town", name: "🏔️ Leh Town & Pangong Hub", state: "Ladakh" },
  { id: "baga-beach", name: "🏖️ Baga & Calangute Beach Hub", state: "Goa" },
  { id: "hampi-temple", name: "🛕 Hampi Main Temple Ruins", state: "Karnataka" },
  { id: "mahabalipuram-shore", name: "🛕 Mahabalipuram Shore Temple", state: "Tamil Nadu" }
];

export const problemData = {
  badge: "Pan-India Overcrowding & Remote Safety Challenge",
  title: "India's Tourism Paradox: Mass Crowds vs. Fear of Remote Exploration",
  description: "While 80% of domestic tourists concentrate in just 5% of famous hubs across India (like Taj Mahal or Shimla), travelers hesitate to explore pristine hidden gems due to fear of missing essential facilities—food, night accommodation, medical care, women safety, nearest police stations, and reliable transit. Yatrika solves this paradox.",
  stats: [
    { label: "Decongestion Investment", value: "₹3,295 Cr", subtext: "National tourism infrastructure expansion" },
    { label: "States & UTs Covered", value: "28 States", subtext: "Pan-India State-wise Hidden Spot Database" },
    { label: "Remote Hesitation", value: "74%", subtext: "Tourists avoid remote spots due to facility uncertainty" },
    { label: "Women Safety First", value: "100%", subtext: "Nearest Police Station, Female Hosts & 24/7 SOS" }
  ],
  comparison: {
    overcrowded: {
      title: "Overcrowded Famous Spot",
      location: "Shimla, Taj Mahal, Goa & Munnar Town",
      issues: [
        "12+ hour traffic bottlenecks & noise pollution",
        "Overpriced commercialized stays & plastic waste",
        "Diminished tourist satisfaction & long queues",
        "Overwhelmed local civic amenities & emergency services"
      ]
    },
    hiddenGem: {
      title: "Yatrika Discovered Gem + SafeHaven Hub",
      location: "Shoja, Anakkulam, Mawlynnong & Chunar",
      benefits: [
        "Serene, untouched pine forest trails & tribal rivers",
        "Authentic native wooden homestays & local cuisine",
        "24/7 Verified Medical, Food, Transport, Nearest Police & Women Safety",
        "Night Emergency Assistance Mode with zero connectivity drop"
      ]
    }
  }
};

export const solutionPillars = [
  {
    id: "ai-recommendations",
    icon: "Sparkles",
    title: "Yatrika Pan-India State Discovery",
    shortDesc: "Vector embeddings match travel preferences across all 28 Indian States & UTs with high-affinity hidden spots.",
    details: "Utilizes retrieval-augmented generation (RAG) and semantic similarity search to discover remote gems in Meghalaya, Ladakh, Rajasthan, Kerala, and beyond."
  },
  {
    id: "hidden-gem-score",
    icon: "Compass",
    title: "Proprietary Gem & Safety Index",
    shortDesc: "Algorithmic rating (0–100) evaluating uniqueness, footfall, women safety score, nearest police station proximity, and verified local reviews.",
    details: "A multi-parameter mathematical index calculating destination uniqueness while strictly validating local medical, police station, safety, and transit infrastructure."
  },
  {
    id: "smart-itinerary",
    icon: "Route",
    title: "Smart Auto-Itinerary & Wayfinding",
    shortDesc: "Generates optimal day plans with essential stopovers (ATMs, petrol pumps, police posts, food stalls) and carbon-conscious routing.",
    details: "Dynamic time-slotting algorithm accounting for sunset times, last local bus departures, and emergency night transit windows."
  },
  {
    id: "community-safety",
    icon: "ShieldCheck",
    title: "24/7 SafeHaven & Police Infrastructure",
    shortDesc: "Directly connects travelers with verified local hosts, female-led homestays, 24/7 medical centers, nearest police stations, and driver guilds.",
    details: "Zero-middleman portal providing instant access to emergency night stays, village drivers, nearest police stations, and 1-tap SOS assistance."
  }
];

export const keyFeatures = [
  {
    id: 1,
    icon: "Search",
    title: "State & Landmark Offbeat Radar",
    desc: "Seamless exploration covering all 28 States & UTs around famous landmarks with filterable interests and budget levels."
  },
  {
    id: 2,
    icon: "CalendarCheck",
    title: "Auto Itinerary Synthesizer",
    desc: "Instant multi-day trip compilation auto-balanced for travel pace, food stops, and budget."
  },
  {
    id: 3,
    icon: "Utensils",
    title: "Famous Food & Native Clothes",
    desc: "Verified organic dhabas, famous regional food specialties, native handlooms, clothes & artisan crafts."
  },
  {
    id: 4,
    icon: "ShieldAlert",
    title: "24/7 Medical & Transport Hub",
    desc: "Instant visibility into nearby hospitals, pharmacies, emergency cabs, local auto stands, ATMs & fuel stations."
  },
  {
    id: 5,
    icon: "HeartHandshake",
    title: "P2P Crowdsourced Discovery",
    desc: "Users submit new hidden places; Yatrika AI verifies worthiness, footfall, and safety before serving to fellow travelers."
  },
  {
    id: 6,
    icon: "MapPin",
    title: "24/7 Night Police SOS Mode",
    desc: "1-tap emergency SOS beacon dispatching live location telematics to nearest district police stations."
  }
];

export const howItWorksSteps = [
  {
    step: "01",
    title: "Select Indian State & Landmark Hub",
    desc: "Traveler inputs target state (e.g., Rajasthan, UP, Kerala) or famous crowded landmark (e.g., Taj Mahal, Amer Fort, Munnar).",
    badge: "User Input"
  },
  {
    step: "02",
    title: "Geospatial Radius & Police/Essential Audit",
    desc: "Queries surrounding 10–75km buffer to verify presence of 24/7 medical, police station, food, and transport infrastructure.",
    badge: "Spatial Audit"
  },
  {
    step: "03",
    title: "AI Ranking & Preference Filtering",
    desc: "Yatrika AI dynamically filters and ranks candidate hidden spots matching selected vibe, budget & safety threshold.",
    badge: "AI Core"
  },
  {
    step: "04",
    title: "Gem & Women Safety Score Engine",
    desc: "Calculates Score = 0.25(Uniqueness) + 0.25(Low Footfall) + 0.20(Police & Women Index) + 0.15(Essential Access) + 0.15(Reviews).",
    badge: "Scoring Alg"
  },
  {
    step: "05",
    title: "Itinerary & Route Optimization",
    desc: "Generates step-by-step day plans minimizing travel time, fuel consumption, and carbon emissions.",
    badge: "Route Opt"
  },
  {
    step: "06",
    title: "24/7 Night Safety & Police Station Dispatch",
    desc: "Direct contact line to nearest police station, verified local hosts, village emergency drivers, and tourist police hotline (112/1091).",
    badge: "Night SOS Mode"
  }
];

export const projectHighlights = {
  problem: [
    {
      title: "Over-Tourism Congestion",
      desc: "Iconic destinations face 400%+ footfall capacity, straining local infrastructure, causing traffic gridlocks, and diminishing tourist experience."
    },
    {
      title: "Exploration Gap",
      desc: "92% of travelers stick to top 5 commercialized spots per state, leaving 1000s of pristine, culturally rich hidden gems unexplored."
    },
    {
      title: "Safety & Information Deficit",
      desc: "Offbeat places often lack verified details regarding nearby police stations, 24/7 emergency medical access, and safe accommodations."
    }
  ],
  solution: [
    {
      title: "Smart Crowd Diversion",
      desc: "Intelligent AI engine diverts tourist footfall from congested hubs to serene nearby hidden places matching travel vibes."
    },
    {
      title: "Integrated Safety Network",
      desc: "Every recommended spot includes mapped nearest police station, 24/7 emergency clinic, verified local food, and night emergency SOS."
    },
    {
      title: "P2P Crowdsourced Discovery",
      desc: "Travelers can submit new hidden places; Yatrika AI verifies worthiness, footfall, and safety before serving to fellow travelers."
    }
  ],
  techPillars: [
    { title: "Geospatial Indexing", desc: "Fast spatial queries mapping surrounding 5–30km offbeat radii." },
    { title: "AI Worthiness Engine", desc: "Dynamic multi-factor scoring evaluating uniqueness and footfall." },
    { title: "Police Emergency Network", desc: "Direct 1-tap dispatch to nearest district police stations & ER posts." },
    { title: "Cultural Discovery Engine", desc: "Recommending authentic local dishes, native handicrafts, and artisan weavers." }
  ],
  challenges: [
    {
      problem: "Cold-Start Data for Remote Villages",
      solution: "P2P crowdsourcing pipeline where local travelers & hosts submit unmapped spots for instant AI audit."
    },
    {
      problem: "Intermittent Internet Connectivity",
      solution: "Progressive web architecture supporting offline map caching and emergency police contact downloads."
    }
  ],
  highlights: {
    feasibility: [
      "Built on enterprise-grade cloud infrastructure & high-speed data architecture",
      "Zero specialized hardware needed — fully smartphone compatible",
      "Sub-second offline access to emergency contacts & police station locations",
      "Easily scalable across all 28 Indian States & Union Territories"
    ],
    viability: [
      "Sustainable B2B SaaS analytics for State Tourism Development Boards",
      "Micro-commission model (3-5%) on verified local guide & homestay bookings",
      "Sponsorship & recognition model for local artisan handlooms & traditional kitchens",
      "Zero reliance on heavy central server hardware; light client-side state caching"
    ]
  }
};

export const feasibilityData = {
  challenges: [
    {
      problem: "Cold-Start Data for Remote Villages",
      solution: "P2P crowdsourcing pipeline where local travelers & hosts submit unmapped spots for instant AI audit."
    },
    {
      problem: "Intermittent Internet Connectivity",
      solution: "Progressive web architecture supporting offline map caching and emergency police contact downloads."
    }
  ],
  feasibility: [
    "Built on enterprise-grade cloud infrastructure & high-speed data architecture",
    "Zero specialized hardware needed — fully smartphone compatible",
    "Sub-second offline access to emergency contacts & police station locations",
    "Easily scalable across all 28 Indian States & Union Territories"
  ],
  viability: [
    "Sustainable B2B SaaS analytics for State Tourism Development Boards",
    "Micro-commission model (3-5%) on verified local guide & homestay bookings",
    "Sponsorship & recognition model for local artisan handlooms & traditional kitchens",
    "Zero reliance on heavy central server hardware; light client-side state caching"
  ]
};

export const impactBenefitsData = {
  impacts: [
    {
      title: "Promotes Sustainable Eco-Tourism Nationwide",
      desc: "Distributes environmental footfall across wider geography in all 28 states, preventing ecological stress."
    },
    {
      title: "Guarantees Tourist Safety & Police Protection",
      desc: "Removes fear of exploration by backing every hidden spot with nearest police station, 24/7 medical, food, and transport visibility."
    },
    {
      title: "Empowers Local Rural Communities",
      desc: "Creates dignified employment for village drivers, female homestay hosts, and local food providers."
    },
    {
      title: "Preserves Cultural Heritage Safely",
      desc: "Revitalizes forgotten historical forts, ancient stepwells, and tribal hamlets with verified local guides."
    },
    {
      title: "Drives Regional Infrastructure",
      desc: "Incentivizes district administrations to improve police post readiness, road lighting, and mobile coverage."
    }
  ],
  benefits: [
    {
      title: "Complete Peace of Mind for Travelers",
      desc: "Tourists get real-time info on nearest police stations, hospitals, food, ATMs, and 24/7 emergency night support."
    },
    {
      title: "Women Traveler Protection",
      desc: "Nearest police station mapping, verified female host stays, lighted route suggestions, and instant emergency beacon dispatch."
    },
    {
      title: "Higher Village Household Income",
      desc: "Unlocks 35-50% supplemental seasonal income for rural families living near hidden gems."
    },
    {
      title: "No Nighttime Stranding",
      desc: "24/7 local driver network, police station dispatch & emergency homestay availability prevents tourists getting lost after dark."
    },
    {
      title: "Public-Private Synergy",
      desc: "Provides State Tourism Ministries actionable data on remote police & safety readiness and infrastructure gaps."
    }
  ]
};

export const researchData = {
  govCitation: {
    amount: "₹3,295 Crore",
    year: "2024 Tourism Development Budget",
    detail: "Government allocated funds to develop new tourist destinations to decongest iconic sites. Yatrika provides the essential safety, police station mapping, and infrastructure layer making these new sites tourist-ready."
  },
  gapsInCurrentSystem: [
    {
      title: "Static Portals Gap",
      desc: "Traditional travel portals list spots statically but lack dynamic AI personalization, nearest police station routing, or emergency night assistance."
    },
    {
      title: "Remote Safety Assurance",
      desc: "Studies show 74% of tourists refuse offbeat travel due to lack of verified police station, hospital, food, and night transport information."
    },
    {
      title: "Crowdsourced Data Success",
      desc: "Community-verified local guide networks scale reliably when village hosts are empowered with digital safety badges."
    }
  ]
};

export const sampleHiddenGems = flattenDestinationsToGems();

export const teamMembers = [
  { name: "Product Lead", role: "AI & Platform Architecture", avatar: "YT" },
  { name: "Full Stack Lead", role: "React & Cloud Infrastructure", avatar: "FS" },
  { name: "AI Engineer", role: "Vector DB & RAG Pipeline", avatar: "AI" },
  { name: "UI/UX Director", role: "Design System & Micro-Interactions", avatar: "UX" },
  { name: "GIS Engineer", role: "Geospatial Indexing & Maps API", avatar: "GIS" },
  { name: "Safety & Tourism Audit", role: "Field Data & Police Telematics", avatar: "ST" }
];
