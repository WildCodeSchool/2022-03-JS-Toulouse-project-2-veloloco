import { useState } from "react";
import "../assets/css/itinerarysearch.css";

export default function Recherche({ apiResult }) {
  const [filteredStations, setFilteredStations] = useState([]);
  const [inputOrigin, setInputOrigin] = useState("");
  const [inputDestination, setInputDestination] = useState("");

  function searchStation() {
    const stations = [];
    for (let i = 0; i < filteredStations.length; i += 1) {
      if (inputOrigin === " " || inputDestination === " ") {
        setFilteredStations([]);
      }
      if (
        apiResult[i].name.toLowerCase().includes(inputOrigin) ||
        apiResult[i].name.toLowerCase().includes(inputDestination)
      ) {
        stations.push(filteredStations[i]);
        setFilteredStations([...stations]);

        if (stations.length > 4) {
          return stations;
        }
      }
    }
    return null;
  }

  return (
    <div className="itinerarysearch">
      <input
        id="searchbar"
        onKeyUp={searchStation}
        type="text"
        name="search"
        value={inputOrigin}
        onChange={(e) => setInputOrigin(e.target.value)}
        autoComplete="off"
        placeholder="Depart"
      />
      <input
        id="searchbar"
        onKeyUp={searchStation}
        type="text"
        name="search"
        value={inputDestination}
        onChange={(e) => setInputDestination(e.target.value)}
        autoComplete="off"
        placeholder="Arrivee"
      />
      <ul className="list">
        {inputOrigin === ""
          ? null
          : filteredStations.map((station) => {
              const nameStation = station.name
                .toLowerCase()
                .substr(7)
                .split("");
              for (let i = 0; i < nameStation.length; i += 1) {
                if (i === 0 || nameStation[i - 1] === " ") {
                  nameStation[i] = nameStation[i].toLocaleUpperCase();
                }
              }
              const stationCapitalized = nameStation.join("");
              return (
                <button className="item-list" type="button">
                  <hr className="hr-item" />
                  {stationCapitalized}
                </button>
              );
            })}
      </ul>
    </div>
  );
}
