import { useState } from "react";
import "../assets/css/itinerarysearch.css";

export default function Recherche({ apiResult }) {
  const [result, setResult] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const [inputValue2, setInputValue2] = useState("");
  function searchStation() {
    const array = [];
    for (let i = 0; i < apiResult.length; i += 1) {
      if (inputValue === " " || inputValue2 === " ") {
        setResult([]);
      }
      if (
        apiResult[i].name.toLowerCase().includes(inputValue) ||
        apiResult[i].name.toLowerCase().includes(inputValue2)
      ) {
        array.push(apiResult[i]);
        setResult([...array]);

        if (array.length > 4) {
          return array;
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
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <input
        id="searchbar"
        onKeyUp={searchStation}
        type="text"
        name="search"
        value={inputValue2}
        onChange={(e) => setInputValue2(e.target.value)}
      />
      <ul className="list">
        {inputValue === ""
          ? null
          : result.map((item) => {
              const nameStation = item.name.toLowerCase().substr(7).split("");
              for (let i = 0; i < nameStation.length; i += 1) {
                if (i === 0 || nameStation[i - 1] === " ") {
                  nameStation[i] = nameStation[i].toLocaleUpperCase();
                }
              }
              const station = nameStation.join("");
              return (
                <button className="item-list" type="button">
                  <hr className="hr-item" />
                  {station}
                </button>
              );
            })}
      </ul>
    </div>
  );
}
