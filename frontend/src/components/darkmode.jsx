import React from "react";

export default function DarkMode({ darkmode, setDarkMode }) {
  function toggleDarkmode() {
    setDarkMode(darkmode === "0" ? "1" : "0");
    localStorage.setItem("darkmode", darkmode === "0" ? "1" : "0");
  }

  return (
    <div className="theme-mode">
      <div className="dark">
        <label htmlFor="dark" className="switch">
          <input
            id="dark"
            type="checkbox"
            onChange={toggleDarkmode}
            defaultChecked={darkmode === "1"}
          />
          <span className="slider round"> </span>
        </label>

        <h4 className="title-darkmode">Dark-Mode</h4>
      </div>
    </div>
  );
}
