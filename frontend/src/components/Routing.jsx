import { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";
import markerDefault from "../assets/images/marker-32.png";

import "lrm-graphhopper";

export default function Routing({
  originStation,
  destinationStation,
  mapItineraryState,
  setItineraryInfo,
}) {
  const map = useMap(mapItineraryState);

  const iconDefault = L.icon({
    iconUrl: markerDefault,
    iconSize: [41, 41],
    iconAnchor: [22, 41],
  });

  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(originStation.position),
        L.latLng(destinationStation.position),
      ],

      router: L.Routing.graphHopper(import.meta.env.VITE_API_MAP),

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
      createMarker(i, wp) {
        return L.marker(wp.latLng, {
          icon: iconDefault,
        });
      },
    }).addTo(map);
    routingControl.on("routesfound", (e) => {
      setItineraryInfo(e);
    });

    routingControl.getRouter().options.urlParameters.vehicle = "bike";
    routingControl.route();

    // eslint-disable-next-line consistent-return
    return () => map.removeControl(routingControl);
  }, [map]);
  return null;
}
