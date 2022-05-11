import React, { useState } from "react";
import axios from "axios";
import "../assets/css/DisplayProximityStation.css";
import JaugeVelo from "./JaugeVelo";
import favouriteHeart from "../assets/images/favourite-heart.png";
import emptyHeart from "../assets/images/empty-heart.png";

export default function DisplayFavouriteCard({
  mapState,
  stationObj,
  setSlideState,
  setToggleCard,
  setUniqueMarker,
}) {
  const [fav, setFav] = useState(false);
  const URLBDD = `${import.meta.env.VITE_BACKEND_URL}/favourite-stations/`;
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
        .delete(
          `${import.meta.env.VITE_BACKEND_URL}/favourite-stations/${
            stationObj.number
          }`
        )
        .then(() => {
          setFav(!fav);
        });
    }
  };

  function flyPositionStation(event) {
    if (event.target.name !== "img-coeur") {
      setSlideState(false);
      const stationOb = { ...stationObj };
      delete stationOb.distance;
      setUniqueMarker(stationOb);
      setToggleCard(true);

      mapState.map.flyTo(
        [stationObj.position.lat, stationObj.position.lng],
        17
      );
    }
  }
  const statusDarkmode = localStorage.getItem("darkmode");
  return (
    <div
      className={
        statusDarkmode === "1" ? "card-station-compdark" : "card-station-comp"
      }
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
              src={favouriteHeart}
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
            <img name="img-coeur" src={emptyHeart} alt="empty-heart" />
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
