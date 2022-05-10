import { Marker } from "react-leaflet";
import L from "leaflet";
/* Composant qui gere le marker de geolocalisation */
export default function Geo({ localisationlat, localisationlng }) {
  const icon = L.icon({
    /* todo changer la couleur en fonction du darkmode */
    iconUrl: "../src/assets/images/My-location-red.png",
    iconSize: [34, 34],
    iconAnchor: [17, 17],
  });

  return <Marker position={[localisationlat, localisationlng]} icon={icon} />;
}
