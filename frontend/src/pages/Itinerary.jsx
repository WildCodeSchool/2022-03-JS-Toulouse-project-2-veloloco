import { MapContainer, TileLayer } from "react-leaflet";
import "../assets/css/Itinerary.css";
import "leaflet/dist/leaflet.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import InfoFooterItinerary from "../components/InfoFooterItinerary";
import Geo from "../components/Geo";
import Routing from "../components/Routing";

export default function Itinerary() {
  const [itineraryInfo, setItineraryInfo] = useState();
  const position = [43.599731, 1.432891];
  const params = useParams();
  const [originStation, setOriginStation] = useState();
  const [destinationStation, setDestinationStation] = useState();

  const [apiResult, setApiResult] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.jcdecaux.com/vls/v1/stations?contract=toulouse&apiKey=ac948d6ebb42f6edfe3322e2089d50095869b8e3"
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
  //
  // Code de geolocalisation VVVVVVVV
  //
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const success = (locations) => {
      setLocation({
        coordinates: {
          lat: locations.coords.latitude,
          lng: locations.coords.longitude,
        },
      });
    };

    const error = (err) => {
      console.error("error #%d", err);
    };
    const option = {
      enableHighAccurancy: true,
    };
    navigator.geolocation.getCurrentPosition(success, error, option);
    //
    // code de centrage sur utilisateur VVVVV
    //
  }, [mapItineraryState]);
  function flyPositionUser() {
    mapItineraryState.map.flyTo(
      [location.coordinates.lat, location.coordinates.lng],
      17
    );
  }
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
          <div className="btn-geo-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#7b0828"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="btn-geo-itinerary"
              onClick={mapItineraryState ? flyPositionUser : null}
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="12" r="9" />
              <path d="M12 17l-1 -4l-4 -1l9 -4z" />
            </svg>
          </div>
          <div>
            {itineraryInfo !== undefined ? (
              <div>
                <InfoFooterItinerary itineraryInfo={itineraryInfo} />
              </div>
            ) : (
              <div className="info-footer" />
            )}
          </div>
          <Geo
            localisationlat={location.coordinates.lat}
            localisationlng={location.coordinates.lng}
          />
          <Routing
            setItineraryInfo={setItineraryInfo}
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
