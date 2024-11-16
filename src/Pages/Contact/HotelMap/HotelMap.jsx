import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const HotelMap = () => {
  return (
    <MapContainer
      center={[23.777176, 90.399452]}
      zoom={13}
      style={{ height: "500px", width: "100%" }}
      scrollWheelZoom={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[23.777176, 90.399452]}>
        <Popup>Buenos Aires</Popup>
      </Marker>
    </MapContainer>
  );
};

export default HotelMap;
