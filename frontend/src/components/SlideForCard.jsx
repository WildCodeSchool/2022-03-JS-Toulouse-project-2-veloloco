import React from "react";
import CardStation from "./CardStation";
import "./SlideForCard.css";

function SlideForCard() {
  return (
    <div className="mainCollumnSlide">
      <div className="subCollumnSlide">
        <div className="FavouriteStationsCont">
          <CardStation className="cardStation" />
          <CardStation className="cardStation" />
        </div>
        <div className="separator"> </div>
        <div className="ProximityStationsCont">
          <CardStation className="cardStation" />
          <CardStation className="cardStation" />
          <CardStation className="cardStation" />
          <CardStation className="cardStation" />
        </div>
      </div>
    </div>
  );
}
export default SlideForCard;
