import React, { useEffect, useState } from "react";
import axios from "axios";
import DisplayProximityStation from "./DisplayProximityStation";
import ProximityFilter from "../assets/algos/ProximityFilter";

export default function ProximityStation({
  mapState,
  setSlideState,
  userPos,
  iteration,
}) {
  const [cardInfos, setcardInfos] = useState(null);
  useEffect(() => {
    axios
      .get(
        "https:/api.jcdecaux.com/vls/v1/stations?contract=toulouse&apiKey=ac948d6ebb42f6edfe3322e2089d50095869b8e3"
      )
      .then((response) => {
        setcardInfos(ProximityFilter(userPos, response.data));
      });
  }, []);

  return (
    <div>
      {cardInfos !== null ? (
        <DisplayProximityStation
          proximityStation={cardInfos}
          iteration={iteration}
          mapState={mapState}
          setSlideState={setSlideState}
        />
      ) : (
        "Chargement..."
      )}
    </div>
  );
}
