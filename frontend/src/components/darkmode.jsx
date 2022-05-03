import React from "react";
import L from "leaflet";
import { LayersControl, useMapEvent } from "react-leaflet";

export default function DarkMode({ setDarkMode, darkmode, mapState }) {
  return (
    <div className="theme-mode">
      <div className="dark">
        <label htmlFor="dark" className="switch">
          <input
            id="dark"
            type="checkbox"
            onChange={() => setDarkMode(!darkmode)}
          />
          <span className="slider round"> </span>
        </label>

        <h4 className="title-darkmode">Dark-Mode</h4>
      </div>
      <div className="rainbow">
        <label htmlFor="rainbow" className="switch">
          <input id="rainbow" type="checkbox" />
          <span className="slider round"> </span>
        </label>
        <h4 className="title-darkmode">Rainbow-Mode</h4>
      </div>
    </div>
  );
}
