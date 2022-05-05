import { MapContainer, TileLayer } from "react-leaflet";
import "../assets/css/Itinerary.css";
import "leaflet/dist/leaflet.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Routing from "../components/Routing";

export default function Itinerary() {
  const position = [43.599731, 1.432891];
  const params = useParams();
  const [originStation, setOriginStation] = useState();
  const [destinationStation, setDestinationStation] = useState();

  const [apiResult, setApiResult] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https:/api.jcdecaux.com/vls/v1/stations?contract=toulouse&apiKey=ac948d6ebb42f6edfe3322e2089d50095869b8e3"
      )
      .then((response) => {
        setApiResult(response.data);
      });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setOriginStation(
        apiResult.find(
          (station) => station.number === parseInt(params.origin, 10)
        )
      );
    }, 1500);
    setDestinationStation(
      apiResult.find(
        (station) => station.number === parseInt(params.destination, 10)
      )
    );
  }, [apiResult]);

  const [mapItineraryState, setMapItineraryState] = useState();

  return (
    <>
      <div />
      {originStation && destinationStation ? (
        <MapContainer
          center={position}
          zoom={13}
          style={{ height: "100vh" }}
          whenCreated={(map) => setMapItineraryState({ map })}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Routing
            originStation={originStation}
            destinationStation={destinationStation}
            mapItineraryState={mapItineraryState}
          />
        </MapContainer>
      ) : (
        <div className="loader-container">
          <h1 className="loader-text">Chargement en cours ...</h1>
          <div className="lds-roller">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      )}
    </>
  );
}
