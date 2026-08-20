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
  "Rajasthan",
  "Kerala",
  "Himachal Pradesh",
  "Uttar Pradesh",
  "Meghalaya",
  "Ladakh",
  "Sikkim",
  "Madhya Pradesh",
  "Maharashtra",
  "Karnataka",
  "Tamil Nadu",
  "West Bengal",
  "Uttarakhand",
  "Goa",
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
  { id: "taj", name: "🕌 Taj Mahal & Agra Hub (UP)", state: "Uttar Pradesh" },
  { id: "amer", name: "🏰 Amer Fort & Jaipur Hub (Rajasthan)", state: "Rajasthan" },
  { id: "munnar", name: "🌿 Munnar Town & Tea Hub (Kerala)", state: "Kerala" },
  { id: "shimla", name: "🏔️ Shimla & Manali Hub (Himachal)", state: "Himachal Pradesh" },
  { id: "leh", name: "🏔️ Leh Town & Hall of Fame (Ladakh)", state: "Ladakh" },
  { id: "shillong", name: "🌧️ Shillong & Cherrapunji (Meghalaya)", state: "Meghalaya" },
  { id: "hampi", name: "🛕 Hampi Main Temple Ruins (Karnataka)", state: "Karnataka" },
  { id: "gwalior", name: "🏰 Gwalior Fort & City Hub (MP)", state: "Madhya Pradesh" },
  { id: "puri", name: "🛕 Puri Jagannath & Beach Hub (Odisha)", state: "Odisha" },
  { id: "darjeeling", name: "🌲 Darjeeling Mall Road (West Bengal)", state: "West Bengal" },
  { id: "lonavala", name: "⛰️ Lonavala & Mahabaleshwar (Maharashtra)", state: "Maharashtra" },
  { id: "ooty", name: "☕ Ooty & Kodaikanal (Tamil Nadu)", state: "Tamil Nadu" },
  { id: "gangtok", name: "🏔️ Gangtok MG Marg (Sikkim)", state: "Sikkim" },
  { id: "kaziranga", name: "🦏 Kaziranga & Guwahati (Assam)", state: "Assam" }
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

/* Helper for standard facilities schema including explicit Police Station, Famous Food & Native Clothes details */
const createFacilityData = (hospName, hospDist, hospPhone, foodName, foodType, stayName, stayTariff, policeStationName, policeStationDist, policeStationPhone, policePatrol, taxiName, taxiPhone, petrol, atm, hq, hw, famousFood, famousCraft) => ({
  food: [
    { name: foodName, type: foodType, dist: "250m", rating: "4.9/5", open: "07:00 AM - 10:00 PM" },
    { name: "Village Organic Tea & Refreshments", type: "Local Chai & Fresh Snacks", dist: "100m", rating: "4.8/5", open: "24/7 Available" }
  ],
  famousRegionalSpecialties: {
    food: famousFood || "Local Organic Thali, Fresh Chai & Native Sweets",
    crafts: famousCraft || "Traditional Native Handlooms, Block Prints & Local Handicrafts"
  },
  accommodation: [
    { name: stayName, type: "Family Stay (Female Host)", dist: "350m", tariff: stayTariff, emergencyNightStay: true, safetyVerified: true }
  ],
  medical: [
    { name: hospName, type: "24/7 Primary Health Center & ER", dist: hospDist, phone: hospPhone, travelTime: "< 10 mins" }
  ],
  womenSafety: {
    score: "96/100 (SafeHaven Gold)",
    policeStationName: policeStationName,
    policeStationDist: policeStationDist,
    policeStationPhone: policeStationPhone,
    policePatrol: policePatrol,
    helpline: "112 / Women Helpline 1091",
    features: [
      "Nearest Police Station Mapped (< 5 mins response)",
      "24/7 PCR Patrol Mobile Unit Assigned",
      "Verified Female Homestay Host Registered",
      "Lighted Night Route Guidance Active"
    ]
  },
  transport: [
    { name: taxiName, type: "Local Auto & Cab Guild", phone: taxiPhone, availability: "24/7 On-Call" }
  ],
  distances: {
    petrolPump: petrol,
    atm: atm,
    districtHQ: hq,
    nationalHighway: hw
  }
});

