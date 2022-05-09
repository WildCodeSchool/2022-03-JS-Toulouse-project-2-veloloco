import React from "react";
import DisplayProximityStation from "./DisplayProximityStation";

export default function ProximityStation({
  mapState,
  setSlideState,
  cardInfos,
  stationObj,
  setUniqueMarker,
  setToggleCard,
}) {
  return (
    <div>
      {cardInfos !== null ? (
        <DisplayProximityStation
          cardInfos={cardInfos}
          mapState={mapState}
          setSlideState={setSlideState}
          stationObj={stationObj}
          setUniqueMarker={setUniqueMarker}
          setToggleCard={setToggleCard}
        />
      ) : (
        "Chargement..."
      )}
    </div>
  );
}
