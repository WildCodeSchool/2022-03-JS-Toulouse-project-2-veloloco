import { Marker } from "react-leaflet";
import L from "leaflet";

const iconDefault = L.icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
const iconDanger = L.icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
export default function MarkerDefault({ positionStation, marker }) {
  if (marker.available_bikes <= 3) {
    return <Marker icon={iconDanger} position={positionStation} />;
  }
  return <Marker icon={iconDefault} position={positionStation} />;
}
