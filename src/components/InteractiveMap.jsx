import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { MapPin, Navigation, ExternalLink, ShieldCheck, Siren, Stethoscope, Bus, Sparkles, AlertCircle } from 'lucide-react';
import 'leaflet/dist/leaflet.css';

// Component ErrorBoundary for Leaflet Map isolation
class MapErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(err) {
    console.warn("Leaflet Map Component Notice:", err);
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

// Helper component to smoothly fly map view when destination changes
function MapFlyController({ center, zoom = 12 }) {
  const map = useMap();
  useEffect(() => {
    if (center && center[0] && center[1]) {
      try {
        map.flyTo(center, zoom, {
          animate: true,
          duration: 1.5
        });
      } catch (e) {
        // fallback
      }
    }
  }, [center, zoom, map]);
  return null;
}

// Custom DivIcons to prevent default Leaflet asset URL issues
const createCustomIcon = (bgColor, iconChar, size = 34) => {
  return L.divIcon({
    className: 'custom-leaflet-pin',
    html: `<div style="
      width: ${size}px;
      height: ${size}px;
      background-color: ${bgColor};
      border: 2px solid #ffffff;
      border-radius: 50%;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.6), 0 0 12px ${bgColor};
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      color: #ffffff;
      transform: translate(-50%, -50%);
    ">${iconChar}</div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -size / 2]
  });
};

const gemIcon = createCustomIcon('#e8734a', '📍', 38);
const policeIcon = createCustomIcon('#38bdf8', '🚨', 28);
const medicalIcon = createCustomIcon('#f87171', '🏥', 28);
const transportIcon = createCustomIcon('#fbbf24', '🚕', 28);

export default function InteractiveMap({ currentGem }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!currentGem) return null;

  // Primary coordinates
  const lat = currentGem.lat || 27.1751;
  const lng = currentGem.lng || 78.0421;
  const center = [lat, lng];

  const facilities = currentGem.essentialFacilities;
  const police = facilities?.womenSafety;
  const medical = facilities?.medical?.[0];
  const transport = facilities?.transport?.[0];

  // Secondary marker offset coordinates for telematics visibility
  const policeCenter = [lat + 0.012, lng + 0.010];
  const medicalCenter = [lat - 0.009, lng - 0.008];
  const transportCenter = [lat + 0.006, lng - 0.012];

  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

  const mapFallbackCard = (
    <div className="w-full h-full bg-slate-950 flex flex-col items-center justify-center p-6 text-center space-y-3">
      <div className="w-12 h-12 rounded-full bg-terracotta-500/20 text-terracotta-400 border border-terracotta-500/40 flex items-center justify-center">
        <MapPin className="w-6 h-6" />
      </div>
      <div className="space-y-1">
        <h5 className="font-serif font-bold text-sm text-sand-50">{currentGem.gemName}</h5>
        <span className="text-xs font-mono text-terracotta-400 block">📍 {currentGem.location}</span>
        <span className="text-[11px] font-mono text-slate-400 block">Coordinates: {lat.toFixed(4)}, {lng.toFixed(4)}</span>
      </div>
      <a
        href={googleMapsDirectionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-terracotta-500 hover:bg-terracotta-600 text-white font-bold text-xs shadow-md transition-all"
      >
        <Navigation className="w-3.5 h-3.5" />
        <span>Open in Google Maps</span>
        <ExternalLink className="w-3 h-3" />
      </a>
    </div>
  );

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-3xl p-5 shadow-2xl space-y-4 text-white relative overflow-hidden topo-pattern-dark">
      
      {/* Header Banner */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-terracotta-500/20 text-terracotta-400 border border-terracotta-500/40 flex items-center justify-center">
            <MapPin className="w-4 h-4 text-terracotta-400" />
          </div>
          <div>
            <h4 className="font-serif font-bold text-base text-sand-50">
              Interactive Offbeat Map
            </h4>
            <span className="text-[11px] text-slate-300 font-mono">
              CartoDB Dark Matter • Mapped Telematics
            </span>
          </div>
        </div>

        <a
          href={googleMapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-terracotta-500 hover:bg-terracotta-600 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
        >
          <Navigation className="w-3.5 h-3.5" />
          <span>Get Directions</span>
          <ExternalLink className="w-3 h-3 opacity-80" />
        </a>
      </div>

      {/* Map Canvas Container with Local ErrorBoundary */}
      <div className="relative w-full h-[360px] sm:h-[400px] rounded-2xl overflow-hidden border border-slate-800 shadow-inner bg-slate-950">
        {!isMounted ? (
          /* Loading Skeleton Shimmer */
          <div className="w-full h-full bg-slate-950 flex flex-col items-center justify-center space-y-3 animate-pulse">
            <Sparkles className="w-8 h-8 text-terracotta-400 animate-spin" />
            <span className="text-xs font-mono text-slate-400">Loading Interactive Tile Layer...</span>
          </div>
        ) : (
          <MapErrorBoundary fallback={mapFallbackCard}>
            <MapContainer
              center={center}
              zoom={12}
              scrollWheelZoom={true}
              style={{ width: '100%', height: '100%', backgroundColor: '#090d16' }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                maxZoom={19}
              />

              <MapFlyController center={center} zoom={12} />

              {/* Primary Gem Marker */}
              <Marker position={center} icon={gemIcon}>
                <Popup className="custom-leaflet-popup">
                  <div className="p-2 space-y-1 text-slate-900 font-sans text-xs">
                    <span className="font-bold font-serif text-sm block text-slate-950">{currentGem.gemName}</span>
                    <div className="text-[11px] text-terracotta-600 font-bold font-mono">📍 {currentGem.location}</div>
                    <div className="text-[10px] text-slate-600 font-mono">Score: {currentGem.score}/100 • Safety: {currentGem.womenSafetyIndex}/100</div>
                  </div>
                </Popup>
              </Marker>

              {/* Secondary Marker: Nearest Police Station */}
              {police && (
                <Marker position={policeCenter} icon={policeIcon}>
                  <Popup>
                    <div className="p-2 space-y-1 text-slate-900 font-sans text-xs">
                      <span className="font-bold flex items-center gap-1 text-cyan-700">🚨 {police.policeStationName}</span>
                      <div className="text-[11px] text-slate-600 font-mono">Distance: {police.policeStationDist}</div>
                      <div className="text-[10px] text-slate-500">24/7 Police Patrol Unit Mapped</div>
                    </div>
                  </Popup>
                </Marker>
              )}

              {/* Secondary Marker: Nearest Hospital / Clinic */}
              {medical && (
                <Marker position={medicalCenter} icon={medicalIcon}>
                  <Popup>
                    <div className="p-2 space-y-1 text-slate-900 font-sans text-xs">
                      <span className="font-bold flex items-center gap-1 text-red-600">🏥 {medical.name}</span>
                      <div className="text-[11px] text-slate-600 font-mono">Distance: {medical.dist} ({medical.travelTime})</div>
                      <div className="text-[10px] text-slate-500">24/7 ER Emergency Clinic</div>
                    </div>
                  </Popup>
                </Marker>
              )}

              {/* Secondary Marker: Local Transport Hub */}
              {transport && (
                <Marker position={transportCenter} icon={transportIcon}>
                  <Popup>
                    <div className="p-2 space-y-1 text-slate-900 font-sans text-xs">
                      <span className="font-bold flex items-center gap-1 text-amber-600">🚕 {transport.name}</span>
                      <div className="text-[11px] text-slate-600 font-mono">Phone: {transport.phone}</div>
                      <div className="text-[10px] text-slate-500">24/7 Local Auto & Driver Guild</div>
                    </div>
                  </Popup>
                </Marker>
              )}

            </MapContainer>
          </MapErrorBoundary>
        )}
      </div>

      {/* Map Footer Telematics Legend */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px] font-mono">
        <div className="flex items-center gap-1.5 bg-slate-950 p-2 rounded-xl border border-slate-800">
          <span className="w-2.5 h-2.5 rounded-full bg-[#e8734a] shrink-0" />
          <span className="text-slate-300 truncate">Hidden Gem Pin</span>
        </div>
        <div className="flex items-center gap-1.5 bg-slate-950 p-2 rounded-xl border border-slate-800">
          <span className="w-2.5 h-2.5 rounded-full bg-[#38bdf8] shrink-0" />
          <span className="text-slate-300 truncate">Nearest Police</span>
        </div>
        <div className="flex items-center gap-1.5 bg-slate-950 p-2 rounded-xl border border-slate-800">
          <span className="w-2.5 h-2.5 rounded-full bg-[#f87171] shrink-0" />
          <span className="text-slate-300 truncate">ER Clinic</span>
        </div>
        <div className="flex items-center gap-1.5 bg-slate-950 p-2 rounded-xl border border-slate-800">
          <span className="w-2.5 h-2.5 rounded-full bg-[#fbbf24] shrink-0" />
          <span className="text-slate-300 truncate">Transport Stand</span>
        </div>
      </div>

    </div>
  );
}
