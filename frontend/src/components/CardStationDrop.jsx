import React, { useState, useEffect } from "react";
import "../assets/css/cardstationdrop.css";
import axios from "axios";
import PhotoCard from "./PhotoCard";
import JaugeVelo from "./JaugeVelo";

export default function CardStationDrop({ uniqueMarker, apiResult }) {
  const iteration = apiResult.findIndex(
    (station) => station.number === uniqueMarker.number
  );

  const nameStation = uniqueMarker.name.toLowerCase().substr(7).split("");
  const adressStation = uniqueMarker.address;

  const [photoLink, setPhotoLink] = useState("");

  const url = "https://api.pexels.com/v1/search?query=bicycle&per_page=79";
  const config = {
    headers: {
      Authorization: "563492ad6f91700001000001fd0793323c9b47579668e757b6a46850",
    },
  };
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  useEffect(() => {
    axios.get(url, config).then((res) => {
      setPhotoLink(res.data.photos[getRandomInt(78)].src.tiny);
    });
  }, []);

  const URLBDD = "http://localhost:5500/favourite-stations/";
  const [fav, setFav] = useState(false);

  const handleClickFavourite = () => {
    if (!fav) {
      axios
        .post(URLBDD, {
          id: apiResult[iteration].number,
        })
        .then(() => {
          setFav(!fav);
        })
        .catch((err) => console.error(err));
    } else if (fav) {
      axios
        .delete(
          `http://localhost:5500/favourite-stations/${apiResult[iteration].number}`
        )
        .then(() => {
          setFav(!fav);
        });
    }
  };
  return (
    <div className="leaflet-bottom cardstation">
      <div data-aos="fade-up" data-aos-duration="1000" className="card-station">
        <div className="photo-city">
          <PhotoCard photoSource={photoLink} />
          <div className="name-jauge">
            <div className="header-card">
              <h2 className="name-station">{nameStation}</h2>
              <img
                src="../src/assets/empty-heart.png"
                alt="heart"
                className="heartimg"
              />
            </div>

            <div className="card-paragraph">
              <div className="jauge">
                <JaugeVelo iteration={iteration} proximityStation={apiResult} />
              </div>
              <p className="adress-station">{adressStation}</p>
            </div>

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
          </div>
        </div>
      </div>
    </div>
  );
}
