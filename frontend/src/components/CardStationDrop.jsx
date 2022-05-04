import React, { useState } from "react";
import "../assets/css/cardstationdrop.css";
import axios from "axios";
import JaugeVelo from "./JaugeVelo";

export default function CardStationDrop({ uniqueMarker, apiResult }) {
  const iteration = apiResult.indexOf(uniqueMarker);
  const nameStation = uniqueMarker.name.toLowerCase().substr(7).split("");
  const adressStation = uniqueMarker.address;
  const URLBDD = "http://localhost:5500/favourite-stations/";
  const [fav, setFav] = useState(false);

  const handleClickFavourite = () => {
    if (!fav) {
      axios
        .post(URLBDD, {
          id: apiResult[iteration].number,
        })
        .then((values) => {
          if (values) {
            console.log("Station added !");
          } else console.log("Error in data insertion");
          setFav(!fav);
        })
        .catch((err) => console.error(err));
    } else if (fav) {
      axios
        .delete(
          `http://localhost:5500/favourite-stations/${apiResult[iteration].number}`
        )
        .then(() => {
          console.log("Station withdrawn !");
          setFav(!fav);
        });
    }
  };

  return (
    <div className="leaflet-bottom cardstation">
      <div data-aos="fade-up" data-aos-duration="1000" className="card-station">
        <div className="header-card">
          <h2>{nameStation}</h2>
          {fav && (
            <button
              type="button"
              className="fav-button"
              onClick={handleClickFavourite}
            >
              {" "}
              <img
                src="../src/assets/favourite-heart.png"
                alt="favourite-heart-full"
              />
            </button>
          )}
          {!fav && (
            <button
              type="button"
              className="fav-button"
              onClick={handleClickFavourite}
            >
              {" "}
              <img src="../src/assets/empty-heart.png" alt="empty-heart" />
            </button>
          )}
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
