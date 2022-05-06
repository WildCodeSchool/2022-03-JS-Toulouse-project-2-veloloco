import { useState } from "react";

import "../assets/css/itinerarysearch.css";

export default function Recherche({
  apiResult: apiStations,
  setIdStationOrigin,
  setIdStationDestination,
}) {
  const [filteredStationsOrigin, setFilteredStationsOrigin] = useState([]);
  const [filteredStationsDestination, setFilteredStationsDestination] =
    useState([]);
  const [inputOrigin, setInputOrigin] = useState("");
  const [inputDestination, setInputDestination] = useState("");
  const [displayChange, setDisplayChange] = useState(false);
  const [displayChangeDestination, setDisplayChangeDestination] =
    useState(false);
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
  function saveValueOrigin(stationCapitalized, numberStationOrigin) {
    setDisplayChange(!displayChange);
    setInputOrigin(stationCapitalized);
    setUserFinishResult(!userFinishResult);
    setIdStationOrigin(numberStationOrigin);
  }
  function saveValueDestination(stationCapitalized, numberStationDestination) {
    setDisplayChangeDestination(!displayChangeDestination);
    setInputDestination(stationCapitalized);
    setIdStationDestination(numberStationDestination);
    setDisplayChange(true);
  }

  return (
    <div data-aos="fade-down" className="itinerarysearch">
      <input
        id="searchbar"
        onKeyUp={searchStationOrigin}
        type="text"
        name="search"
        value={inputOrigin}
        onChange={(e) => {
          setInputOrigin(e.target.value);
          setDisplayChange(true);
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
          setDisplayChangeDestination(!displayChangeDestination);
          setDisplayChange(false);
        }}
        autoComplete="off"
        placeholder="Arrivee"
      />
      <div className="origin-list">
        {inputOrigin === "" && displayChange === true
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
                  data-aos={displayChange ? "fade-down" : null}
                  key={station.number}
                  data-aos-duration="500"
                  onClick={() =>
                    saveValueOrigin(stationCapitalized, numberStationOrigin)
                  }
                >
                  {stationCapitalized}
                </button>
              );
            })}
      </div>

      <div className="destination-list">
        {inputDestination === "" && displayChange === false
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
                  data-aos={displayChange ? null : "fade-down"}
                  data-aos-duration="500"
                  key={station.number}
                  className={
                    displayChange === false
                      ? "item-list-destination"
                      : "item-list-no-destination"
                  }
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
    </div>
  );
}
