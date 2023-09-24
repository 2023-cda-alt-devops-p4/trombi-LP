import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { StudientData } from "./StudientData";
import { MdFavorite, MdLocalDrink } from "react-icons/md";
import { GiDrinking } from "react-icons/gi";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { GiPositionMarker } from "react-icons/gi";
import { IoFastFood } from "react-icons/io5";
import { FiHome } from "react-icons/fi";
import { FaStackOverflow } from "react-icons/fa";
import { SiMarvelapp } from "react-icons/si";
import { RiNetflixFill } from "react-icons/ri";

import "./MapViewStyle.css";
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
              iconAnchor: [25, 0],
              className: "icon-user",
            })}
          >
            <Popup>
              <div className="container_pop_up">
                <div className="id">
                  <img src={studient.photo} alt="img-user" />
                  <div className="user">
                    <h2>
                      {studient.nom} {studient.prenom}
                    </h2>
                    <br />
                    <GiPositionMarker className="city" /> : {studient.ville}{" "}
                    <br />
                    <div className="link-user">
                      <a href={studient.github} target="_blank">
                        <BsGithub /> <br />
                      </a>
                      <a href={studient.linkedin} target="_blank">
                        <BsLinkedin /> <br />
                      </a>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="work">
                  <h3>
                    <FiHome /> : {studient.entreprise} <br />
                  </h3>
                  <FaStackOverflow /> : {studient.stack} <br />
                </div>
                <hr />
                <div className="about">
                  <MdFavorite /> : {studient.hobbies} <br />
                  <RiNetflixFill /> : {studient.serie} <br />
                  <SiMarvelapp /> : {studient.manga} <br />
                  <IoFastFood /> : {studient.platlong} <br />
                  <MdLocalDrink /> : {studient.boisson} <br />
                  <GiDrinking /> : {studient.alcool} <br />
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
