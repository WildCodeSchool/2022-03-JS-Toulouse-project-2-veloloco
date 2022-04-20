import React from "react";
import "./DisplayFavouriteCard.css";

export default function DisplayFavouriteCard({ favouriteCard }) {
  const stationNumber = 2;
  return (
    <div className="card-station-comp">
      <div className="top-favourite-card">
        <h3>n°{favouriteCard[stationNumber].number}</h3>
        <h2>
          {favouriteCard[stationNumber].name.split(" - ").slice(1).join("-")}
        </h2>

        <img
          src="../src/assets/favourite-heart.png"
          alt="favourite-heart-full"
        />
      </div>

      <div className="middle-favourite-card">
        <h2>{favouriteCard[stationNumber].address}</h2>
        {/* <h2>{favouriteCard.distance}</h2> */}
      </div>

      <div className="bottom-favourite-card">
        <div id="available-bikes">
          {favouriteCard[stationNumber].available_bikes}
        </div>
        <div id="available-bike-stands">
          {favouriteCard[stationNumber].available_bike_stands}
        </div>
        <h3>5km</h3>
      </div>
    </div>
  );
}