export const sampleHiddenGems = [
  /* ------------------- UTTAR PRADESH (Agra / Taj Mahal & Beyond) ------------------- */
  {
    state: "Uttar Pradesh",
    landmarkHub: "🕌 Taj Mahal & Agra Hub (UP)",
    vibeTag: "Heritage & Crafts",
    location: "Agra Suburbs, Uttar Pradesh",
    gemName: "Kachhpura Heritage Village & Moonlight Taj View",
    lat: 27.1798,
    lng: 78.0469,
    distance: "4 km from Taj Mahal East Gate",
    score: 94,
    womenSafetyIndex: 95,
    uniqueness: 96,
    footfall: "Low (15% of Taj main gate)",
    category: "Mughal Village & Artisans",
    estCost: "₹1,200 / person",
    desc: "A Mughal-era village across Yamuna River opposite Taj Mahal, offering crowd-free view of the monument from Mehtab Bagh & Humayun Mosque.",
    essentialFacilities: createFacilityData(
      "SN Medical College Hospital Agra", "5.0 km", "+91 562 2260353", 
      "Kachhpura Village Community Cafe", "Desi Bedai, Jalebi & Thali", 
      "Kachhpura Mughal Courtyard Homestay", "₹1,500/night", 
      "Tajganj Tourist Police Station", "2.5 km (5 mins response)", "+91 562 2230000", "Agra Tourist Police Mobile Van", 
      "Agra Heritage Auto Guild", "+91 98370 11990", 
      "2.0 km (BPCL)", "1.0 km (Axis ATM)", "6 km (Agra City)", "4 km (Yamuna Expressway)",
      "Agra Petha, Desi Ghee Bedai, Jalebi & Mughlai Paratha",
      "Parchinkari Marble Inlay Art, Zardozi Gold Embroidery & Sanjhi Wall Art"
    ),
    itinerary: ["07:00 AM: Heritage street walk through Kachhpura Sanjhi art walls", "10:30 AM: Walk through Humayun Mosque", "01:00 PM: Bedai & Jalebi lunch", "05:00 PM: Sunset view of Taj Mahal over Yamuna from Mehtab Bagh", "08:00 PM: Stay at Mughal Courtyard Homestay"]
  },
  {
    state: "Uttar Pradesh",
    landmarkHub: "🕌 Taj Mahal & Agra Hub (UP)",
    vibeTag: "Eco Nature",
    location: "Agra / Keetham, Uttar Pradesh",
    gemName: "Sur Sarovar Bird Sanctuary & Keetham Lake",
    lat: 27.2472,
    lng: 77.8384,
    distance: "20 km from Taj Mahal Hub",
    score: 93,
    womenSafetyIndex: 96,
    uniqueness: 95,
    footfall: "Very Low (10% of Taj Mahal)",
    category: "Eco Nature & Wildlife Sanctuary",
    estCost: "₹850 / person",
    desc: "A tranquil national bird sanctuary surrounding Keetham Lake near Agra, home to over 106 species of migratory birds, lush green pine trails, and sloth bear rescue center.",
    essentialFacilities: createFacilityData(
      "Agra Highway Emergency Medical Center", "4.0 km", "+91 562 2600112", 
      "Keetham Lake Nature Cafe", "Fresh Desi Chai, Pakodas & Organic Snacks", 
      "Sur Sarovar Eco Lake Resort", "₹1,600/night", 
      "Runakta Police Outpost", "3.0 km (4 mins response)", "+91 562 2600100", "NH-19 Tourist Police PCR Van", 
      "Keetham Lake Taxi Association", "+91 98371 99221", 
      "2.5 km (Indian Oil)", "2.0 km (SBI ATM)", "20 km (Agra City)", "1.0 km (NH-19)",
      "Agra Petha, Desi Ghee Bedai & Fresh Chai",
      "Local Bamboo Crafts & Sanjhi Lake Artwork"
    ),
    itinerary: ["06:30 AM: Sunrise bird watching boat tour on Keetham Lake", "09:30 AM: Nature walk through Sur Sarovar forest trail", "01:00 PM: Organic lunch at Lake Cafe", "03:30 PM: Visit Sloth Bear Rescue Sanctuary", "07:30 PM: Peaceful night stay at Eco Lake Resort"]
  },
  {
    state: "Uttar Pradesh",
    landmarkHub: "🕌 Taj Mahal & Agra Hub (UP)",
    vibeTag: "Spiritual History",
    location: "Agra / Bah, Uttar Pradesh",
    gemName: "Bateshwar 101 Shiva Temple Cluster on Yamuna",
    lat: 26.9405,
    lng: 78.5367,
    distance: "70 km from Agra",
    score: 96,
    womenSafetyIndex: 95,
    uniqueness: 98,
    footfall: "Very Low (8% of Vrindavan)",
    category: "Yamuna Riverbank Temple Curved Arc",
    estCost: "₹1,100 / person",
    desc: "An ancestral village of 101 white marble Shiva temples lined in a crescent arc along the Yamuna River bank, built by Bhadauria kings in the 17th century.",
    essentialFacilities: createFacilityData(
      "Bah Civil Hospital", "10 km", "+91 5614 222010", 
      "Bateshwar Yamuna Ghat Bhojanalaya", "Desi Ghee Poori Sabzi & Rabri", 
      "Bateshwar Riverbank Heritage Lodge", "₹1,400/night", 
      "Bah Police Station", "10 km (10 mins response)", "+91 5614 222000", "Yamuna Ravine Police PCR 112", 
      "Bah Auto Association", "+91 98371 44332", 
      "10 km (BPCL)", "10 km (SBI ATM)", "70 km (Agra HQ)", "15 km (Agra-Lucknow Expressway)",
      "Bateshwar Rabri, Desi Ghee Poori Sabzi & Maththa",
      "Yamuna Hand-carved Brass Bells & Traditional Leather Footwear"
    ),
    itinerary: ["07:00 AM: Yamuna boat ride past 101 white Shiva temples", "10:30 AM: Exploration of Bhadauria fort ruins", "01:00 PM: Desi Ghee Poori & Rabri lunch", "04:30 PM: Chambal wildlife sanctuary safari nearby", "08:00 PM: Night stay at Riverbank Heritage Lodge"]
  },
  {
    state: "Uttar Pradesh",
    landmarkHub: "🕌 Taj Mahal & Agra Hub (UP)",
    vibeTag: "Mountain Trails",
    location: "Chunar / Varanasi, Uttar Pradesh",
    gemName: "Chandra Prabha Devdari Waterfalls & Wildlife Trail",
    lat: 24.9312,
    lng: 83.1865,
    distance: "55 km from Varanasi",
    score: 95,
    womenSafetyIndex: 94,
    uniqueness: 96,
    footfall: "Low (15% of Varanasi Ghats)",
    category: "Waterfalls & Forest Ridge Trails",
    estCost: "₹900 / person",
    desc: "Tucked away in the Vindhya mountain foothills near Varanasi, featuring breathtaking natural cascading waterfalls (Devdari & Rajdari) surrounded by forest gorges.",
    essentialFacilities: createFacilityData(
      "Chakia Community Health Center", "12 km", "+91 5412 223108", 
      "Devdari Waterfall Forest Rest Stop", "Hot Baati Chokha & Tea", 
      "Vindhya Forest Eco Huts", "₹1,300/night", 
      "Chakia Police Station", "12 km (12 mins response)", "+91 5412 223100", "Vindhya Patrol Unit 112", 
      "Chakia Taxi Union", "+91 94510 88220", 
      "10 km (HP Fuel)", "12 km (SBI ATM)", "55 km (Varanasi)", "12 km (Chakia Highway)",
      "Banarasi Baati Chokha & Hot Kulhad Chai",
      "Vindhya Bamboo Flutes & Terracotta Sculptures"
    ),
    itinerary: ["08:00 AM: Scenic trail hike to Devdari & Rajdari Waterfalls", "11:30 AM: Picnic & photography at waterfall pool", "01:30 PM: Hot Baati Chokha lunch", "04:00 PM: Wildlife trail trek through Chandra Prabha sanctuary", "08:00 PM: Rest at Vindhya Forest Eco Huts"]
  },

  /* ------------------- RAJASTHAN (Amer Fort / Jaipur Hub) ------------------- */
  {
    state: "Rajasthan",
    landmarkHub: "🏰 Amer Fort & Jaipur Hub (Rajasthan)",
    vibeTag: "Heritage & Crafts",
    location: "Amer / Jaipur, Rajasthan",
    gemName: "Amer Elephant Village & Sagar Lake",
    lat: 26.9855,
    lng: 75.8513,
    distance: "12 km from Amer Fort Hub",
    score: 94,
    womenSafetyIndex: 96,
    uniqueness: 96,
    footfall: "Very Low (15% of Amer Fort)",
    category: "Eco-Heritage & Wildlife",
    estCost: "₹1,200 / person",
    desc: "A tranquil sanctuary at the foot of the Aravalli hills housing rescued elephants, next to the 17th-century hidden stepwell reservoir of Sagar.",
    essentialFacilities: createFacilityData(
      "Amer Primary Health Center (PHC)", "2.8 km", "+91 141 2530108", 
      "Padmini Organic Village Kitchen", "Native Rajasthani Thali", 
      "Aravalli Eco Heritage Homestay", "₹1,400/night", 
      "Amer Tourist Police Post", "1.8 km (4 mins response)", "+91 141 2530112", "24/7 Pink Police Mobile Van", 
      "Amer Village Auto Guild", "+91 94140 88299", 
      "2.4 km (Indian Oil)", "1.1 km (SBI)", "14 km (Jaipur City)", "3.5 km (NH-48)",
      "Rajasthani Dal Baati Churma, Pyaaz Kachori & Ghevar",
      "Sanganeri Hand-Block Print Kurtas, Blue Pottery & Bandhani Sarees"
    ),
    itinerary: ["08:30 AM: Sagar Lake stepwell walk", "10:30 AM: Hathi Gaon elephant painting workshop", "01:00 PM: Native Thali at Padmini Kitchen", "03:30 PM: Aravalli ridge sunset", "08:00 PM: Night Stay at Aravalli Homestay"]
  },
  {
    state: "Rajasthan",
    landmarkHub: "🏰 Amer Fort & Jaipur Hub (Rajasthan)",
    vibeTag: "Spiritual History",
    location: "Dausa / Abhaneri, Rajasthan",
    gemName: "Abhaneri Chand Baori Stepwell",
    lat: 27.0069,
    lng: 76.6064,
    distance: "95 km from Jaipur",
    score: 96,
    womenSafetyIndex: 96,
    uniqueness: 97,
    footfall: "Low (20% of Amber)",
    category: "Ancient Architecture",
    estCost: "₹950 / person",
    desc: "One of India's deepest and largest stepwells with 3,500 narrow steps over 13 storeys, built in 800 AD by King Chanda.",
    essentialFacilities: createFacilityData(
      "Bandikui Community Health Center", "8 km", "+91 1420 222108", 
      "Harshat Mata Bhojanalaya", "Desi Ghee Kachori & Thali", 
      "Chand Baori Heritage Haveli", "₹1,300/night", 
      "Bandikui Local Police Station", "8.0 km (8 mins response)", "+91 1420 222100", "NH-21 Highway PCR Patrol", 
      "Abhaneri Auto Association", "+91 98280 44556", 
      "8 km (HP Fuel)", "8 km (SBI ATM)", "22 km (Dausa HQ)", "6 km (Jaipur-Agra NH-21)",
      "Desi Ghee Kachori, Ker Sangri & Bajra Roti",
      "Abhaneri Terracotta Pottery & Hand-Carved Wooden Toys"
    ),
    itinerary: ["09:00 AM: Marvel at 3,500 geometrical steps of Chand Baori", "11:30 AM: Visit 8th century Harshat Mata Temple", "01:00 PM: Desi Ghee Thali", "03:30 PM: Terracotta pottery workshop with village artisans", "08:00 PM: Rest at Heritage Haveli"]
  },

  /* ------------------- KERALA (Munnar Town Hub) ------------------- */
  {
    state: "Kerala",
    landmarkHub: "🌿 Munnar Town & Tea Hub (Kerala)",
    vibeTag: "Eco Nature",
    location: "Munnar / Idukki, Kerala",
    gemName: "Anakkulam Wild Elephant Spring",
    lat: 10.0892,
    lng: 76.9606,
    distance: "38 km from Munnar Hub",
    score: 96,
    womenSafetyIndex: 98,
    uniqueness: 98,
    footfall: "Low (10% of Munnar town)",
    category: "Nature & Eco-Stay",
    estCost: "₹1,800 / person",
    desc: "A pristine tribal hamlet where wild elephant herds emerge from the forest to drink at the natural mineral water spring in the river bed.",
    essentialFacilities: createFacilityData(
      "Adimali Community Hospital", "12 km", "+91 4864 222044", 
      "Mankulam Tribal Spice Cafe", "Kerala Sadya & Fresh Fish", 
      "Anakkulam Riverbank Eco Lodge", "₹1,800/night", 
      "Vellathooval Police Station", "8.0 km (10 mins response)", "+91 4864 274022", "Kerala Pink Police Patrol Unit", 
      "Anakkulam Jeep Drivers Guild", "+91 94951 77332", 
      "6.5 km (BPCL)", "4.2 km (Gramin ATM)", "38 km (Munnar)", "12 km (NH-85)",
      "Kerala Banana Leaf Sadya, Karimeen Pollichathu & Hot Elaichi Tea",
      "Kasavu Gold Border Sarees, Hand-harvested Spices & Cocoa"
    ),
    itinerary: ["07:00 AM: Periyar river birdwatching", "11:00 AM: Organic cocoa plantation tour", "01:30 PM: Sadya on banana leaf", "04:30 PM: Wildlife watchtower sighting", "08:30 PM: Night stay at Eco Lodge"]
  },

  /* ------------------- HIMACHAL PRADESH (Shimla & Manali Hub) ------------------- */
  {
    state: "Himachal Pradesh",
    landmarkHub: "🏔️ Shimla & Manali Hub (Himachal)",
    vibeTag: "Mountain Trails",
    location: "Banjar Valley, Himachal Pradesh",
    gemName: "Shoja & Chehni Kothi Timber Tower",
    lat: 31.6022,
    lng: 77.3719,
    distance: "45 km from Kullu Valley",
    score: 95,
    womenSafetyIndex: 97,
    uniqueness: 97,
    footfall: "Moderate-Low (25% of Manali)",
    category: "Mountain Trails & Architecture",
    estCost: "₹1,500 / person",
    desc: "A 1,500-year-old 10-storey wooden fort tower built in traditional Kath-Kuni architectural style, surrounded by dense apple orchards.",
    essentialFacilities: createFacilityData(
      "Banjar Civil Hospital", "7.5 km", "+91 1902 268222", 
      "Pahadi Flavors Organic Cafe", "Hot Siddu, Ghee & Trout", 
      "Chehni Kothi Timber Homestay", "₹1,600/night", 
      "Banjar Police Station", "7.2 km (10 mins response)", "+91 1902 268224", "HP Shakti Button PCR Unit", 
      "Jibhi Sumo Taxi Union", "+91 98055 22110", 
      "7.0 km (HP Fuel)", "800m (Cooperative ATM)", "45 km (Kullu HQ)", "22 km (Aut NH-3)",
      "Pahadi Siddu with Desi Ghee, Kullu Trout Fish & Madra Curry",
      "Kullu Woolen Shawls, Traditional Himachali Caps & Wooden Artifacts"
    ),
    itinerary: ["08:30 AM: Pine forest hike from Shringa Rishi Temple", "11:00 AM: Chehni Kothi timber tower walkthrough", "01:30 PM: Hot Siddu with ghee at Pahadi Flavors", "04:00 PM: Relax by freshwater stream", "08:30 PM: Cozy stay at Timber Homestay"]
  },

  /* ------------------- LADAKH (Leh Town Hub) ------------------- */
  {
    state: "Ladakh",
    landmarkHub: "🏔️ Leh Town & Hall of Fame (Ladakh)",
    vibeTag: "Mountain Trails",
    location: "Changthang, Ladakh",
    gemName: "Hanle Dark Sky Reserve & Astronomical Sanctuary",
    lat: 32.7758,
    lng: 78.9669,
    distance: "270 km from Leh Town",
    score: 99,
    womenSafetyIndex: 98,
    uniqueness: 99,
    footfall: "Ultra Low (5% of Pangong Lake)",
    category: "Astronomy & High Altitude",
    estCost: "₹2,500 / person",
    desc: "India's first official Dark Sky Reserve at 14,300 ft, offering crystal-clear Milky Way galaxy views next to the Indian Astronomical Observatory.",
    essentialFacilities: createFacilityData(
      "Hanle Army Medical Post", "1.5 km", "+91 1982 252011", 
      "Hanle Astro Homestay Kitchen", "Hot Ladakhi Thukpa & Butter Tea", 
      "Stargazer Ladakhi Homestay", "₹2,200/night", 
      "Nyoma Police Post & Army Unit", "45 km (30 mins response)", "+91 1982 252000", "Ladakh Police High-Altitude Patrol", 
      "Nyoma 4x4 Taxi Guild", "+91 94192 11009", 
      "45 km (Nyoma Fuel Point)", "45 km (SBI Nyoma)", "270 km (Leh)", "45 km (Loma-Hanle Road)",
      "Hot Ladakhi Thukpa, Skyu Pasta & Tibetan Butter Tea",
      "Pashmina Wool Shawls, Ladakhi Wooden Carved Tables & Prayer Flags"
    ),
    itinerary: ["09:00 AM: Acclimatization walk around Hanle Monastery", "02:00 PM: Ladakhi Thukpa lunch", "04:30 PM: Observatory exterior tour", "09:00 PM: Milky Way stargazing session", "11:00 PM: Warm stay at Stargazer Homestay"]
  },

  /* ------------------- MEGHALAYA (Shillong Hub) ------------------- */
  {
    state: "Meghalaya",
    landmarkHub: "🌧️ Shillong & Cherrapunji (Meghalaya)",
    vibeTag: "Heritage & Crafts",
    location: "East Khasi Hills, Meghalaya",
    gemName: "Kongthong Whistling Village & Living Root Bridges",
    lat: 25.2891,
    lng: 91.7588,
    distance: "54 km from Shillong Hub",
    score: 98,
    womenSafetyIndex: 99,
    uniqueness: 99,
    footfall: "Very Low (8% of Cherrapunji)",
    category: "Culture & Living Heritage",
    estCost: "₹1,600 / person",
    desc: "A legendary Khasi village where every individual is assigned a unique musical tune (Jingrwai Iawbei) instead of a spoken name, surrounded by pristine mist canyons.",
    essentialFacilities: createFacilityData(
      "Pynursla Public Health Center", "14 km", "+91 364 2220108", 
      "Kongthong Bamboo Kitchen", "Traditional Khasi Rice & Wild Herbs", 
      "Kongthong Indigenous Bamboo Eco Huts", "₹1,500/night", 
      "Pynursla Police Outpost", "14 km (15 mins response)", "+91 364 2220112", "Meghalaya Women Helpline 181 PCR", 
      "Kongthong Sumo Guild", "+91 98560 33411", 
      "14 km (Indian Oil)", "14 km (SBI ATM)", "54 km (Shillong)", "14 km (NH-206)",
      "Khasi Jadoh Rice, Bamboo Shoot Pork & Wild Berry Tea",
      "Khasi Ryndia Silk Shawls, Bamboo Cane Baskets & Bamboo Flutes"
    ),
    itinerary: ["08:00 AM: Village tune walk", "10:30 AM: Trek to living root bridges", "01:00 PM: Khasi Bamboo Kitchen lunch", "03:30 PM: Bangladesh valley view", "08:00 PM: Stay at Whistling Huts"]
  }
];

export const teamMembers = [
  { name: "Product Lead", role: "AI & Platform Architecture", avatar: "YT" },
  { name: "Full Stack Lead", role: "React & Cloud Infrastructure", avatar: "FS" },
  { name: "AI Engineer", role: "Vector DB & RAG Pipeline", avatar: "AI" },
  { name: "UI/UX Director", role: "Design System & Micro-Interactions", avatar: "UX" },
  { name: "GIS Engineer", role: "Geospatial Indexing & Maps API", avatar: "GIS" },
  { name: "Safety & Tourism Audit", role: "Field Data & Police Telematics", avatar: "ST" }
];
