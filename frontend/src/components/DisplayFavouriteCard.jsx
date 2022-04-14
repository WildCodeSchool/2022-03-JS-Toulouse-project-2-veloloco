import React from "react";
import "./DisplayFavouriteCard.css";

export default function DisplayFavouriteCard({ favouriteCard }) {
  console.log(favouriteCard);
  return (
    <div className="CardStationComp">
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
        <div id="available-bikes">{favouriteCard[1].available_bikes}</div>
        <div id="available-bike-stands">
          {favouriteCard[1].available_bike_stands}
        </div>
      </div>
    </div>
  );
}
