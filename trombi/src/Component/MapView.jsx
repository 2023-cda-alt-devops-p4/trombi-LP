import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { StudientData } from "./StudientData";
import { MdFavorite, MdLocalDrink } from "react-icons/md";
import { GiDrinking } from "react-icons/gi";
import { BsGithub, BsFillPeopleFill } from "react-icons/bs";
import { GiPositionMarker } from "react-icons/gi";
import { IoFastFood } from "react-icons/io5";
import { FiHome } from "react-icons/fi";
import { FaStackOverflow } from "react-icons/fa";
import { SiMarvelapp } from "react-icons/si";
import { RiNetflixFill } from "react-icons/ri";

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
            })}
          >
            <Popup>
              <div className="container_pop_up">
                <a href={studient.github}><BsGithub /> : {studient.github} <br />  </a>
                <BsFillPeopleFill /> : {studient.nom} {studient.prenom} <br />
                <GiPositionMarker /> : {studient.ville} <br />
                <MdFavorite /> : {studient.hobbies} <br />
                <RiNetflixFill /> : {studient.serie} <br />
                <SiMarvelapp /> : {studient.manga} <br />
                <IoFastFood /> : {studient.platlong} <br />
                <MdLocalDrink /> : {studient.boisson} <br />
                <GiDrinking /> : {studient.alcool} <br />
                <FiHome /> : {studient.entreprise} <br />
                <FaStackOverflow /> : {studient.stack} <br />
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div >
  );
};

export default MapView;
