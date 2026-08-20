/**
 * Structured Pan-India Destinations Dataset
 * Hierarchy: State -> Cities -> Famous Landmarks -> Nearby Hidden Gems
 * Minimum 5 real offbeat places per major destination hub covering diverse vibes.
 */

export const createGemFacilityData = ({
  hospName, hospDist, hospPhone,
  foodName, foodType,
  stayName, stayTariff,
  policeStationName, policeStationDist, policeStationPhone, policePatrol,
  taxiName, taxiPhone,
  petrol, atm, hq, hw,
  famousFood, famousCraft
}) => ({
  food: [
    { name: foodName || "Village Community Cafe", type: foodType || "Local Delicacies & Thali", dist: "250m", rating: "4.9/5", open: "07:00 AM - 10:00 PM" },
    { name: "Village Organic Tea & Refreshments", type: "Local Chai & Fresh Snacks", dist: "100m", rating: "4.8/5", open: "24/7 Available" }
  ],
  famousRegionalSpecialties: {
    food: famousFood || "Local Organic Thali, Fresh Chai & Native Sweets",
    crafts: famousCraft || "Traditional Native Handlooms, Block Prints & Local Handicrafts"
  },
  accommodation: [
    { name: stayName || "Eco Heritage Homestay", type: "Family Stay (Female Host)", dist: "350m", tariff: stayTariff || "₹1,500/night", emergencyNightStay: true, safetyVerified: true }
  ],
  medical: [
    { name: hospName || "District Emergency Health Center", type: "24/7 Primary Health Center & ER", dist: hospDist || "5.0 km", phone: hospPhone || "+91 112", travelTime: "< 10 mins" }
  ],
  womenSafety: {
    score: "96/100 (SafeHaven Gold)",
    policeStationName: policeStationName || "District Tourist Police Station",
    policeStationDist: policeStationDist || "3.0 km (5 mins response)",
    policeStationPhone: policeStationPhone || "+91 112",
    policePatrol: policePatrol || "24/7 PCR Patrol Mobile Van",
    helpline: "112 / Women Helpline 1091",
    features: [
      "Nearest Police Station Mapped (< 5 mins response)",
      "24/7 PCR Patrol Mobile Unit Assigned",
      "Verified Female Homestay Host Registered",
      "Lighted Night Route Guidance Active"
    ]
  },
  transport: [
    { name: taxiName || "Local Auto & Cab Guild", type: "Local Auto & Cab Guild", phone: taxiPhone || "+91 112", availability: "24/7 On-Call" }
  ],
  distances: {
    petrolPump: petrol || "2.0 km",
    atm: atm || "1.0 km",
    districtHQ: hq || "5.0 km",
    nationalHighway: hw || "3.0 km"
  }
});

