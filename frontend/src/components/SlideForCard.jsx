import React, { useEffect, useState } from "react";
import axios from "axios";
import FavouriteStation from "./FavouriteStation";
import ProximityStation from "./ProximityStation";
import "../assets/css/SlideForCard.css";
import ProximityFilter from "../assets/algos/ProximityFilter";

function SlideForCard({ setSlideState, userPosition, mapState }) {
  const [isFavourite, setisFavourite] = useState(null);
  const [BDDlist, setBDDlist] = useState([]);
  const [isHidden, setisHidden] = useState(true);
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

  const handleHiddenButton = () => {
    setisHidden(!isHidden);
  };

  return (
    <div className="main-collumn-slide">
      <div className="legend-container">
        <h2>Légende</h2>
        {isHidden && (
          <button type="button" onClick={handleHiddenButton}>
            <img src="../src/assets/images/downarrow.png" alt="down arrow" />
          </button>
        )}
        {!isHidden && (
          <button type="button" onClick={handleHiddenButton}>
            <img src="../src/assets/images/uparrow.png" alt="up arrow" />
          </button>
        )}
      </div>
      {!isHidden && (
        <div className="legend-content">
          <div className="legend-available-bikes">2</div>
          <div className="legend-available-bikes-standings">2</div>
          <div className="legend-dead-bikes">7</div>
        </div>
      )}
      <div className="slide-menu-title-fav">Mes favoris</div>
      <div className="sub-collumn-slide">
        {isFavourite !== null
          ? isFavourite.map((favouriteStation) => (
              <div className="favourite-stations-cont">
                <FavouriteStation
                  key={favouriteStation.number}
                  favouriteStation={favouriteStation}
                  mapState={mapState}
                  setSlideState={setSlideState}
                  userPos={userPosition}
                />
              </div>
            ))
          : "Chargement..."}

        <div className="separator"> </div>
        <div className="slide-menu-title-prox">Mes stations proches</div>
        {cardInfos !== null ? (
          <div className="proximity-stations-cont">
            {cardInfos.map((stationObj) =>
              !BDDlist.includes(stationObj.number) ? (
                <ProximityStation
                  key={stationObj.number}
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
