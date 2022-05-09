import { Marker } from "react-leaflet";
import L from "leaflet";
import markerorange from "../assets/images/marker-orange.png";
import markergreen from "../assets/images/marker-green.png";
import markerblack from "../assets/images/marker-black.png";

const iconDefault = L.icon({
  iconUrl: markergreen,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
const iconDanger = L.icon({
  iconUrl: markerorange,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
// eslint-disable-next-line no-unused-vars
const markerIndisponible = L.icon({
  iconUrl: markerblack,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function MarkerDefault({
  positionStation,
  marker,
  setToggleCard,

  setUniqueMarker,
}) {
  function clickAction() {
    setUniqueMarker(marker);
    setToggleCard();
    console.warn(
      "%c lag on pierre pc, don't delete me ",
      "color: #c635f2; font-size: 20pt;"
    );
  }
  if (marker.available_bikes <= 3) {
    return (
      <Marker
        icon={iconDanger}
        position={positionStation}
        eventHandlers={{
          click: () => {
            clickAction();
          },
        }}
      />
    );
  }

  return (
    <Marker
      icon={iconDefault}
      position={positionStation}
      eventHandlers={{
        click: () => {
          clickAction();
        },
      }}
    />
  );
}
