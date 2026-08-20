/**
 * Structured Pan-India Destinations Dataset
 * Hierarchy: State -> Cities -> Famous Landmarks -> Nearby Hidden Gems
 *
 * Designed for easy expansion: Append new States/Cities/Landmarks seamlessly!
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
    { name: taxiName || "Local Auto & Cab Guild", type: "Local Auto & Cab Guild", phone: taxiPhone || "+91 112", availability: "24/7 On-Call (Night Transit Ready)" }
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
            lat: 27.1751,
            lng: 78.0421,
            hiddenGems: [
              {
                gemName: "Kachhpura Heritage Village & Moonlight Taj View",
                state: "Uttar Pradesh",
                city: "Agra",
                landmarkHub: "🕌 Taj Mahal & Agra Hub",
                vibeTag: "Heritage & Crafts",
                category: "Heritage & Crafts",
                location: "Agra Suburbs, Uttar Pradesh",
                lat: 27.1798,
                lng: 78.0469,
                distance: "4 km from Taj Mahal East Gate",
                score: 94,
                womenSafetyIndex: 95,
                uniqueness: 96,
                footfall: "Low (15% of Taj main gate)",
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
                gemName: "Mehtab Bagh & Humayun Mosque Moonlight Trail",
                state: "Uttar Pradesh",
                city: "Agra",
                landmarkHub: "🕌 Taj Mahal & Agra Hub",
                vibeTag: "Heritage & Crafts",
                category: "Heritage & Crafts",
                location: "Yamuna Northern Bank, Agra",
                lat: 27.1795,
                lng: 78.0423,
                distance: "3 km across Yamuna River from Taj Mahal",
                score: 95,
                womenSafetyIndex: 96,
                uniqueness: 97,
                footfall: "Low (20% of Taj main entrance)",
                estCost: "₹900 / person",
                desc: "A charbagh garden complex perfectly aligned with Taj Mahal across Yamuna, offering serene reflecting pool views without the crowded queues.",
                essentialFacilities: createGemFacilityData({
                  hospName: "Agra City Sub-District Hospital", hospDist: "4.0 km", hospPhone: "+91 562 2260110",
                  foodName: "Mehtab Garden Tea Corner", foodType: "Bedai Jalebi & Masala Chai",
                  stayName: "Riverbank Mughal View Lodge", stayTariff: "₹1,400/night",
                  policeStationName: "Tajganj Police Station", policeStationDist: "2.0 km (4 mins response)", policeStationPhone: "+91 562 2230000", policePatrol: "Taj Corridor Tourist Police PCR",
                  taxiName: "Mehtab Bagh Auto Union", taxiPhone: "+91 98371 00223",
                  petrol: "2.0 km", atm: "1.0 km (SBI)", hq: "5 km (Agra)", hw: "3 km (Yamuna Expressway)",
                  famousFood: "Agra Angoori Petha, Bedai Jalebi & Mughlai Kebabs",
                  famousCraft: "Marble Inlay Models, Zardozi Embroidery & Leather Artifacts"
                }),
                itinerary: ["08:00 AM: Morning walk through Mehtab Bagh charbagh gardens", "11:00 AM: Exploration of ancient red sandstone Humayun Mosque", "01:00 PM: Bedai & Jalebi lunch", "05:00 PM: Sunset reflecting pool view of Taj Mahal", "08:00 PM: Rest at Riverbank Lodge"]
              },
              {
                gemName: "Sur Sarovar Bird Sanctuary & Keetham Lake",
                state: "Uttar Pradesh",
                city: "Agra",
                landmarkHub: "🕌 Taj Mahal & Agra Hub",
                vibeTag: "Eco Nature",
                category: "Eco Nature",
                location: "Agra / Keetham, Uttar Pradesh",
                lat: 27.2472,
                lng: 77.8384,
                distance: "20 km from Taj Mahal Hub",
                score: 93,
                womenSafetyIndex: 96,
                uniqueness: 95,
                footfall: "Very Low (10% of Taj Mahal)",
                estCost: "₹850 / person",
                desc: "A tranquil national bird sanctuary surrounding Keetham Lake near Agra, home to over 106 species of migratory birds and sloth bear rescue sanctuary.",
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
            lat: 25.3109,
            lng: 83.0107,
            hiddenGems: [
              {
                gemName: "Sarnath Buddhist Stupa & Deer Park Sanctuary",
                state: "Uttar Pradesh",
                city: "Varanasi",
                landmarkHub: "🛕 Kashi Vishwanath & Varanasi Ghats",
                vibeTag: "Spiritual History",
                category: "Spiritual History",
                location: "Varanasi Suburbs, Uttar Pradesh",
                lat: 25.3811,
                lng: 83.0214,
                distance: "10 km from Kashi Vishwanath Temple",
                score: 96,
                womenSafetyIndex: 97,
                uniqueness: 97,
                footfall: "Moderate (25% of Main Ghats)",
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
                gemName: "Ramnagar Fort & Ganges Riverbank Sunset",
                state: "Uttar Pradesh",
                city: "Varanasi",
                landmarkHub: "🛕 Kashi Vishwanath & Varanasi Ghats",
                vibeTag: "Heritage & Crafts",
                category: "Heritage & Crafts",
                location: "Ramnagar, Varanasi, Uttar Pradesh",
                lat: 25.2678,
                lng: 83.0234,
                distance: "14 km from Kashi Vishwanath",
                score: 94,
                womenSafetyIndex: 96,
                uniqueness: 95,
                footfall: "Low (20% of Main Ghats)",
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
            lat: 26.9239,
            lng: 75.8267,
            hiddenGems: [
              {
                gemName: "Nahargarh Fort & Aravalli Sunset Ridge",
                state: "Rajasthan",
                city: "Jaipur",
                landmarkHub: "🏰 Hawa Mahal & Amer Fort Hub",
                vibeTag: "Mountain Trails",
                category: "Mountain Trails",
                location: "Nahargarh Hill, Jaipur",
                lat: 26.9378,
                lng: 75.8156,
                distance: "6 km from Hawa Mahal",
                score: 96,
                womenSafetyIndex: 96,
                uniqueness: 97,
                footfall: "Moderate (30% of Hawa Mahal)",
                estCost: "₹1,000 / person",
                desc: "Perched on the edge of the Aravalli hills, offering panoramic cliffside views of the entire Pink City and Padao sunset restaurant.",
                essentialFacilities: createGemFacilityData({
                  hospName: "Jaipur SMS Hospital", hospDist: "6.0 km", hospPhone: "+91 141 2560291",
                  foodName: "Padao Fort Sunset Restaurant", foodType: "Rajasthani Dal Baati & Chhaas",
                  stayName: "Aravalli Ridge Heritage Villa", stayTariff: "₹1,800/night",
                  policeStationName: "Nahargarh Fort Police Post", policeStationDist: "1.0 km (3 mins response)", policeStationPhone: "+91 141 2600100", policePatrol: "Jaipur Tourist Police Squad",
                  taxiName: "Nahargarh Auto Guild", taxiPhone: "+91 94140 11223",
                  petrol: "3.0 km", atm: "2.0 km (SBI)", hq: "6 km (Jaipur)", hw: "4.0 km (Amer Road)",
                  famousFood: "Rajasthani Dal Baati Churma, Pyaaz Kachori & Ghevar",
                  famousCraft: "Blue Pottery Vases, Jaipur Gemstone Jewelry & Block Print Textiles"
                }),
                itinerary: ["09:00 AM: Exploration of Madhavendra Bhawan wax museum & royal suites", "11:30 AM: Walk along fort ramparts", "01:00 PM: Dal Baati Churma lunch at Padao", "05:30 PM: Sunset view over Jaipur city line", "08:00 PM: Rest at Ridge Heritage Villa"]
              },
              {
                gemName: "Abhaneri Chand Baori Stepwell & Temple",
                state: "Rajasthan",
                city: "Jaipur",
                landmarkHub: "🏰 Hawa Mahal & Amer Fort Hub",
                vibeTag: "Spiritual History",
                category: "Spiritual History",
                location: "Dausa / Abhaneri, Rajasthan",
                lat: 27.0069,
                lng: 76.6064,
                distance: "95 km from Jaipur",
                score: 96,
                womenSafetyIndex: 96,
                uniqueness: 97,
                footfall: "Low (20% of Amber)",
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
            lat: 24.5764,
            lng: 73.6835,
            hiddenGems: [
              {
                gemName: "Kumbhalgarh Fort & Great Wall of India",
                state: "Rajasthan",
                city: "Udaipur",
                landmarkHub: "🏰 City Palace & Lake Pichola Hub",
                vibeTag: "Heritage & Crafts",
                category: "Heritage & Crafts",
                location: "Rajsamand / Kumbhalgarh, Rajasthan",
                lat: 25.1479,
                lng: 73.5826,
                distance: "84 km from Udaipur",
                score: 97,
                womenSafetyIndex: 96,
                uniqueness: 98,
                footfall: "Low (20% of City Palace)",
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
            lat: 27.0410,
            lng: 88.2663,
            hiddenGems: [
              {
                gemName: "Lamahatta Eco Park & Sacred Pine Trails",
                state: "West Bengal",
                city: "Darjeeling",
                landmarkHub: "🌲 Darjeeling Mall Road Hub",
                vibeTag: "Eco Nature",
                category: "Eco Nature",
                location: "Lamahatta / Darjeeling, West Bengal",
                lat: 27.0078,
                lng: 88.3381,
                distance: "23 km from Darjeeling Mall Road",
                score: 95,
                womenSafetyIndex: 97,
                uniqueness: 96,
                footfall: "Low (20% of Mall Road)",
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
                category: "Heritage & Crafts",
                location: "Takdah / Darjeeling, West Bengal",
                lat: 27.0333,
                lng: 88.3500,
                distance: "28 km from Darjeeling",
                score: 96,
                womenSafetyIndex: 97,
                uniqueness: 97,
                footfall: "Low (15% of Darjeeling)",
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
              }
            ]
          }
        ]
      },
      {
        name: "Kolkata",
        landmarks: [
          {
            id: "victoria-memorial",
            name: "🏛️ Victoria Memorial & Kolkata Hub",
            city: "Kolkata",
            state: "West Bengal",
            lat: 22.5448,
            lng: 88.3426,
            hiddenGems: [
              {
                gemName: "Chandannagar French Heritage Waterfront",
                state: "West Bengal",
                city: "Kolkata",
                landmarkHub: "🏛️ Victoria Memorial & Kolkata Hub",
                vibeTag: "Heritage & Crafts",
                category: "Heritage & Crafts",
                location: "Chandannagar / Hooghly, West Bengal",
                lat: 22.8667,
                lng: 88.3667,
                distance: "35 km from Kolkata",
                score: 95,
                womenSafetyIndex: 96,
                uniqueness: 97,
                footfall: "Low (15% of Victoria Memorial)",
                estCost: "₹900 / person",
                desc: "A former French colony on the banks of Hooghly River featuring Strand riverfront promenade, 200-year-old French Institute, and Sacred Heart Church.",
                essentialFacilities: createGemFacilityData({
                  hospName: "Chandannagar Sub-Divisional Hospital", hospDist: "2.0 km", hospPhone: "+91 33 26835210",
                  foodName: "Chandannagar French Bakery & Cafe", foodType: "Jalbhara Sandesh, French Pastries & Tea",
                  stayName: "Hooghly Riverbank Heritage Guest House", stayTariff: "₹1,300/night",
                  policeStationName: "Chandannagar Police Station", policeStationDist: "1.5 km (3 mins response)", policeStationPhone: "+91 33 26835100", policePatrol: "Hooghly Tourist Police PCR",
                  taxiName: "Chandannagar Auto Association", taxiPhone: "+91 98301 22340",
                  petrol: "2.0 km", atm: "1.0 km (SBI)", hq: "35 km (Kolkata)", hw: "3.0 km (GT Road)",
                  famousFood: "Chandannagar Jalbhara Sandesh, Kolkata Kathi Rolls & Luchi Alur Dom",
                  famousCraft: "Jagatdhatri Puja Lighting Models & Bengal Handloom Taant Sarees"
                }),
                itinerary: ["09:00 AM: Riverfront walk along Chandannagar Strand on Hooghly bank", "11:30 AM: Exploration of Institut de Chandernagor & Sacred Heart Church", "01:00 PM: Famous Jalbhara Sandesh & Bengali lunch", "04:30 PM: Sunset river ferry cruise on Hooghly", "08:00 PM: Rest at Heritage Guest House"]
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
            lat: 10.0889,
            lng: 77.0595,
            hiddenGems: [
              {
                gemName: "Top Station & Echo Point High Ridge",
                state: "Kerala",
                city: "Munnar",
                landmarkHub: "🌿 Munnar Town & Tea Hub",
                vibeTag: "Mountain Trails",
                category: "Mountain Trails",
                location: "Top Station / Munnar, Kerala",
                lat: 10.1250,
                lng: 77.2450,
                distance: "32 km from Munnar Town",
                score: 96,
                womenSafetyIndex: 97,
                uniqueness: 97,
                footfall: "Moderate-Low (20% of Munnar)",
                estCost: "₹1,400 / person",
                desc: "The highest point in Munnar at 6,170 ft on Tamil Nadu border, offering panoramic views of Western Ghats clouds and rare Neelakurinji blooms.",
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
                gemName: "Anamudi Shola National Park & Elephant Spring",
                state: "Kerala",
                city: "Munnar",
                landmarkHub: "🌿 Munnar Town & Tea Hub",
                vibeTag: "Eco Nature",
                category: "Eco Nature",
                location: "Anamudi Shola / Munnar, Kerala",
                lat: 10.1989,
                lng: 77.1706,
                distance: "40 km from Munnar Hub",
                score: 97,
                womenSafetyIndex: 98,
                uniqueness: 98,
                footfall: "Low (10% of Munnar)",
                estCost: "₹1,600 / person",
                desc: "A protected high-altitude rainforest sanctuary housing rare endemic Shola flora, Nilgiri tahr mountain goats, and wild forest elephant springs.",
                essentialFacilities: createGemFacilityData({
                  hospName: "Marayoor Primary Health Center", hospDist: "12 km", hospPhone: "+91 4865 252044",
                  foodName: "Shola Forest Cafe", foodType: "Kerala Sadya & Fresh Cardamom Tea",
                  stayName: "Anamudi Shola Eco Huts", stayTariff: "₹1,900/night",
                  policeStationName: "Marayoor Police Station", policeStationDist: "12 km (12 mins response)", policeStationPhone: "+91 4865 252033", policePatrol: "Kerala Forest & Tourist Patrol PCR",
                  taxiName: "Marayoor Jeep Guild", taxiPhone: "+91 94951 88440",
                  petrol: "12 km", atm: "12 km (SBI)", hq: "40 km (Munnar)", hw: "5.0 km (SH-17)",
                  famousFood: "Marayoor Jaggery, Kerala Fish Curry & Cardamom Chai",
                  famousCraft: "Pure Marayoor Sandalwood Products & Organic Honey"
                }),
                itinerary: ["07:30 AM: Shola rainforest nature trail trek", "11:00 AM: Wildlife watching for Nilgiri tahr & forest elephants", "01:30 PM: Kerala Banana Leaf Sadya", "04:30 PM: Marayoor sandalwood forest walk", "08:00 PM: Stay at Eco Huts"]
              },
              {
                gemName: "Anakkulam Wild Elephant Spring",
                state: "Kerala",
                city: "Munnar",
                landmarkHub: "🌿 Munnar Town & Tea Hub",
                vibeTag: "Eco Nature",
                category: "Eco Nature",
                location: "Munnar / Idukki, Kerala",
                lat: 10.0892,
                lng: 76.9606,
                distance: "38 km from Munnar Hub",
                score: 96,
                womenSafetyIndex: 98,
                uniqueness: 98,
                footfall: "Low (10% of Munnar town)",
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
            lat: 32.2432,
            lng: 77.1892,
            hiddenGems: [
              {
                gemName: "Naggar Castle & Roerich Heritage Art Gallery",
                state: "Himachal Pradesh",
                city: "Manali",
                landmarkHub: "🏔️ Manali Mall Road Hub",
                vibeTag: "Heritage & Crafts",
                category: "Heritage & Crafts",
                location: "Naggar / Manali, Himachal Pradesh",
                lat: 32.1167,
                lng: 77.1667,
                distance: "20 km from Manali",
                score: 96,
                womenSafetyIndex: 98,
                uniqueness: 97,
                footfall: "Low (20% of Manali)",
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
                gemName: "Jibhi Waterfall & Chehni Kothi Timber Tower",
                state: "Himachal Pradesh",
                city: "Manali",
                landmarkHub: "🏔️ Manali Mall Road Hub",
                vibeTag: "Mountain Trails",
                category: "Mountain Trails",
                location: "Jibhi / Banjar Valley, Himachal Pradesh",
                lat: 31.6022,
                lng: 77.3719,
                distance: "45 km from Kullu Valley",
                score: 96,
                womenSafetyIndex: 98,
                uniqueness: 98,
                footfall: "Moderate-Low (25% of Manali)",
                estCost: "₹1,500 / person",
                desc: "A picturesque pine valley featuring hidden wooden bridge waterfalls and the 1,500-year-old 10-storey Chehni Kothi timber fort tower.",
                essentialFacilities: createGemFacilityData({
                  hospName: "Banjar Civil Hospital", hospDist: "7.5 km", hospPhone: "+91 1902 268222",
                  foodName: "Pahadi Flavors Organic Cafe", foodType: "Hot Siddu, Ghee & Trout",
                  stayName: "Jibhi Riverbank Wooden Homestay", stayTariff: "₹1,600/night",
                  policeStationName: "Banjar Police Station", policeStationDist: "7.2 km (10 mins response)", policeStationPhone: "+91 1902 268224", policePatrol: "HP Shakti Button PCR Unit",
                  taxiName: "Jibhi Sumo Taxi Union", taxiPhone: "+91 98055 22110",
                  petrol: "7.0 km (HP Fuel)", atm: "800m (Cooperative ATM)", hq: "45 km (Kullu HQ)", hw: "22 km (Aut NH-3)",
                  famousFood: "Pahadi Siddu with Desi Ghee, Kullu Trout Fish & Madra Curry",
                  famousCraft: "Kullu Woolen Shawls, Traditional Himachali Caps & Wooden Artifacts"
                }),
                itinerary: ["08:30 AM: Walk along Jibhi wooden bridge waterfall trail", "11:00 AM: Chehni Kothi timber tower walkthrough", "01:30 PM: Hot Siddu with ghee at Pahadi Flavors", "04:00 PM: Relax by freshwater stream", "08:30 PM: Cozy stay at Wooden Homestay"]
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
            lat: 34.1526,
            lng: 77.5771,
            hiddenGems: [
              {
                gemName: "Hanle Dark Sky Reserve & Astronomical Sanctuary",
                state: "Ladakh",
                city: "Leh",
                landmarkHub: "🏔️ Leh Town & Pangong Hub",
                vibeTag: "Mountain Trails",
                category: "Mountain Trails",
                location: "Changthang, Ladakh",
                lat: 32.7758,
                lng: 78.9669,
                distance: "270 km from Leh Town",
                score: 99,
                womenSafetyIndex: 98,
                uniqueness: 99,
                footfall: "Ultra Low (5% of Pangong Lake)",
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
            lat: 15.5553,
            lng: 73.7517,
            hiddenGems: [
              {
                gemName: "Divar Island & Portuguese Heritage Backwaters",
                state: "Goa",
                city: "North Goa",
                landmarkHub: "🏖️ Baga & Calangute Beach Hub",
                vibeTag: "Heritage & Crafts",
                category: "Heritage & Crafts",
                location: "Divar Island, Old Goa",
                lat: 15.5167,
                lng: 73.9167,
                distance: "18 km from Baga Beach",
                score: 95,
                womenSafetyIndex: 98,
                uniqueness: 97,
                footfall: "Very Low (5% of Baga Beach)",
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
                category: "Mountain Trails",
                location: "Chorla Ghat / Goa Border",
                lat: 15.6500,
                lng: 74.1333,
                distance: "55 km from Panaji / North Goa",
                score: 96,
                womenSafetyIndex: 97,
                uniqueness: 98,
                footfall: "Low (10% of Baga)",
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
            lat: 15.3350,
            lng: 76.4600,
            hiddenGems: [
              {
                gemName: "Anegundi Ancient Monkey Kingdom & Sanapur Lake",
                state: "Karnataka",
                city: "Hampi",
                landmarkHub: "🛕 Hampi Main Temple Ruins",
                vibeTag: "Spiritual History",
                category: "Spiritual History",
                location: "Koppal / Anegundi, Karnataka",
                lat: 15.3522,
                lng: 76.4867,
                distance: "5 km from Hampi Temple Ruins (across Tungabhadra River)",
                score: 97,
                womenSafetyIndex: 96,
                uniqueness: 98,
                footfall: "Low (15% of Hampi main ruins)",
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
            lat: 12.6169,
            lng: 80.1997,
            hiddenGems: [
              {
                gemName: "Kovalam Backwaters & Surfing Village",
                state: "Tamil Nadu",
                city: "Mahabalipuram",
                landmarkHub: "🛕 Mahabalipuram Shore Temple",
                vibeTag: "Eco Nature",
                category: "Eco Nature",
                location: "Kovalam / Chengalpattu, Tamil Nadu",
                lat: 12.7905,
                lng: 80.2505,
                distance: "18 km from Mahabalipuram",
                score: 95,
                womenSafetyIndex: 97,
                uniqueness: 96,
                footfall: "Low (15% of Shore Temple)",
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
