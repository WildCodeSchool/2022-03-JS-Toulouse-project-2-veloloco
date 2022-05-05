import React from "react";
import "../assets/css/cardstationdrop.css";
import JaugeVelo from "./JaugeVelo";

export default function CardStationDrop({ uniqueMarker, apiResult }) {
  console.log(uniqueMarker);
  console.log(apiResult);
  const iteration = apiResult.findIndex(
    (station) => station.number === uniqueMarker.number
  );
  console.log(iteration);
  const nameStation = uniqueMarker.name.toLowerCase().substr(7).split("");
  const adressStation = uniqueMarker.address;
  return (
    <div className="leaflet-bottom cardstation">
      <div data-aos="fade-up" data-aos-duration="1000" className="card-station">
        <div className="header-card">
          <h2>{nameStation}</h2>
          <img
            src="../src/assets/images/empty-heart.png"
            alt="heart"
            className="heartimg"
          />
        </div>
        <div className="card-paragraph">
          <div className="jauge">
            <JaugeVelo iteration={iteration} proximityStation={apiResult} />
          </div>
        </div>
        <p>{adressStation}</p>
      </div>
    </div>
  );
}
