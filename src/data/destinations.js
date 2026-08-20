/**
 * Single Source of Truth for Yatrika AI Simulator
 * Data loaded directly from yatrika-seed-data-full (29 States/UTs total)
 */

export const yatrikaSeedDataFull = {
  "Uttar Pradesh": {
    "cities": {
      "Agra": {
        "landmarks": [
          {
            "name": "Taj Mahal",
            "coordinates": { "lat": 27.1751, "lng": 78.0421 },
            "hiddenGems": [
              {
                "name": "Kachhpura Heritage Village & Moonlight Taj View",
                "category": "Heritage & Crafts",
                "coordinates": { "lat": 27.1785, "lng": 78.0398 },
                "distanceFromLandmark": "4 km from Taj Mahal East Gate",
                "description": "A Mughal-era village across the Yamuna River opposite Taj Mahal, offering crowd-free view of the monument from Mehtab Bagh & Humayun Mosque.",
                "gemScore": 94, "womenSafetyScore": 95,
                "nearestPolice": { "name": "Tajganj Tourist Police Station", "distance": "2.5 km (5 mins response)" },
                "nearestClinic": { "name": "SN Medical College", "distance": "5.0 km" },
                "localFood": "Agra Petha, Desi Ghee Bedai, Jalebi & Mughlai Paratha",
                "localCrafts": "Parchinkari Marble Inlay Art, Zardozi Gold Embroidery & Sanjhi Wall Art",
                "nightTransit": "24/7 Available"
              }
            ]
          }
        ]
      },
      "Varanasi": {
        "landmarks": [
          {
            "name": "Kashi Vishwanath Temple",
            "coordinates": { "lat": 25.3109, "lng": 83.0107 },
            "hiddenGems": [
              {
                "name": "Sarnath",
                "category": "Spiritual History",
                "coordinates": { "lat": 25.3811, "lng": 83.0231 },
                "distanceFromLandmark": "10 km from Kashi Vishwanath",
                "description": "Where Buddha gave his first sermon; features the Dhamek Stupa and a quiet archaeological park, far less crowded than the ghats.",
                "gemScore": 90, "womenSafetyScore": 93,
                "nearestPolice": { "name": "Sarnath Police Station", "distance": "1 km" },
                "nearestClinic": { "name": "Sarnath PHC", "distance": "2 km" },
                "localFood": "Varanasi Thandai, Kachori Sabzi, Malaiyo",
                "localCrafts": "Banarasi Silk Weaving",
                "nightTransit": "Limited, day-visit recommended"
              }
            ]
          }
        ]
      }
    }
  },
  "Rajasthan": {
    "cities": {
      "Jaipur": {
        "landmarks": [
          {
            "name": "Hawa Mahal",
            "coordinates": { "lat": 26.9239, "lng": 75.8267 },
            "hiddenGems": [
              {
                "name": "Abhaneri Stepwell (Chand Baori)",
                "category": "Heritage & Crafts",
                "coordinates": { "lat": 27.0084, "lng": 76.6058 },
                "distanceFromLandmark": "95 km from Hawa Mahal",
                "description": "One of the world's deepest and largest stepwells, a 1,200-year-old geometric marvel far off the standard Jaipur circuit.",
                "gemScore": 93, "womenSafetyScore": 88,
                "nearestPolice": { "name": "Abhaneri Police Post", "distance": "1 km" },
                "nearestClinic": { "name": "Bandikui CHC", "distance": "18 km" },
                "localFood": "Rajasthani Thali, Bajre ki Roti",
                "localCrafts": "Stone Carving",
                "nightTransit": "Day-visit recommended"
              }
            ]
          }
        ]
      },
      "Udaipur": {
        "landmarks": [
          {
            "name": "City Palace",
            "coordinates": { "lat": 24.5764, "lng": 73.6835 },
            "hiddenGems": [
              {
                "name": "Kumbhalgarh Fort",
                "category": "Heritage & Crafts",
                "coordinates": { "lat": 25.1487, "lng": 73.5861 },
                "distanceFromLandmark": "84 km from City Palace",
                "description": "Second-longest wall in the world after the Great Wall of China, a UNESCO site with a fraction of Udaipur's tourist footfall.",
                "gemScore": 92, "womenSafetyScore": 89,
                "nearestPolice": { "name": "Kumbhalgarh Police Station", "distance": "2 km" },
                "nearestClinic": { "name": "Kelwara CHC", "distance": "5 km" },
                "localFood": "Rajasthani Thali, Ker Sangri",
                "localCrafts": "Miniature Painting",
                "nightTransit": "Day-visit recommended"
              }
            ]
          }
        ]
      }
    }
  },
  "West Bengal": {
    "cities": {
      "Darjeeling": {
        "landmarks": [
          {
            "name": "Darjeeling Mall Road",
            "coordinates": { "lat": 27.0410, "lng": 88.2663 },
            "hiddenGems": [
              {
                "name": "Lamahatta Eco Village",
                "category": "Eco Nature",
                "coordinates": { "lat": 27.0089, "lng": 88.3339 },
                "distanceFromLandmark": "24 km from Mall Road",
                "description": "A serene eco-tourism village amid pine forests and tea gardens, offering unobstructed Kanchenjunga views without Darjeeling's crowds.",
                "gemScore": 92, "womenSafetyScore": 94,
                "nearestPolice": { "name": "Takdah Police Outpost", "distance": "6 km" },
                "nearestClinic": { "name": "Takdah Rural Hospital", "distance": "7 km" },
                "localFood": "Thukpa, Momos, Darjeeling Tea",
                "localCrafts": "Handwoven Lepcha Textiles",
                "nightTransit": "Limited after 6 PM"
              }
            ]
          }
        ]
      }
    }
  },
  "Kerala": {
    "cities": {
      "Munnar": {
        "landmarks": [
          {
            "name": "Munnar Tea Gardens",
            "coordinates": { "lat": 10.0889, "lng": 77.0595 },
            "hiddenGems": [
              {
                "name": "Top Station Viewpoint",
                "category": "Eco Nature",
                "coordinates": { "lat": 10.1500, "lng": 77.1500 },
                "distanceFromLandmark": "32 km from Tea Gardens",
                "description": "Highest point on the Munnar-Kodaikanal road, with sweeping views into the Palani Hills and rare Neelakurinji flower blooms.",
                "gemScore": 90, "womenSafetyScore": 89,
                "nearestPolice": { "name": "Devikulam Police Station", "distance": "12 km" },
                "nearestClinic": { "name": "Munnar Govt Hospital", "distance": "18 km" },
                "localFood": "Kerala Sadya, Spiced Tea",
                "localCrafts": "Spice & Tea Products",
                "nightTransit": "Day-visit recommended"
              }
            ]
          }
        ]
      }
    }
  },
  "Himachal Pradesh": {
    "cities": {
      "Manali": {
        "landmarks": [
          {
            "name": "Manali Mall Road",
            "coordinates": { "lat": 32.2432, "lng": 77.1892 },
            "hiddenGems": [
              {
                "name": "Jibhi",
                "category": "Mountain Trails",
                "coordinates": { "lat": 31.5333, "lng": 77.3167 },
                "distanceFromLandmark": "68 km from Mall Road",
                "description": "A hidden Himalayan hamlet in the Tirthan Valley with wooden bridges, waterfalls, and pine forests, popular among backpackers but off the mainstream tourist map.",
                "gemScore": 94, "womenSafetyScore": 90,
                "nearestPolice": { "name": "Banjar Police Station", "distance": "8 km" },
                "nearestClinic": { "name": "Banjar CHC", "distance": "9 km" },
                "localFood": "Trout Fish, Siddu, Local Rajma",
                "localCrafts": "Handwoven Wool Products",
                "nightTransit": "Limited, homestay-based"
              }
            ]
          }
        ]
      }
    }
  },
  "Ladakh": {
    "cities": {
      "Leh": {
        "landmarks": [
          {
            "name": "Pangong Lake",
            "coordinates": { "lat": 33.7597, "lng": 78.6624 },
            "hiddenGems": [
              {
                "name": "Hanle Dark Sky Reserve",
                "category": "Eco Nature",
                "coordinates": { "lat": 32.7794, "lng": 78.9628 },
                "distanceFromLandmark": "180 km from Pangong Lake",
                "description": "India's first Dark Sky Reserve, home to the Indian Astronomical Observatory, offering some of the clearest, least light-polluted night skies on Earth.",
                "gemScore": 99, "womenSafetyScore": 98,
                "nearestPolice": { "name": "Nyoma Police Post", "distance": "45 km" },
                "nearestClinic": { "name": "Hanle PHC", "distance": "2 km" },
                "localFood": "Butter Tea, Thukpa, Skyu",
                "localCrafts": "Pashmina Wool, Buddhist Thangka Art",
                "nightTransit": "24/7 Verified"
              }
            ]
          }
        ]
      }
    }
  },
  "Goa": {
    "cities": {
      "North Goa": {
        "landmarks": [
          {
            "name": "Baga Beach",
            "coordinates": { "lat": 15.5553, "lng": 73.7517 },
            "hiddenGems": [
              {
                "name": "Divar Island",
                "category": "Heritage & Crafts",
                "coordinates": { "lat": 15.5167, "lng": 73.8833 },
                "distanceFromLandmark": "18 km from Baga Beach",
                "description": "A car-ferry-only island on the Mandovi River with Portuguese-era churches and paddy fields, preserving old-Goa village life away from resorts.",
                "gemScore": 87, "womenSafetyScore": 91,
                "nearestPolice": { "name": "Old Goa Police Station", "distance": "5 km (via ferry)" },
                "nearestClinic": { "name": "Divar PHC", "distance": "2 km" },
                "localFood": "Goan Sausage, Bebinca",
                "localCrafts": "Azulejo Tile Art",
                "nightTransit": "Ferry stops by 10 PM"
              }
            ]
          }
        ]
      }
    }
  },
  "Karnataka": {
    "cities": {
      "Hampi": {
        "landmarks": [
          {
            "name": "Hampi Virupaksha Temple",
            "coordinates": { "lat": 15.3350, "lng": 76.4600 },
            "hiddenGems": [
              {
                "name": "Anegundi Village",
                "category": "Heritage & Crafts",
                "coordinates": { "lat": 15.3459, "lng": 76.4791 },
                "distanceFromLandmark": "5 km from Virupaksha Temple",
                "description": "Considered older than Hampi itself, this coracle-accessible village has ancient temples, banana plantations, and a fraction of Hampi's tourist crowd.",
                "gemScore": 89, "womenSafetyScore": 90,
                "nearestPolice": { "name": "Anegundi Police Outpost", "distance": "1 km" },
                "nearestClinic": { "name": "Hospet Govt Hospital", "distance": "12 km" },
                "localFood": "Jolada Rotti, Bele Uppittu",
                "localCrafts": "Banana Fiber Craft",
                "nightTransit": "Coracle service stops by dusk"
              }
            ]
          }
        ]
      }
    }
  },
  "Tamil Nadu": {
    "cities": {
      "Mahabalipuram": {
        "landmarks": [
          {
            "name": "Mahabalipuram Shore Temple",
            "coordinates": { "lat": 12.6169, "lng": 80.1926 },
            "hiddenGems": [
              {
                "name": "Tiger Cave & Saluvankuppam",
                "category": "Heritage & Crafts",
                "coordinates": { "lat": 12.6392, "lng": 80.1953 },
                "distanceFromLandmark": "5 km from Shore Temple",
                "description": "A rock-cut cave carved with tiger-head motifs near an ancient excavated Subrahmanya temple, rarely visited compared to the main monuments.",
                "gemScore": 86, "womenSafetyScore": 89,
                "nearestPolice": { "name": "Mahabalipuram Police Station", "distance": "5 km" },
                "nearestClinic": { "name": "Mahabalipuram GH", "distance": "5 km" },
                "localFood": "Chettinad Cuisine, Fresh Seafood",
                "localCrafts": "Stone Sculpture Carving",
                "nightTransit": "Limited after 7 PM"
              }
            ]
          }
        ]
      }
    }
  },
  "Madhya Pradesh": {
    "cities": {
      "Khajuraho": {
        "landmarks": [
          {
            "name": "Khajuraho Temples",
            "coordinates": { "lat": 24.8318, "lng": 79.9199 },
            "hiddenGems": [
              {
                "name": "Orchha",
                "category": "Heritage & Crafts",
                "coordinates": { "lat": 25.3520, "lng": 78.6417 },
                "distanceFromLandmark": "175 km from Khajuraho",
                "description": "A 16th-century Bundela town on the Betwa River with cenotaphs, palaces and forts, largely bypassed despite being one of MP's richest heritage sites.",
                "gemScore": 91, "womenSafetyScore": 90,
                "nearestPolice": { "name": "Orchha Police Station", "distance": "1 km" },
                "nearestClinic": { "name": "Orchha CHC", "distance": "1.5 km" },
                "localFood": "Poha-Jalebi, Bhutte ka Kees",
                "localCrafts": "Stone & Wood Handicrafts",
                "nightTransit": "Limited after 8 PM"
              }
            ]
          }
        ]
      }
    }
  },
  "Maharashtra": {
    "cities": {
      "Mumbai": {
        "landmarks": [
          {
            "name": "Gateway of India",
            "coordinates": { "lat": 18.9220, "lng": 72.8347 },
            "hiddenGems": [
              {
                "name": "Murud-Janjira",
                "category": "Heritage & Crafts",
                "coordinates": { "lat": 18.0133, "lng": 72.9647 },
                "distanceFromLandmark": "165 km from Gateway of India",
                "description": "An impregnable island sea-fort off the Konkan coast, one of the few forts in India never conquered, with a quiet fishing-village atmosphere.",
                "gemScore": 88, "womenSafetyScore": 87,
                "nearestPolice": { "name": "Murud Police Station", "distance": "3 km" },
                "nearestClinic": { "name": "Murud Rural Hospital", "distance": "3 km" },
                "localFood": "Malvani Fish Curry, Solkadhi",
                "localCrafts": "Coconut Shell Craft",
                "nightTransit": "Limited, boat access by day only"
              }
            ]
          }
        ]
      }
    }
  },
  "Gujarat": {
    "cities": {
      "Somnath": {
        "landmarks": [
          {
            "name": "Somnath Temple",
            "coordinates": { "lat": 20.8880, "lng": 70.4013 },
            "hiddenGems": [
              {
                "name": "Diu",
                "category": "Heritage & Crafts",
                "coordinates": { "lat": 20.7144, "lng": 70.9874 },
                "distanceFromLandmark": "85 km from Somnath Temple",
                "description": "A former Portuguese colony island with pastel churches, a 16th-century fort, and quiet beaches, overlooked by mainland Gujarat tourism.",
                "gemScore": 90, "womenSafetyScore": 92,
                "nearestPolice": { "name": "Diu Police Station", "distance": "2 km" },
                "nearestClinic": { "name": "Diu General Hospital", "distance": "2 km" },
                "localFood": "Goan-style Seafood, Diu Farsan",
                "localCrafts": "Portuguese-era Pottery",
                "nightTransit": "Limited after 9 PM"
              }
            ]
          }
        ]
      }
    }
  },
  "Punjab": {
    "cities": {
      "Amritsar": {
        "landmarks": [
          {
            "name": "Golden Temple",
            "coordinates": { "lat": 31.6200, "lng": 74.8765 },
            "hiddenGems": [
              {
                "name": "Pushpa Gujral Science City & Kila Raipur",
                "category": "Heritage & Crafts",
                "coordinates": { "lat": 31.1471, "lng": 75.5721 },
                "distanceFromLandmark": "125 km from Golden Temple",
                "description": "Rural Punjab's 'Rural Olympics' village near Ludhiana, showcasing authentic Punjabi village life, sports and Bhangra culture away from the Golden Temple crowds.",
                "gemScore": 84, "womenSafetyScore": 88,
                "nearestPolice": { "name": "Raipur Police Post", "distance": "2 km" },
                "nearestClinic": { "name": "Ludhiana Civil Hospital", "distance": "18 km" },
                "localFood": "Sarson da Saag, Makki di Roti, Lassi",
                "localCrafts": "Phulkari Embroidery",
                "nightTransit": "Limited"
              }
            ]
          }
        ]
      }
    }
  },
  "Haryana": {
    "cities": {
      "Kurukshetra": {
        "landmarks": [
          {
            "name": "Brahma Sarovar",
            "coordinates": { "lat": 29.9695, "lng": 76.8783 },
            "hiddenGems": [
              {
                "name": "Pinjore Gardens (Yadavindra Gardens)",
                "category": "Heritage & Crafts",
                "coordinates": { "lat": 30.7989, "lng": 76.9236 },
                "distanceFromLandmark": "90 km from Brahma Sarovar",
                "description": "A 17th-century Mughal-style terraced garden at the Shivalik foothills, rarely visited despite Mughal-era architecture rivaling better-known gardens.",
                "gemScore": 82, "womenSafetyScore": 88,
                "nearestPolice": { "name": "Pinjore Police Station", "distance": "1 km" },
                "nearestClinic": { "name": "Pinjore CHC", "distance": "1.5 km" },
                "localFood": "Haryanvi Bajra Khichdi, Lassi",
                "localCrafts": "Terracotta Pottery",
                "nightTransit": "Limited after 7 PM"
              }
            ]
          }
        ]
      }
    }
  },
  "Uttarakhand": {
    "cities": {
      "Rishikesh": {
        "landmarks": [
          {
            "name": "Laxman Jhula",
            "coordinates": { "lat": 30.1225, "lng": 78.3311 },
            "hiddenGems": [
              {
                "name": "Chopta & Tungnath",
                "category": "Mountain Trails",
                "coordinates": { "lat": 30.4833, "lng": 79.1833 },
                "distanceFromLandmark": "165 km from Laxman Jhula",
                "description": "Known as 'Mini Switzerland', a high-altitude meadow leading to the world's highest Shiva temple, with a fraction of Rishikesh's tourist volume.",
                "gemScore": 93, "womenSafetyScore": 89,
                "nearestPolice": { "name": "Ukhimath Police Station", "distance": "20 km" },
                "nearestClinic": { "name": "Ukhimath CHC", "distance": "22 km" },
                "localFood": "Aloo ke Gutke, Bal Mithai",
                "localCrafts": "Woolen Garhwali Shawls",
                "nightTransit": "Not available, homestay-based"
              }
            ]
          }
        ]
      }
    }
  },
  "Bihar": {
    "cities": {
      "Bodh Gaya": {
        "landmarks": [
          {
            "name": "Mahabodhi Temple",
            "coordinates": { "lat": 24.6959, "lng": 84.9911 },
            "hiddenGems": [
              {
                "name": "Barabar Caves",
                "category": "Spiritual History",
                "coordinates": { "lat": 25.0022, "lng": 85.0664 },
                "distanceFromLandmark": "70 km from Mahabodhi Temple",
                "description": "India's oldest surviving rock-cut caves, dating to Ashoka's era, with a mirror-polished granite interior and near-zero tourist footfall.",
                "gemScore": 88, "womenSafetyScore": 84,
                "nearestPolice": { "name": "Makhdumpur Police Station", "distance": "6 km" },
                "nearestClinic": { "name": "Jehanabad Sadar Hospital", "distance": "15 km" },
                "localFood": "Litti Chokha, Thekua",
                "localCrafts": "Sikki Grass Craft",
                "nightTransit": "Day-visit recommended"
              }
            ]
          }
        ]
      }
    }
  },
  "Jharkhand": {
    "cities": {
      "Ranchi": {
        "landmarks": [
          {
            "name": "Hundru Falls",
            "coordinates": { "lat": 23.4333, "lng": 85.6500 },
            "hiddenGems": [
              {
                "name": "Netarhat",
                "category": "Eco Nature",
                "coordinates": { "lat": 23.4700, "lng": 84.2667 },
                "distanceFromLandmark": "150 km from Hundru Falls",
                "description": "Known as the 'Queen of Chotanagpur', a hill station with pine forests and sunrise points, still largely undiscovered outside Jharkhand.",
                "gemScore": 90, "womenSafetyScore": 87,
                "nearestPolice": { "name": "Netarhat Police Station", "distance": "1 km" },
                "nearestClinic": { "name": "Netarhat PHC", "distance": "1.5 km" },
                "localFood": "Litti Chokha, Dhuska",
                "localCrafts": "Tribal Dokra Art",
                "nightTransit": "Limited"
              }
            ]
          }
        ]
      }
    }
  },
  "Chhattisgarh": {
    "cities": {
      "Jagdalpur": {
        "landmarks": [
          {
            "name": "Chitrakote Falls",
            "coordinates": { "lat": 19.1858, "lng": 81.7461 },
            "hiddenGems": [
              {
                "name": "Kanger Valley National Park & Tirathgarh Falls",
                "category": "Eco Nature",
                "coordinates": { "lat": 18.9333, "lng": 81.9333 },
                "distanceFromLandmark": "38 km from Chitrakote Falls",
                "description": "A biodiverse national park with limestone caves and a multi-tiered waterfall, rarely visited despite being one of India's richest tribal-forest ecosystems.",
                "gemScore": 91, "womenSafetyScore": 85,
                "nearestPolice": { "name": "Kanger Ghati Police Post", "distance": "3 km" },
                "nearestClinic": { "name": "Jagdalpur District Hospital", "distance": "35 km" },
                "localFood": "Bastar Chapda Chutney, Bamboo Shoot Curry",
                "localCrafts": "Bastar Dokra Metal Craft",
                "nightTransit": "Not available, day-visit only"
              }
            ]
          }
        ]
      }
    }
  },
  "Assam": {
    "cities": {
      "Guwahati": {
        "landmarks": [
          {
            "name": "Kamakhya Temple",
            "coordinates": { "lat": 26.1665, "lng": 91.7051 },
            "hiddenGems": [
              {
                "name": "Chandubi Lake",
                "category": "Eco Nature",
                "coordinates": { "lat": 25.9333, "lng": 91.3167 },
                "distanceFromLandmark": "64 km from Kamakhya Temple",
                "description": "A natural lake formed by a 1897 earthquake, surrounded by Garo tribal villages and forest, rarely on the standard Guwahati tourist trail.",
                "gemScore": 87, "womenSafetyScore": 89,
                "nearestPolice": { "name": "Kamrup Police Station", "distance": "8 km" },
                "nearestClinic": { "name": "Kamrup District Hospital", "distance": "20 km" },
                "localFood": "Assamese Thali, Khar, Duck Curry",
                "localCrafts": "Assam Silk (Muga) Weaving",
                "nightTransit": "Limited"
              }
            ]
          }
        ]
      }
    }
  },
  "Meghalaya": {
    "cities": {
      "Shillong": {
        "landmarks": [
          {
            "name": "Elephant Falls",
            "coordinates": { "lat": 25.5297, "lng": 91.8317 },
            "hiddenGems": [
              {
                "name": "Mawlynnong Village",
                "category": "Eco Nature",
                "coordinates": { "lat": 25.2033, "lng": 91.8817 },
                "distanceFromLandmark": "78 km from Elephant Falls",
                "description": "Asia's cleanest village, with living root bridges and bamboo architecture, community-run and still under mainstream tourist radar.",
                "gemScore": 92, "womenSafetyScore": 94,
                "nearestPolice": { "name": "Pynursla Police Station", "distance": "20 km" },
                "nearestClinic": { "name": "Mawlynnong PHC", "distance": "1 km" },
                "localFood": "Jadoh, Tungrymbai",
                "localCrafts": "Bamboo & Cane Craft",
                "nightTransit": "Not available, homestay-based"
              }
            ]
          }
        ]
      }
    }
  },
  "Sikkim": {
    "cities": {
      "Gangtok": {
        "landmarks": [
          {
            "name": "MG Marg",
            "coordinates": { "lat": 27.3314, "lng": 88.6138 },
            "hiddenGems": [
              {
                "name": "Zuluk (Old Silk Route)",
                "category": "Mountain Trails",
                "coordinates": { "lat": 27.2500, "lng": 88.8333 },
                "distanceFromLandmark": "84 km from MG Marg",
                "description": "A hairpin-bend hamlet on the historic Indo-China Silk Route, offering Kanchenjunga views with a fraction of Gangtok's footfall; requires permits.",
                "gemScore": 93, "womenSafetyScore": 91,
                "nearestPolice": { "name": "Rongli Police Station", "distance": "18 km" },
                "nearestClinic": { "name": "Rongli PHC", "distance": "18 km" },
                "localFood": "Thukpa, Gundruk Soup",
                "localCrafts": "Sikkimese Carpet Weaving",
                "nightTransit": "Not available, permit-based homestay"
              }
            ]
          }
        ]
      }
    }
  },
  "Arunachal Pradesh": {
    "cities": {
      "Tawang": {
        "landmarks": [
          {
            "name": "Tawang Monastery",
            "coordinates": { "lat": 27.5859, "lng": 91.8594 },
            "hiddenGems": [
              {
                "name": "Sela Lake & Bomdila",
                "category": "Mountain Trails",
                "coordinates": { "lat": 27.5167, "lng": 92.4167 },
                "distanceFromLandmark": "70 km from Tawang Monastery",
                "description": "A high-altitude sacred lake at Sela Pass near a quiet Buddhist hill town, visited far less than Tawang itself despite equally dramatic Himalayan views.",
                "gemScore": 91, "womenSafetyScore": 88,
                "nearestPolice": { "name": "Dirang Police Station", "distance": "25 km" },
                "nearestClinic": { "name": "Bomdila District Hospital", "distance": "5 km" },
                "localFood": "Thukpa, Momos, Zan",
                "localCrafts": "Monpa Handwoven Carpets",
                "nightTransit": "Not available, permit-based (ILP required)"
              }
            ]
          }
        ]
      }
    }
  },
  "Nagaland": {
    "cities": {
      "Kohima": {
        "landmarks": [
          {
            "name": "Kohima War Cemetery",
            "coordinates": { "lat": 25.6636, "lng": 94.1053 },
            "hiddenGems": [
              {
                "name": "Khonoma Green Village",
                "category": "Eco Nature",
                "coordinates": { "lat": 25.6497, "lng": 94.0169 },
                "distanceFromLandmark": "20 km from Kohima War Cemetery",
                "description": "India's first 'Green Village', a former warrior Angami tribal settlement turned conservation model, protecting the rare Blyth's Tragopan bird.",
                "gemScore": 90, "womenSafetyScore": 90,
                "nearestPolice": { "name": "Khonoma Police Outpost", "distance": "1 km" },
                "nearestClinic": { "name": "Khonoma PHC", "distance": "1 km" },
                "localFood": "Smoked Pork with Bamboo Shoot, Axone",
                "localCrafts": "Naga Shawls & Wood Carving",
                "nightTransit": "Not available, homestay-based"
              }
            ]
          }
        ]
      }
    }
  },
  "Manipur": {
    "cities": {
      "Imphal": {
        "landmarks": [
          {
            "name": "Kangla Fort",
            "coordinates": { "lat": 24.8069, "lng": 93.9439 },
            "hiddenGems": [
              {
                "name": "Sendra Island, Loktak Lake",
                "category": "Eco Nature",
                "coordinates": { "lat": 24.5500, "lng": 93.8000 },
                "distanceFromLandmark": "48 km from Kangla Fort",
                "description": "The only floating national park in the world (Keibul Lamjao) sits within Loktak Lake's floating phumdi islands, home to the endangered Sangai deer.",
                "gemScore": 92, "womenSafetyScore": 86,
                "nearestPolice": { "name": "Moirang Police Station", "distance": "8 km" },
                "nearestClinic": { "name": "Moirang CHC", "distance": "8 km" },
                "localFood": "Manipuri Thali, Eromba",
                "localCrafts": "Longpi Black Pottery",
                "nightTransit": "Not available, day-visit recommended"
              }
            ]
          }
        ]
      }
    }
  },
  "Mizoram": {
    "cities": {
      "Aizawl": {
        "landmarks": [
          {
            "name": "Solomon's Temple",
            "coordinates": { "lat": 23.7307, "lng": 92.7173 },
            "hiddenGems": [
              {
                "name": "Reiek Peak",
                "category": "Mountain Trails",
                "coordinates": { "lat": 23.7333, "lng": 92.5333 },
                "distanceFromLandmark": "29 km from Solomon's Temple",
                "description": "A dramatic peak with a recreated traditional Mizo village and panoramic views into Bangladesh and Tripura, still off most tourist itineraries.",
                "gemScore": 89, "womenSafetyScore": 92,
                "nearestPolice": { "name": "Reiek Police Outpost", "distance": "2 km" },
                "nearestClinic": { "name": "Reiek PHC", "distance": "2 km" },
                "localFood": "Bai (Mizo Stew), Sawhchiar",
                "localCrafts": "Mizo Puanchei Weaving",
                "nightTransit": "Not available, homestay-based"
              }
            ]
          }
        ]
      }
    }
  },
  "Tripura": {
    "cities": {
      "Agartala": {
        "landmarks": [
          {
            "name": "Ujjayanta Palace",
            "coordinates": { "lat": 23.8367, "lng": 91.2789 },
            "hiddenGems": [
              {
                "name": "Unakoti Rock Carvings",
                "category": "Heritage & Crafts",
                "coordinates": { "lat": 24.2667, "lng": 92.0333 },
                "distanceFromLandmark": "180 km from Ujjayanta Palace",
                "description": "Colossal 9th-century rock-cut carvings of Shiva and deities set into a hillside forest, one of India's most striking yet least-visited heritage sites.",
                "gemScore": 90, "womenSafetyScore": 85,
                "nearestPolice": { "name": "Kailashahar Police Station", "distance": "8 km" },
                "nearestClinic": { "name": "Kailashahar District Hospital", "distance": "8 km" },
                "localFood": "Mui Borok Tribal Cuisine, Bamboo Shoot Dishes",
                "localCrafts": "Bamboo & Cane Handicrafts",
                "nightTransit": "Not available, day-visit recommended"
              }
            ]
          }
        ]
      }
    }
  },
  "Odisha": {
    "cities": {
      "Puri": {
        "landmarks": [
          {
            "name": "Jagannath Temple",
            "coordinates": { "lat": 19.8048, "lng": 85.8181 },
            "hiddenGems": [
              {
                "name": "Ratnagiri Buddhist Complex",
                "category": "Spiritual History",
                "coordinates": { "lat": 20.6167, "lng": 86.3333 },
                "distanceFromLandmark": "100 km from Jagannath Temple",
                "description": "Part of Odisha's 'Diamond Triangle' of ancient Buddhist monasteries, with an excavated stupa and monastery complex rarely visited by mainstream tourists.",
                "gemScore": 88, "womenSafetyScore": 87,
                "nearestPolice": { "name": "Chandikhol Police Station", "distance": "12 km" },
                "nearestClinic": { "name": "Jajpur District Hospital", "distance": "20 km" },
                "localFood": "Odia Thali, Chhena Poda",
                "localCrafts": "Pattachitra Painting",
                "nightTransit": "Day-visit recommended"
              }
            ]
          }
        ]
      }
    }
  },
  "Telangana": {
    "cities": {
      "Hyderabad": {
        "landmarks": [
          {
            "name": "Charminar",
            "coordinates": { "lat": 17.3616, "lng": 78.4747 },
            "hiddenGems": [
              {
                "name": "Bhongir Fort",
                "category": "Heritage & Crafts",
                "coordinates": { "lat": 17.5122, "lng": 78.8877 },
                "distanceFromLandmark": "48 km from Charminar",
                "description": "A striking monolithic-rock hill fort from the Chalukya era with a single-stone hillock climb, largely overlooked in favor of Golconda Fort.",
                "gemScore": 86, "womenSafetyScore": 88,
                "nearestPolice": { "name": "Bhongir Police Station", "distance": "1.5 km" },
                "nearestClinic": { "name": "Bhongir Area Hospital", "distance": "2 km" },
                "localFood": "Hyderabadi Biryani, Sarva Pindi",
                "localCrafts": "Bidri Metal Craft",
                "nightTransit": "Limited after 7 PM"
              }
            ]
          }
        ]
      }
    }
  },
  "Andhra Pradesh": {
    "cities": {
      "Visakhapatnam": {
        "landmarks": [
          {
            "name": "RK Beach",
            "coordinates": { "lat": 17.7104, "lng": 83.3238 },
            "hiddenGems": [
              {
                "name": "Araku Valley & Borra Caves",
                "category": "Eco Nature",
                "coordinates": { "lat": 18.3333, "lng": 82.8667 },
                "distanceFromLandmark": "115 km from RK Beach",
                "description": "A tribal hill valley with coffee plantations and million-year-old limestone caves, offering a cool-climate escape overlooked by beach-focused Vizag tourism.",
                "gemScore": 92, "womenSafetyScore": 89,
                "nearestPolice": { "name": "Araku Police Station", "distance": "3 km" },
                "nearestClinic": { "name": "Araku Government Hospital", "distance": "3 km" },
                "localFood": "Araku Coffee, Bamboo Chicken",
                "localCrafts": "Tribal Bead & Bamboo Craft",
                "nightTransit": "Limited, homestay-based"
              }
            ]
          }
        ]
      }
    }
  }
};

