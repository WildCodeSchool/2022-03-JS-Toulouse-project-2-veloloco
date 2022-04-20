import React from "react";
import "./DisplayFavouriteCard.css";
import JaugeVelo from "./JaugeVelo";

export default function DisplayFavouriteCard({ favouriteCard }) {
  return (
    <div className="card-station-comp">
      <div className="top-favourite-card">
        <h3>n°{favouriteCard[1].number}</h3>
        <h2>{favouriteCard[1].name.split(" - ").slice(1).join("-")}</h2>

        <img
          src="../src/assets/favourite-heart.png"
          alt="favourite-heart-full"
        />
      </div>

      <div className="middle-favourite-card">
        <h2>{favouriteCard[1].address}</h2>
        {/* <h2>{favouriteCard.distance}</h2> */}
      </div>

      <div className="bottom-favourite-card">
        <JaugeVelo favouriteCard={favouriteCard} />
        <h3>5km</h3>
      </div>
    </div>
  );
}
