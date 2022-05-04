import React from "react";
import FavouriteStation from "./FavouriteStation";
import ProximityStation from "./ProximityStation";
import "../assets/css/SlideForCard.css";

function SlideForCard({ setSlideState, userPosition, mapState }) {
  return (
    <div className="main-collumn-slide">
      <div className="sub-collumn-slide">
        <div className="favourite-stations-cont">
          <FavouriteStation
            iteration={0}
            mapState={mapState}
            setSlideState={setSlideState}
          />
          <FavouriteStation
            iteration={1}
            mapState={mapState}
            setSlideState={setSlideState}
          />
        </div>
        <div className="separator"> </div>
        <div className="proximity-stations-cont">
          <ProximityStation
            userPos={userPosition}
            iteration={0}
            mapState={mapState}
            setSlideState={setSlideState}
          />
          <ProximityStation
            userPos={userPosition}
            iteration={1}
            mapState={mapState}
            setSlideState={setSlideState}
          />
          <ProximityStation
            userPos={userPosition}
            iteration={2}
            mapState={mapState}
            setSlideState={setSlideState}
          />
          <ProximityStation
            userPos={userPosition}
            iteration={3}
            mapState={mapState}
            setSlideState={setSlideState}
          />
          <ProximityStation
            userPos={userPosition}
            iteration={4}
            mapState={mapState}
            setSlideState={setSlideState}
          />
        </div>
      </div>
    </div>
  );
}
export default SlideForCard;
