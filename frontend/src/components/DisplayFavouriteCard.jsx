import React from "react";

export default function DisplayFavouriteCard({ favouriteCard }) {
  return (
    <div id="favourite-card">
      <div id="top-favourite-card">
        <h3>n°{favouriteCard.number}</h3>
        <h2>{favouriteCard.name}</h2>
        <img
          src="/frontend/src/assets/Heart-favorite-card-full.png"
          alt="favourite-heart-full"
        />
      </div>

      <div id="middle-favourite-card">
        <h2>{favouriteCard.adress}</h2>
        <h2>{favouriteCard.distance}</h2>
      </div>

      <div id="bottom-favourite-card">
        <div id="available-bikes">
          {favouriteCard.availableBikes}
          <div id="available-bikes-stands">
            {favouriteCard.availableBikesStands}
          </div>
        </div>
      </div>
    </div>
  );
}
