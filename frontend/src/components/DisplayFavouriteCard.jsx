import React from "react";
import "./DisplayFavouriteCard.css";

export default function DisplayFavouriteCard({ favouriteCard }) {
  console.log(favouriteCard);
  return (
    <div className="CardStationComp">
      <div className="top-favourite-card">
        <h3>n°{favouriteCard[1].number}</h3>
        <h2>{favouriteCard[1].name}</h2>
        <img
          src="/frontend/src/assets/Heart-favorite-card-full.png"
          alt="favourite-heart-full"
        />
      </div>

      <div className="middle-favourite-card">
        <h2>{favouriteCard[1].adress}</h2>
        {/* <h2>{favouriteCard.distance}</h2> */}
      </div>

      <div className="bottom-favourite-card">
        <div id="available-bikes">
          {favouriteCard[1].availableBikes}
          <div id="available-bikes-stands">
            {favouriteCard[1].availableBikesStands}
          </div>
        </div>
      </div>
    </div>
  );
}
