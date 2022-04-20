import { useState } from "react";

import "../assets/css/recherche.css";

export default function Recherche({ apiResult, mapState }) {
  const [result, setResult] = useState([]);

  function searchStation() {
    let input = document.getElementById("searchbar").value;
    input = input.toLowerCase();
    const array = [];
    for (let i = 0; i < apiResult.length; i++) {
      if (apiResult[i].name.toLowerCase().includes(input)) {
        array.push(apiResult[i]);
        setResult([...array]);
        if (array.length > 4) {
          return array;
        }
      }
    }
  }
  function flyPosition(item) {
    mapState.map.flyTo(item.position);
  }
  return (
    <div className="search">
      <input id="searchbar" onKeyUp={searchStation} type="text" name="search" />
      <ul id="list">
        {result.map((item) => {
          return (
            <button onClick={() => flyPosition(item)} type="button">
              {item.name.substr(7).toLowerCase()}
            </button>
          );
        })}
      </ul>
    </div>
  );
}
