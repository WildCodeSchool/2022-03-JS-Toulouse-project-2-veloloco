import { useState } from "react";
import icon from "../assets/images/icon.png";
import "../assets/css/recherche.css";

export default function Recherche({ apiResult: apiStations, mapState }) {
  const [filteredStations, setFilteredStations] = useState([]);

  const [valueOrigin, setValueOrigin] = useState("");
  function searchStation() {
    let input = document.getElementById("searchbar").value;
    input = input.toLowerCase();
    const stations = [];
    for (let i = 0; i < apiStations.length; i += 1) {
      if (valueOrigin === " ") {
        setFilteredStations([]);
      }
      if (apiStations[i].name.toLowerCase().includes(input)) {
        stations.push(apiStations[i]);

        if (stations.length > 4) {
          break;
        }
      }
    }
    setFilteredStations([...stations]);
  }
  function flyPosition(item) {
    mapState.map.flyTo(item.position, 18);
  }

  return (
    <div className="search">
      <input
        id="searchbar"
        onKeyUp={searchStation}
        type="text"
        autoComplete="off"
        name="search"
        value={valueOrigin}
        onChange={(e) => setValueOrigin(e.target.value)}
      />
      <img className="iconsearch" alt="icon" src={icon} />

      <ul className="list">
        {valueOrigin === ""
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
                <button
                  className="item-list"
                  type="button"
                  onClick={() => flyPosition(station)}
                >
                  <hr className="hr-item" />
                  {stationCapitalized}
                </button>
              );
            })}
      </ul>
    </div>
  );
}
