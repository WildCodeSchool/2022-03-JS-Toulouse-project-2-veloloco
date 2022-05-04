import React, { useState } from "react";
import "../assets/css/DisplayProximityStation.css";
import JaugeVelo from "./JaugeVelo";

export default function DisplayFavouriteCard({
  mapState,
  proximityStation,
  iteration,
  setSlideState,
}) {
  const [fav, setFav] = useState(false);
  function flyPositionStation(event) {
    if (event.target.name !== "keur") {
      setSlideState(false);
      mapState.map.flyTo(
        [
          proximityStation[iteration].position.lat,
          proximityStation[iteration].position.lng,
        ],
        17
      );
    }
  }
  return (
    <div
      className="card-station-comp"
      role="button"
      onKeyDown={flyPositionStation}
      onClick={flyPositionStation}
      tabIndex={0}
    >
      <div className="top-proximity-card">
        <h3>n°{proximityStation[iteration].number}</h3>
        <h2>
          {proximityStation[iteration].name.split(" - ").slice(1).join("-")}
        </h2>

        {fav && (
          <button
            name="keur"
            type="button"
            className="fav-button"
            onClick={() => {
              setFav(!fav);
            }}
          >
            {" "}
            <img
              name="keur"
              src="../src/assets/favourite-heart.png"
              alt="favourite-heart-full"
            />
          </button>
        )}
        {!fav && (
          <button
            name="keur"
            type="button"
            className="fav-button"
            onClick={() => {
              setFav(!fav);
            }}
          >
            {" "}
            <img
              name="keur"
              src="../src/assets/images/empty-heart.png"
              alt="empty-heart"
            />
          </button>
        )}
      </div>

      <div className="middle-proximity-card">
        <h2>{proximityStation[iteration].address}</h2>
      </div>

      <div className="bottom-favourite-card">
        <JaugeVelo proximityStation={proximityStation} iteration={iteration} />
        <h3>{Math.floor(proximityStation[iteration].distance)}m</h3>
      </div>
    </div>
  );
}
