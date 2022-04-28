import { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";

export default function Routing() {
  const map = useMap();
  // eslint-disable-next-line no-unused-vars

  useEffect(() => {
    if (!map) return;
    /* Genere route selon deux coordonees */
    const routingControl = L.Routing.control({
      waypoints: [L.latLng(43.60068, 1.420117), L.latLng(43.603699, 1.444699)],
      routeWhileDragging: true,
      lineOptions: {
        styles: [
          {
            color: "#7B0828",
            weight: 4,
          },
        ],
      },
      addWaypoints: false,
      draggableWaypoints: false,
      fitSelectedRoutes: false,
      showAlternatives: false,
    }).addTo(map);

    // eslint-disable-next-line consistent-return
    return () => map.removeControl(routingControl);
  }, [map]);

  return null;
}
