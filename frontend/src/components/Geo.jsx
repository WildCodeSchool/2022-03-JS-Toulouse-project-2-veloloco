import { Marker } from "react-leaflet";
import L from "leaflet";

import locationRed from "../assets/images/My-location-red.png";
import locationGreen from "../assets/images/My-location-green.png";

/* Composant qui gere le marker de geolocalisation */
export default function Geo({ localisationlat, localisationlng }) {
  const icon = L.icon({
    /* todo changer la couleur en fonction du darkmode */
    iconUrl: locationRed,
    iconSize: [34, 34],
    iconAnchor: [17, 17],
  });
  const icondark = L.icon({
    iconUrl: locationGreen,
    iconSize: [34, 34],
    iconAnchor: [17, 17],
  });

  const statusdarkmode = localStorage.getItem("darkmode");
  return (
    <Marker
      position={[localisationlat, localisationlng]}
      icon={statusdarkmode === "1" ? icondark : icon}
    />
  );
}
