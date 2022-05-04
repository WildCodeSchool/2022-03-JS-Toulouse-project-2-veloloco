import React, { useState } from "react";
import "../assets/css/DisplayProximityStation.css";
import JaugeVelo from "./JaugeVelo";
import getDistanceFromLatLonInKm from "../assets/algos/getDistanceFromLatLonInKm";

export default function DisplayFavouriteStation({
  favouriteStation,
  iteration,
  userPos,
}) {
  const [fav, setFav] = useState(true);
  console.log(userPos);
  return (
    <div className="card-station-comp">
      <div className="top-proximity-card">
        <h3>n°{favouriteStation[iteration].number}</h3>
        <h2>
          {favouriteStation[iteration].name.split(" - ").slice(1).join("-")}
        </h2>

        {fav && (
          <button
            type="button"
            className="fav-button"
            onClick={() => {
              setFav(!fav);
            }}
          >
            {" "}
            <img
              src="../src/assets/images/favourite-heart.png"
              alt="favourite-heart-full"
            />
          </button>
        )}
        {!fav && (
          <button
            type="button"
            className="fav-button"
            onClick={() => {
              setFav(!fav);
            }}
          >
            {" "}
            <img src="../src/assets/images/empty-heart.png" alt="empty-heart" />
          </button>
        )}
      </div>

      <div className="middle-proximity-card">
        <h2>{favouriteStation[iteration].address}</h2>
      </div>

      <div className="bottom-proximity-card">
        <JaugeVelo proximityStation={favouriteStation} iteration={1} />

        <h3>
          {Math.floor(
            getDistanceFromLatLonInKm(
              favouriteStation[iteration].position.lat,
              favouriteStation[iteration].position.lng,
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
