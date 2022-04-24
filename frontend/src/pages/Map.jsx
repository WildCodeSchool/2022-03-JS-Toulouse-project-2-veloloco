import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";
import "./Map.css";
import { useEffect, useState } from "react";
import axios from "axios";
import logoitinerary from "../assets/images/itinerary.png";
import Recherche from "../components/Recherche";
import Geo from "../components/Geo";
import SlideForCard from "../components/SlideForCard";
import ItinerarySearch from "../components/ItinerarySearch";

export default function Map() {
  const [location, setLocation] = useState(null);

  const success = (locations) => {
    setLocation({
      coordinates: {
        lat: locations.coords.latitude,
        lng: locations.coords.longitude,
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
  const [slideState, setSlideState] = useState(false);
  const [mapState, setMapState] = useState();
  const [toggleSearch, setToggleSearch] = useState(true);

  return (
    <div id="map">
      <button
        className="btn-change"
        type="button"
        onClick={() => {
          setToggleSearch(!toggleSearch);
        }}
      >
        <img src={logoitinerary} alt="logo" />
      </button>
      {toggleSearch ? (
        <Recherche apiResult={apiResult} mapState={mapState} />
      ) : (
        <ItinerarySearch apiResult={apiResult} mapState={mapState} />
      )}

      {location != null ? (
        <MapContainer
          center={[location.coordinates.lat, location.coordinates.lng]}
          zoom={20}
          whenCreated={(map) => setMapState({ map })}
          zoomControl={false}
        >
          <ZoomControl
            position="bottomleft"
            zoomInText="&#128069;"
            zoomOutText="&#128078;"
          />
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
            <SlideForCard slideState={slideState} userPosition={location} />
          </div>
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
