import React from "react";
import FavouriteCard from "./FavouriteCard";
import "./SlideForCard.css";

function SlideForCard({ userPosition }) {
  return (
    <div className="main-collumn-slide">
      <div className="sub-collumn-slide">
        <div className="favourite-stations-cont">
          <FavouriteCard userPos={userPosition} iteration={0} />
          <FavouriteCard userPos={userPosition} iteration={0} />
        </div>
        <div className="separator"> </div>
        <div className="proximity-stations-cont">
          <FavouriteCard userPos={userPosition} iteration={0} />
          <FavouriteCard userPos={userPosition} iteration={1} />
          <FavouriteCard userPos={userPosition} iteration={2} />
          <FavouriteCard userPos={userPosition} iteration={3} />
          <FavouriteCard userPos={userPosition} iteration={4} />
        </div>
      </div>
    </div>
  );
}
export default SlideForCard;
