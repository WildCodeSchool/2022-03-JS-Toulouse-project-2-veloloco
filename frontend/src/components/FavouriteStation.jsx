import React, { useEffect, useState } from "react";
import axios from "axios";
import DisplayFavouriteStation from "./DisplayFavouriteStation";

export default function FavouriteStation({
  iteration,
  mapState,
  setSlideState,
}) {
  const [cardInfos, setcardInfos] = useState(null);
  useEffect(() => {
    const URLAPI =
      "https:/api.jcdecaux.com/vls/v1/stations?contract=toulouse&apiKey=ac948d6ebb42f6edfe3322e2089d50095869b8e3";
    const URLBDD = "http://localhost:5500/favourite-stations/:id";
    const promise1 = axios.get(URLAPI);
    const promise2 = axios.get(URLBDD);

    Promise.all([promise1, promise2]).then((values) => {
      const stationsAPI = values[0].data;

      const favouriteBDD = values[1].data.map((favourite) => favourite.id);

      const favouriteStationFiltered = stationsAPI.filter((station) => {
        return favouriteBDD.includes(station.number);
      });
      setcardInfos(favouriteStationFiltered);
    });
  }, []);
  return (
    <div>
      {cardInfos !== null ? (
        <DisplayFavouriteStation
          setSlideState={setSlideState}
          favouriteStation={cardInfos}
          iteration={iteration}
          mapState={mapState}
        />
      ) : (
        "Chargement..."
      )}
    </div>
  );
}
