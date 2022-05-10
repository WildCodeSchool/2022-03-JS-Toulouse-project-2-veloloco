import React from "react";

export default function DarkMode({ darkmode, setDarkMode }) {
  function toggleDarkmode() {
    setDarkMode(darkmode === "0" ? "1" : "0");
    localStorage.setItem("darkmode", darkmode === "0" ? "1" : "0");
  }
  function refreshPage() {
    window.location.reload();
  }
  return (
    <div className="theme-mode">
      <div className="dark">
        <label htmlFor="dark" className="switch">
          <input
            id="dark"
            type="checkbox"
            onChange={toggleDarkmode}
            onClick={refreshPage}
            defaultChecked={darkmode === "1"}
          />
          <span className="slider round"> </span>
        </label>

        <h4 className="title-darkmode">Dark-Mode</h4>
      </div>
    </div>
  );
}
