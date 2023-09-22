import { MapContainer, TileLayer } from "react-leaflet"

const MapView = () => {
    const position = [49.847503, 2.763062]
    const ZOOM_LEVEL = 2;

    return (
        <div className="container">
            <MapContainer
                scrollWheelZoom={false}
                center={position}
                zoom={ZOOM_LEVEL}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </div>
    )
}
export default MapView