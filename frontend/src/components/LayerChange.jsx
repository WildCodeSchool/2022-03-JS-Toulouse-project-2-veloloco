import L from "leaflet";
import { useMap } from "react-leaflet";
import "leaflet.tilelayer.colorfilter";

export default function LayerChange({ darkmode }) {
  const map = useMap();

  const defaultToDarkFilter = ["grayscale:90%", "invert:80%"];
  L.tileLayer
    .colorFilter(
      "https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png",

      {
        maxZoom: 16,
        attribution:
          '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
        filter: darkmode ? defaultToDarkFilter : null,
      }
    )
    .addTo(map);

  return null;
}
