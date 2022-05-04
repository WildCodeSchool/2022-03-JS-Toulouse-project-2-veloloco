import React, { useState, useEffect } from "react";
import "../assets/css/cardstationdrop.css";
import axios from "axios";
import JaugeVelo from "./JaugeVelo";
import PhotoCard from "./PhotoCard";

export default function CardStationDrop({ uniqueMarker, apiResult }) {
  const iteration = apiResult.indexOf(uniqueMarker);
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
    axios
      .get(url, config)
      // .then((response) => console.log(response))
      .then((res) => {
        setPhotoLink(res.data.photos[getRandomInt(78)].src.tiny);
      });
  }, []);

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
          </div>
        </div>
      </div>
    </div>
  );
}
