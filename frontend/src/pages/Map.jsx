import {
  MapContainer,
  TileLayer,
  ZoomControl,
  useMapEvents,
} from "react-leaflet";
import "../assets/css/Map.css";
import { useEffect, useState } from "react";
import axios from "axios";
import MarkerDefault from "../components/MarkerDefault";
import logoitinerary from "../assets/images/itinerary.png";
import Recherche from "../components/Recherche";
import Geo from "../components/Geo";
import SlideForCard from "../components/SlideForCard";
import ItinerarySearch from "../components/ItinerarySearch";
import CardStationDrop from "../components/CardStationDrop";
import Navigation from "../components/Navigation";

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
  const [toggleCard, setToggleCard] = useState(false);

  const [showLinks, setShowLinks] = useState(false);

  const [uniqueMarker, setUniqueMarker] = useState();

  function flyPositionUser() {
    mapState.map.flyTo([location.coordinates.lat, location.coordinates.lng]);
  }
  function Mapclick() {
    setMapState.map = useMapEvents({
      click() {
        setToggleCard();
      },
    });
    return null;
  }

  const antiConflictMenu = (menu) => {
    if (menu) {
      setSlideState(!slideState);
      setShowLinks(false);
    } else if (!menu) {
      setSlideState(false);
      setShowLinks(!showLinks);
    }
  };
  return (
    <div id="map">
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
          className="btn-geo"
          onClick={flyPositionUser}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="12" r="9" />
          <path d="M12 17l-1 -4l-4 -1l9 -4z" />
        </svg>
      </div>

      <div className="containersearch">
        <Navigation
          setShowLinks={setShowLinks}
          showLinks={showLinks}
          antiConflictMenu={() => antiConflictMenu()}
        />
        {toggleSearch ? (
          <Recherche apiResult={apiResult} mapState={mapState} />
        ) : (
          <ItinerarySearch apiResult={apiResult} mapState={mapState} />
        )}

        <button
          className="btn-change"
          type="button"
          onClick={() => {
            setToggleSearch(!toggleSearch);
          }}
        >
          <img src={logoitinerary} alt="logo" />
        </button>
      </div>

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
                onClick={() => antiConflictMenu(true)}
              >
                <img
                  src="../src/assets/images/TRIANGLE.png"
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
          <Mapclick />
          {apiResult.map((marker) => (
            <MarkerDefault
              positionStation={marker.position}
              marker={marker}
              setToggleCard={() => setToggleCard((status) => !status)}
              toggleCard={toggleCard}
              setUniqueMarker={setUniqueMarker}
            />
          ))}
          {toggleCard ? (
            <CardStationDrop
              uniqueMarker={uniqueMarker}
              apiResult={apiResult}
            />
          ) : null}
        </MapContainer>
      ) : (
        "chargement"
      )}
    </div>
  );
}
