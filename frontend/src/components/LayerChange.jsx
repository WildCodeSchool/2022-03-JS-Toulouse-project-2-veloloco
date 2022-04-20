import L from "leaflet";
import { useMap } from "react-leaflet";

export default function LayerChange() {
  const map = useMap();

  const worldImagery = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    {
      attribution:
        "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
    }
  );

  const alidadeSmoothDark = L.tileLayer(
    "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
    {
      maxZoom: 20,
      attribution:
        '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    }
  );
  const baseMaps = {
    "Satellite ": worldImagery,
    "Dark ": alidadeSmoothDark,
  };
  L.control.layers(baseMaps).addTo(map);

  const cheh = document.querySelector(".leaflet-control-layers-toggle");
  cheh.style = "display : none";

  return null;
}
