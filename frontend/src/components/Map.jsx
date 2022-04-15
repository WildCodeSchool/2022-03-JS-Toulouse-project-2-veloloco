import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.css";
import { useEffect, useState } from "react";
import axios from "axios";
import SlideForCard from "./SlideForCard";

export default function Map() {
  //* ***********************LOCALISATION****************************** */
  const [location, setLocation] = useState(null);

  // eslint-disable-next-line no-shadow
  const success = (location) => {
    console.log(location);
    setLocation({
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    });
  };
  const error = (err) => {
    console.error(err);
  };

  //* ******************************************************** */
  const [apiResult, setApiResult] = useState([]);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);
    axios
      .get(
        "https:/api.jcdecaux.com/vls/v1/stations?contract=toulouse&apiKey=ac948d6ebb42f6edfe3322e2089d50095869b8e3"
      )
      .then((response) => setApiResult(response.data));
  }, []);
  const [slideState, setSlideState] = useState(false);

  console.log(apiResult);
  return (
    <div id="map">
      {location != null ? (
        <MapContainer
          center={[location.coordinates.lat, location.coordinates.lng]}
          zoom={12}
        >
          {/* TODO empecher le zoom de map pour pouvoir scroll le slideer de droite */}
          <div className={slideState ? "right-slide-on" : "right-slide-off"}>
            <div className="slide-button-cont">
              <button
                type="button"
                className="slide-button"
                onClick={() => setSlideState(!slideState)}
              >
                {" "}
                <img
                  src="../src/assets/TRIANGLE.png"
                  className={
                    slideState
                      ? "triangle-logo triangle-on"
                      : "triangle-logo triangle-off"
                  }
                  alt="triangle logo"
                />
              </button>
            </div>
            <SlideForCard slideState={slideState} />
          </div>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            className="tile"
          />
          <Marker
            position={[location.coordinates.lat, location.coordinates.lng]}
          />
          {apiResult.map((marker) => (
            <Marker position={marker.position}>
              <Popup>Hello world</Popup>
            </Marker>
          ))}
        </MapContainer>
      ) : (
        "chargement"
      )}
    </div>
  );
}
