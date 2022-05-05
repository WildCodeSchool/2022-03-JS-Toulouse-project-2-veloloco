import React, { useEffect, useState } from "react";
import axios from "axios";
import FavouriteStation from "./FavouriteStation";
import ProximityStation from "./ProximityStation";
import "../assets/css/SlideForCard.css";
import ProximityFilter from "../assets/algos/ProximityFilter";

const [isFavourite, setisFavourite] = useState(null);
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
    setisFavourite(favouriteStationFiltered);
  });
}, []);

function SlideForCard({ setSlideState, userPosition, mapState }) {
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

  return (
    <div className="main-collumn-slide">
      <div className="sub-collumn-slide">
        <div className="favourite-stations-cont">
          {isFavourite.map((favouriteStation) => (
            <FavouriteStation
              favouriteStation={favouriteStation}
              mapState={mapState}
              setSlideState={setSlideState}
              userPos={userPosition}
            />
          ))}
        </div>
        <div className="separator"> </div>
        <div className="proximity-stations-cont">
          {cardInfos.map((stationObj) => (
            <ProximityStation
              stationObj={stationObj}
              mapState={mapState}
              setSlideState={setSlideState}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default SlideForCard;
