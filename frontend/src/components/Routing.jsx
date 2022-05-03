import { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";

import "lrm-graphhopper"; // Adds L.Routing.GraphHopper onto L.Routing

export default function Routing({
  originStation,
  destinationStation,
  mapItineraryState,
}) {
  const map = useMap(mapItineraryState);

  // eslint-disable-next-line no-unused-vars

  useEffect(() => {
    if (!map) return;
    /* Genere route selon deux coordonees */
    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(originStation.position),
        L.latLng(destinationStation.position),
      ],
      router: L.Routing.graphHopper("c11022cc-4f6a-4370-a3b6-d2021c79b19d"),

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
      fitSelectedRoutes: true,
      showAlternatives: false,
    }).addTo(map);
    routingControl.on("routesfound", function (e) {
      const { routes } = e;

      const { summary } = routes[0];
      console.log(summary);
    });
    routingControl.getRouter().options.urlParameters.vehicle = "bike";
    routingControl.route();

    // eslint-disable-next-line consistent-return
    return () => map.removeControl(routingControl);
  }, [map]);

  return null;
}
