import React, { useState } from "react";
import "./DisplayProximityStation.css";
import axios from "axios";
import JaugeVelo from "./JaugeVelo";

export default function DisplayFavouriteCard({ proximityStation, iteration }) {
  const [fav, setFav] = useState(false);
  const URLBDD = "http://localhost:5500/favourite-stations/";
  const handleClickFavourite = () => {
    if (!fav) {
      axios
        .post(URLBDD, {
          id: proximityStation[iteration].number,
        })
        .then((values) => {
          if (values) {
            console.log("Station added !");
          } else console.log("Error in data insertion");
          setFav(!fav);
        })
        .catch((err) => console.error(err));
    } else if (fav) {
      axios
        .delete(
          `http://localhost:5500/favourite-stations/${proximityStation[iteration].number}`
        )
        .then(() => {
          console.log("Station withdrawn !");
          setFav(!fav);
        });
    }
  };

  return (
    <div className="card-station-comp">
      <div className="top-proximity-card">
        <h3>n°{proximityStation[iteration].number}</h3>
        <h2>
          {proximityStation[iteration].name.split(" - ").slice(1).join("-")}
        </h2>

        {fav && (
          <button
            type="button"
            className="fav-button"
            onClick={handleClickFavourite}
          >
            {" "}
            <img
              src="../src/assets/favourite-heart.png"
              alt="favourite-heart-full"
            />
          </button>
        )}
        {!fav && (
          <button
            type="button"
            className="fav-button"
            onClick={handleClickFavourite}
          >
            {" "}
            <img src="../src/assets/empty-heart.png" alt="empty-heart" />
          </button>
        )}
      </div>

      <div className="middle-proximity-card">
        <h2>{proximityStation[iteration].address}</h2>
      </div>

      <div className="bottom-proximity-card">
        <JaugeVelo proximityStation={proximityStation} iteration={iteration} />
        <h3>5km</h3>
      </div>
    </div>
  );
}
