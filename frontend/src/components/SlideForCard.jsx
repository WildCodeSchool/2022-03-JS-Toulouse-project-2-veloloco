import React, { useEffect, useState } from "react";
import axios from "axios";
import FavouriteStation from "./FavouriteStation";
import ProximityStation from "./ProximityStation";
import "../assets/css/SlideForCard.css";
import ProximityFilter from "../assets/algos/ProximityFilter";

function SlideForCard({ setSlideState, userPosition, mapState }) {
  const [isFavourite, setisFavourite] = useState(null);
  const [BDDlist, setBDDlist] = useState([]);
  useEffect(() => {
    const URLAPI =
      "https:/api.jcdecaux.com/vls/v1/stations?contract=toulouse&apiKey=ac948d6ebb42f6edfe3322e2089d50095869b8e3";
    const URLBDD = "http://localhost:5500/favourite-stations/:id";
    const promise1 = axios.get(URLAPI);
    const promise2 = axios.get(URLBDD);

    Promise.all([promise1, promise2]).then((values) => {
      const stationsAPI = values[0].data;

      const favouriteBDD = values[1].data.map((favourite) => favourite.id);
      setBDDlist(favouriteBDD);
      const favouriteStationFiltered = stationsAPI.filter((station) => {
        return favouriteBDD.includes(station.number);
      });
      setisFavourite(favouriteStationFiltered);
    });
  }, []);

  const [cardInfos, setcardInfos] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https:/api.jcdecaux.com/vls/v1/stations?contract=toulouse&apiKey=ac948d6ebb42f6edfe3322e2089d50095869b8e3"
      )
      .then((response) => {
        setcardInfos(ProximityFilter(userPosition, response.data));
      });
  }, []);
  // caca!
  return (
    <div className="main-collumn-slide">
      <div className="sub-collumn-slide">
        {isFavourite !== null
          ? isFavourite.map((favouriteStation) => (
              <div className="favourite-stations-cont">
                <FavouriteStation
                  favouriteStation={favouriteStation}
                  mapState={mapState}
                  setSlideState={setSlideState}
                  userPos={userPosition}
                />
              </div>
            ))
          : "Chargement..."}

        <div className="separator"> </div>
        {cardInfos !== null ? (
          <div className="proximity-stations-cont">
            {cardInfos.map((stationObj) =>
              !BDDlist.includes(stationObj.number) ? (
                <ProximityStation
                  stationObj={stationObj}
                  mapState={mapState}
                  setSlideState={setSlideState}
                />
              ) : null
            )}
          </div>
        ) : (
          "Chargement..."
        )}
      </div>
    </div>
  );
}
export default SlideForCard;
