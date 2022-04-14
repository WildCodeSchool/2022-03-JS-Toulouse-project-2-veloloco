import React from "react";

export default function DarkMode() {
  return (
    <div className="ThemeMode">
      <div className="dark">
        <label htmlFor="dark" className="switch">
          <input id="dark" type="checkbox" />
          <span className="slider round"> </span>
        </label>

        <h4>Dark-Mode</h4>
      </div>
      <div className="rainbow">
        <label htmlFor="rainbow" className="switch">
          <input id="rainbow" type="checkbox" />
          <span className="slider round"> </span>
        </label>
        <h4>Rainbow-Mode</h4>
      </div>
    </div>
  );
}
