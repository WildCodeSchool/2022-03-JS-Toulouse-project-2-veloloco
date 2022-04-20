import { Marker } from "react-leaflet";
import L from "leaflet";
/* Composant qui gere le marker de geolocalisation */
export default function Geo({ localisationlat, localisationlng }) {
  const icon = L.icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  return <Marker position={[localisationlat, localisationlng]} icon={icon} />;
}
