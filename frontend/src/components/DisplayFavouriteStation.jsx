import axios from "axios";
import React, { useState } from "react";
import "../assets/css/DisplayProximityStation.css";

import getDistanceFromLatLonInKm from "../assets/algos/getDistanceFromLatLonInKm";
import JaugeVelo from "./JaugeVelo";

import favouriteHeart from "../assets/images/favourite-heart.png";
import emptyHeart from "../assets/images/empty-heart.png";

export default function DisplayFavouriteStation({
  favouriteStation,
  mapState,
  setSlideState,
  userPos,
  setToggleCard,
  setUniqueMarker,
}) {
  const [fav, setFav] = useState(true);
  const URLBDD = `${import.meta.env.VITE_BACKEND_URL}/favourite-stations/`;
  const handleClickFavourite = () => {
    if (!fav) {
      axios
        .post(URLBDD, {
          id: favouriteStation.number,
        })
        .then(() => {
          setFav(!fav);
        });
    } else if (fav) {
      axios
        .delete(
          `${import.meta.env.VITE_BACKEND_URL}/favourite-stations/${
            favouriteStation.number
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
      setUniqueMarker(favouriteStation);
      setToggleCard(true);
      mapState.map.flyTo(
        [favouriteStation.position.lat, favouriteStation.position.lng],
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
        <h3>n°{favouriteStation.number}</h3>
        <h2>{favouriteStation.name.split(" - ").slice(1).join("-")}</h2>
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
        <h2>{favouriteStation.address}</h2>
      </div>

      <div className="bottom-proximity-card">
        <JaugeVelo station={favouriteStation} />

        <h3>
          {Math.floor(
            getDistanceFromLatLonInKm(
              favouriteStation.position.lat,
              favouriteStation.position.lng,
              userPos.coordinates.lat,
              userPos.coordinates.lng
            )
          )}
          m
        </h3>
      </div>
    </div>
  );
}
