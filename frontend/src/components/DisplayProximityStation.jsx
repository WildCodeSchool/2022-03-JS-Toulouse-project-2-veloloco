import React, { useState } from "react";
import axios from "axios";
import "../assets/css/DisplayProximityStation.css";
import JaugeVelo from "./JaugeVelo";

export default function DisplayFavouriteCard({
  mapState,
  stationObj,
  setSlideState,
}) {
  const [fav, setFav] = useState(false);
  const URLBDD = "http://localhost:5500/favourite-stations/";
  const handleClickFavourite = () => {
    if (!fav) {
      axios
        .post(URLBDD, {
          id: stationObj.number,
        })
        .then(() => {
          setFav(!fav);
        });
    } else if (fav) {
      axios
        .delete(`http://localhost:5500/favourite-stations/${stationObj.number}`)
        .then(() => {
          setFav(!fav);
        });
    }
  };

  function flyPositionStation(event) {
    if (event.target.name !== "img-coeur") {
      setSlideState(false);
      mapState.map.flyTo(
        [stationObj.position.lat, stationObj.position.lng],
        17
      );
    }
  }
  return (
    <div
      className="card-station-comp"
      role="button"
      onKeyDown={flyPositionStation}
      onClick={flyPositionStation}
      tabIndex={0}
    >
      <div className="top-proximity-card">
        <h3>n°{stationObj.number}</h3>
        <h2>{stationObj.name.split(" - ").slice(1).join("-")}</h2>

        {fav && (
          <button
            name="img-coeur"
            type="button"
            className="fav-button"
            onClick={handleClickFavourite}
          >
            {" "}
            <img
              name="img-coeur"
              src="../src/assets/images/favourite-heart.png"
              alt="favourite-heart-full"
            />
          </button>
        )}
        {!fav && (
          <button
            name="img-coeur"
            type="button"
            className="fav-button"
            onClick={handleClickFavourite}
          >
            {" "}
            <img
              name="img-coeur"
              src="../src/assets/images/empty-heart.png"
              alt="empty-heart"
            />
          </button>
        )}
      </div>

      <div className="middle-proximity-card">
        <h2>{stationObj.address}</h2>
      </div>

      <div className="bottom-favourite-card">
        <JaugeVelo station={stationObj} />
        <h3>{Math.floor(stationObj.distance)}m</h3>
      </div>
    </div>
  );
}
