import React from "react";

export default function DarkMode({ setDarkMode, darkmode }) {
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
    </div>
  );
}
