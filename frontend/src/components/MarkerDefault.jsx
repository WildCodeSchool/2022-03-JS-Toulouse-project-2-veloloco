import { Marker } from "react-leaflet";
import L from "leaflet";

const iconDefault = L.icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
const iconDanger = L.icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png",
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
    console.log(
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
