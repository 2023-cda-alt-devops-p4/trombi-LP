import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { StudientData } from "./StudientData";
import { useState } from "react";

const MapView = () => {
  const position = [51.505, -0.09];
  const ZOOM_LEVEL = 12;

  return (
    <div className="container">
      <MapContainer scrollWheelZoom={false} center={position} zoom={ZOOM_LEVEL}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {StudientData.map((studient, index) => (
          <Marker key={index} position={studient.latlong}>
            <Popup></Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};
export default MapView;
