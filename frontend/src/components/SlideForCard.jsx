import React from "react";
import CardStation from "./CardStation";
import "./SlideForCard.css";

function SlideForCard() {
  return (
    <div className="main-collumn-slide">
      <div className="sub-collumn-slide">
        <div className="favourite-stations-cont">
          <CardStation className="card-station" />
          <CardStation className="card-station" />
        </div>
        <hr className="separator" />
        <div className="proximity-stations-cont">
          <CardStation className="card-station" />
          <CardStation className="card-station" />
          <CardStation className="card-station" />
          <CardStation className="card-station" />
        </div>
      </div>
    </div>
  );
}
export default SlideForCard;
