import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Geo from "../components/Geo";

export default function Map() {
  const [location, setLocation] = useState(null);

  /* const [isOn, toggleIsOn] = useState(true); */
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
  const option = {
    enableHighAccurancy: true,
  };
  const [apiResult, setApiResult] = useState([]);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error, option);
    axios
      .get(
        "https:/api.jcdecaux.com/vls/v1/stations?contract=toulouse&apiKey=ac948d6ebb42f6edfe3322e2089d50095869b8e3"
      )
      .then((response) => {
        setApiResult(response.data);
      });
  }, []);

  return (
    <div id="map">
      {location != null ? (
        <MapContainer
          center={[location.coordinates.lat, location.coordinates.lng]}
          zoom={20}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Geo
            localisationlat={location.coordinates.lat}
            localisationlng={location.coordinates.lng}
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
