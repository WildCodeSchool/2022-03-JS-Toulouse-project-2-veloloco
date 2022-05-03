import { DivIcon } from "leaflet";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/itinerarysearch.css";

export default function Recherche({ apiResult: apiStations }) {
  const [filteredStationsOrigin, setFilteredStationsOrigin] = useState([]);
  const [filteredStationsDestination, setFilteredStationsDestination] =
    useState([]);
  const [inputOrigin, setInputOrigin] = useState("");
  const [inputDestination, setInputDestination] = useState("");
  const [displayChange, setDisplayChange] = useState(true);
  const [userFinishResult, setUserFinishResult] = useState(false);
  const [idStations, setIdStations] = useState([]);
  const [idStationOrigin, setIdStationOrigin] = useState();
  const [idStationDestination, setIdStationDestination] = useState();
  useEffect(() => {
    setIdStations([idStationOrigin, idStationDestination]);
  }, [idStationDestination, idStationOrigin]);

  function searchStationOrigin() {
    const stationsOrigin = [];
    for (let i = 0; i < apiStations.length; i += 1) {
      if (inputOrigin === " ") {
        setFilteredStationsOrigin([]);
      }
      if (apiStations[i].name.toLowerCase().includes(inputOrigin)) {
        stationsOrigin.push(apiStations[i]);

        if (stationsOrigin.length > 4) {
          break;
        }
      }
    }
    setFilteredStationsOrigin([...stationsOrigin]);
  }

  function searchStationDestination() {
    const stations = [];
    for (let i = 0; i < apiStations.length; i += 1) {
      if (inputDestination === " ") {
        setFilteredStationsDestination([]);
      }
      if (apiStations[i].name.toLowerCase().includes(inputDestination)) {
        stations.push(apiStations[i]);

        if (stations.length > 4) {
          break;
        }
      }
    }
    setFilteredStationsDestination([...stations]);
  }
  function saveValueOrigin(stationCapitalized, numberStationOrigin) {
    setDisplayChange(!displayChange);
    setInputOrigin(stationCapitalized);
    setUserFinishResult(!userFinishResult);
    setIdStationOrigin(numberStationOrigin);
  }
  function saveValueDestination(stationCapitalized, numberStationDestination) {
    setDisplayChange(!displayChange);
    setInputDestination(stationCapitalized);
    setIdStationDestination(numberStationDestination);
  }

  return (
    <div className="itinerarysearch">
      <input
        id="searchbar"
        onKeyUp={searchStationOrigin}
        type="text"
        name="search"
        value={inputOrigin}
        onChange={(e) => {
          setInputOrigin(e.target.value);
          setDisplayChange(!displayChange);
          setUserFinishResult(!userFinishResult);
        }}
        autoComplete="off"
        placeholder="Depart"
      />
      <input
        id="searchbar"
        onKeyUp={searchStationDestination}
        type="text"
        name="search"
        value={inputDestination}
        onChange={(e) => {
          setInputDestination(e.target.value);
          setDisplayChange(!displayChange);
        }}
        autoComplete="off"
        placeholder="Arrivee"
      />
      <div className="list">
        {userFinishResult === true
          ? null
          : filteredStationsOrigin.map((station) => {
              const nameStationOrigin = station.name
                .toLowerCase()
                .substr(7)
                .split("");
              for (let i = 0; i < nameStationOrigin.length; i += 1) {
                if (i === 0 || nameStationOrigin[i - 1] === " ") {
                  nameStationOrigin[i] =
                    nameStationOrigin[i].toLocaleUpperCase();
                }
              }
              const stationCapitalized = nameStationOrigin.join("");
              const numberStationOrigin = station.number;

              return (
                <button
                  className={displayChange ? "item-list" : "item-list-no"}
                  type="button"
                  onClick={() =>
                    saveValueOrigin(stationCapitalized, numberStationOrigin)
                  }
                >
                  {stationCapitalized}
                </button>
              );
            })}
      </div>

      <div className="list">
        {inputDestination === ""
          ? null
          : filteredStationsDestination.map((station) => {
              const nameStationDestination = station.name
                .toLowerCase()
                .substr(7)
                .split("");
              for (let i = 0; i < nameStationDestination.length; i += 1) {
                if (i === 0 || nameStationDestination[i - 1] === " ") {
                  nameStationDestination[i] =
                    nameStationDestination[i].toLocaleUpperCase();
                }
              }
              const stationCapitalized = nameStationDestination.join("");
              const numberStationDestination = station.number;

              return (
                <button
                  className={displayChange ? "item-list" : "item-list-no"}
                  type="button"
                  onClick={() =>
                    saveValueDestination(
                      stationCapitalized,
                      numberStationDestination
                    )
                  }
                >
                  {stationCapitalized}
                </button>
              );
            })}
      </div>
      <Link to={`/itinerary/${idStationDestination}/${idStationOrigin}`}>
        <button className="btn-route" type="button">
          go
        </button>
      </Link>
    </div>
  );
}
