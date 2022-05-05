import React from "react";
import FavouriteStation from "./FavouriteStation";
import ProximityStation from "./ProximityStation";
import "../assets/css/SlideForCard.css";

function SlideForCard({
  setSlideState,
  userPosition,
  mapState,
  setToggleCard,
  setUniqueMarker,
}) {
  return (
    <div className="main-collumn-slide">
      <div className="sub-collumn-slide">
        <div className="favourite-stations-cont">
          <FavouriteStation
            iteration={0}
            mapState={mapState}
            setSlideState={setSlideState}
            userPos={userPosition}
            setToggleCard={setToggleCard}
            setUniqueMarker={setUniqueMarker}
          />
          <FavouriteStation
            iteration={1}
            mapState={mapState}
            setSlideState={setSlideState}
            userPos={userPosition}
            setToggleCard={setToggleCard}
            setUniqueMarker={setUniqueMarker}
          />
        </div>
        <div className="separator"> </div>
        <div className="proximity-stations-cont">
          <ProximityStation
            userPos={userPosition}
            iteration={0}
            mapState={mapState}
            setSlideState={setSlideState}
            setToggleCard={setToggleCard}
            setUniqueMarker={setUniqueMarker}
          />
          <ProximityStation
            userPos={userPosition}
            iteration={1}
            mapState={mapState}
            setSlideState={setSlideState}
            setToggleCard={setToggleCard}
            setUniqueMarker={setUniqueMarker}
          />
          <ProximityStation
            userPos={userPosition}
            iteration={2}
            mapState={mapState}
            setSlideState={setSlideState}
            setToggleCard={setToggleCard}
            setUniqueMarker={setUniqueMarker}
          />
          <ProximityStation
            userPos={userPosition}
            iteration={3}
            mapState={mapState}
            setSlideState={setSlideState}
            setToggleCard={setToggleCard}
            setUniqueMarker={setUniqueMarker}
          />
          <ProximityStation
            userPos={userPosition}
            iteration={4}
            mapState={mapState}
            setSlideState={setSlideState}
            setToggleCard={setToggleCard}
            setUniqueMarker={setUniqueMarker}
          />
        </div>
      </div>
    </div>
  );
}
export default SlideForCard;
