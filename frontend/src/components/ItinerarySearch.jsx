import { useState } from "react";
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
  function saveValueOrigin(stationCapitalized) {
    setDisplayChange(!displayChange);
    setInputOrigin(stationCapitalized);
    setUserFinishResult(!userFinishResult);
  }
  function saveValueDestination(stationCapitalized) {
    setDisplayChange(!displayChange);
    setInputDestination(stationCapitalized);
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
      <ul className="listorigin">
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
              return (
                <button
                  className={displayChange ? "item-list" : "item-list-no"}
                  type="button"
                  onClick={() => saveValueOrigin(stationCapitalized)}
                >
                  <hr className="hr-item" />
                  {stationCapitalized}
                </button>
              );
            })}
      </ul>
      <ul className="listdestination">
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
              return (
                <button
                  className={
                    displayChange
                      ? "item-list-destination"
                      : "item-list-no-destination"
                  }
                  type="button"
                  onClick={() => saveValueDestination(stationCapitalized)}
                >
                  <hr className="hr-item" />
                  {stationCapitalized}
                </button>
              );
            })}
      </ul>
      <Link to="/itinerary/">
        <button className="btn-route" type="button">
          go
        </button>
      </Link>
    </div>
  );
}
