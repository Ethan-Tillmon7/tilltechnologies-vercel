"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import travelsData from "@/data/travels.json";

// Fix Leaflet default icon issue with bundlers
const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function MapInner() {
  return (
    <MapContainer
      center={[30, -40]}
      zoom={3}
      scrollWheelZoom={true}
      className="h-[500px] w-full rounded-xl"
      style={{ background: "#020302" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://carto.com/">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
      {travelsData.locations.map((loc) => (
        <Marker key={loc.id} position={[loc.lat, loc.lng]} icon={markerIcon}>
          <Popup>
            <div className="text-background">
              <strong>{loc.name}</strong>
              {loc.description && <p className="text-sm">{loc.description}</p>}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
