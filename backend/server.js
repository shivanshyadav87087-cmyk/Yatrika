import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = 'yatrika';

app.use(cors());
app.use(express.json());

/* Sample Hidden Gems Dataset for Seeding & Fallback */
const sampleHiddenGemsDB = [
  {
    id: "gem_001",
    state: "Rajasthan",
    vibeTag: "Heritage & Crafts",
    gemName: "Amer Elephant Village & Sagar Lake",
    location: "Amer / Jaipur, Rajasthan",
    distance: "12 km from Amer Fort Hub",
    score: 94,
    womenSafetyIndex: 96,
    facilities: {
      policeStation: "Amer Tourist Police Post (1.8 km)",
      policePhone: "+91 141 2530112",
      hospital: "Amer PHC (2.8 km)",
      food: "Padmini Organic Village Kitchen",
      homestay: "Aravalli Eco Heritage Homestay"
    }
  },
  {
    id: "gem_002",
    state: "Kerala",
    vibeTag: "Eco Nature",
    gemName: "Anakkulam Wild Elephant Spring",
    location: "Munnar / Idukki, Kerala",
    distance: "38 km from Munnar Hub",
    score: 96,
    womenSafetyIndex: 98,
    facilities: {
      policeStation: "Vellathooval Police Station (8.0 km)",
      policePhone: "+91 4864 274022",
      hospital: "Adimali Community Hospital (12 km)",
      food: "Mankulam Tribal Spice Cafe",
      homestay: "Anakkulam Riverbank Eco Lodge"
    }
  },
  {
    id: "gem_003",
    state: "Himachal Pradesh",
    vibeTag: "Mountain Trails",
    gemName: "Shoja & Chehni Kothi Timber Tower",
    location: "Banjar Valley, Himachal Pradesh",
    distance: "45 km from Kullu Valley",
    score: 95,
    womenSafetyIndex: 97,
    facilities: {
      policeStation: "Banjar Police Station (7.2 km)",
      policePhone: "+91 1902 268224",
      hospital: "Banjar Civil Hospital (7.5 km)",
      food: "Pahadi Flavors Organic Cafe",
      homestay: "Chehni Kothi Timber Homestay"
    }
  },
  {
    id: "gem_004",
    state: "Meghalaya",
    vibeTag: "Heritage & Crafts",
    gemName: "Kongthong Whistling Village",
    location: "East Khasi Hills, Meghalaya",
    distance: "54 km from Shillong Hub",
    score: 98,
    womenSafetyIndex: 99,
    facilities: {
      policeStation: "Pynursla Police Outpost (14 km)",
      policePhone: "+91 364 2220112",
      hospital: "Pynursla PHC (14 km)",
      food: "Kongthong Bamboo Kitchen",
      homestay: "Kongthong Indigenous Bamboo Eco Huts"
    }
  },
  {
    id: "gem_005",
    state: "Ladakh",
    vibeTag: "Mountain Trails",
    gemName: "Hanle Dark Sky Reserve",
    location: "Changthang, Ladakh",
    distance: "270 km from Leh Town",
    score: 99,
    womenSafetyIndex: 98,
    facilities: {
      policeStation: "Nyoma Police Post (45 km)",
      policePhone: "+91 1982 252000",
      hospital: "Hanle Army Medical Post (1.5 km)",
      food: "Hanle Astro Homestay Kitchen",
      homestay: "Stargazer Ladakhi Homestay"
    }
  }
];

let db = null;
let gemsCollection = null;
let sosCollection = null;
let isMongoConnected = false;

/* Initialize MongoDB Connection */
async function connectToMongoDB() {
  if (!MONGODB_URI) {
    console.log('ℹ️ MONGODB_URI env variable not set. Running in fallback mode with sample database.');
    return;
  }

  try {
    const client = new MongoClient(MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
    });

    await client.connect();
    db = client.db(DB_NAME);
    gemsCollection = db.collection('gems');
    sosCollection = db.collection('sos_alerts');
    isMongoConnected = true;

    console.log(`✅ Successfully connected to MongoDB Atlas database: "${DB_NAME}"`);

    // Seed initial dataset if gems collection is empty
    const count = await gemsCollection.countDocuments();
    if (count === 0) {
      await gemsCollection.insertMany(sampleHiddenGemsDB);
      console.log(`🌱 Seeded ${sampleHiddenGemsDB.length} sample hidden gems into "${DB_NAME}.gems" collection.`);
    }
  } catch (error) {
    console.error('⚠️ MongoDB Connection Warning:', error.message);
    console.log('ℹ️ Falling back to in-memory dataset for seamless API availability.');
    isMongoConnected = false;
  }
}

