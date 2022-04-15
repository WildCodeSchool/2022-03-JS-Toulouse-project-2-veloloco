import React from "react";
import FavouriteCard from "./FavouriteCard";
import "./SlideForCard.css";

function SlideForCard() {
  return (
    <div className="main-collumn-slide">
      <div className="sub-collumn-slide">
        <div className="favourite-stations-cont">
          <FavouriteCard />
          <FavouriteCard />
        </div>
        <div className="separator"> </div>
        <div className="proximity-stations-cont">
          <FavouriteCard />
          <FavouriteCard />
          <FavouriteCard />
          <FavouriteCard />
        </div>
      </div>
    </div>
  );
}
export default SlideForCard;
