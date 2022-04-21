import React, { useState } from "react";
import "./DisplayFavouriteCard.css";
import JaugeVelo from "./JaugeVelo";

export default function DisplayFavouriteCard({ favouriteCard, iteration }) {
  const [fav, setFav] = useState(false);

  return (
    <div className="card-station-comp">
      <div className="top-favourite-card">
        <h3>n°{favouriteCard[iteration].number}</h3>
        <h2>{favouriteCard[iteration].name.split(" - ").slice(1).join("-")}</h2>

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
              src="../src/assets/favourite-heart.png"
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
            <img src="../src/assets/empty-heart.png" alt="empty-heart" />
          </button>
        )}
      </div>

      <div className="middle-favourite-card">
        <h2>{favouriteCard[iteration].address}</h2>
      </div>

      <div className="bottom-favourite-card">
        <div id="available-bikes">
          {favouriteCard[iteration].available_bikes}
        </div>
        <div id="available-bike-stands">
          {favouriteCard[iteration].available_bike_stands}
        </div>

        <JaugeVelo favouriteCard={favouriteCard} />
        <h3>5km</h3>
      </div>
    </div>
  );
}
