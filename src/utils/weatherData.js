// Weather Intelligence & Forecast Engine for Yatrika Destinations across all 29 Indian States & UTs

export function getWeatherForDestination(stateName = 'Pan-India', cityName = '', gemName = '') {
  const state = (stateName || '').toLowerCase();
  
  // State Climate Profiles
  let baseTemp = 26;
  let pastTemp = 25;
  let condition = "Sunny & Clear Skies";
  let pastCondition = "Partly Cloudy";
  let humidity = "52%";
  let windSpeed = "12 km/h";
  let uvIndex = "6 (Moderate)";
  let aqi = "42 (Good)";
  let travelAdvisory = "🟢 Excellent for Outdoor Sightseeing & Trekking";

  if (state.includes('ladakh') || state.includes('jammu') || state.includes('kashmir') || state.includes('himachal') || state.includes('uttarakhand') || state.includes('sikkim')) {
    baseTemp = 16;
    pastTemp = 15;
    condition = "Cool Mountain Breeze";
    pastCondition = "Crisp Clear Sky";
    humidity = "40%";
    windSpeed = "18 km/h";
    uvIndex = "5 (Moderate)";
    aqi = "18 (Pristine)";
    travelAdvisory = "🟢 Ideal Mountain Weather. Carry light warm jacket for evening.";
  } else if (state.includes('kerala') || state.includes('goa') || state.includes('tamil') || state.includes('karnataka') || state.includes('andhra') || state.includes('puducherry')) {
    baseTemp = 29;
    pastTemp = 28;
    condition = "Tropical Pleasant Breeze";
    pastCondition = "Passing Ocean Mist";
    humidity = "68%";
    windSpeed = "15 km/h";
    uvIndex = "7 (High)";
    aqi = "28 (Excellent)";
    travelAdvisory = "🟢 Perfect for Coastal & Tea Plantation Trails. Carry sunglasses.";
  } else if (state.includes('rajasthan') || state.includes('gujarat') || state.includes('madhya')) {
    baseTemp = 30;
    pastTemp = 29;
    condition = "Sunny & Warm";
    pastCondition = "Dry Clear Night";
    humidity = "35%";
    windSpeed = "10 km/h";
    uvIndex = "8 (Very High)";
    aqi = "55 (Moderate)";
    travelAdvisory = "🟢 Great for Fort & Desert Trails. Stay hydrated.";
  } else if (state.includes('meghalaya') || state.includes('assam') || state.includes('arunachal') || state.includes('nagaland') || state.includes('mizoram') || state.includes('manipur') || state.includes('tripura')) {
    baseTemp = 22;
    pastTemp = 21;
    condition = "Pleasant Mist & Greenery";
    pastCondition = "Light Passing Shower";
    humidity = "72%";
    windSpeed = "11 km/h";
    uvIndex = "4 (Moderate)";
    aqi = "15 (Pristine)";
    travelAdvisory = "🟢 Lush Green Scenic Trails. Carry a light umbrella/raincoat.";
  }

  // Generate 4-day future forecast
  const days = ["Today", "Tomorrow", "Day 3", "Day 4"];
  const forecast = days.map((day, idx) => {
    const tempHigh = baseTemp + (idx % 2 === 0 ? 2 : 1);
    const tempLow = pastTemp - (idx % 2 === 0 ? 3 : 2);
    let dayCond = condition;
    if (idx === 1) dayCond = "Clear Skies & Mild Sun";
    if (idx === 2) dayCond = "Pleasant Evening Breeze";
    if (idx === 3) dayCond = "Scattered Fluffy Clouds";

    return {
      day,
      tempHigh: `${tempHigh}°C`,
      tempLow: `${tempLow}°C`,
      condition: dayCond,
      rainChance: `${10 + idx * 5}%`
    };
  });

  return {
    past24h: {
      date: "Yesterday",
      tempHigh: `${pastTemp + 3}°C`,
      tempLow: `${pastTemp - 4}°C`,
      avgTemp: `${pastTemp}°C`,
      condition: pastCondition,
      rainfall: "0.0 mm",
      humidity: "48%"
    },
    current: {
      temp: `${baseTemp}°C`,
      feelsLike: `${baseTemp + 1}°C`,
      condition,
      humidity,
      windSpeed,
      uvIndex,
      aqi,
      travelAdvisory
    },
    forecast
  };
}
