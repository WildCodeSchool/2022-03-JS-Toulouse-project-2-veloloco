import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "./Map.css";
import { useEffect, useState } from "react";
import axios from "axios";

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
  navigator.geolocation.getCurrentPosition(success, error);
  //* ******************************************************** */
  const [apiResult, setApiResult] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https:/api.jcdecaux.com/vls/v1/stations?contract=toulouse&apiKey=ac948d6ebb42f6edfe3322e2089d50095869b8e3"
      )
      .then((response) => setApiResult(response.data[2]));
  }, []);

  console.log(apiResult);
  return (
    <div id="map">
      {location != null ? (
        <MapContainer
          center={[location.coordinates.lat, location.coordinates.lng]}
          zoom={12}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            className="tile"
          />
          <Marker
            position={[location.coordinates.lat, location.coordinates.lng]}
          />
        </MapContainer>
      ) : (
        "chargement"
      )}
    </div>
  );
}
