import { MapContainer, TileLayer } from "react-leaflet";
import "../assets/css/Itinerary.css";
import "leaflet/dist/leaflet.css";
import LayerChange from "../components/LayerChange";
import Routing from "../components/Routing";

export default function Itinerary() {
  const position = [43.599731, 1.432891];

  return (
    <MapContainer center={position} zoom={13} style={{ height: "100vh" }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Routing />
      <LayerChange />
    </MapContainer>
  );
}
