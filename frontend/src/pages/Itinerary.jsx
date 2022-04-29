import { MapContainer, TileLayer } from "react-leaflet";
import "./Itinerary.css";
import "leaflet/dist/leaflet.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import LayerChange from "../components/LayerChange";
import Routing from "../components/Routing";

export default function Itinerary() {
  const position = [43.599731, 1.432891];
  const params = useParams();

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

  const originStation = apiResult.find(
    (station) => station.number === parseInt(params.origin, 10)
  );

  const destinationStation = apiResult.find(
    (station) => station.number === parseInt(params.destination, 10)
  );

  const [mapItineraryState, setMapItineraryState] = useState();
  console.log(mapItineraryState);
  return (
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
      {useEffect(() => {
        <Routing
          originStation={originStation}
          destinationStation={destinationStation}
        />;
      })}
    </MapContainer>
  );
}