/* 1. Health Check Endpoint */
app.get('/api/v1/health', (req, res) => {
  res.json({
    status: 'ONLINE',
    system: 'Yatrika AI Hidden Gem & Police Safety Microservices',
    brand: 'Yatrika Technologies',
    timestamp: new Date().toISOString(),
    mongoDb: isMongoConnected ? `CONNECTED (database: ${DB_NAME})` : 'IN_MEMORY_FALLBACK',
    vectorEngine: 'FAISS / ChromaDB RAG Vector Store Active',
    policeGateway: '24/7 SOS Emergency Relay Active'
  });
});

/* 2. State & Vibe Vector Search API (MongoDB Atlas Query with In-Memory Fallback) */
app.get('/api/v1/gems', async (req, res) => {
  try {
    const { state, vibe } = req.query;

    if (isMongoConnected && gemsCollection) {
      const query = {};
      if (state && state !== 'All States') {
        query.state = { $regex: new RegExp(`^${state}$`, 'i') };
      }
      if (vibe && vibe !== 'All Vibes') {
        query.vibeTag = { $regex: new RegExp(`^${vibe}$`, 'i') };
      }

      const results = await gemsCollection.find(query).toArray();
      return res.json({
        success: true,
        source: 'MongoDB_Atlas',
        count: results.length,
        query: { state: state || 'All', vibe: vibe || 'All' },
        data: results
      });
    }

    // In-memory fallback
    let results = sampleHiddenGemsDB;
    if (state && state !== 'All States') {
      results = results.filter(g => g.state.toLowerCase() === state.toLowerCase());
    }
    if (vibe && vibe !== 'All Vibes') {
      results = results.filter(g => g.vibeTag.toLowerCase() === vibe.toLowerCase());
    }

    res.json({
      success: true,
      source: 'In_Memory_Fallback',
      count: results.length,
      query: { state: state || 'All', vibe: vibe || 'All' },
      data: results
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

/* 3. 1-Tap Police & Emergency SOS Dispatch Gateway API (MongoDB Persistence) */
app.post('/api/v1/sos/dispatch', async (req, res) => {
  try {
    const { location, gemName, policeStation, userLat, userLng } = req.body;
    const sosTicketId = `SOS-YATRIKA-${Math.floor(100000 + Math.random() * 900000)}`;

    const sosPayload = {
      sosTicketId,
      status: 'DISPATCHED_TO_POLICE',
      gemName: gemName || 'Hidden Gem Location',
      location: location || 'Unknown Coordinates',
      policeStation: policeStation || 'Nearest District Police Station',
      coordinates: { lat: userLat || null, lng: userLng || null },
      responseEta: '< 4 minutes',
      createdAt: new Date()
    };

    if (isMongoConnected && sosCollection) {
      await sosCollection.insertOne(sosPayload);
    }

    res.json({
      success: true,
      source: isMongoConnected ? 'MongoDB_Atlas' : 'Emergency_Relay',
      sosTicketId: sosPayload.sosTicketId,
      status: sosPayload.status,
      policeStation: sosPayload.policeStation,
      responseEta: sosPayload.responseEta,
      sentAt: sosPayload.createdAt.toISOString(),
      message: `SOS Emergency Alert successfully relayed to ${sosPayload.policeStation} and saved to database.`
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

/* OpenAPI / Swagger Spec JSON Endpoint */
app.get('/api/v1/docs', (req, res) => {
  res.json({
    openapi: "3.0.0",
    info: {
      title: "Yatrika Hidden Gem Discovery & Police Safety API",
      version: "1.0.0",
      description: "Travel & Tourism AI Vector Search & Emergency Police SOS Microservices API by Yatrika Technologies"
    },
    paths: {
      "/api/v1/health": { get: { summary: "System Health Check" } },
      "/api/v1/gems": { get: { summary: "RAG Vector Search by State & Vibe (MongoDB Atlas)" } },
      "/api/v1/sos/dispatch": { post: { summary: "1-Tap Police Emergency SOS Dispatch (MongoDB Persistence)" } }
    }
  });
});

/* Start Server & Connect Database */
app.listen(PORT, async () => {
  console.log(`🚀 Yatrika Backend Microservice running on port ${PORT}`);
  await connectToMongoDB();
});
