import { useState } from "react";

import "../assets/css/recherche.css";

export default function Recherche({ apiResult: apiStations, mapState }) {
  const [filteredStations, setFilteredStations] = useState([]);
  const [displayChange, setDisplayChange] = useState(false);
  const [valueOrigin, setValueOrigin] = useState("");
  function searchStation() {
    const stations = [];
    for (let i = 0; i < apiStations.length; i += 1) {
      if (valueOrigin === " ") {
        setFilteredStations([]);
      }
      if (apiStations[i].name.toLowerCase().includes(valueOrigin)) {
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
    setDisplayChange(!displayChange);
    setValueOrigin("");
  }

  // TODO rajouter cette ligne de code pour cacher les bails quand le burger est ouvert
  // className={showLinks ? "TA_CLASSE display-none" : "TA_CLASSE"}
  return (
    <div className="searchbar-container">
      <div data-aos="fade-down" data-aos-duration="1000" className="search">
        <input
          id="searchbar"
          onKeyUp={searchStation}
          type="text"
          autoComplete="off"
          name="search"
          value={valueOrigin}
          onChange={(e) => {
            setValueOrigin(e.target.value);
            setDisplayChange(true);
          }}
        />
      </div>
      <div className="searchlist">
        <div className="list">
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
                    className={displayChange ? "item-list" : "item-list-no"}
                    data-aos={displayChange ? "fade-down" : null}
                    data-aos-offset="500"
                    data-aos-duration="500"
                    type="button"
                    key={station.number}
                    onClick={() => flyPosition(station)}
                  >
                    {stationCapitalized}
                  </button>
                );
              })}
        </div>
      </div>
    </div>
  );
}