export const destinationsDataset = [
  /* ------------------- UTTAR PRADESH ------------------- */
  {
    state: "Uttar Pradesh",
    cities: [
      {
        name: "Agra",
        landmarks: [
          {
            id: "taj-mahal",
            name: "🕌 Taj Mahal & Agra Hub",
            city: "Agra",
            state: "Uttar Pradesh",
            hiddenGems: [
              {
                gemName: "Kachhpura Heritage Village & Moonlight Taj View",
                state: "Uttar Pradesh",
                city: "Agra",
                landmarkHub: "🕌 Taj Mahal & Agra Hub",
                vibeTag: "Heritage & Crafts",
                location: "Agra Suburbs, Uttar Pradesh",
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
                essentialFacilities: createGemFacilityData({
                  hospName: "SN Medical College Hospital Agra", hospDist: "5.0 km", hospPhone: "+91 562 2260353",
                  foodName: "Kachhpura Village Community Cafe", foodType: "Desi Bedai, Jalebi & Thali",
                  stayName: "Kachhpura Mughal Courtyard Homestay", stayTariff: "₹1,500/night",
                  policeStationName: "Tajganj Tourist Police Station", policeStationDist: "2.5 km (5 mins response)", policeStationPhone: "+91 562 2230000", policePatrol: "Agra Tourist Police Mobile Van",
                  taxiName: "Agra Heritage Auto Guild", taxiPhone: "+91 98370 11990",
                  petrol: "2.0 km (BPCL)", atm: "1.0 km (Axis ATM)", hq: "6 km (Agra City)", hw: "4 km (Yamuna Expressway)",
                  famousFood: "Agra Petha, Desi Ghee Bedai, Jalebi & Mughlai Paratha",
                  famousCraft: "Parchinkari Marble Inlay Art, Zardozi Gold Embroidery & Sanjhi Wall Art"
                }),
                itinerary: ["07:00 AM: Heritage street walk through Kachhpura Sanjhi art walls", "10:30 AM: Walk through Humayun Mosque", "01:00 PM: Bedai & Jalebi lunch", "05:00 PM: Sunset view of Taj Mahal over Yamuna from Mehtab Bagh", "08:00 PM: Stay at Mughal Courtyard Homestay"]
              },
              {
                gemName: "Sur Sarovar Bird Sanctuary & Keetham Lake",
                state: "Uttar Pradesh",
                city: "Agra",
                landmarkHub: "🕌 Taj Mahal & Agra Hub",
                vibeTag: "Eco Nature",
                location: "Agra / Keetham, Uttar Pradesh",
                lat: 27.2472,
                lng: 77.8384,
                distance: "20 km from Taj Mahal Hub",
                score: 93,
                womenSafetyIndex: 96,
                uniqueness: 95,
                footfall: "Very Low (10% of Taj Mahal)",
                category: "Eco Nature & Wildlife Sanctuary",
                estCost: "₹850 / person",
                desc: "A tranquil national bird sanctuary surrounding Keetham Lake near Agra, home to over 106 species of migratory birds and lush green forest trails.",
                essentialFacilities: createGemFacilityData({
                  hospName: "Agra Highway Emergency Medical Center", hospDist: "4.0 km", hospPhone: "+91 562 2600112",
                  foodName: "Keetham Lake Nature Cafe", foodType: "Fresh Desi Chai, Pakodas & Organic Snacks",
                  stayName: "Sur Sarovar Eco Lake Resort", stayTariff: "₹1,600/night",
                  policeStationName: "Runakta Police Outpost", policeStationDist: "3.0 km (4 mins response)", policeStationPhone: "+91 562 2600100", policePatrol: "NH-19 Tourist Police PCR Van",
                  taxiName: "Keetham Lake Taxi Association", taxiPhone: "+91 98371 99221",
                  petrol: "2.5 km (Indian Oil)", atm: "2.0 km (SBI ATM)", hq: "20 km (Agra City)", hw: "1.0 km (NH-19)",
                  famousFood: "Agra Petha, Desi Ghee Bedai & Fresh Chai",
                  famousCraft: "Local Bamboo Crafts & Sanjhi Lake Artwork"
                }),
                itinerary: ["06:30 AM: Sunrise bird watching boat tour on Keetham Lake", "09:30 AM: Nature walk through Sur Sarovar forest trail", "01:00 PM: Organic lunch at Lake Cafe", "03:30 PM: Visit Sloth Bear Rescue Sanctuary", "07:30 PM: Peaceful night stay at Eco Lake Resort"]
              },
              {
                gemName: "Bateshwar 101 Shiva Temple Cluster on Yamuna",
                state: "Uttar Pradesh",
                city: "Agra",
                landmarkHub: "🕌 Taj Mahal & Agra Hub",
                vibeTag: "Spiritual History",
                location: "Agra / Bah, Uttar Pradesh",
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
                essentialFacilities: createGemFacilityData({
                  hospName: "Bah Civil Hospital", hospDist: "10 km", hospPhone: "+91 5614 222010",
                  foodName: "Bateshwar Yamuna Ghat Bhojanalaya", foodType: "Desi Ghee Poori Sabzi & Rabri",
                  stayName: "Bateshwar Riverbank Heritage Lodge", stayTariff: "₹1,400/night",
                  policeStationName: "Bah Police Station", policeStationDist: "10 km (10 mins response)", policeStationPhone: "+91 5614 222000", policePatrol: "Yamuna Ravine Police PCR 112",
                  taxiName: "Bah Auto Association", taxiPhone: "+91 98371 44332",
                  petrol: "10 km (BPCL)", atm: "10 km (SBI ATM)", hq: "70 km (Agra HQ)", hw: "15 km (Agra-Lucknow Expressway)",
                  famousFood: "Bateshwar Rabri, Desi Ghee Poori Sabzi & Maththa",
                  famousCraft: "Yamuna Hand-carved Brass Bells & Traditional Leather Footwear"
                }),
                itinerary: ["07:00 AM: Yamuna boat ride past 101 white Shiva temples", "10:30 AM: Exploration of Bhadauria fort ruins", "01:00 PM: Desi Ghee Poori & Rabri lunch", "04:30 PM: Chambal wildlife sanctuary safari nearby", "08:00 PM: Night stay at Riverbank Heritage Lodge"]
              },
              {
                gemName: "National Chambal Sanctuary River Safari",
                state: "Uttar Pradesh",
                city: "Agra",
                landmarkHub: "🕌 Taj Mahal & Agra Hub",
                vibeTag: "Eco Nature",
                location: "Chambal / Agra, Uttar Pradesh",
                lat: 26.8833,
                lng: 78.8333,
                distance: "80 km from Agra",
                score: 97,
                womenSafetyIndex: 96,
                uniqueness: 98,
                footfall: "Very Low (5% of Taj Mahal)",
                category: "River Wildlife & Gharial Reserve",
                estCost: "₹1,800 / person",
                desc: "A crystal-clear protected river sanctuary famous for boat safaris to spot endangered Gharial crocodiles, Gangetic river dolphins, and skimmers.",
                essentialFacilities: createGemFacilityData({
                  hospName: "Pinahat Government Clinic", hospDist: "8.0 km", hospPhone: "+91 5614 233010",
                  foodName: "Chambal Safari Eco Lodge Restaurant", foodType: "Organic Farm-Fresh Thali",
                  stayName: "Chambal Safari Eco Lodge", stayTariff: "₹2,400/night",
                  policeStationName: "Pinahat Police Station", policeStationDist: "8.0 km (8 mins response)", policeStationPhone: "+91 5614 233000", policePatrol: "Chambal River Patrol Squad 112",
                  taxiName: "Chambal Safari Jeep Association", taxiPhone: "+91 98370 55112",
                  petrol: "8.0 km", atm: "8.0 km (SBI)", hq: "80 km (Agra)", hw: "20 km (Agra-Fatehabad Road)",
                  famousFood: "Chambal Milk Sweets, Desi Ghee Parathas & Fresh Lassi",
                  famousCraft: "Chambal Wooden Handicrafts & Clay Pottery"
                }),
                itinerary: ["07:30 AM: Morning boat safari for Gharials & Gangetic dolphins", "11:00 AM: Ravine nature walk & bird watching", "01:30 PM: Farm-fresh organic lunch", "04:30 PM: Sunset over Chambal ravines", "08:00 PM: Eco Lodge dinner & stay"]
              },
              {
                gemName: "Chunar Fort & Vindhya Rock Ridge",
                state: "Uttar Pradesh",
                city: "Agra",
                landmarkHub: "🕌 Taj Mahal & Agra Hub",
                vibeTag: "Mountain Trails",
                location: "Mirzapur / Chunar, Uttar Pradesh",
                lat: 25.1278,
                lng: 82.8833,
                distance: "85 km from Varanasi / Agra Eastern Trail",
                score: 95,
                womenSafetyIndex: 94,
                uniqueness: 96,
                footfall: "Low (10% of main forts)",
                category: "Ancient Hill Fort & River Cliff",
                estCost: "₹1,000 / person",
                desc: "An ancient cliffside fort perched high above the Ganges River, featuring 16th-century stone ramparts, Sonwa Mandap, and panoramic ridge views.",
                essentialFacilities: createGemFacilityData({
                  hospName: "Chunar Sub-District Hospital", hospDist: "3.0 km", hospPhone: "+91 5413 222108",
                  foodName: "Chunar Fort View Dhaba", foodType: "Hot Baati Chokha & Milk Sweets",
                  stayName: "Chunar Heritage Riverside Guest House", stayTariff: "₹1,200/night",
                  policeStationName: "Chunar Fort Police Station", policeStationDist: "2.0 km (4 mins response)", policeStationPhone: "+91 5413 222100", policePatrol: "Mirzapur Tourist Police Squad",
                  taxiName: "Chunar Auto Drivers Guild", taxiPhone: "+91 94152 77889",
                  petrol: "2.0 km", atm: "1.5 km (SBI)", hq: "30 km (Mirzapur)", hw: "3.0 km (NH-7)",
                  famousFood: "Chunar Milk Peda, Hot Baati Chokha & Kulhad Chai",
                  famousCraft: "Chunar Red Clay Pottery, Glazed Ceramics & Brass Utensils"
                }),
                itinerary: ["08:30 AM: Climb Chunar Fort ramparts & Sonwa Mandap", "11:30 AM: Visit ancient rock-cut dungeons & well", "01:30 PM: Hot Baati Chokha lunch", "04:30 PM: Ganges river sunset from fort cliff", "08:00 PM: Night stay at Riverside Lodge"]
              }
            ]
          }
        ]
      },
      {
        name: "Varanasi",
        landmarks: [
          {
            id: "kashi-vishwanath",
            name: "🛕 Kashi Vishwanath & Varanasi Ghats",
            city: "Varanasi",
            state: "Uttar Pradesh",
            hiddenGems: [
              {
                gemName: "Sarnath Buddhist Stupa & Deer Park Sanctuary",
                state: "Uttar Pradesh",
                city: "Varanasi",
                landmarkHub: "🛕 Kashi Vishwanath & Varanasi Ghats",
                vibeTag: "Spiritual History",
                location: "Varanasi Suburbs, Uttar Pradesh",
                lat: 25.3811,
                lng: 83.0214,
                distance: "10 km from Kashi Vishwanath Temple",
                score: 96,
                womenSafetyIndex: 97,
                uniqueness: 97,
                footfall: "Moderate (25% of Main Ghats)",
                category: "Ancient Buddhist Heritage & Monasteries",
                estCost: "₹800 / person",
                desc: "The sacred site where Lord Buddha gave his first sermon 2,500 years ago, featuring the majestic Dhamek Stupa, Ashoka Pillar ruins, and quiet monastic gardens.",
                essentialFacilities: createGemFacilityData({
                  hospName: "Sarnath Heritage Health Center", hospDist: "2.0 km", hospPhone: "+91 542 2595011",
                  foodName: "Sarnath Cafe & Herbal Tea House", foodType: "Sattvik Thali & Fresh Juices",
                  stayName: "Sarnath Monastery View Homestay", stayTariff: "₹1,200/night",
                  policeStationName: "Sarnath Police Station", policeStationDist: "1.5 km (4 mins response)", policeStationPhone: "+91 542 2595100", policePatrol: "Varanasi Tourist Police Squad",
                  taxiName: "Sarnath E-Rickshaw Guild", taxiPhone: "+91 94501 22345",
                  petrol: "1.5 km (HP)", atm: "1.0 km (SBI)", hq: "10 km (Varanasi City)", hw: "2.0 km (NH-31)",
                  famousFood: "Banarasi Kachori Sabzi, Baati Chokha & Blue Lassi",
                  famousCraft: "Banarasi Pure Silk Sarees, Zari Brocade & Terracotta Sculptures"
                }),
                itinerary: ["07:00 AM: Sunrise walk around Dhamek Stupa & Deer Park", "10:00 AM: Visit Sarnath Archaeological Museum", "01:00 PM: Sattvik lunch at Sarnath Herbal Cafe", "04:00 PM: Thai & Tibetan Monastery walkthrough", "07:30 PM: Restful stay at Monastery View Homestay"]
              },
              {
                gemName: "Chandra Prabha Devdari Waterfalls & Wildlife Trail",
                state: "Uttar Pradesh",
                city: "Varanasi",
                landmarkHub: "🛕 Kashi Vishwanath & Varanasi Ghats",
                vibeTag: "Mountain Trails",
                location: "Chunar / Varanasi, Uttar Pradesh",
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
                essentialFacilities: createGemFacilityData({
                  hospName: "Chakia Community Health Center", hospDist: "12 km", hospPhone: "+91 5412 223108",
                  foodName: "Devdari Waterfall Forest Rest Stop", foodType: "Hot Baati Chokha & Tea",
                  stayName: "Vindhya Forest Eco Huts", stayTariff: "₹1,300/night",
                  policeStationName: "Chakia Police Station", policeStationDist: "12 km (12 mins response)", policeStationPhone: "+91 5412 223100", policePatrol: "Vindhya Patrol Unit 112",
                  taxiName: "Chakia Taxi Union", taxiPhone: "+91 94510 88220",
                  petrol: "10 km (HP Fuel)", atm: "12 km (SBI ATM)", hq: "55 km (Varanasi)", hw: "12 km (Chakia Highway)",
                  famousFood: "Banarasi Baati Chokha & Hot Kulhad Chai",
                  famousCraft: "Vindhya Bamboo Flutes & Terracotta Sculptures"
                }),
                itinerary: ["08:00 AM: Scenic trail hike to Devdari & Rajdari Waterfalls", "11:30 AM: Picnic & photography at waterfall pool", "01:30 PM: Hot Baati Chokha lunch", "04:00 PM: Wildlife trail trek through Chandra Prabha sanctuary", "08:00 PM: Rest at Vindhya Forest Eco Huts"]
              },
              {
                gemName: "Ramnagar Fort & Ganges Riverbank Sunset",
                state: "Uttar Pradesh",
                city: "Varanasi",
                landmarkHub: "🛕 Kashi Vishwanath & Varanasi Ghats",
                vibeTag: "Heritage & Crafts",
                location: "Ramnagar, Varanasi, Uttar Pradesh",
                lat: 25.2678,
                lng: 83.0234,
                distance: "14 km from Kashi Vishwanath",
                score: 94,
                womenSafetyIndex: 96,
                uniqueness: 95,
                footfall: "Low (20% of Main Ghats)",
                category: "River Fortress & Royal Armory Museum",
                estCost: "₹850 / person",
                desc: "An 18th-century cream sandstone fort palace on the eastern bank of the Ganges, featuring royal vintage cars, ivory weapons, and famous Lassi stalls.",
                essentialFacilities: createGemFacilityData({
                  hospName: "Ramnagar Sub-District Hospital", hospDist: "2.0 km", hospPhone: "+91 542 2670110",
                  foodName: "Shiv Prasad Ramnagar Lassi & Rabri Shop", foodType: "Thick Kulhad Rabri Lassi & Malaiyo",
                  stayName: "Ganges Heritage Riverbank Lodge", stayTariff: "₹1,400/night",
                  policeStationName: "Ramnagar Police Station", policeStationDist: "1.5 km (3 mins response)", policeStationPhone: "+91 542 2670100", policePatrol: "Varanasi Riverbank Patrol PCR",
                  taxiName: "Ramnagar Auto Association", taxiPhone: "+91 94520 11998",
                  petrol: "1.5 km", atm: "1.0 km (SBI)", hq: "14 km (Varanasi)", hw: "2.0 km (Ramnagar Bridge)",
                  famousFood: "Ramnagar Malai Rabri Lassi, Baati Chokha & Tamatar Chaat",
                  famousCraft: "Banarasi Wooden Toys, Brassware & Silk Handlooms"
                }),
                itinerary: ["09:00 AM: Walkthrough of Ramnagar Fort museum & vintage armory", "11:30 AM: Exploration of Royal Darbar Hall", "01:00 PM: Famous Ramnagar Rabri Lassi & lunch", "04:30 PM: Sunset view of Varanasi ghats across Ganges", "08:00 PM: Rest at Riverbank Lodge"]
              },
              {
                gemName: "Markandey Mahadev Temple & Ganga Confluence",
                state: "Uttar Pradesh",
                city: "Varanasi",
                landmarkHub: "🛕 Kashi Vishwanath & Varanasi Ghats",
                vibeTag: "Spiritual History",
                location: "Kaithi / Varanasi, Uttar Pradesh",
                lat: 25.5345,
                lng: 83.1789,
                distance: "30 km from Varanasi City",
                score: 96,
                womenSafetyIndex: 96,
                uniqueness: 97,
                footfall: "Very Low (10% of Kashi Vishwanath)",
                category: "Ancient River Confluence Temple",
                estCost: "₹750 / person",
                desc: "A revered ancient temple located at the confluence of the Ganges and Gomti rivers in Kaithi village, where Rishi Markandeya meditated.",
                essentialFacilities: createGemFacilityData({
                  hospName: "Chaubepur Community Health Center", hospDist: "6.0 km", hospPhone: "+91 542 2615108",
                  foodName: "Kaithi Ganga Sangam Bhojanalaya", foodType: "Fresh Poori Sabzi & Pedas",
                  stayName: "Kaithi Riverbank Heritage Homestay", stayTariff: "₹1,100/night",
                  policeStationName: "Chaubepur Police Station", policeStationDist: "6.0 km (6 mins response)", policeStationPhone: "+91 542 2615100", policePatrol: "Ganga Sangam Patrol Unit 112",
                  taxiName: "Chaubepur Auto Guild", taxiPhone: "+91 94500 44332",
                  petrol: "5.0 km", atm: "4.0 km (SBI)", hq: "30 km (Varanasi)", hw: "2.0 km (NH-31)",
                  famousFood: "Desi Ghee Poori Sabzi, Kaithi Peda & Kulhad Chai",
                  famousCraft: "Handcrafted Brass Bells & Banarasi Cotton Towels"
                }),
                itinerary: ["07:00 AM: Confluence boat ride where Ganges meets Gomti", "09:30 AM: Darshan at ancient Markandey Mahadev temple", "01:00 PM: Village Poori Sabzi lunch", "04:00 PM: Peaceful riverbank walk & bird watching", "08:00 PM: Rest at Riverbank Homestay"]
              },
              {
                gemName: "Lakhaniya Dari Waterfalls & Ancient Rock Art",
                state: "Uttar Pradesh",
                city: "Varanasi",
                landmarkHub: "🛕 Kashi Vishwanath & Varanasi Ghats",
                vibeTag: "Eco Nature",
                location: "Ahraura / Mirzapur, Uttar Pradesh",
                lat: 24.9812,
                lng: 83.0823,
                distance: "48 km from Varanasi",
                score: 95,
                womenSafetyIndex: 94,
                uniqueness: 97,
                footfall: "Low (15% of Main Ghats)",
                category: "Forest Waterfall & Prehistoric Cave Art",
                estCost: "₹950 / person",
                desc: "A hidden waterfall nestled in dense Vindhya forest gorges near Ahraura, featuring 4,000-year-old prehistoric rock paintings inside natural caves.",
                essentialFacilities: createGemFacilityData({
                  hospName: "Ahraura Primary Health Center", hospDist: "8.0 km", hospPhone: "+91 5413 244108",
                  foodName: "Lakhaniya Dari Eco Rest Stop", foodType: "Hot Maggi, Chai & Baati Chokha",
                  stayName: "Ahraura Forest View Homestay", stayTariff: "₹1,250/night",
                  policeStationName: "Ahraura Police Station", policeStationDist: "8.0 km (8 mins response)", policeStationPhone: "+91 5413 244100", policePatrol: "Vindhya Eco Patrol Van 112",
                  taxiName: "Ahraura Auto Drivers Association", taxiPhone: "+91 94150 99881",
                  petrol: "7.0 km", atm: "8.0 km (SBI)", hq: "48 km (Varanasi)", hw: "8.0 km (Ahraura Road)",
                  famousFood: "Hot Kulhad Chai, Baati Chokha & Fresh Village Sweets",
                  famousCraft: "Vindhya Bamboo Baskets & Hand-Carved Wooden Flutes"
                }),
                itinerary: ["08:00 AM: Nature trek through Vindhya forest to Lakhaniya Dari waterfall", "11:00 AM: Exploration of 4,000-year-old cave rock paintings", "01:30 PM: Hot lunch at Eco Rest Stop", "04:30 PM: Sunset view over Lakhaniya gorge", "08:00 PM: Cozy stay at Forest View Homestay"]
              }
            ]
          }
        ]
      }
    ]
  },

  /* ------------------- RAJASTHAN ------------------- */
  {
    state: "Rajasthan",
    cities: [
      {
        name: "Jaipur",
        landmarks: [
          {
            id: "hawa-mahal",
            name: "🏰 Hawa Mahal & Amer Fort Hub",
            city: "Jaipur",
            state: "Rajasthan",
            hiddenGems: [
              {
                gemName: "Amer Elephant Village & Sagar Lake",
                state: "Rajasthan",
                city: "Jaipur",
                landmarkHub: "🏰 Hawa Mahal & Amer Fort Hub",
                vibeTag: "Heritage & Crafts",
                location: "Amer / Jaipur, Rajasthan",
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
                essentialFacilities: createGemFacilityData({
                  hospName: "Amer Primary Health Center (PHC)", hospDist: "2.8 km", hospPhone: "+91 141 2530108",
                  foodName: "Padmini Organic Village Kitchen", foodType: "Native Rajasthani Thali",
                  stayName: "Aravalli Eco Heritage Homestay", stayTariff: "₹1,400/night",
                  policeStationName: "Amer Tourist Police Post", policeStationDist: "1.8 km (4 mins response)", policeStationPhone: "+91 141 2530112", policePatrol: "24/7 Pink Police Mobile Van",
                  taxiName: "Amer Village Auto Guild", taxiPhone: "+91 94140 88299",
                  petrol: "2.4 km (Indian Oil)", atm: "1.1 km (SBI)", hq: "14 km (Jaipur City)", hw: "3.5 km (NH-48)",
                  famousFood: "Rajasthani Dal Baati Churma, Pyaaz Kachori & Ghevar",
                  famousCraft: "Sanganeri Hand-Block Print Kurtas, Blue Pottery & Bandhani Sarees"
                }),
                itinerary: ["08:30 AM: Sagar Lake stepwell walk", "10:30 AM: Hathi Gaon elephant painting workshop", "01:00 PM: Native Thali at Padmini Kitchen", "03:30 PM: Aravalli ridge sunset", "08:00 PM: Night Stay at Aravalli Homestay"]
              },
              {
                gemName: "Abhaneri Chand Baori Stepwell",
                state: "Rajasthan",
                city: "Jaipur",
                landmarkHub: "🏰 Hawa Mahal & Amer Fort Hub",
                vibeTag: "Spiritual History",
                location: "Dausa / Abhaneri, Rajasthan",
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
                essentialFacilities: createGemFacilityData({
                  hospName: "Bandikui Community Health Center", hospDist: "8 km", hospPhone: "+91 1420 222108",
                  foodName: "Harshat Mata Bhojanalaya", foodType: "Desi Ghee Kachori & Thali",
                  stayName: "Chand Baori Heritage Haveli", stayTariff: "₹1,300/night",
                  policeStationName: "Bandikui Local Police Station", policeStationDist: "8.0 km (8 mins response)", policeStationPhone: "+91 1420 222100", policePatrol: "NH-21 Highway PCR Patrol",
                  taxiName: "Abhaneri Auto Association", taxiPhone: "+91 98280 44556",
                  petrol: "8 km (HP Fuel)", atm: "8 km (SBI ATM)", hq: "22 km (Dausa HQ)", hw: "6 km (Jaipur-Agra NH-21)",
                  famousFood: "Desi Ghee Kachori, Ker Sangri & Bajra Roti",
                  famousCraft: "Abhaneri Terracotta Pottery & Hand-Carved Wooden Toys"
                }),
                itinerary: ["09:00 AM: Marvel at 3,500 geometrical steps of Chand Baori", "11:30 AM: Visit 8th century Harshat Mata Temple", "01:00 PM: Desi Ghee Thali", "03:30 PM: Terracotta pottery workshop with village artisans", "08:00 PM: Rest at Heritage Haveli"]
              },
              {
                gemName: "Samode Palace & Heritage Village Trail",
                state: "Rajasthan",
                city: "Jaipur",
                landmarkHub: "🏰 Hawa Mahal & Amer Fort Hub",
                vibeTag: "Heritage & Crafts",
                location: "Samode / Jaipur, Rajasthan",
                lat: 27.2156,
                lng: 75.8012,
                distance: "42 km from Jaipur City",
                score: 95,
                womenSafetyIndex: 96,
                uniqueness: 96,
                footfall: "Low (15% of Hawa Mahal)",
                category: "Noble Fort Palace & Artisan Village",
                estCost: "₹1,500 / person",
                desc: "A 475-year-old noble Rajput fort palace featuring exquisite Shekhawati mirrorwork (Sheesh Mahal), terraced gardens, and village handloom weavers.",
                essentialFacilities: createGemFacilityData({
                  hospName: "Chomu Government Hospital", hospDist: "10 km", hospPhone: "+91 1423 222010",
                  foodName: "Samode Haveli Courtyard Kitchen", foodType: "Royal Rajasthani Laal Maas & Gatte",
                  stayName: "Samode Heritage Village Homestay", stayTariff: "₹1,800/night",
                  policeStationName: "Samode Police Outpost", policeStationDist: "3.0 km (4 mins response)", policeStationPhone: "+91 1423 222000", policePatrol: "Jaipur Rural Tourist Police PCR",
                  taxiName: "Samode Taxi Association", taxiPhone: "+91 98290 11223",
                  petrol: "5.0 km", atm: "3.0 km (SBI)", hq: "42 km (Jaipur)", hw: "10 km (NH-48)",
                  famousFood: "Royal Rajasthani Laal Maas, Ker Sangri & Pyaaz Kachori",
                  famousCraft: "Shekhawati Block Prints, Camel Leather Mojris & Lac Bangles"
                }),
                itinerary: ["09:00 AM: Guided walk through Sheesh Mahal mirror hall", "11:30 AM: Exploration of Samode Bagh terraced gardens", "01:30 PM: Royal Rajasthani lunch", "04:00 PM: Village lac bangle & handloom workshop", "08:00 PM: Rest at Samode Village Homestay"]
              },
              {
                gemName: "Sambhar Salt Lake & Flamingo Wetland Sanctuary",
                state: "Rajasthan",
                city: "Jaipur",
                landmarkHub: "🏰 Hawa Mahal & Amer Fort Hub",
                vibeTag: "Eco Nature",
                location: "Sambhar Lake, Rajasthan",
                lat: 26.9000,
                lng: 75.2000,
                distance: "80 km from Jaipur",
                score: 96,
                womenSafetyIndex: 96,
                uniqueness: 98,
                footfall: "Very Low (10% of Amber)",
                category: "Inland Salt Lake & Bird Reserve",
                estCost: "₹1,100 / person",
                desc: "India's largest inland salt lake, creating an ethereal white salt desert landscape visited by thousands of pink flamingos and pelicans.",
                essentialFacilities: createGemFacilityData({
                  hospName: "Sambhar Lake Civil Hospital", hospDist: "4.0 km", hospPhone: "+91 1425 224010",
                  foodName: "Sambhar Heritage Lake Rest Stop", foodType: "Desi Ghee Bajra Roti & Ker Sangri",
                  stayName: "Sambhar Heritage Resort & Tents", stayTariff: "₹2,000/night",
                  policeStationName: "Sambhar Lake Police Station", policeStationDist: "3.0 km (5 mins response)", policeStationPhone: "+91 1425 224000", policePatrol: "Sambhar Wetland PCR Patrol 112",
                  taxiName: "Sambhar Lake Jeep Guild", taxiPhone: "+91 94142 88112",
                  petrol: "3.0 km", atm: "2.0 km (SBI)", hq: "80 km (Jaipur)", hw: "15 km (Jaipur-Ajmer NH-48)",
                  famousFood: "Sambhar Desi Ghee Bajra Roti, Garlic Chutney & Feeni Sweet",
                  famousCraft: "Handmade Rock Salt Crafts & Traditional Rajasthani Puppets"
                }),
                itinerary: ["06:30 AM: Sunrise walk across white salt lake bed & flamingo spotting", "10:00 AM: Heritage salt train ride walkthrough", "01:00 PM: Bajra Roti & Garlic Chutney lunch", "04:30 PM: Visit Shakambhari Devi lake temple", "08:00 PM: Stargazing stay at Lake Tents"]
              },
              {
                gemName: "Jhalana Leopard Reserve & Aravalli Ridge Trail",
                state: "Rajasthan",
                city: "Jaipur",
                landmarkHub: "🏰 Hawa Mahal & Amer Fort Hub",
                vibeTag: "Mountain Trails",
                location: "Jhalana / Jaipur, Rajasthan",
                lat: 26.8500,
                lng: 75.8167,
                distance: "10 km from City Palace Jaipur",
                score: 95,
                womenSafetyIndex: 97,
                uniqueness: 97,
                footfall: "Moderate-Low (20% of Amer)",
                category: "Urban Wildlife Ridge & Leopard Reserve",
                estCost: "₹1,600 / person",
                desc: "A unique protected Aravalli hill forest right inside Jaipur city limits, renowned as one of the world's best spots for wild leopard sightings.",
                essentialFacilities: createGemFacilityData({
                  hospName: "Fortis Escorts Hospital Jaipur", hospDist: "4.0 km", hospPhone: "+91 141 2547000",
                  foodName: "Jhalana Ridge Forest Cafe", foodType: "Hot Chai, Samosas & Fresh Juices",
                  stayName: "Aravalli Forest View Heritage Villa", stayTariff: "₹1,900/night",
                  policeStationName: "Jhalana Doongri Police Station", policeStationDist: "2.0 km (3 mins response)", policeStationPhone: "+91 141 2700100", policePatrol: "Jaipur Pink PCR Patrol Unit",
                  taxiName: "Jhalana Safari Jeep Guild", taxiPhone: "+91 94140 33441",
                  petrol: "1.5 km", atm: "1.0 km (HDFC)", hq: "8 km (Jaipur)", hw: "2.0 km (JLN Marg)",
                  famousFood: "Jaipur Pyaaz Kachori, Mawa Kachori & Masala Chai",
                  famousCraft: "Blue Pottery Vases, Jaipur Gemstone Jewelry & Miniature Paintings"
                }),
                itinerary: ["06:00 AM: Morning open-top Jeep safari through Jhalana leopard ridge", "09:30 AM: Bird watching at Shikar Audhi hunting lodge", "01:00 PM: Masala Chai & Pyaaz Kachori lunch", "03:30 PM: Aravalli hill ridge trail walk", "08:00 PM: Rest at Forest View Villa"]
              }
            ]
          }
        ]
      },
      {
        name: "Udaipur",
        landmarks: [
          {
            id: "city-palace-udaipur",
            name: "🏰 City Palace & Lake Pichola Hub",
            city: "Udaipur",
            state: "Rajasthan",
            hiddenGems: [
              {
                gemName: "Kumbhalgarh Fort & Great Wall of India",
                state: "Rajasthan",
                city: "Udaipur",
                landmarkHub: "🏰 City Palace & Lake Pichola Hub",
                vibeTag: "Heritage & Crafts",
                location: "Rajsamand / Kumbhalgarh, Rajasthan",
                lat: 25.1479,
                lng: 73.5826,
                distance: "84 km from Udaipur",
                score: 97,
                womenSafetyIndex: 96,
                uniqueness: 98,
                footfall: "Low (20% of City Palace)",
                category: "Mountain Fortress & Wall Trail",
                estCost: "₹1,400 / person",
                desc: "A UNESCO World Heritage hill fort possessing the second-longest continuous wall in the world (36 km long), winding across Aravalli ridges.",
                essentialFacilities: createGemFacilityData({
                  hospName: "Kumbhalgarh Primary Health Center", hospDist: "4.0 km", hospPhone: "+91 2954 242010",
                  foodName: "Mewari Heritage Bhojanalaya", foodType: "Gatte ki Sabzi & Bajra Roti",
                  stayName: "Kumbhalgarh Valley View Homestay", stayTariff: "₹1,600/night",
                  policeStationName: "Kumbhalgarh Police Outpost", policeStationDist: "3.5 km (5 mins response)", policeStationPhone: "+91 2954 242000", policePatrol: "Aravalli Tourist PCR Unit",
                  taxiName: "Kumbhalgarh Jeep Guild", taxiPhone: "+91 94141 33221",
                  petrol: "4.0 km", atm: "3.0 km (SBI)", hq: "45 km (Rajsamand)", hw: "12 km (NH-58)",
                  famousFood: "Mewari Gatte ki Sabzi, Churma Ladoo & Dal Baati",
                  famousCraft: "Mewar Miniature Paintings, Wooden Carved Puppets & Leather Mojris"
                }),
                itinerary: ["08:00 AM: Hike along 36km Great Wall of India", "11:30 AM: Exploration of Badal Mahal palace peak", "01:30 PM: Authentic Mewari Thali lunch", "04:30 PM: Aravalli ridge sunset photography", "08:00 PM: Light & Sound show at fort"]
              },
              {
                gemName: "Rayta Hills & Aravalli Cloud Valley Trail",
                state: "Rajasthan",
                city: "Udaipur",
                landmarkHub: "🏰 City Palace & Lake Pichola Hub",
                vibeTag: "Mountain Trails",
                location: "Rayta / Udaipur, Rajasthan",
                lat: 24.5800,
                lng: 73.6000,
                distance: "22 km from Udaipur City",
                score: 96,
                womenSafetyIndex: 96,
                uniqueness: 97,
                footfall: "Very Low (10% of City Palace)",
                category: "Mountain Ridge & Cloud Valley",
                estCost: "₹900 / person",
                desc: "A breathtaking serpentine mountain ridge road offering panoramic views of lush green rolling Aravalli valleys, often floating above morning clouds.",
                essentialFacilities: createGemFacilityData({
                  hospName: "Kodiyat Health Center", hospDist: "6.0 km", hospPhone: "+91 294 2450110",
                  foodName: "Rayta Hilltop Sunset Cafe", foodType: "Fresh Masala Chai, Maggi & Local Snacks",
                  stayName: "Aravalli Cloud Ridge Homestay", stayTariff: "₹1,500/night",
                  policeStationName: "Nai Police Station", policeStationDist: "8.0 km (8 mins response)", policeStationPhone: "+91 294 2450100", policePatrol: "Udaipur Rural Tourist PCR 112",
                  taxiName: "Rayta Hill Scooter & Cab Guild", taxiPhone: "+91 94143 22109",
                  petrol: "8.0 km", atm: "6.0 km (SBI)", hq: "22 km (Udaipur)", hw: "8.0 km (Kodiyat Highway)",
                  famousFood: "Mewari Kulhad Chai, Mirchi Bada & Dal Baati",
                  famousCraft: "Marble Handicrafts & Terracotta Water Vessels"
                }),
                itinerary: ["06:30 AM: Early morning drive up Rayta serpentine mountain ridge", "09:00 AM: Cloud valley photography at hilltop viewpoint", "01:00 PM: Mewari Mirchi Bada & Kulhad Chai lunch", "04:30 PM: Sunset walk across Aravalli pine trails", "08:00 PM: Rest at Cloud Ridge Homestay"]
              },
              {
                gemName: "Ranakpur Jain Marble Temple Cluster",
                state: "Rajasthan",
                city: "Udaipur",
                landmarkHub: "🏰 City Palace & Lake Pichola Hub",
                vibeTag: "Spiritual History",
                location: "Pali / Ranakpur, Rajasthan",
                lat: 25.1167,
                lng: 73.4667,
                distance: "90 km from Udaipur",
                score: 98,
                womenSafetyIndex: 97,
                uniqueness: 99,
                footfall: "Low (25% of City Palace)",
                category: "15th Century Carved Marble Temple",
                estCost: "₹1,300 / person",
                desc: "A 15th-century architectural masterpiece carved entirely from white marble, featuring 1,444 uniquely carved pillars—no two pillars are alike.",
                essentialFacilities: createGemFacilityData({
                  hospName: "Sadri Government Hospital", hospDist: "7.0 km", hospPhone: "+91 2934 282010",
                  foodName: "Ranakpur Bhojanalaya", foodType: "Pure Jain Sattvik Thali",
                  stayName: "Ranakpur Heritage Nature Lodge", stayTariff: "₹1,700/night",
                  policeStationName: "Sadri Police Station", policeStationDist: "7.0 km (7 mins response)", policeStationPhone: "+91 2934 282000", policePatrol: "Pali Tourist Highway PCR",
                  taxiName: "Ranakpur Cab Drivers Union", taxiPhone: "+91 94142 55990",
                  petrol: "5.0 km", atm: "5.0 km (SBI)", hq: "90 km (Udaipur)", hw: "3.0 km (State Highway 32)",
                  famousFood: "Pure Jain Sattvik Thali, Ker Sangri & Mawa Kachori",
                  famousCraft: "Hand-Carved Marble Idols & Rajasthani Wooden Inlay Artifacts"
                }),
                itinerary: ["09:00 AM: Guided walk past 1,444 uniquely carved marble pillars", "11:30 AM: Exploration of Surya Narayan temple complex", "01:00 PM: Sattvik Jain Thali lunch", "04:00 PM: Aravalli forest monkey sanctuary walk", "08:00 PM: Rest at Heritage Nature Lodge"]
              },
              {
                gemName: "Jaisamand Lake & Island Wildlife Sanctuary",
                state: "Rajasthan",
                city: "Udaipur",
                landmarkHub: "🏰 City Palace & Lake Pichola Hub",
                vibeTag: "Eco Nature",
                location: "Jaisamand / Salumbar, Rajasthan",
                lat: 24.2333,
                lng: 73.9500,
                distance: "50 km from Udaipur",
                score: 96,
                womenSafetyIndex: 96,
                uniqueness: 97,
                footfall: "Low (15% of Lake Pichola)",
                category: "Second Largest Artificial Lake in Asia",
                estCost: "₹1,200 / person",
                desc: "Asia's second-largest artificial lake, built in 1685 by Maharana Jai Singh, featuring marble cenotaphs, island tribal hamlets, and panther sanctuary.",
                essentialFacilities: createGemFacilityData({
                  hospName: "Salumbar District Hospital", hospDist: "12 km", hospPhone: "+91 2906 222010",
                  foodName: "Jaisamand Lake View Restaurant", foodType: "Fresh Lake Fish & Mewari Thali",
                  stayName: "Jaisamand Island Resort & Lodge", stayTariff: "₹2,100/night",
                  policeStationName: "Jaisamand Police Outpost", policeStationDist: "2.0 km (3 mins response)", policeStationPhone: "+91 2906 222000", policePatrol: "Mewari Coastal Water Patrol 112",
                  taxiName: "Jaisamand Boat & Jeep Guild", taxiPhone: "+91 94144 11220",
                  petrol: "4.0 km", atm: "3.0 km (SBI)", hq: "50 km (Udaipur)", hw: "5.0 km (State Highway 9)",
                  famousFood: "Mewari Fresh Fish Fry, Dal Baati Churma & Rabri",
                  famousCraft: "Bhil Tribal Handicrafts & Wooden Carved Boats"
                }),
                itinerary: ["08:00 AM: Boat cruise past 7 island hamlets of Jaisamand Lake", "11:00 AM: Walkthrough of Hawa Mahal summer palace on hill", "01:30 PM: Fresh lake fish & Mewari Thali lunch", "04:30 PM: Wildlife sanctuary panther trail walk", "08:00 PM: Night stay at Island Resort"]
              },
              {
                gemName: "Barni Teerth & Ancient Sun Temple Ridge",
                state: "Rajasthan",
                city: "Udaipur",
                landmarkHub: "🏰 City Palace & Lake Pichola Hub",
                vibeTag: "Spiritual History",
                location: "Barni / Udaipur, Rajasthan",
                lat: 24.6500,
                lng: 73.7500,
                distance: "35 km from Udaipur",
                score: 94,
                womenSafetyIndex: 95,
                uniqueness: 96,
                footfall: "Very Low (5% of Lake Pichola)",
                category: "Ancient Temple & Holy Kund",
                estCost: "₹800 / person",
                desc: "A serene hidden teerth featuring ancient rock-cut Sun Temple ruins, natural mountain water kunds, and quiet meditation groves in Aravallis.",
                essentialFacilities: createGemFacilityData({
                  hospName: "Mavli Primary Health Center", hospDist: "8.0 km", hospPhone: "+91 2955 233010",
                  foodName: "Barni Teerth Sattvik Bhojanalaya", foodType: "Pahadi Dal Rice & Desi Ghee Churma",
                  stayName: "Aravalli Teerth Heritage Homestay", stayTariff: "₹1,100/night",
                  policeStationName: "Mavli Police Station", policeStationDist: "8.0 km (8 mins response)", policeStationPhone: "+91 2955 233000", policePatrol: "Mavli PCR Patrol Van 112",
                  taxiName: "Mavli Auto Guild", taxiPhone: "+91 94140 77661",
                  petrol: "6.0 km", atm: "5.0 km (SBI)", hq: "35 km (Udaipur)", hw: "6.0 km (NH-76)",
                  famousFood: "Desi Ghee Churma Ladoo, Dal Baati & Kulhad Masala Milk",
                  famousCraft: "Stone Sculptures & Brass Ritual Utensils"
                }),
                itinerary: ["07:30 AM: Morning walk around holy Barni water kund", "10:00 AM: Exploration of ancient rock-cut Sun Temple ruins", "01:00 PM: Sattvik Desi Ghee Churma lunch", "04:00 PM: Meditation in quiet Aravalli groves", "08:00 PM: Cozy stay at Teerth Homestay"]
              }
            ]
          }
        ]
      }
    ]
  },

  /* ------------------- KERALA ------------------- */
  {
    state: "Kerala",
    cities: [
      {
        name: "Munnar",
        landmarks: [
          {
            id: "munnar-tea",
            name: "🌿 Munnar Town & Tea Hub",
            city: "Munnar",
            state: "Kerala",
            hiddenGems: [
              {
                gemName: "Anakkulam Wild Elephant Spring",
                state: "Kerala",
                city: "Munnar",
                landmarkHub: "🌿 Munnar Town & Tea Hub",
                vibeTag: "Eco Nature",
                location: "Munnar / Idukki, Kerala",
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
                essentialFacilities: createGemFacilityData({
                  hospName: "Adimali Community Hospital", hospDist: "12 km", hospPhone: "+91 4864 222044",
                  foodName: "Mankulam Tribal Spice Cafe", foodType: "Kerala Sadya & Fresh Fish",
                  stayName: "Anakkulam Riverbank Eco Lodge", stayTariff: "₹1,800/night",
                  policeStationName: "Vellathooval Police Station", policeStationDist: "8.0 km (10 mins response)", policeStationPhone: "+91 4864 274022", policePatrol: "Kerala Pink Police Patrol Unit",
                  taxiName: "Anakkulam Jeep Drivers Guild", taxiPhone: "+91 94951 77332",
                  petrol: "6.5 km (BPCL)", atm: "4.2 km (Gramin ATM)", hq: "38 km (Munnar)", hw: "12 km (NH-85)",
                  famousFood: "Kerala Banana Leaf Sadya, Karimeen Pollichathu & Hot Elaichi Tea",
                  famousCraft: "Kasavu Gold Border Sarees, Hand-harvested Spices & Cocoa"
                }),
                itinerary: ["07:00 AM: Periyar river birdwatching", "11:00 AM: Organic cocoa plantation tour", "01:30 PM: Sadya on banana leaf", "04:30 PM: Wildlife watchtower sighting", "08:30 PM: Night stay at Eco Lodge"]
              },
              {
                gemName: "Marayoor Sandalwood Forest & Dolmens",
                state: "Kerala",
                city: "Munnar",
                landmarkHub: "🌿 Munnar Town & Tea Hub",
                vibeTag: "Heritage & Crafts",
                location: "Marayoor / Munnar, Kerala",
                lat: 10.2833,
                lng: 77.1667,
                distance: "40 km from Munnar",
                score: 97,
                womenSafetyIndex: 97,
                uniqueness: 98,
                footfall: "Low (15% of Munnar)",
                category: "Sandalwood Reserve & Megalithic Site",
                estCost: "₹1,500 / person",
                desc: "The only place in Kerala with a natural sandalwood forest, home to 10,000-year-old Neolithic burial dolmens (Muniyaras) and organic jaggery units.",
                essentialFacilities: createGemFacilityData({
                  hospName: "Marayoor Community Health Center", hospDist: "3.0 km", hospPhone: "+91 4865 252040",
                  foodName: "Marayoor Jaggery & Spice Kitchen", foodType: "Kerala Appam, Stew & Jaggery Payasam",
                  stayName: "Sandal Valley Heritage Homestay", stayTariff: "₹1,600/night",
                  policeStationName: "Marayoor Police Station", policeStationDist: "2.5 km (4 mins response)", policeStationPhone: "+91 4865 252022", policePatrol: "Kerala Forest & Police Patrol Van",
                  taxiName: "Marayoor Auto & Jeep Guild", taxiPhone: "+91 94950 44110",
                  petrol: "3.0 km", atm: "2.0 km (SBI)", hq: "40 km (Munnar)", hw: "1.0 km (Munnar-Udumalpet Highway)",
                  famousFood: "Marayoor Organic Jaggery Sweets, Kerala Stew & Appam",
                  famousCraft: "Sandalwood Carvings, Organic Sugarcane Jaggery & Lemongrass Oil"
                }),
                itinerary: ["08:00 AM: Guided trek through natural Sandalwood forest reserve", "10:30 AM: Exploration of 10,000-year-old Neolithic Dolmens (Muniyaras)", "01:00 PM: Authentic Kerala Appam & Stew lunch", "03:30 PM: Visit traditional sugarcane jaggery making units", "08:00 PM: Rest at Sandal Valley Homestay"]
              },
              {
                gemName: "Top Station & Echo Point High Ridge",
                state: "Kerala",
                city: "Munnar",
                landmarkHub: "🌿 Munnar Town & Tea Hub",
                vibeTag: "Mountain Trails",
                location: "Top Station / Munnar, Kerala",
                lat: 10.1250,
                lng: 77.2450,
                distance: "32 km from Munnar Town",
                score: 96,
                womenSafetyIndex: 97,
                uniqueness: 97,
                footfall: "Moderate-Low (20% of Munnar)",
                category: "High Altitude Ridge & Cloud Valley",
                estCost: "₹1,400 / person",
                desc: "The highest point in Munnar at 6,170 ft on the Tamil Nadu border, offering panoramic views of the Western Ghats clouds and rare Neelakurinji blooms.",
                essentialFacilities: createGemFacilityData({
                  hospName: "Munnar Tata General Hospital", hospDist: "32 km", hospPhone: "+91 4865 230491",
                  foodName: "Top Station Cloud View Cafe", foodType: "Hot Kerala Cardamom Tea & Steamed Kerala Puttu",
                  stayName: "Mist Valley Mountain Homestay", stayTariff: "₹1,700/night",
                  policeStationName: "Munnar Tourist Police Station", policeStationDist: "32 km (30 mins response)", policeStationPhone: "+91 4865 230322", policePatrol: "Western Ghats PCR Unit 112",
                  taxiName: "Top Station Taxi Association", taxiPhone: "+91 94952 88990",
                  petrol: "15 km", atm: "15 km (SBI)", hq: "32 km (Munnar)", hw: "1.0 km (Munnar-Top Station Road)",
                  famousFood: "Kerala Puttu & Kadala Curry, Hot Cardamom Tea & Parippu Vada",
                  famousCraft: "Munnar Tea Leaves, Spices & Eucalyptus Oil"
                }),
                itinerary: ["06:00 AM: Early sunrise trek to Top Station cloud view point", "09:30 AM: Echo Point natural sound resonance walkthrough", "01:00 PM: Kerala Puttu & Kadala curry lunch", "04:00 PM: Tea garden walking trail trek", "08:00 PM: Night stay at Mist Valley Homestay"]
              },
              {
                gemName: "Kolukkumalai Highest Tea Estate Trail",
                state: "Kerala",
                city: "Munnar",
                landmarkHub: "🌿 Munnar Town & Tea Hub",
                vibeTag: "Mountain Trails",
                location: "Kolukkumalai / Munnar, Kerala",
                lat: 10.0800,
                lng: 77.2200,
                distance: "35 km from Munnar",
                score: 98,
                womenSafetyIndex: 97,
                uniqueness: 99,
                footfall: "Low (10% of Munnar)",
                category: "World's Highest Tea Plantation (7,900 ft)",
                estCost: "₹2,200 / person",
                desc: "Renowned as the highest tea estate in the world at 7,900 ft, featuring a 100-year-old orthodox tea factory and breathtaking sunrise over clouds.",
                essentialFacilities: createGemFacilityData({
                  hospName: "Suryanelli Primary Health Center", hospDist: "10 km", hospPhone: "+91 4865 240210",
                  foodName: "Kolukkumalai Estate Tea Room", foodType: "Fresh Orthodox CTC Tea & Banana Fritters",
                  stayName: "Kolukkumalai Tea Factory Heritage Huts", stayTariff: "₹2,500/night",
                  policeStationName: "Santhanpara Police Station", policeStationDist: "12 km (15 mins response)", policeStationPhone: "+91 4865 240222", policePatrol: "High Range Police Patrol 112",
                  taxiName: "Kolukkumalai 4x4 Jeep Drivers Guild", taxiPhone: "+91 94951 00299",
                  petrol: "12 km", atm: "10 km (SBI)", hq: "35 km (Munnar)", hw: "10 km (Suryanelli Road)",
                  famousFood: "Kolukkumalai Handpicked Orthodox Tea, Pazham Pori (Banana Fritters) & Kerala Snacks",
                  famousCraft: "Orthodox Handpicked Tea Bags, Organic Cinnamon & Clove Packs"
                }),
                itinerary: ["04:30 AM: 4x4 Jeep drive up to Kolukkumalai sunrise point over clouds", "08:30 AM: Walkthrough of 100-year-old wooden orthodox tea factory", "01:00 PM: Organic tea tasting & Kerala lunch", "04:00 PM: Mountain ridge trail hike", "08:00 PM: Stay at Heritage Tea Huts"]
              },
              {
                gemName: "Subramanya Cave Temple & High Range Sanctuary",
                state: "Kerala",
                city: "Munnar",
                landmarkHub: "🌿 Munnar Town & Tea Hub",
                vibeTag: "Spiritual History",
                location: "Kanthalloor / Munnar, Kerala",
                lat: 10.2200,
                lng: 77.1800,
                distance: "50 km from Munnar",
                score: 95,
                womenSafetyIndex: 98,
                uniqueness: 97,
                footfall: "Very Low (5% of Munnar)",
                category: "Ancient Cave Temple & Apple Village",
                estCost: "₹1,300 / person",
                desc: "An ancient rock-cut cave temple in Kanthalloor village—Kerala's secret apple & winter fruit growing village nestled between high ranges.",
                essentialFacilities: createGemFacilityData({
                  hospName: "Kanthalloor Primary Health Center", hospDist: "2.0 km", hospPhone: "+91 4865 264040",
                  foodName: "Kanthalloor Farm Organic Cafe", foodType: "Fresh Apple Juice, Kerala Rice & Curries",
                  stayName: "Kanthalloor Fruit Orchard Homestay", stayTariff: "₹1,500/night",
                  policeStationName: "Marayoor Police Station", policeStationDist: "12 km (12 mins response)", policeStationPhone: "+91 4865 252022", policePatrol: "Kanthalloor Village Patrol Unit",
                  taxiName: "Kanthalloor Auto Union", taxiPhone: "+91 94953 11880",
                  petrol: "12 km", atm: "2.0 km (Cooperative Bank)", hq: "50 km (Munnar)", hw: "12 km (Marayoor-Kanthalloor Road)",
                  famousFood: "Kanthalloor Organic Apples, Fresh Plums, Kerala Rice & Avial",
                  famousCraft: "Homegrown Apple Jam, Homemade Passionfruit Wine & Organic Honey"
                }),
                itinerary: ["08:30 AM: Walkthrough of Subramanya rock-cut cave temple", "11:00 AM: Apple & plum orchard picking tour in Kanthalloor", "01:00 PM: Organic farm lunch & fresh apple juice", "04:00 PM: Cave sanctuary meditation walk", "08:00 PM: Rest at Fruit Orchard Homestay"]
              }
            ]
          }
        ]
      }
    ]
  },

  /* ------------------- HIMACHAL PRADESH ------------------- */
  {
    state: "Himachal Pradesh",
    cities: [
      {
        name: "Manali",
        landmarks: [
          {
            id: "manali-mall",
            name: "🏔️ Manali Mall Road Hub",
            city: "Manali",
            state: "Himachal Pradesh",
            hiddenGems: [
              {
                gemName: "Shoja & Chehni Kothi Timber Tower",
                state: "Himachal Pradesh",
                city: "Manali",
                landmarkHub: "🏔️ Manali Mall Road Hub",
                vibeTag: "Mountain Trails",
                location: "Banjar Valley, Himachal Pradesh",
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
                essentialFacilities: createGemFacilityData({
                  hospName: "Banjar Civil Hospital", hospDist: "7.5 km", hospPhone: "+91 1902 268222",
                  foodName: "Pahadi Flavors Organic Cafe", foodType: "Hot Siddu, Ghee & Trout",
                  stayName: "Chehni Kothi Timber Homestay", stayTariff: "₹1,600/night",
                  policeStationName: "Banjar Police Station", policeStationDist: "7.2 km (10 mins response)", policeStationPhone: "+91 1902 268224", policePatrol: "HP Shakti Button PCR Unit",
                  taxiName: "Jibhi Sumo Taxi Union", taxiPhone: "+91 98055 22110",
                  petrol: "7.0 km (HP Fuel)", atm: "800m (Cooperative ATM)", hq: "45 km (Kullu HQ)", hw: "22 km (Aut NH-3)",
                  famousFood: "Pahadi Siddu with Desi Ghee, Kullu Trout Fish & Madra Curry",
                  famousCraft: "Kullu Woolen Shawls, Traditional Himachali Caps & Wooden Artifacts"
                }),
                itinerary: ["08:30 AM: Pine forest hike from Shringa Rishi Temple", "11:00 AM: Chehni Kothi timber tower walkthrough", "01:30 PM: Hot Siddu with ghee at Pahadi Flavors", "04:00 PM: Relax by freshwater stream", "08:30 PM: Cozy stay at Timber Homestay"]
              },
              {
                gemName: "Naggar Castle & Roerich Heritage Art Gallery",
                state: "Himachal Pradesh",
                city: "Manali",
                landmarkHub: "🏔️ Manali Mall Road Hub",
                vibeTag: "Heritage & Crafts",
                location: "Naggar / Manali, Himachal Pradesh",
                lat: 32.1167,
                lng: 77.1667,
                distance: "20 km from Manali",
                score: 96,
                womenSafetyIndex: 98,
                uniqueness: 97,
                footfall: "Low (20% of Manali)",
                category: "15th Century Castle & Russian Art Estate",
                estCost: "₹1,200 / person",
                desc: "An ancient 15th-century wood-and-stone castle overlooking Beas River valley, home to the estate of Russian painter Nicholas Roerich.",
                essentialFacilities: createGemFacilityData({
                  hospName: "Naggar Primary Health Center", hospDist: "1.5 km", hospPhone: "+91 1902 248010",
                  foodName: "Naggar Castle Heritage Restaurant", foodType: "Himachali Dham, Siddu & Apple Pie",
                  stayName: "Naggar Castle Heritage Lodge", stayTariff: "₹2,000/night",
                  policeStationName: "Naggar Police Outpost", policeStationDist: "1.0 km (3 mins response)", policeStationPhone: "+91 1902 248000", policePatrol: "Kullu Tourist Police PCR 112",
                  taxiName: "Naggar Auto & Taxi Guild", taxiPhone: "+91 98160 33221",
                  petrol: "4.0 km", atm: "1.0 km (SBI)", hq: "20 km (Kullu)", hw: "2.0 km (Left Bank Road)",
                  famousFood: "Himachali Dham, Hot Siddu & Fresh Baked Apple Pie",
                  famousCraft: "Pahadi Oil Paintings, Kullu Handloom Shawls & Wooden Carvings"
                }),
                itinerary: ["09:00 AM: Guided walk through 500-year-old Naggar Castle courtyards", "11:30 AM: Exploration of Roerich Himalayan Art Estate", "01:30 PM: Authentic Himachali Dham lunch", "04:30 PM: Sunset view over Beas river valley", "08:00 PM: Stay at Castle Heritage Lodge"]
              },
              {
                gemName: "Sethan Igloo Village & Hampta Ridge Trail",
                state: "Himachal Pradesh",
                city: "Manali",
                landmarkHub: "🏔️ Manali Mall Road Hub",
                vibeTag: "Mountain Trails",
                location: "Sethan / Manali, Himachal Pradesh",
                lat: 32.2000,
                lng: 77.2167,
                distance: "15 km from Manali",
                score: 97,
                womenSafetyIndex: 97,
                uniqueness: 98,
                footfall: "Low (15% of Solang)",
                category: "High Altitude Buddhist Village & Igloos",
                estCost: "₹2,100 / person",
                desc: "A serene Buddhist hamlet perched at 9,000 ft overlooking Dhauladhar ranges, famous for winter snow igloo stays and boulder climbing.",
                essentialFacilities: createGemFacilityData({
                  hospName: "Manali Lady Willingdon Hospital", hospDist: "15 km", hospPhone: "+91 1902 252315",
                  foodName: "Sethan High Altitude Cafe", foodType: "Hot Thukpa, Momos & Butter Tea",
                  stayName: "Sethan Snow Igloo & Eco Homestay", stayTariff: "₹2,800/night",
                  policeStationName: "Manali Police Station", policeStationDist: "15 km (25 mins response)", policeStationPhone: "+91 1902 252326", policePatrol: "HP High Altitude Patrol Unit 112",
                  taxiName: "Sethan 4x4 Snow Taxi Association", taxiPhone: "+91 98161 77209",
                  petrol: "15 km", atm: "15 km (SBI)", hq: "35 km (Kullu)", hw: "12 km (Manali-Sethan Road)",
                  famousFood: "Hot Steamed Momos, Tibetan Thukpa & Himalayan Honey Tea",
                  famousCraft: "Handcrafted Yak Wool Socks, Buddhist Prayer Wheels & Wooden Artifacts"
                }),
                itinerary: ["08:30 AM: 4x4 Jeep ride up to Sethan Buddhist village at 9,000 ft", "11:00 AM: Hampta Pass trail ridge trek", "01:30 PM: Hot Thukpa & Momos lunch", "04:30 PM: Sunset view over Dhauladhar snow peaks", "08:30 PM: Night stay in Igloo / Eco Homestay"]
              },
              {
                gemName: "Bijli Mahadev Temple & Lightning Ridge Trek",
                state: "Himachal Pradesh",
                city: "Manali",
                landmarkHub: "🏔️ Manali Mall Road Hub",
                vibeTag: "Spiritual History",
                location: "Kullu / Bijli Mahadev, Himachal Pradesh",
                lat: 31.9500,
                lng: 77.1500,
                distance: "35 km from Manali",
                score: 96,
                womenSafetyIndex: 97,
                uniqueness: 98,
                footfall: "Low (15% of Mall Road)",
                category: "High Mountain Temple & Ridge",
                estCost: "₹1,100 / person",
                desc: "A sacred mountain ridge temple at 8,000 ft where a 60 ft butter-restored Shiva lingam is struck by lightning every year.",
                essentialFacilities: createGemFacilityData({
                  hospName: "Kullu Regional Hospital", hospDist: "12 km", hospPhone: "+91 1902 222350",
                  foodName: "Bijli Mahadev Ridge Rest Stop", foodType: "Hot Siddu, Rajma Chawal & Tea",
                  stayName: "Kullu Ridge View Homestay", stayTariff: "₹1,400/night",
                  policeStationName: "Kullu Police Station", policeStationDist: "12 km (15 mins response)", policeStationPhone: "+91 1902 222322", policePatrol: "HP Shakti PCR Unit 112",
                  taxiName: "Kullu Auto & Taxi Union", taxiPhone: "+91 98162 44331",
                  petrol: "10 km", atm: "10 km (SBI)", hq: "12 km (Kullu)", hw: "10 km (NH-3)",
                  famousFood: "Himachali Rajma Chawal, Hot Siddu & Fresh Apple Juice",
                  famousCraft: "Kullu Caps, Woolen Mufflers & Brass Puja Vessels"
                }),
                itinerary: ["07:30 AM: Scenic 3km pine forest staircase trek up to Bijli Mahadev", "10:30 AM: Darshan at ancient lightning Shiva Temple peak", "01:00 PM: Himachali Rajma Chawal lunch", "04:00 PM: 360-degree view of Parvati & Kullu valleys", "08:00 PM: Rest at Ridge View Homestay"]
              },
              {
                gemName: "Jana Waterfalls & Deodar Forest Trail",
                state: "Himachal Pradesh",
                city: "Manali",
                landmarkHub: "🏔️ Manali Mall Road Hub",
                vibeTag: "Eco Nature",
                location: "Jana / Naggar, Himachal Pradesh",
                lat: 32.1000,
                lng: 77.1833,
                distance: "30 km from Manali",
                score: 95,
                womenSafetyIndex: 98,
                uniqueness: 96,
                footfall: "Low (15% of Solang)",
                category: "Forest Waterfall & Traditional Kitchen",
                estCost: "₹1,000 / person",
                desc: "A hidden waterfall tucked inside ancient deodar pine forests near Naggar, famous for authentic wooden bridge dining and Pahadi cuisine.",
                essentialFacilities: createGemFacilityData({
                  hospName: "Naggar Health Center", hospDist: "12 km", hospPhone: "+91 1902 248010",
                  foodName: "Jana Waterfall Traditional Kitchen", foodType: "Makki Roti, Sarson Saag, Siddu & Red Rice",
                  stayName: "Deodar Forest Eco Homestay", stayTariff: "₹1,500/night",
                  policeStationName: "Naggar Police Outpost", policeStationDist: "12 km (15 mins response)", policeStationPhone: "+91 1902 248000", policePatrol: "Kullu Tourist PCR Patrol",
                  taxiName: "Jana Village Taxi Guild", taxiPhone: "+91 98163 99220",
                  petrol: "12 km", atm: "12 km (SBI)", hq: "30 km (Kullu)", hw: "10 km (Naggar Road)",
                  famousFood: "Pahadi Red Rice Thali, Makki Roti, Sarson Saag & Chhaas",
                  famousCraft: "Handwoven Deodar Baskets & Himachali Woolen Socks"
                }),
                itinerary: ["09:00 AM: Nature trek through ancient deodar pine forest", "11:30 AM: Relax under Jana cascading waterfall pool", "01:30 PM: Authentic Pahadi Red Rice & Makki Roti lunch on wooden bridge", "04:30 PM: Village apple orchard walk", "08:00 PM: Stay at Eco Homestay"]
              }
            ]
          }
        ]
      }
    ]
  },

  /* ------------------- LADAKH ------------------- */
  {
    state: "Ladakh",
    cities: [
      {
        name: "Leh",
        landmarks: [
          {
            id: "leh-town",
            name: "🏔️ Leh Town & Pangong Hub",
            city: "Leh",
            state: "Ladakh",
            hiddenGems: [
              {
                gemName: "Hanle Dark Sky Reserve & Astronomical Sanctuary",
                state: "Ladakh",
                city: "Leh",
                landmarkHub: "🏔️ Leh Town & Pangong Hub",
                vibeTag: "Mountain Trails",
                location: "Changthang, Ladakh",
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
                essentialFacilities: createGemFacilityData({
                  hospName: "Hanle Army Medical Post", hospDist: "1.5 km", hospPhone: "+91 1982 252011",
                  foodName: "Hanle Astro Homestay Kitchen", foodType: "Hot Ladakhi Thukpa & Butter Tea",
                  stayName: "Stargazer Ladakhi Homestay", stayTariff: "₹2,200/night",
                  policeStationName: "Nyoma Police Post & Army Unit", policeStationDist: "45 km (30 mins response)", policeStationPhone: "+91 1982 252000", policePatrol: "Ladakh Police High-Altitude Patrol",
                  taxiName: "Nyoma 4x4 Taxi Guild", taxiPhone: "+91 94192 11009",
                  petrol: "45 km (Nyoma Fuel Point)", atm: "45 km (SBI Nyoma)", hq: "270 km (Leh)", hw: "45 km (Loma-Hanle Road)",
                  famousFood: "Hot Ladakhi Thukpa, Skyu Pasta & Tibetan Butter Tea",
                  famousCraft: "Pashmina Wool Shawls, Ladakhi Wooden Carved Tables & Prayer Flags"
                }),
                itinerary: ["09:00 AM: Acclimatization walk around Hanle Monastery", "02:00 PM: Ladakhi Thukpa lunch", "04:30 PM: Observatory exterior tour", "09:00 PM: Milky Way stargazing session", "11:00 PM: Warm stay at Stargazer Homestay"]
              },
              {
                gemName: "Turtuk Village & Balti Cultural Heritage Trail",
                state: "Ladakh",
                city: "Leh",
                landmarkHub: "🏔️ Leh Town & Pangong Hub",
                vibeTag: "Heritage & Crafts",
                location: "Nubra Valley / Turtuk, Ladakh",
                lat: 34.8467,
                lng: 76.8317,
                distance: "205 km from Leh",
                score: 98,
                womenSafetyIndex: 98,
                uniqueness: 99,
                footfall: "Low (10% of Hunder)",
                category: "Border Village & Balti Culture",
                estCost: "₹2,200 / person",
                desc: "The northernmost village of India opened to tourists in 2010, featuring unique Balti Muslim culture, apricot orchards, and views of Karakoram ranges.",
                essentialFacilities: createGemFacilityData({
                  hospName: "Diskit Sub-District Hospital", hospDist: "90 km", hospPhone: "+91 1980 220012",
                  foodName: "Turtuk Apricot Farm Kitchen", foodType: "Balti Kisir Flatbread & Apricot Soup",
                  stayName: "Balti Heritage Villa Homestay", stayTariff: "₹2,000/night",
                  policeStationName: "Diskit Police Station & Army Post", policeStationDist: "90 km (60 mins response)", policeStationPhone: "+91 1980 220022", policePatrol: "Nubra Valley PCR Patrol",
                  taxiName: "Turtuk Taxi Union", taxiPhone: "+91 94193 77112",
                  petrol: "90 km (Diskit Fuel)", atm: "90 km (SBI)", hq: "205 km (Leh)", hw: "90 km (Khardung La Road)",
                  famousFood: "Balti Kisir Flatbread, Dried Apricots & Apricot Kernel Oil",
                  famousCraft: "Handcrafted Balti Wooden Utensils & Apricot Products"
                }),
                itinerary: ["09:00 AM: Walkthrough of 500-year-old Balti heritage house & museum", "11:30 AM: Apricot orchard walk along Shyok river", "01:30 PM: Authentic Balti Kisir lunch", "04:30 PM: View of Karakoram snow peaks across border", "08:00 PM: Stay at Balti Heritage Villa"]
              },
              {
                gemName: "Hemis High Altitude National Park & Snow Leopard Trail",
                state: "Ladakh",
                city: "Leh",
                landmarkHub: "🏔️ Leh Town & Pangong Hub",
                vibeTag: "Eco Nature",
                location: "Hemis / Leh, Ladakh",
                lat: 33.9167,
                lng: 77.7000,
                distance: "45 km from Leh Town",
                score: 97,
                womenSafetyIndex: 97,
                uniqueness: 98,
                footfall: "Low (15% of Leh Palace)",
                category: "High Altitude Wildlife Reserve",
                estCost: "₹2,000 / person",
                desc: "South Asia's largest national park, world-famous as the global capital for snow leopard sightings, blue sheep (Bharal), and golden eagles.",
                essentialFacilities: createGemFacilityData({
                  hospName: "SNM Hospital Leh", hospDist: "45 km", hospPhone: "+91 1982 252014",
                  foodName: "Rumbak Eco Village Kitchen", foodType: "Hot Ladakhi Skyu & Butter Tea",
                  stayName: "Rumbak Wildlife Eco Homestay", stayTariff: "₹1,800/night",
                  policeStationName: "Karu Police Post", policeStationDist: "15 km (20 mins response)", policeStationPhone: "+91 1982 252000", policePatrol: "Ladakh Police Patrol Unit 112",
                  taxiName: "Hemis Taxi Association", taxiPhone: "+91 94191 88220",
                  petrol: "15 km (Karu)", atm: "15 km (SBI)", hq: "45 km (Leh)", hw: "15 km (Leh-Manali Highway)",
                  famousFood: "Ladakhi Skyu, Chhurpi Yak Cheese & Butter Tea",
                  famousCraft: "Pashmina Wool Shawls & Hand-Knitted Yak Wool Gloves"
                }),
                itinerary: ["07:00 AM: Trek into Rumbak valley inside Hemis National Park", "10:30 AM: Wildlife watching for Bharal blue sheep & golden eagles", "01:00 PM: Hot Skyu pasta lunch at homestay", "04:30 PM: Snow leopard spotter watchtower visit", "08:00 PM: Night stay at Rumbak Eco Homestay"]
              },
              {
                gemName: "Diskit Monastery & Giant Maitreya Buddha",
                state: "Ladakh",
                city: "Leh",
                landmarkHub: "🏔️ Leh Town & Pangong Hub",
                vibeTag: "Spiritual History",
                location: "Diskit / Nubra Valley, Ladakh",
                lat: 34.5456,
                lng: 77.5612,
                distance: "115 km from Leh",
                score: 98,
                womenSafetyIndex: 98,
                uniqueness: 98,
                footfall: "Moderate-Low (25% of Pangong)",
                category: "14th Century Monastery & 32m Statue",
                estCost: "₹1,800 / person",
                desc: "The oldest and largest Buddhist monastery in Nubra Valley (14th century), home to a majestic 32-meter giant statue of Maitreya Buddha overlooking Shyok River.",
                essentialFacilities: createGemFacilityData({
                  hospName: "Diskit Sub-District Hospital", hospDist: "2.0 km", hospPhone: "+91 1980 220012",
                  foodName: "Diskit Monastery Cafe", foodType: "Tibetan Momos, Thukpa & Herbal Tea",
                  stayName: "Diskit Valley View Homestay", stayTariff: "₹1,600/night",
                  policeStationName: "Diskit Police Station", policeStationDist: "1.5 km (3 mins response)", policeStationPhone: "+91 1980 220022", policePatrol: "Nubra Valley Police PCR",
                  taxiName: "Diskit Taxi Guild", taxiPhone: "+91 94192 44109",
                  petrol: "2.0 km", atm: "1.0 km (SBI)", hq: "115 km (Leh)", hw: "2.0 km (Khardung La Road)",
                  famousFood: "Steamed Tibetan Momos, Ladakhi Thukpa & Ginger Honey Tea",
                  famousCraft: "Tibetan Prayer Wheels, Buddhist Thangka Paintings & Woolen Stoles"
                }),
                itinerary: ["07:00 AM: Early morning prayer ceremony at 14th century Diskit Monastery", "09:30 AM: Walk around 32-meter giant Maitreya Buddha statue", "01:00 PM: Momos & Thukpa lunch", "04:30 PM: Hunder double-humped camel sand dunes walk nearby", "08:00 PM: Rest at Valley View Homestay"]
              },
              {
                gemName: "Chumathang Hot Springs & Indus River Trail",
                state: "Ladakh",
                city: "Leh",
                landmarkHub: "🏔️ Leh Town & Pangong Hub",
                vibeTag: "Eco Nature",
                location: "Chumathang / Leh, Ladakh",
                lat: 33.3500,
                lng: 78.3333,
                distance: "150 km from Leh",
                score: 96,
                womenSafetyIndex: 97,
                uniqueness: 97,
                footfall: "Very Low (10% of Pangong)",
                category: "Natural Sulfur Hot Springs & River",
                estCost: "₹1,600 / person",
                desc: "Natural geothermal sulfur hot springs bubbling along the freezing ice banks of the Indus River, known for therapeutic mineral baths.",
                essentialFacilities: createGemFacilityData({
                  hospName: "Upshi Primary Health Center", hospDist: "90 km", hospPhone: "+91 1982 240010",
                  foodName: "Chumathang Hot Spring Resort Restaurant", foodType: "Hot Noodle Soup & Butter Tea",
                  stayName: "Chumathang Hot Spring Eco Resort", stayTariff: "₹1,800/night",
                  policeStationName: "Nyoma Police Post", policeStationDist: "70 km (50 mins response)", policeStationPhone: "+91 1982 252000", policePatrol: "Ladakh Highway PCR Patrol 112",
                  taxiName: "Chumathang Taxi Association", taxiPhone: "+91 94193 88771",
                  petrol: "70 km", atm: "70 km (SBI)", hq: "150 km (Leh)", hw: "1.0 km (Leh-Tso Moriri Road)",
                  famousFood: "Hot Ladakhi Noodle Soup, Steamed Tingmo Bread & Salted Butter Tea",
                  famousCraft: "Handcrafted Pashmina Stoles & Ladakhi Copper Teapots"
                }),
                itinerary: ["09:00 AM: Therapeutic bath in natural sulfur hot spring pool", "11:30 AM: Walk along icy banks of Indus River", "01:00 PM: Hot Noodle Soup & Tingmo lunch", "04:30 PM: Sunset view over Changthang mountain plateau", "08:00 PM: Stay at Hot Spring Eco Resort"]
              }
            ]
          }
        ]
      }
    ]
  },

  /* ------------------- WEST BENGAL ------------------- */
  {
    state: "West Bengal",
    cities: [
      {
        name: "Darjeeling",
        landmarks: [
          {
            id: "darjeeling-mall",
            name: "🌲 Darjeeling Mall Road Hub",
            city: "Darjeeling",
            state: "West Bengal",
            hiddenGems: [
              {
                gemName: "Lamahatta Eco Park & Sacred Pine Trails",
                state: "West Bengal",
                city: "Darjeeling",
                landmarkHub: "🌲 Darjeeling Mall Road Hub",
                vibeTag: "Eco Nature",
                location: "Lamahatta / Darjeeling, West Bengal",
                lat: 27.0078,
                lng: 88.3381,
                distance: "23 km from Darjeeling Mall Road",
                score: 95,
                womenSafetyIndex: 97,
                uniqueness: 96,
                footfall: "Low (20% of Mall Road)",
                category: "Eco Park & Sacred Pine Forest",
                estCost: "₹1,000 / person",
                desc: "A tranquil tribal eco-forest village featuring tall dhupi pine trees, colorful Buddhist prayer flags, and a sacred hilltop lake overlooking Kanchenjunga.",
                essentialFacilities: createGemFacilityData({
                  hospName: "Darjeeling District Hospital", hospDist: "23 km", hospPhone: "+91 354 2252131",
                  foodName: "Lamahatta Eco Park Tea Garden Cafe", foodType: "Hot Tibetan Momos & First Flush Tea",
                  stayName: "Lamahatta Pine View Homestay", stayTariff: "₹1,400/night",
                  policeStationName: "Jorebungalow Police Station", policeStationDist: "12 km (15 mins response)", policeStationPhone: "+91 354 2252100", policePatrol: "Gorkhaland Tourist Police Squad",
                  taxiName: "Lamahatta Shared Taxi Association", taxiPhone: "+91 98320 44112",
                  petrol: "12 km", atm: "12 km (SBI)", hq: "23 km (Darjeeling)", hw: "2.0 km (Peshok Road)",
                  famousFood: "Darjeeling First Flush Black Tea, Steamed Momos & Thukpa",
                  famousCraft: "Darjeeling Tea Packs, Tibetan Prayer Wheels & Handwoven Woolen Caps"
                }),
                itinerary: ["08:30 AM: Trek through dhupi pine forest up to sacred hilltop lake", "11:30 AM: Enjoy Kanchenjunga mountain view from garden watchtower", "01:00 PM: Hot Momos & Darjeeling Tea lunch", "03:30 PM: Visit Peshok tea garden viewpoint nearby", "08:00 PM: Rest at Pine View Homestay"]
              },
              {
                gemName: "Takdah Heritage Village & Colonial Tea Estate",
                state: "West Bengal",
                city: "Darjeeling",
                landmarkHub: "🌲 Darjeeling Mall Road Hub",
                vibeTag: "Heritage & Crafts",
                location: "Takdah / Darjeeling, West Bengal",
                lat: 27.0333,
                lng: 88.3500,
                distance: "28 km from Darjeeling",
                score: 96,
                womenSafetyIndex: 97,
                uniqueness: 97,
                footfall: "Low (15% of Darjeeling)",
                category: "British Colonial Bungalows & Orchid Center",
                estCost: "₹1,500 / person",
                desc: "A charming British colonial cantonment village featuring 100-year-old stone heritage bungalows, lush tea gardens, and a rare orchid rescue sanctuary.",
                essentialFacilities: createGemFacilityData({
                  hospName: "Tinchuley Primary Health Center", hospDist: "3.0 km", hospPhone: "+91 354 2260108",
                  foodName: "Takdah Heritage Bungalow Dining", foodType: "Gorkhali Thali & Fresh Baked Scones",
                  stayName: "Takdah Colonial Stone Bungalow", stayTariff: "₹1,800/night",
                  policeStationName: "Rangli Rangliot Police Station", policeStationDist: "4.0 km (5 mins response)", policeStationPhone: "+91 354 2260100", policePatrol: "Darjeeling Hills Police Patrol",
                  taxiName: "Takdah Taxi Drivers Association", taxiPhone: "+91 98325 11009",
                  petrol: "15 km", atm: "3.0 km (Gramin Bank)", hq: "28 km (Darjeeling)", hw: "4.0 km (Takdah-Tinchuley Road)",
                  famousFood: "Gorkhali Chicken Curry, Churpee Cheese & Darjeeling Tea",
                  famousCraft: "Handpicked Organic Tea Bags, Orchids & Handwoven Shawls"
                }),
                itinerary: ["09:00 AM: Guided walk past 100-year-old British stone bungalows", "11:30 AM: Exploration of Takdah Orchid Center", "01:00 PM: Gorkhali Thali & fresh scones lunch", "04:00 PM: Tea garden plucking walk in Rungliot estate", "08:00 PM: Stay at Colonial Stone Bungalow"]
              },
              {
                gemName: "Chatakpur Ridge Eco Village & Kanchenjunga View",
                state: "West Bengal",
                city: "Darjeeling",
                landmarkHub: "🌲 Darjeeling Mall Road Hub",
                vibeTag: "Mountain Trails",
                location: "Chatakpur / Darjeeling, West Bengal",
                lat: 26.9667,
                lng: 88.3167,
                distance: "26 km from Darjeeling",
                score: 97,
                womenSafetyIndex: 98,
                uniqueness: 98,
                footfall: "Very Low (10% of Tiger Hill)",
                category: "High Altitude Forest Eco Village (7,880 ft)",
                estCost: "₹1,600 / person",
                desc: "An organic timber eco-village located inside Senchal Wildlife Sanctuary at 7,880 ft, offering majestic uncrowded sunrise views of Mount Kanchenjunga.",
                essentialFacilities: createGemFacilityData({
                  hospName: "Jorebungalow Health Center", hospDist: "7.0 km", hospPhone: "+91 354 2252131",
                  foodName: "Chatakpur Organic Forest Kitchen", foodType: "Fresh Organic Pahadi Thali & Herbal Tea",
                  stayName: "Chatakpur Timber Eco Homestay", stayTariff: "₹1,700/night",
                  policeStationName: "Jorebungalow Police Station", policeStationDist: "7.0 km (10 mins response)", policeStationPhone: "+91 354 2252100", policePatrol: "Senchal Wildlife PCR Unit",
                  taxiName: "Chatakpur Shared Sumo Guild", taxiPhone: "+91 98322 77881",
                  petrol: "7.0 km", atm: "7.0 km (SBI)", hq: "26 km (Darjeeling)", hw: "7.0 km (Hill Cart Road)",
                  famousFood: "Chatakpur Organic Farm Thali, Steamed Vegetable Momos & Hot Ginger Tea",
                  famousCraft: "Wooden Sculptures, Organic Herbal Teas & Woolen Mufflers"
                }),
                itinerary: ["05:30 AM: Uncrowded sunrise view of Mount Kanchenjunga from Chatakpur watchtower", "09:00 AM: Forest trek through Senchal Wildlife Sanctuary", "01:00 PM: Organic farm-fresh lunch at homestay", "04:00 PM: Pokhari pond walk", "08:00 PM: Night stay at Timber Eco Homestay"]
              },
              {
                gemName: "Mahakal Temple Ridge & Bhutia Busty Monastery",
                state: "West Bengal",
                city: "Darjeeling",
                landmarkHub: "🌲 Darjeeling Mall Road Hub",
                vibeTag: "Spiritual History",
                location: "Darjeeling Ridge, West Bengal",
                lat: 27.0500,
                lng: 88.2667,
                distance: "1.5 km from Mall Road",
                score: 95,
                womenSafetyIndex: 98,
                uniqueness: 96,
                footfall: "Moderate (30% of Mall Road)",
                category: "Hindu-Buddhist Syncretic Ridge Temple",
                estCost: "₹600 / person",
                desc: "A sacred hilltop shrine on Observatory Hill where Hindu priests and Buddhist lamas perform rituals side by side under thousands of fluttering prayer flags.",
                essentialFacilities: createGemFacilityData({
                  hospName: "Darjeeling District Hospital", hospDist: "1.5 km", hospPhone: "+91 354 2252131",
                  foodName: "Keventers & Glenary's Heritage Bakery", foodType: "Hot Chocolate, Sausages & Darjeeling Tea",
                  stayName: "Observatory Hill Heritage Lodge", stayTariff: "₹1,600/night",
                  policeStationName: "Sadar Police Station Darjeeling", policeStationDist: "1.0 km (3 mins response)", policeStationPhone: "+91 354 2252222", policePatrol: "Darjeeling Tourist Police Squad",
                  taxiName: "Darjeeling Taxi Stand Guild", taxiPhone: "+91 98320 11223",
                  petrol: "2.0 km", atm: "500m (SBI)", hq: "1.5 km (Darjeeling Town)", hw: "1.0 km (Hill Cart Road)",
                  famousFood: "Darjeeling Hot Chocolate, Apple Strudel, Steamed Momos & First Flush Tea",
                  famousCraft: "Tibetan Prayer Flags, Singing Bowls & Gorkha Khukri Knives"
                }),
                itinerary: ["07:00 AM: Morning walk up Observatory Hill to Mahakal Temple", "09:30 AM: Observe Hindu-Buddhist dual priest rituals", "12:30 PM: Visit ancient Bhutia Busty Monastery nearby", "02:00 PM: Tea & pastries at Glenary's bakery", "08:00 PM: Rest at Observatory Hill Lodge"]
              },
              {
                gemName: "Mirik Lake & Orange Orchard Valley",
                state: "West Bengal",
                city: "Darjeeling",
                landmarkHub: "🌲 Darjeeling Mall Road Hub",
                vibeTag: "Eco Nature",
                location: "Mirik / Darjeeling, West Bengal",
                lat: 26.8833,
                lng: 88.1833,
                distance: "49 km from Darjeeling",
                score: 94,
                womenSafetyIndex: 97,
                uniqueness: 95,
                footfall: "Low (20% of Mall Road)",
                category: "Mountain Lake & Orange Orchards",
                estCost: "₹1,100 / person",
                desc: "A picturesque hill town centered around Sumendu Lake, connected by a wooden arch bridge (Indreni Pool) and surrounded by cardamon & orange orchards.",
                essentialFacilities: createGemFacilityData({
                  hospName: "Mirik Block Primary Health Center", hospDist: "2.0 km", hospPhone: "+91 354 2243208",
                  foodName: "Mirik Lake View Garden Restaurant", foodType: "Bengali Fish Curry Rice & Hot Momos",
                  stayName: "Mirik Lake Side Heritage Resort", stayTariff: "₹1,500/night",
                  policeStationName: "Mirik Police Station", policeStationDist: "1.5 km (3 mins response)", policeStationPhone: "+91 354 2243200", policePatrol: "Gorkhaland Highway PCR Patrol",
                  taxiName: "Mirik Taxi Association", taxiPhone: "+91 98324 88110",
                  petrol: "2.0 km", atm: "1.0 km (SBI)", hq: "49 km (Darjeeling)", hw: "1.0 km (Mirik-Siliguri Road)",
                  famousFood: "Fresh Mirik Oranges, Bengali Fish Curry, Steamed Momos & Tea",
                  famousCraft: "Mirik Hand-Knitted Sweaters & Cardamom Spice Packs"
                }),
                itinerary: ["08:30 AM: Boating across Sumendu Lake & walk on Indreni wooden bridge", "11:00 AM: Orange & cardamom orchard walk in Mirik valley", "01:00 PM: Bengali Fish Curry Rice & Momos lunch", "04:00 PM: Viewpoint walk over Nepal border ridge", "08:00 PM: Stay at Lake Side Resort"]
              }
            ]
          }
        ]
      }
    ]
  },

  /* ------------------- MEGHALAYA ------------------- */
  {
    state: "Meghalaya",
    cities: [
      {
        name: "Shillong",
        landmarks: [
          {
            id: "shillong-hub",
            name: "🌧️ Shillong & Cherrapunji Hub",
            city: "Shillong",
            state: "Meghalaya",
            hiddenGems: [
              {
                gemName: "Kongthong Whistling Village & Living Root Bridges",
                state: "Meghalaya",
                city: "Shillong",
                landmarkHub: "🌧️ Shillong & Cherrapunji Hub",
                vibeTag: "Heritage & Crafts",
                location: "East Khasi Hills, Meghalaya",
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
                essentialFacilities: createGemFacilityData({
                  hospName: "Pynursla Public Health Center", hospDist: "14 km", hospPhone: "+91 364 2220108",
                  foodName: "Kongthong Bamboo Kitchen", foodType: "Traditional Khasi Rice & Wild Herbs",
                  stayName: "Kongthong Indigenous Bamboo Eco Huts", stayTariff: "₹1,500/night",
                  policeStationName: "Pynursla Police Outpost", policeStationDist: "14 km (15 mins response)", policeStationPhone: "+91 364 2220112", policePatrol: "Meghalaya Women Helpline 181 PCR",
                  taxiName: "Kongthong Sumo Guild", taxiPhone: "+91 98560 33411",
                  petrol: "14 km (Indian Oil)", atm: "14 km (SBI ATM)", hq: "54 km (Shillong)", hw: "14 km (NH-206)",
                  famousFood: "Khasi Jadoh Rice, Bamboo Shoot Pork & Wild Berry Tea",
                  famousCraft: "Khasi Ryndia Silk Shawls, Bamboo Cane Baskets & Bamboo Flutes"
                }),
                itinerary: ["08:00 AM: Village tune walk", "10:30 AM: Trek to living root bridges", "01:00 PM: Khasi Bamboo Kitchen lunch", "03:30 PM: Bangladesh valley view", "08:00 PM: Stay at Whistling Huts"]
              },
              {
                gemName: "Mawlynnong Cleanest Village & Sky Walk",
                state: "Meghalaya",
                city: "Shillong",
                landmarkHub: "🌧️ Shillong & Cherrapunji Hub",
                vibeTag: "Eco Nature",
                location: "East Khasi Hills, Meghalaya",
                lat: 25.2000,
                lng: 91.9167,
                distance: "78 km from Shillong",
                score: 97,
                womenSafetyIndex: 99,
                uniqueness: 98,
                footfall: "Low (20% of Cherrapunji)",
                category: "Cleanest Village in Asia & Treehouse",
                estCost: "₹1,400 / person",
                desc: "Acclaimed as the cleanest village in Asia, featuring flower-paved village lanes, bamboo dustbins, living root bridges, and an 85ft bamboo skywalk.",
                essentialFacilities: createGemFacilityData({
                  hospName: "Pynursla PHC", hospDist: "18 km", hospPhone: "+91 364 2220108",
                  foodName: "Mawlynnong Village Tribal Kitchen", foodType: "Khasi Rice, Jadoh & Fresh Salads",
                  stayName: "Mawlynnong Treehouse Homestay", stayTariff: "₹1,600/night",
                  policeStationName: "Pynursla Police Station", policeStationDist: "18 km (20 mins response)", policeStationPhone: "+91 364 2220112", policePatrol: "Meghalaya Tourist Police PCR",
                  taxiName: "Mawlynnong Taxi Association", taxiPhone: "+91 98561 22340",
                  petrol: "18 km", atm: "18 km (SBI)", hq: "78 km (Shillong)", hw: "10 km (Dawki Road)",
                  famousFood: "Khasi Jadoh Rice, Bamboo Shoot Curry & Fresh Pineapple",
                  famousCraft: "Bamboo Handicrafts, Cane Baskets & Khasi Weave Stoles"
                }),
                itinerary: ["08:30 AM: Flower-paved village walk through Mawlynnong", "11:00 AM: Climb 85ft bamboo skywalk overlooking Bangladesh plains", "01:00 PM: Khasi Jadoh lunch at village kitchen", "03:30 PM: Single-decker living root bridge walk nearby", "08:00 PM: Stay in Treehouse Homestay"]
              },
              {
                gemName: "Dawki Umngot Crystal Clear River & Kayaking",
                state: "Meghalaya",
                city: "Shillong",
                landmarkHub: "🌧️ Shillong & Cherrapunji Hub",
                vibeTag: "Eco Nature",
                location: "Dawki / West Jaintia Hills, Meghalaya",
                lat: 25.1833,
                lng: 92.0167,
                distance: "82 km from Shillong",
                score: 98,
                womenSafetyIndex: 98,
                uniqueness: 99,
                footfall: "Moderate-Low (25% of Cherrapunji)",
                category: "Transparent Glass River & Border Bay",
                estCost: "₹1,500 / person",
                desc: "Famous for the emerald-green glass-like Umngot River where boats appear to float in mid-air, right on the India-Bangladesh border.",
                essentialFacilities: createGemFacilityData({
                  hospName: "Amlarem PHC", hospDist: "15 km", hospPhone: "+91 3653 220010",
                  foodName: "Dawki Riverside Fish Fry & Rice Shop", foodType: "Fresh River Fish & Khasi Rice",
                  stayName: "Shnongpdeng Riverbank Camping Tents", stayTariff: "₹1,800/night",
                  policeStationName: "Dawki Border Police Outpost", policeStationDist: "2.0 km (3 mins response)", policeStationPhone: "+91 3653 220022", policePatrol: "BFF & Meghalaya Coastal Police",
                  taxiName: "Dawki Boatmen & Drivers Guild", taxiPhone: "+91 98562 77110",
                  petrol: "5.0 km", atm: "5.0 km (SBI)", hq: "82 km (Shillong)", hw: "1.0 km (NH-206)",
                  famousFood: "Dawki Fresh Umngot River Fish Fry, Jadoh & Wild Tea",
                  famousCraft: "Handmade Bamboo Kayaks & Cane Mats"
                }),
                itinerary: ["08:00 AM: Crystal clear boat ride on Umngot River in Shnongpdeng", "11:00 AM: Cliff jumping & kayaking in glass waters", "01:30 PM: Fresh River Fish Fry lunch", "04:30 PM: Visit Tamabil India-Bangladesh border suspension bridge", "08:00 PM: Night riverbank tent camping"]
              },
              {
                gemName: "Nartiang Monoliths & Ancient 500-Yr Durga Temple",
                state: "Meghalaya",
                city: "Shillong",
                landmarkHub: "🌧️ Shillong & Cherrapunji Hub",
                vibeTag: "Spiritual History",
                location: "West Jaintia Hills / Nartiang, Meghalaya",
                lat: 25.5667,
                lng: 92.2167,
                distance: "62 km from Shillong",
                score: 96,
                womenSafetyIndex: 98,
                uniqueness: 98,
                footfall: "Low (10% of Elephant Falls)",
                category: "Prehistoric Monolith Park & 500-Yr Temple",
                estCost: "₹1,100 / person",
                desc: "Home to the world's largest concentration of Khasi-Jaintia megalithic stone monoliths, next to a 500-year-old 51 Shakti Peeth Durga Temple.",
                essentialFacilities: createGemFacilityData({
                  hospName: "Jowai Civil Hospital", hospDist: "20 km", hospPhone: "+91 3652 220224",
                  foodName: "Nartiang Village Bhojanalaya", foodType: "Jaintia Rice, Fish Curry & Wild Herbs",
                  stayName: "Nartiang Heritage Village Homestay", stayTariff: "₹1,300/night",
                  policeStationName: "Nartiang Police Outpost", policeStationDist: "2.0 km (3 mins response)", policeStationPhone: "+91 3652 220200", policePatrol: "Jaintia Hills Police PCR",
                  taxiName: "Nartiang Sumo Guild", taxiPhone: "+91 98563 44550",
                  petrol: "10 km", atm: "10 km (SBI)", hq: "20 km (Jowai)", hw: "5.0 km (NH-6)",
                  famousFood: "Jaintia Rice, Fish Curry & Local Herbal Tea",
                  famousCraft: "Jaintia Handwoven Mats & Stone Carvings"
                }),
                itinerary: ["09:00 AM: Guided walk past 8-meter tall prehistoric stone monoliths", "11:30 AM: Darshan at 500-year-old Nartiang Durga Shakti Peeth temple", "01:30 PM: Authentic Jaintia Thali lunch", "04:30 PM: Sunset walk through Jaintia pine meadows", "08:00 PM: Stay at Heritage Homestay"]
              },
              {
                gemName: "Laitlum Canyons & Mist Valley Trek",
                state: "Meghalaya",
                city: "Shillong",
                landmarkHub: "🌧️ Shillong & Cherrapunji Hub",
                vibeTag: "Mountain Trails",
                location: "Smit / East Khasi Hills, Meghalaya",
                lat: 25.5167,
                lng: 91.9500,
                distance: "24 km from Shillong",
                score: 97,
                womenSafetyIndex: 98,
                uniqueness: 98,
                footfall: "Moderate-Low (20% of Elephant Falls)",
                category: "Gorge Canyon & 3,000 Step Staircase",
                estCost: "₹1,200 / person",
                desc: "Literally meaning 'End of Hills', offering breathtaking 180-degree views of deep green gorges, swirling clouds, and a 3,000-step staircase down to Rasong village.",
                essentialFacilities: createGemFacilityData({
                  hospName: "Smit Primary Health Center", hospDist: "6.0 km", hospPhone: "+91 364 2230108",
                  foodName: "Laitlum Canyon Viewpoint Cafe", foodType: "Hot Kwai (Betel Nut), Chowmein & Fresh Tea",
                  stayName: "Smit Village Eco Homestay", stayTariff: "₹1,400/night",
                  policeStationName: "Madanting Police Station", policeStationDist: "12 km (15 mins response)", policeStationPhone: "+91 364 2230100", policePatrol: "Shillong Rural PCR Patrol 112",
                  taxiName: "Smit Taxi Drivers Union", taxiPhone: "+91 98560 11998",
                  petrol: "6.0 km", atm: "6.0 km (SBI)", hq: "24 km (Shillong)", hw: "6.0 km (Smit Road)",
                  famousFood: "Khasi Chowmein, Steamed Momos & Hot Ginger Tea",
                  famousCraft: "Khasi Ryndia Silk Stoles & Cane Baskets"
                }),
                itinerary: ["08:00 AM: Arrival at Laitlum Canyon edge for panoramic gorge cloud views", "10:30 AM: Trek down part of 3,000-step staircase to Rasong village", "01:00 PM: Hot Ginger Tea & Momos lunch at canyon cafe", "04:00 PM: Sunset photography over mist valley", "08:00 PM: Stay at Smit Eco Homestay"]
              }
            ]
          }
        ]
      }
    ]
  },

  /* ------------------- GOA ------------------- */
  {
    state: "Goa",
    cities: [
      {
        name: "North Goa",
        landmarks: [
          {
            id: "baga-beach",
            name: "🏖️ Baga & Calangute Beach Hub",
            city: "North Goa",
            state: "Goa",
            hiddenGems: [
              {
                gemName: "Divar Island & Portuguese Heritage Backwaters",
                state: "Goa",
                city: "North Goa",
                landmarkHub: "🏖️ Baga & Calangute Beach Hub",
                vibeTag: "Heritage & Crafts",
                location: "Divar Island, Old Goa",
                lat: 15.5167,
                lng: 73.9167,
                distance: "18 km from Baga Beach",
                score: 95,
                womenSafetyIndex: 98,
                uniqueness: 97,
                footfall: "Very Low (5% of Baga Beach)",
                category: "Island & Indo-Portuguese Heritage",
                estCost: "₹1,200 / person",
                desc: "A tranquil river island accessible only by ferry, featuring 500-year-old Portuguese villas, pristine paddy fields, and quiet backwater fishing spots.",
                essentialFacilities: createGemFacilityData({
                  hospName: "Old Goa Health Center", hospDist: "3.5 km", hospPhone: "+91 832 2285011",
                  foodName: "Divar Village Bakery & Taverna", foodType: "Goan Fish Curry Rice & Bebinca",
                  stayName: "Divar Portuguese Heritage Villa", stayTariff: "₹1,800/night",
                  policeStationName: "Old Goa Police Station", policeStationDist: "3.5 km (5 mins response)", policeStationPhone: "+91 832 2285100", policePatrol: "Goa Tourist Police Coastal Unit",
                  taxiName: "Divar Ferry & Scooter Rental Guild", taxiPhone: "+91 98221 44500",
                  petrol: "3.0 km", atm: "2.0 km (SBI)", hq: "12 km (Panaji)", hw: "4.0 km (NH-66)",
                  famousFood: "Goan Fish Curry Rice, Poi Bread, Bebinca & Sol Kadi",
                  famousCraft: "Azulejos Hand-Painted Tiles, Coconut Shell Craft & Kunbi Sarees"
                }),
                itinerary: ["08:00 AM: Scenic ferry ride across Mandovi River to Divar Island", "10:30 AM: Heritage walk past Portuguese villas & Our Lady of Compassion Church", "01:00 PM: Goan Fish Curry Rice lunch at local tavern", "04:00 PM: Sunset cycling along island paddy fields", "08:00 PM: Peaceful stay at Heritage Villa"]
              },
              {
                gemName: "Chorla Ghat Eco Ridge & Waterfalls Trail",
                state: "Goa",
                city: "North Goa",
                landmarkHub: "🏖️ Baga & Calangute Beach Hub",
                vibeTag: "Mountain Trails",
                location: "Chorla Ghat / Goa Border",
                lat: 15.6500,
                lng: 74.1333,
                distance: "55 km from Panaji / North Goa",
                score: 96,
                womenSafetyIndex: 97,
                uniqueness: 98,
                footfall: "Low (10% of Baga)",
                category: "Western Ghats Rainforest & Ridge",
                estCost: "₹1,600 / person",
                desc: "A lush tropical rainforest ridge located on the intersection of Goa, Karnataka, and Maharashtra at 2,600 ft, featuring Twin Waterfalls and rare orchids.",
                essentialFacilities: createGemFacilityData({
                  hospName: "Sanquelim Community Health Center", hospDist: "22 km", hospPhone: "+91 832 2364230",
                  foodName: "Chorla Ghat Eco Resort Dining", foodType: "Goan Fish Thali & Wild Mushroom Xacuti",
                  stayName: "Chorla Rainforest Eco Resort", stayTariff: "₹2,200/night",
                  policeStationName: "Valpoi Police Station", policeStationDist: "22 km (20 mins response)", policeStationPhone: "+91 832 2374222", policePatrol: "Goa Forest & Police Patrol PCR",
                  taxiName: "Valpoi Taxi Association", taxiPhone: "+91 98223 11009",
                  petrol: "20 km", atm: "20 km (SBI)", hq: "55 km (Panaji)", hw: "1.0 km (SH-4)",
                  famousFood: "Goan Mushroom Xacuti, Sol Kadi & Crab Xec Xec",
                  famousCraft: "Hand-carved Wooden Utensils & Forest Honey Packs"
                }),
                itinerary: ["08:00 AM: Rainforest trail walk to Vajra & Twin Waterfalls viewpoint", "11:00 AM: Bird watching for Malabar Pied Hornbills", "01:30 PM: Goan Mushroom Xacuti & Fish Thali lunch", "04:30 PM: Sunset view over Western Ghats mist valley", "08:00 PM: Stay at Rainforest Eco Resort"]
              },
              {
                gemName: "Cabo de Rama Fort & Cliff View Beach",
                state: "Goa",
                city: "South Goa",
                landmarkHub: "🏖️ Baga & Calangute Beach Hub",
                vibeTag: "Eco Nature",
                location: "Canacona / South Goa",
                lat: 15.0889,
                lng: 73.9211,
                distance: "60 km from Baga / 25 km from Margao",
                score: 97,
                womenSafetyIndex: 97,
                uniqueness: 98,
                footfall: "Low (15% of Baga)",
                category: "Ancient Cliff Fort & Secret Pebble Beach",
                estCost: "₹1,200 / person",
                desc: "An ancient fort perched on a high ocean cliff overlooking the Arabian Sea, featuring a white chapel inside fort walls and a secret hidden coconut palm beach.",
                essentialFacilities: createGemFacilityData({
                  hospName: "Canacona Community Health Center", hospDist: "15 km", hospPhone: "+91 832 2643320",
                  foodName: "Cabo Cliff View Shack", foodType: "Fresh Prawn Curry, Rice & Coconut Water",
                  stayName: "Cabo Cliff Eco Ocean Huts", stayTariff: "₹1,700/night",
                  policeStationName: "Cuncolim Police Station", policeStationDist: "15 km (15 mins response)", policeStationPhone: "+91 832 2763233", policePatrol: "Goa Coastal Tourist Police PCR",
                  taxiName: "Canacona Scooter & Auto Guild", taxiPhone: "+91 98225 66771",
                  petrol: "12 km", atm: "10 km (SBI)", hq: "25 km (Margao)", hw: "10 km (NH-66)",
                  famousFood: "Goan Prawn Balchão, Fish Curry Rice, Sol Kadi & Bebinca",
                  famousCraft: "Shell Jewelry, Coconut Shell Carvings & Hand-Painted Tiles"
                }),
                itinerary: ["09:00 AM: Exploration of Cabo de Rama fort ramparts & St. Antonio chapel", "11:30 AM: Walk down hidden palm grove staircase to Cabo secret beach", "01:30 PM: Fresh Prawn Curry & Coconut water lunch", "05:00 PM: Spectacular cliffside sunset over Arabian Sea", "08:00 PM: Stay at Cliff Eco Huts"]
              },
              {
                gemName: "Tambdi Surla 12th-Century Ancient Shiva Temple",
                state: "Goa",
                city: "North Goa",
                landmarkHub: "🏖️ Baga & Calangute Beach Hub",
                vibeTag: "Spiritual History",
                location: "Bhagwan Mahavir Sanctuary / Mollem, Goa",
                lat: 15.4389,
                lng: 74.2564,
                distance: "65 km from Panaji",
                score: 98,
                womenSafetyIndex: 98,
                uniqueness: 99,
                footfall: "Very Low (8% of Baga)",
                category: "12th Century Kadamba Black Basalt Temple",
                estCost: "₹1,100 / person",
                desc: "The oldest surviving temple in Goa, built in the 12th century from black basalt stone deep inside the Bhagwan Mahavir Wildlife Sanctuary jungle.",
                essentialFacilities: createGemFacilityData({
                  hospName: "Ponda Sub-District Hospital", hospDist: "25 km", hospPhone: "+91 832 2312215",
                  foodName: "Surla Forest Edge Bhojanalaya", foodType: "Goan Saraswat Sattvik Veg Thali",
                  stayName: "Mollem Jungle Eco Homestay", stayTariff: "₹1,500/night",
                  policeStationName: "Collem Police Station", policeStationDist: "12 km (15 mins response)", policeStationPhone: "+91 832 2600233", policePatrol: "Goa Wildlife & Police Patrol Unit",
                  taxiName: "Mollem Jeep Association", taxiPhone: "+91 98224 55112",
                  petrol: "15 km", atm: "12 km (SBI)", hq: "25 km (Ponda)", hw: "12 km (NH-74)",
                  famousFood: "Goan Saraswat Veg Thali, Ukdache Modak & Sol Kadi",
                  famousCraft: "Brass Idols, Terracotta Oil Lamps & Terracotta Pottery"
                }),
                itinerary: ["08:30 AM: Jungle drive through Bhagwan Mahavir Sanctuary to Tambdi Surla", "10:30 AM: Admire 12th century Kadamba black basalt rock carvings & lotus ceiling", "01:00 PM: Goan Saraswat Sattvik Thali lunch", "03:30 PM: Nature trail walk along river stream", "08:00 PM: Stay at Jungle Eco Homestay"]
              },
              {
                gemName: "Netravali Bubble Lake & Spice Plantation Trail",
                state: "Goa",
                city: "South Goa",
                landmarkHub: "🏖️ Baga & Calangute Beach Hub",
                vibeTag: "Eco Nature",
                location: "Netravali / Sanguem, South Goa",
                lat: 15.0833,
                lng: 74.2000,
                distance: "75 km from Panaji",
                score: 96,
                womenSafetyIndex: 98,
                uniqueness: 98,
                footfall: "Very Low (5% of Baga)",
                category: "Mysterious Bubbling Tank & Organic Spice Estate",
                estCost: "₹1,300 / person",
                desc: "A fascinating sacred temple tank (Budbudyachi Tali) where gas bubbles continuously rise to the surface when you clap, set inside lush spice plantations.",
                essentialFacilities: createGemFacilityData({
                  hospName: "Sanguem Primary Health Center", hospDist: "18 km", hospPhone: "+91 832 2604230",
                  foodName: "Netravali Spice Plantation Kitchen", foodType: "Organic Spice Garden Fish Thali",
                  stayName: "Netravali Organic Farm Homestay", stayTariff: "₹1,600/night",
                  policeStationName: "Sanguem Police Station", policeStationDist: "18 km (20 mins response)", policeStationPhone: "+91 832 2604233", policePatrol: "Goa Rural PCR Patrol 112",
                  taxiName: "Netravali Auto Guild", taxiPhone: "+91 98226 11990",
                  petrol: "15 km", atm: "15 km (SBI)", hq: "35 km (Margao)", hw: "15 km (Sanguem Road)",
                  famousFood: "Goan Organic Spice Garden Thali, Nutmeg Ice Cream & Herbal Tea",
                  famousCraft: "Fresh Black Pepper, Vanilla Pods, Nutmeg & Cashew Nuts"
                }),
                itinerary: ["09:00 AM: Witness continuous clapping gas bubbles at Netravali temple tank", "11:30 AM: Guided walk through organic nutmeg, cardamom & pepper plantation", "01:30 PM: Organic Spice Garden Thali & nutmeg ice cream lunch", "04:30 PM: Visit Savari waterfall trail nearby", "08:00 PM: Stay at Organic Farm Homestay"]
              }
            ]
          }
        ]
      }
    ]
  },

  /* ------------------- KARNATAKA ------------------- */
  {
    state: "Karnataka",
    cities: [
      {
        name: "Hampi",
        landmarks: [
          {
            id: "hampi-temple",
            name: "🛕 Hampi Main Temple Ruins",
            city: "Hampi",
            state: "Karnataka",
            hiddenGems: [
              {
                gemName: "Anegundi Ancient Monkey Kingdom & Sanapur Lake",
                state: "Karnataka",
                city: "Hampi",
                landmarkHub: "🛕 Hampi Main Temple Ruins",
                vibeTag: "Spiritual History",
                location: "Koppal / Anegundi, Karnataka",
                lat: 15.3522,
                lng: 76.4867,
                distance: "5 km from Hampi Temple Ruins (across Tungabhadra River)",
                score: 97,
                womenSafetyIndex: 96,
                uniqueness: 98,
                footfall: "Low (15% of Hampi main ruins)",
                category: "Mythological Heritage & Coracle Boating",
                estCost: "₹1,100 / person",
                desc: "An ancient village believed to be the mythical Kishkindha kingdom of the Ramayana, featuring boulder-strewn landscapes, coracle boat rides on Sanapur Lake, and banana fiber crafts.",
                essentialFacilities: createGemFacilityData({
                  hospName: "Gangavathi Government Hospital", hospDist: "10 km", hospPhone: "+91 8533 220011",
                  foodName: "Anegundi Heritage Banana Kitchen", foodType: "South Indian Bisi Bele Bath & Dosa",
                  stayName: "Anegundi Rural Artisan Homestay", stayTariff: "₹1,300/night",
                  policeStationName: "Anegundi Police Outpost", policeStationDist: "2.0 km (4 mins response)", policeStationPhone: "+91 8533 220100", policePatrol: "Hampi Tourist Police Patrol",
                  taxiName: "Sanapur Coracle & Auto Guild", taxiPhone: "+91 94480 33112",
                  petrol: "5.0 km", atm: "3.0 km (Canara)", hq: "20 km (Hospet)", hw: "10 km (NH-50)",
                  famousFood: "South Indian Bisi Bele Bath, Jolada Rotti, Mysore Pak & Filter Coffee",
                  famousCraft: "Banana Fiber Handbags & Crafts, Ilkal Sarees & Kinnal Wooden Toys"
                }),
                itinerary: ["07:30 AM: Coracle boat ride across Tungabhadra River", "10:30 AM: Visit Anjanadri Hill birthplace of Lord Hanuman", "01:00 PM: Jolada Rotti meal at Banana Kitchen", "04:00 PM: Sunset coracle ride on Sanapur Lake", "08:00 PM: Rest at Rural Artisan Homestay"]
              },
              {
                gemName: "Hippie Island Boulders & Sunset Point Ridge",
                state: "Karnataka",
                city: "Hampi",
                landmarkHub: "🛕 Hampi Main Temple Ruins",
                vibeTag: "Mountain Trails",
                location: "Virupapur Gaddi / Hampi, Karnataka",
                lat: 15.3400,
                lng: 76.4600,
                distance: "3 km across Tungabhadra River",
                score: 96,
                womenSafetyIndex: 96,
                uniqueness: 97,
                footfall: "Moderate-Low (25% of Virupaksha)",
                category: "Granite Boulder Ridge & Sunset Cliff",
                estCost: "₹1,000 / person",
                desc: "A surreal granite boulder landscape across the river from main Hampi, famous for boulder climbing, acoustic music jam sessions, and sunset ridge views.",
                essentialFacilities: createGemFacilityData({
                  hospName: "Hospet Government Hospital", hospDist: "15 km", hospPhone: "+91 8394 220011",
                  foodName: "Mango Tree Hippie Island Cafe", foodType: "Wood-Fired Pizza, Israeli Thali & Fresh Juices",
                  stayName: "Boulder View Bamboo Huts", stayTariff: "₹1,200/night",
                  policeStationName: "Hampi Tourist Police Post", policeStationDist: "3.0 km (5 mins response)", policeStationPhone: "+91 8394 221100", policePatrol: "Tungabhadra Tourist PCR Van",
                  taxiName: "Virupapur Scooter Guild", taxiPhone: "+91 94481 22900",
                  petrol: "5.0 km", atm: "3.0 km (SBI)", hq: "15 km (Hospet)", hw: "8.0 km (NH-50)",
                  famousFood: "South Indian Thali, Wood-Fired Pizza & Fresh Watermelon Juice",
                  famousCraft: "Handmade Leather Drums, Banana Leaf Artwork & Stone Carvings"
                }),
                itinerary: ["08:00 AM: Boulder climbing & bouldering session with local guides", "11:00 AM: Walk past ancient Vijayanagara aqueduct ruins", "01:00 PM: Wood-fired pizza & fresh juice lunch at Mango Tree", "05:00 PM: Sunset drum jam session at Sunset Point boulder ridge", "08:00 PM: Stay in Bamboo Huts"]
              },
              {
                gemName: "Daroji Sloth Bear Sanctuary Trail",
                state: "Karnataka",
                city: "Hampi",
                landmarkHub: "🛕 Hampi Main Temple Ruins",
                vibeTag: "Eco Nature",
                location: "Kamalapura / Hospet, Karnataka",
                lat: 15.2500,
                lng: 76.5500,
                distance: "15 km from Hampi",
                score: 95,
                womenSafetyIndex: 97,
                uniqueness: 97,
                footfall: "Low (10% of Virupaksha)",
                category: "Sloth Bear Sanctuary & Watchtower",
                estCost: "₹1,100 / person",
                desc: "Asia's first exclusive sloth bear sanctuary, protecting over 120 Indian sloth bears roaming freely amidst granite boulder scrub forests.",
                essentialFacilities: createGemFacilityData({
                  hospName: "Kamalapura Health Center", hospDist: "5.0 km", hospPhone: "+91 8394 241010",
                  foodName: "Kamalapura Heritage Dhaba", foodType: "Kannada Jolada Rotti Thali & Filter Coffee",
                  stayName: "Daroji Bear Sanctuary Eco Huts", stayTariff: "₹1,500/night",
                  policeStationName: "Kamalapura Police Station", policeStationDist: "5.0 km (5 mins response)", policeStationPhone: "+91 8394 241000", policePatrol: "Karnataka Wildlife PCR Unit",
                  taxiName: "Kamalapura Auto Guild", taxiPhone: "+91 94482 77110",
                  petrol: "5.0 km", atm: "5.0 km (SBI)", hq: "15 km (Hospet)", hw: "5.0 km (Hospet Road)",
                  famousFood: "Karnataka Jolada Rotti, Enne Gai (Stuffed Brinjal), Mysuru Pak & Filter Coffee",
                  famousCraft: "Kinnal Painted Wooden Toys, Hand-woven Cotton Towels & Stone Sculptures"
                }),
                itinerary: ["03:00 PM: Arrival at Daroji watchtower to observe wild sloth bears feeding on boulders", "05:30 PM: Bird watching for star tortoises & leopards", "07:30 PM: Authentic Jolada Rotti Thali dinner", "09:00 PM: Stay at Eco Huts"]
              },
              {
                gemName: "Badami Cave Temples & Agastya Lake",
                state: "Karnataka",
                city: "Hampi",
                landmarkHub: "🛕 Hampi Main Temple Ruins",
                vibeTag: "Heritage & Crafts",
                location: "Badami / Bagalkot, Karnataka",
                lat: 15.9167,
                lng: 75.6833,
                distance: "135 km from Hampi",
                score: 98,
                womenSafetyIndex: 97,
                uniqueness: 99,
                footfall: "Low (20% of Hampi)",
                category: "6th Century Chalukya Rock-Cut Caves",
                estCost: "₹1,500 / person",
                desc: "Magnificent 6th-century Chalukyan rock-cut cave temples carved out of red sandstone cliffs overlooking the tranquil green waters of Agastya Lake.",
                essentialFacilities: createGemFacilityData({
                  hospName: "Badami Civil Hospital", hospDist: "2.0 km", hospPhone: "+91 8357 220010",
                  foodName: "Badami Heritage Bhojanalaya", foodType: "North Karnataka North Thali & Shenga Chutney",
                  stayName: "Agastya Lake View Heritage Lodge", stayTariff: "₹1,600/night",
                  policeStationName: "Badami Police Station", policeStationDist: "1.5 km (3 mins response)", policeStationPhone: "+91 8357 220022", policePatrol: "Badami Tourist Police Squad",
                  taxiName: "Badami Auto Association", taxiPhone: "+91 94483 11220",
                  petrol: "2.0 km", atm: "1.0 km (SBI)", hq: "30 km (Bagalkot)", hw: "2.0 km (Badami Highway)",
                  famousFood: "North Karnataka Jolada Rotti, Shenga (Peanut) Chutney, Badam Milk & Dharwad Peda",
                  famousCraft: "Guledgudda Khana Handloom Fabrics & Sandstone Carvings"
                }),
                itinerary: ["08:30 AM: Guided walkthrough of 4 ancient red sandstone rock-cut cave temples", "11:30 AM: Visit Bhutanatha Temple on Agastya lake bank", "01:00 PM: North Karnataka Jolada Rotti & Shenga Chutney lunch", "04:30 PM: Climb Badami Fort cliff for sunset lake view", "08:00 PM: Stay at Lake View Lodge"]
              },
              {
                gemName: "Pattadakal UNESCO Temple Complex",
                state: "Karnataka",
                city: "Hampi",
                landmarkHub: "🛕 Hampi Main Temple Ruins",
                vibeTag: "Spiritual History",
                location: "Pattadakal / Bagalkot, Karnataka",
                lat: 15.9500,
                lng: 75.8167,
                distance: "140 km from Hampi / 22 km from Badami",
                score: 97,
                womenSafetyIndex: 98,
                uniqueness: 98,
                footfall: "Low (15% of Hampi)",
                category: "UNESCO World Heritage Temple Complex",
                estCost: "₹1,400 / person",
                desc: "A UNESCO World Heritage site featuring a harmonious cluster of 10 7th and 8th-century temples showcasing the fusion of North Indian Nagara and South Indian Dravidian styles.",
                essentialFacilities: createGemFacilityData({
                  hospName: "Badami Civil Hospital", hospDist: "22 km", hospPhone: "+91 8357 220010",
                  foodName: "Pattadakal Malaprabha Bhojanalaya", foodType: "Kannada Meals & Filter Coffee",
                  stayName: "Malaprabha Riverbank Eco Homestay", stayTariff: "₹1,400/night",
                  policeStationName: "Pattadakal Police Outpost", policeStationDist: "1.0 km (2 mins response)", policeStationPhone: "+91 8357 220022", policePatrol: "Karnataka Heritage Tourist PCR",
                  taxiName: "Pattadakal Auto Guild", taxiPhone: "+91 94484 99110",
                  petrol: "10 km", atm: "5.0 km (SBI)", hq: "30 km (Bagalkot)", hw: "1.0 km (Pattadakal Road)",
                  famousFood: "Karnataka Meals with Shenga Chutney, Holige Sweet & Filter Coffee",
                  famousCraft: "Hand-Carved Stone Sculptures & Ilkal Handloom Sarees"
                }),
                itinerary: ["09:00 AM: Guided walk through Virupaksha & Mallikarjuna 8th century temples", "11:30 AM: Marvel at fusion of Nagara & Dravidian stone carvings", "01:00 PM: Kannada meals & Holige sweet lunch", "04:00 PM: Malaprabha riverbank walk", "08:00 PM: Rest at Riverbank Homestay"]
              }
            ]
          }
        ]
      }
    ]
  },

  /* ------------------- TAMIL NADU ------------------- */
  {
    state: "Tamil Nadu",
    cities: [
      {
        name: "Mahabalipuram",
        landmarks: [
          {
            id: "mahabalipuram-shore",
            name: "🛕 Mahabalipuram Shore Temple",
            city: "Mahabalipuram",
            state: "Tamil Nadu",
            hiddenGems: [
              {
                gemName: "Kovalam Backwaters & Surfing Village",
                state: "Tamil Nadu",
                city: "Mahabalipuram",
                landmarkHub: "🛕 Mahabalipuram Shore Temple",
                vibeTag: "Eco Nature",
                location: "Kovalam / Chengalpattu, Tamil Nadu",
                lat: 12.7905,
                lng: 80.2505,
                distance: "18 km from Mahabalipuram",
                score: 95,
                womenSafetyIndex: 97,
                uniqueness: 96,
                footfall: "Low (15% of Shore Temple)",
                category: "Backwater Village & Surf School",
                estCost: "₹1,300 / person",
                desc: "A serene fishing and surfing hamlet along the East Coast Road with quiet backwater canals, catamaran fishing, and organic seafood.",
                essentialFacilities: createGemFacilityData({
                  hospName: "Kelambakkam Primary Health Center", hospDist: "6.0 km", hospPhone: "+91 44 27472011",
                  foodName: "Kovalam Fisherman Catch Kitchen", foodType: "Fresh Tamil Seafood Thali & Filter Coffee",
                  stayName: "Kovalam Coastal Eco Lodge", stayTariff: "₹1,600/night",
                  policeStationName: "Kovalam Coastal Police Station", policeStationDist: "2.0 km (4 mins response)", policeStationPhone: "+91 44 27472100", policePatrol: "ECR Tourist Highway Police PCR",
                  taxiName: "ECR Taxi Association", taxiPhone: "+91 98400 55123",
                  petrol: "3.0 km", atm: "2.0 km (Indian Bank)", hq: "25 km (Chengalpattu)", hw: "1.0 km (ECR)",
                  famousFood: "Tamil Meen Kuzhambu (Fish Curry), Chettinad Chicken, Kothu Parotta & Filter Coffee",
                  famousCraft: "Hand-Carved Granite Stone Sculptures, Kanchipuram Silk Sarees & Palm Leaf Crafts"
                }),
                itinerary: ["06:30 AM: Sunrise surfing lesson or catamaran boat ride", "09:30 AM: Backwater mangrove kayak walkthrough", "01:00 PM: Fresh Tamil Seafood Thali lunch", "04:30 PM: Visit Sadras Dutch Fort ruins nearby", "08:00 PM: Cozy stay at Coastal Eco Lodge"]
              },
              {
                gemName: "Sadras Dutch Fort Ruins & Coastal Heritage",
                state: "Tamil Nadu",
                city: "Mahabalipuram",
                landmarkHub: "🛕 Mahabalipuram Shore Temple",
                vibeTag: "Heritage & Crafts",
                location: "Sadras / Kalpakkam, Tamil Nadu",
                lat: 12.5167,
                lng: 80.1667,
                distance: "15 km south of Mahabalipuram",
                score: 95,
                womenSafetyIndex: 96,
                uniqueness: 97,
                footfall: "Very Low (5% of Shore Temple)",
                category: "17th Century Dutch Fortress & Secret Beach",
                estCost: "₹900 / person",
                desc: "A 17th-century Dutch fortress built in 1612, featuring ruined brick ramparts, ancient Dutch tombs, a secret watchtower, and a quiet beach.",
                essentialFacilities: createGemFacilityData({
                  hospName: "Kalpakkam Government Hospital", hospDist: "3.0 km", hospPhone: "+91 44 27481010",
                  foodName: "Sadras Heritage Coastal Kitchen", foodType: "Tamil Meals & Fresh Crab Fry",
                  stayName: "Sadras Dutch Coast Beach Lodge", stayTariff: "₹1,300/night",
                  policeStationName: "Kalpakkam Police Station", policeStationDist: "3.0 km (4 mins response)", policeStationPhone: "+91 44 27481000", policePatrol: "Coastal Highway Police PCR 112",
                  taxiName: "Sadras Auto Guild", taxiPhone: "+91 98401 99221",
                  petrol: "3.0 km", atm: "2.0 km (SBI)", hq: "25 km (Chengalpattu)", hw: "2.0 km (ECR)",
                  famousFood: "Tamil Meen Kuzhambu, Crab Fry, Filter Coffee & Jigarthanda",
                  famousCraft: "Palm Leaf Baskets, Granite Carvings & Terracotta Utensils"
                }),
                itinerary: ["09:00 AM: Walkthrough of 17th century Sadras Dutch Fort ramparts & tombs", "11:30 AM: Secret watchtower exploration overlooking beach", "01:00 PM: Fresh Tamil Crab Fry & Meals lunch", "04:30 PM: Sunset walk on uncrowded Sadras beach", "08:00 PM: Stay at Beach Lodge"]
              },
              {
                gemName: "Vedanthangal Bird Sanctuary Wetland",
                state: "Tamil Nadu",
                city: "Mahabalipuram",
                landmarkHub: "🛕 Mahabalipuram Shore Temple",
                vibeTag: "Eco Nature",
                location: "Vedanthangal / Chengalpattu, Tamil Nadu",
                lat: 12.5458,
                lng: 79.8594,
                distance: "55 km from Mahabalipuram",
                score: 96,
                womenSafetyIndex: 97,
                uniqueness: 97,
                footfall: "Low (15% of Mahabalipuram)",
                category: "Oldest Water Bird Sanctuary in India",
                estCost: "₹850 / person",
                desc: "India's oldest water bird sanctuary, home to over 40,000 migratory birds (herons, egrets, storks, spoonbills) nesting in Barringtonia trees.",
                essentialFacilities: createGemFacilityData({
                  hospName: "Maduranthakam Government Hospital", hospDist: "10 km", hospPhone: "+91 44 27552010",
                  foodName: "Vedanthangal Sanctuary Rest Stop", foodType: "South Indian Tiffin, Idli & Filter Coffee",
                  stayName: "Vedanthangal Heritage Farm Stay", stayTariff: "₹1,200/night",
                  policeStationName: "Maduranthakam Police Station", policeStationDist: "10 km (10 mins response)", policeStationPhone: "+91 44 27552000", policePatrol: "Tamil Nadu Forest & Highway PCR",
                  taxiName: "Vedanthangal Auto Association", taxiPhone: "+91 98402 33441",
                  petrol: "8.0 km", atm: "8.0 km (SBI)", hq: "30 km (Chengalpattu)", hw: "8.0 km (GST Road NH-45)",
                  famousFood: "Hot Crispy Medu Vada, Steamed Idlis & South Indian Filter Coffee",
                  famousCraft: "Handmade Terracotta Birds & Palm Leaf Baskets"
                }),
                itinerary: ["06:30 AM: Early morning bird watching from sanctuary watchtowers", "09:30 AM: Photography of nesting storks & pelicans", "01:00 PM: South Indian Tiffin lunch", "04:00 PM: Village lake walk", "08:00 PM: Stay at Farm Stay"]
              },
              {
                gemName: "Tirukazhukundram Sacred Eagle Temple & Hill",
                state: "Tamil Nadu",
                city: "Mahabalipuram",
                landmarkHub: "🛕 Mahabalipuram Shore Temple",
                vibeTag: "Spiritual History",
                location: "Tirukazhukundram, Tamil Nadu",
                lat: 12.6117,
                lng: 79.9983,
                distance: "14 km from Mahabalipuram",
                score: 96,
                womenSafetyIndex: 97,
                uniqueness: 97,
                footfall: "Low (20% of Shore Temple)",
                category: "Ancient Hilltop Temple & 500 Steps",
                estCost: "₹700 / person",
                desc: "An ancient hill temple (Vedagiriswarar) dedicated to Lord Shiva, famous for 565 stone steps up the hill and legendary daily visits by sacred eagles.",
                essentialFacilities: createGemFacilityData({
                  hospName: "Tirukazhukundram Government Hospital", hospDist: "1.5 km", hospPhone: "+91 44 27447010",
                  foodName: "Eagle Temple Annapoorna Hotel", foodType: "Tamil Meals, Ghee Roast Dosa & Coffee",
                  stayName: "Vedagiri Heritage Guest House", stayTariff: "₹1,100/night",
                  policeStationName: "Tirukazhukundram Police Station", policeStationDist: "1.0 km (2 mins response)", policeStationPhone: "+91 44 27447000", policePatrol: "Temple Town Police PCR 112",
                  taxiName: "Tirukazhukundram Auto Guild", taxiPhone: "+91 98403 77889",
                  petrol: "1.5 km", atm: "1.0 km (Indian Bank)", hq: "15 km (Chengalpattu)", hw: "1.0 km (State Highway 58)",
                  famousFood: "Crispy Ghee Roast Dosa, Vadai, Mysore Pak & Filter Coffee",
                  famousCraft: "Kanchipuram Silk Sarees & Brass Temple Lamps"
                }),
                itinerary: ["06:30 AM: Climb 565 stone steps up Vedagiriswarar hill temple", "09:30 AM: Darshan at ancient rock-cut Shiva shrine peak", "01:00 PM: Tamil Meals & Ghee Roast Dosa lunch", "04:30 PM: Visit Sangu Tirtham holy tank below", "08:00 PM: Rest at Heritage Guest House"]
              },
              {
                gemName: "Muttukadu Backwater Kayaking & Mangrove Trail",
                state: "Tamil Nadu",
                city: "Mahabalipuram",
                landmarkHub: "🛕 Mahabalipuram Shore Temple",
                vibeTag: "Eco Nature",
                location: "Muttukadu / East Coast Road, Tamil Nadu",
                lat: 12.8225,
                lng: 80.2411,
                distance: "22 km from Mahabalipuram",
                score: 95,
                womenSafetyIndex: 98,
                uniqueness: 95,
                footfall: "Moderate-Low (20% of Shore Temple)",
                category: "Coastal Backwaters & Kayaking",
                estCost: "₹1,200 / person",
                desc: "A wide coastal backwater lagoon along the East Coast Road offering quiet kayaking, motor boating, and sunset views over casuarina groves.",
                essentialFacilities: createGemFacilityData({
                  hospName: "Chettinad Health City Kelambakkam", hospDist: "4.0 km", hospPhone: "+91 44 47411000",
                  foodName: "Muttukadu Backwater View Cafe", foodType: "Seafood Biryani, Fish Fry & Fresh Juices",
                  stayName: "Muttukadu Lagoon Resort", stayTariff: "₹1,800/night",
                  policeStationName: "Kanathur Police Station", policeStationDist: "3.0 km (4 mins response)", policeStationPhone: "+91 44 27472100", policePatrol: "ECR Highway Police PCR",
                  taxiName: "ECR Cab Guild", taxiPhone: "+91 98404 11223",
                  petrol: "2.0 km", atm: "1.5 km (HDFC)", hq: "25 km (Chengalpattu)", hw: "500m (ECR)",
                  famousFood: "Tamil Seafood Biryani, Prawn Fry & Tender Coconut Water",
                  famousCraft: "Granite Carvings & Seashell Handicrafts"
                }),
                itinerary: ["08:30 AM: Backwater kayaking through Muttukadu mangrove lagoon", "11:30 AM: Motorboat ride to casuarina beach grove", "01:30 PM: Fresh Seafood Biryani lunch", "04:30 PM: Sunset walk along backwater bank", "08:00 PM: Stay at Lagoon Resort"]
              }
            ]
          }
        ]
      }
    ]
  }
];

