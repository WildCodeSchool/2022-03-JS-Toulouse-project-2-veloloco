import React from "react";
import FavouriteStation from "./FavouriteStation";
import ProximityStation from "./ProximityStation";
import "../assets/css/SlideForCard.css";

function SlideForCard({ userPosition }) {
  return (
    <div className="main-collumn-slide">
      <div className="sub-collumn-slide">
        <div className="favourite-stations-cont">
          <FavouriteStation userPos={userPosition} iteration={0} />
          <FavouriteStation userPos={userPosition} iteration={1} />
        </div>
        <div className="separator"> </div>
        <div className="proximity-stations-cont">
          <ProximityStation userPos={userPosition} iteration={0} />
          <ProximityStation userPos={userPosition} iteration={1} />
          <ProximityStation userPos={userPosition} iteration={2} />
          <ProximityStation userPos={userPosition} iteration={3} />
          <ProximityStation userPos={userPosition} iteration={4} />
        </div>
      </div>
    </div>
  );
}
export default SlideForCard;
