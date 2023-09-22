import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { StudientData } from "./StudientData";
import L from "leaflet";

const MapView = () => {
  const pointers = StudientData.map((studient) => studient?.latlong).filter(
    (latLng) => latLng !== undefined
  );
  const limit = pointers.length > 0 ? L.latLngBounds(pointers) : null;

  const ZOOM_LEVEL = 12;

  return (
    <div className="container">
      <MapContainer
        center={limit ? limit.getCenter() : [51.505, -0.09]}
        zoom={limit ? null : ZOOM_LEVEL}
        bounds={limit} // Utilisez cette prop pour centrer la carte sur les marqueurs
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {StudientData.map((studient, index) => (
          <Marker
            key={`studient-${index}`}
            position={studient?.latlong}
            icon={L.icon({
              iconUrl: studient?.photo,
              iconSize: [50, 50],
              iconAnchor: [50, 50],
              popupAnchor: null,
              shadowUrl: null,
              shadowSize: null,
              shadowAnchor: null,
            })}
          >
            <Popup></Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