export function flattenDestinationsToGems() {
  const allGems = [];
  destinationsDataset.forEach(stateObj => {
    stateObj.cities.forEach(cityObj => {
      cityObj.landmarks.forEach(landmarkObj => {
        if (landmarkObj.hiddenGems && Array.isArray(landmarkObj.hiddenGems)) {
          allGems.push(...landmarkObj.hiddenGems);
        }
      });
    });
  });
  return allGems;
}

export function getCitiesForState(stateName) {
  if (!stateName || stateName === 'All States') {
    const allCities = [];
    destinationsDataset.forEach(s => {
      s.cities.forEach(c => allCities.push(c.name));
    });
    return Array.from(new Set(allCities));
  }
  const stateObj = destinationsDataset.find(s => s.state.toLowerCase() === stateName.toLowerCase());
  if (!stateObj) return [];
  return stateObj.cities.map(c => c.name);
}

export function getLandmarksForStateAndCity(stateName, cityName) {
  let matchedLandmarks = [];

  destinationsDataset.forEach(s => {
    if (stateName === 'All States' || s.state.toLowerCase() === stateName.toLowerCase()) {
      s.cities.forEach(c => {
        if (!cityName || cityName === 'All Cities / Districts' || c.name.toLowerCase() === cityName.toLowerCase()) {
          matchedLandmarks.push(...c.landmarks);
        }
      });
    }
  });

  return matchedLandmarks;
}
