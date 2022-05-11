import L from "leaflet";
import { useMap } from "react-leaflet";
import "leaflet.tilelayer.colorfilter";

export default function LayerChange({ darkmode }) {
  const map = useMap();

  // TODO revert to stadiamaps
  // https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png
  // &copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors
  const defaultToDarkFilter = ["grayscale:90%", "invert:80%"];
  L.tileLayer
    .colorFilter("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 16,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      filter: darkmode === "1" ? defaultToDarkFilter : null,
    })
    .addTo(map);

  return null;
}
