import { useState } from "react";

import "../assets/css/recherche.css";

export default function Recherche({ apiResult, mapState }) {
  const [result, setResult] = useState([]);

  const [inputValue, setInputValue] = useState("");
  function searchStation() {
    let input = document.getElementById("searchbar").value;
    input = input.toLowerCase();
    const array = [];
    for (let i = 0; i < apiResult.length; i += 1) {
      if (inputValue === " ") {
        setResult([]);
      }
      if (apiResult[i].name.toLowerCase().includes(input)) {
        array.push(apiResult[i]);
        setResult([...array]);

        if (array.length > 4) {
          return array;
        }
      }
    }
    return null;
  }
  function flyPosition(item) {
    mapState.map.flyTo(item.position);
  }

  return (
    <div className="search">
      <input
        id="searchbar"
        onKeyUp={searchStation}
        type="text"
        name="search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div className="list">
        {inputValue === ""
          ? null
          : result.map((item) => {
              return (
                <button
                  className="item-list"
                  type="button"
                  onClick={() => flyPosition(item)}
                >
                  <hr className="hr-item" />
                  {item.name.substr(7).toLowerCase()}
                </button>
              );
            })}
      </div>
    </div>
  );
}