/**
 * Normalizes JSON gem objects to UI state expectations
 */
export function normalizeGem(rawGem, stateName, cityName, landmarkName) {
  const gemName = rawGem.name;
  const lat = rawGem.coordinates?.lat || 20.5937;
  const lng = rawGem.coordinates?.lng || 78.9629;
  const foodText = rawGem.localFood || "Regional Delicacies & Thali";
  const craftText = rawGem.localCrafts || "Native Handicrafts & Handlooms";
  const policeObj = rawGem.nearestPolice || { name: "District Tourist Police Station", distance: "2 km" };
  const clinicObj = rawGem.nearestClinic || { name: "Primary Health Center", distance: "3 km" };
  const safetyScore = rawGem.womenSafetyScore || 90;
  const gScore = rawGem.gemScore || 92;

  return {
    gemName: gemName,
    name: gemName,
    state: stateName,
    city: cityName,
    landmarkHub: landmarkName,
    vibeTag: rawGem.category || "Heritage & Crafts",
    category: rawGem.category || "Heritage & Crafts",
    location: `${cityName}, ${stateName}`,
    lat: lat,
    lng: lng,
    coordinates: { lat, lng },
    distance: rawGem.distanceFromLandmark || "Nearby landmark",
    score: gScore,
    womenSafetyIndex: safetyScore,
    uniqueness: Math.min(99, gScore + 2),
    footfall: "Low (Uncrowded)",
    estCost: "₹1,200 / person",
    desc: rawGem.description || `Discover ${gemName} in ${stateName}.`,
    essentialFacilities: {
      food: [
        { name: "Local Village Eatery", type: foodText, dist: "250m", rating: "4.9/5", open: "07:00 AM - 10:00 PM" },
        { name: "Organic Tea & Refreshments", type: "Local Chai & Snacks", dist: "100m", rating: "4.8/5", open: "24/7 Available" }
      ],
      famousRegionalSpecialties: {
        food: foodText,
        crafts: craftText
      },
      accommodation: [
        { name: "Verified Eco Homestay", type: "Family Homestay (Female Host)", dist: "350m", tariff: "₹1,500/night", emergencyNightStay: true, safetyVerified: true }
      ],
      medical: [
        { name: clinicObj.name, type: "24/7 Primary Health Center & ER", dist: clinicObj.distance, phone: "+91 112", travelTime: "< 10 mins" }
      ],
      womenSafety: {
        score: `${safetyScore}/100 (SafeHaven Gold)`,
        policeStationName: policeObj.name,
        policeStationDist: policeObj.distance,
        policeStationPhone: "+91 112",
        policePatrol: "24/7 PCR Patrol Mobile Unit",
        helpline: "112 / Women Helpline 1091",
        features: [
          "Nearest Police Station Mapped",
          "24/7 PCR Patrol Mobile Unit Assigned",
          "Verified Female Homestay Host Registered",
          "Lighted Night Route Guidance Active"
        ]
      },
      transport: [
        { name: "Local Auto & Driver Guild", type: "Local Cab Guild", phone: "+91 112", availability: rawGem.nightTransit || "24/7 Available" }
      ],
      distances: {
        petrolPump: "2.0 km",
        atm: "1.0 km",
        districtHQ: "5.0 km",
        nationalHighway: "3.0 km"
      }
    },
    itinerary: [
      `08:30 AM: Morning walk around ${gemName}`,
      `11:00 AM: Discover ${craftText} with native artisans`,
      `01:30 PM: Taste authentic ${foodText}`,
      `05:00 PM: Sunset viewpoint and relaxation`,
      `08:00 PM: Rest at verified local homestay`
    ]
  };
}

