import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { StudientData } from "./StudientData";
import { useState } from "react";

const MapView = () => {
  const [position, setPostion] = useState([lat, long]);
  const ZOOM_LEVEL = 2;

  const lat = StudientData.map((item, index) => console.log(item.lat));
  const long = StudientData.map((item, index) => console.log(item.long));

  return (
    <div className="container">
      <MapContainer scrollWheelZoom={false} center={position} zoom={ZOOM_LEVEL}>
        {StudientData.map((item) => (
          <Marker position={setPostion(item)}>
            <Popup>{item.nom}</Popup>
          </Marker>
        ))}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
};
export default MapView;
