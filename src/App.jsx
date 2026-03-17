import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// Center on Uyo
const uyoCenter = [5.03896, 7.90947];

// Uyo Hotspot Coordinates
const hotspots = [
  { id: 1, name: "Obio Imo Street (Stadium)", position: [5.034, 7.929], status: "Critical Heap" },
  { id: 2, name: "Udua Akpandem", position: [5.0345, 7.9265], status: "High Plastic Volume" },
  { id: 3, name: "Ibom Plaza", position: [5.0406, 7.9227], status: "Transit Hub" }
];

export default function App() {
  return (
    <div style={{ height: "100vh", width: "100%", display: "flex", flexDirection: "column", fontFamily: "sans-serif" }}>
      
      {/* Top Header */}
      <div style={{ padding: "15px", backgroundColor: "#16a34a", color: "white", textAlign: "center", fontWeight: "bold", fontSize: "1.2rem" }}>
        🌍 Uyo Eco-Track
      </div>

      {/* Interactive Map Area */}
      <div style={{ flex: 1, position: "relative" }}>
        <MapContainer center={uyoCenter} zoom={14} style={{ height: "100%", width: "100%" }} zoomControl={false}>
          <TileLayer 
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
            attribution="&copy; OpenStreetMap contributors"
          />
          {hotspots.map(spot => (
            <Marker key={spot.id} position={spot.position}>
              <Popup>
                <b>{spot.name}</b><br/>{spot.status}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Bottom Eco-Wallet Navigation */}
      <div style={{ padding: "16px", backgroundColor: "white", borderTop: "2px solid #e5e7eb", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: "0.8rem", color: "#6b7280", textTransform: "uppercase" }}>Eco-Wallet Balance</div>
          <div style={{ fontWeight: "bold", color: "#16a34a", fontSize: "1.2rem" }}>₦0.00</div>
        </div>
        <button style={{ backgroundColor: "#16a34a", color: "white", padding: "12px 20px", borderRadius: "8px", border: "none", fontWeight: "bold", fontSize: "1rem" }}>
          📸 Report Waste
        </button>
      </div>

    </div>
  );
        }
