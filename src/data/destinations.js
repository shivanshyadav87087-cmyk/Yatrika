/**
 * Structured Pan-India Destinations Dataset
 * Hierarchy: State -> Cities -> Famous Landmarks -> Nearby Hidden Gems
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
                desc: "A tranquil national bird sanctuary surrounding Keetham Lake near Agra, home to over 106 species of migratory birds, lush green pine trails, and sloth bear rescue center.",
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
