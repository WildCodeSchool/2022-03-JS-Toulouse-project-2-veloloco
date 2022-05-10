import { MapContainer, ZoomControl, useMapEvents } from "react-leaflet";
import "../assets/css/Map.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import LayerChange from "../components/LayerChange";
import MarkerDefault from "../components/MarkerDefault";
import logoitinerary from "../assets/images/itinerary.png";
import Recherche from "../components/Recherche";
import Geo from "../components/Geo";
import SlideForCard from "../components/SlideForCard";
import ItinerarySearch from "../components/ItinerarySearch";
import CardStationDrop from "../components/CardStationDrop";
import Navigation from "../components/Navigation";
import Loader from "../components/Loader";

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
    console.error("error #%d", err);
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
  const [idStationOrigin, setIdStationOrigin] = useState();
  const [idStationDestination, setIdStationDestination] = useState();
  const [darkmode, setDarkMode] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const alreadyConnected = localStorage.getItem("alreadyConnected") || false;
  const [readyOrNot, setReadyOrNot] = useState(alreadyConnected);
  const [uniqueMarker, setUniqueMarker] = useState();
  const [valueFirstName, setValueFirstName] = useState("");
  const [valueLastName, setValueLastName] = useState("");
  function flyPositionUser() {
    mapState.map.flyTo(
      [location.coordinates.lat, location.coordinates.lng],
      17
    );
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
      {readyOrNot ? null : (
        <Loader
          readyOrNot={readyOrNot}
          setReadyOrNot={setReadyOrNot}
          valueFirstName={valueFirstName}
          valueLastName={valueLastName}
          setValueLastName={setValueLastName}
          setValueFirstName={setValueFirstName}
        />
      )}
      {location != null ? (
        <>
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
          {mapState ? (
            <Navigation
              setShowLinks={setShowLinks}
              showLinks={showLinks}
              antiConflictMenu={() => antiConflictMenu()}
              setDarkMode={setDarkMode}
              darkmode={darkmode}
              mapState={mapState}
            />
          ) : null}
          <div className="containersearch">
            {toggleSearch ? (
              <Recherche apiResult={apiResult} mapState={mapState} />
            ) : (
              <ItinerarySearch
                apiResult={apiResult}
                mapState={mapState}
                setIdStationOrigin={setIdStationOrigin}
                setIdStationDestination={setIdStationDestination}
              />
            )}

            <div
              className={
                toggleSearch ? "btn-container-true" : "btn-container-false"
              }
            >
              {toggleSearch ? null : (
                <Link
                  to={`/itinerary/${idStationDestination}/${idStationOrigin}`}
                >
                  <button
                    data-aos="fade-left"
                    data-aos-offset="500"
                    data-aos-duration="500"
                    className="btn-route"
                    type="button"
                  >
                    <img
                      className="img-btn-route"
                      src="/src/assets/images/Vector.png"
                      alt="logo"
                    />
                  </button>
                </Link>
              )}
              <button
                className="btn-change"
                data-aos="fade-left"
                data-aos-offset="500"
                data-aos-duration="1000"
                type="button"
                onClick={() => {
                  setToggleSearch(!toggleSearch);
                }}
              >
                <img src={logoitinerary} alt="logo" />
              </button>
            </div>
          </div>
          <MapContainer
            center={[location.coordinates.lat, location.coordinates.lng]}
            zoom={20}
            whenCreated={(map) => setMapState({ map })}
            zoomControl={false}
          >
            <ZoomControl position="bottomleft" />
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
              <SlideForCard
                slideState={slideState}
                setSlideState={setSlideState}
                userPosition={location}
                setMapState={setMapState}
                mapState={mapState}
                setToggleCard={setToggleCard}
                setUniqueMarker={setUniqueMarker}
              />
            </div>
            <LayerChange darkmode={darkmode} />

            <Geo
              localisationlat={location.coordinates.lat}
              localisationlng={location.coordinates.lng}
            />
            <Mapclick />
            {apiResult.map((marker) => (
              <MarkerDefault
                key={marker.number}
                positionStation={marker.position}
                marker={marker}
                setToggleCard={() => setToggleCard((status) => !status)}
                toggleCard={toggleCard}
                setUniqueMarker={setUniqueMarker}
              />
            ))}
            {/* TODO quand une carte du menu defilant est cliqué, ouvrir sa carte station drop */}
            {toggleCard ? (
              <CardStationDrop
                uniqueMarker={uniqueMarker}
                apiResult={apiResult}
              />
            ) : null}
          </MapContainer>
        </>
      ) : null}
    </div>
  );
}