export function flattenDestinationsToGems() {
  const allGems = [];
  Object.keys(yatrikaSeedDataFull).forEach(stateName => {
    const stateObj = yatrikaSeedDataFull[stateName];
    if (stateObj && stateObj.cities) {
      Object.keys(stateObj.cities).forEach(cityName => {
        const cityObj = stateObj.cities[cityName];
        if (cityObj && cityObj.landmarks) {
          cityObj.landmarks.forEach(landmark => {
            if (landmark.hiddenGems && Array.isArray(landmark.hiddenGems)) {
              landmark.hiddenGems.forEach(rawGem => {
                allGems.push(normalizeGem(rawGem, stateName, cityName, landmark.name));
              });
            }
          });
        }
      });
    }
  });
  return allGems;
}

export function getCitiesForState(stateName) {
  if (!stateName || stateName === 'All States') {
    const allCities = [];
    Object.keys(yatrikaSeedDataFull).forEach(s => {
      const stateObj = yatrikaSeedDataFull[s];
      if (stateObj && stateObj.cities) {
        Object.keys(stateObj.cities).forEach(c => allCities.push(c));
      }
    });
    return Array.from(new Set(allCities));
  }
  const stateObj = yatrikaSeedDataFull[stateName];
  if (!stateObj || !stateObj.cities) return [];
  return Object.keys(stateObj.cities);
}

export function getLandmarksForStateAndCity(stateName, cityName) {
  let matchedLandmarks = [];

  Object.keys(yatrikaSeedDataFull).forEach(s => {
    if (stateName === 'All States' || s === stateName) {
      const stateObj = yatrikaSeedDataFull[s];
      if (stateObj && stateObj.cities) {
        Object.keys(stateObj.cities).forEach(c => {
          if (!cityName || cityName === 'All Cities / Districts' || c === cityName) {
            const cityObj = stateObj.cities[c];
            if (cityObj && cityObj.landmarks) {
              cityObj.landmarks.forEach(l => {
                matchedLandmarks.push({
                  id: l.name.toLowerCase().replace(/\s+/g, '-'),
                  name: l.name,
                  city: c,
                  state: s,
                  coordinates: l.coordinates,
                  hiddenGems: l.hiddenGems
                });
              });
            }
          }
        });
      }
    }
  });

  return matchedLandmarks;
}

export const destinationsDataset = yatrikaSeedDataFull;
