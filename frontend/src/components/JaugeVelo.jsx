import React from "react";

export default function JaugeVelo({ station, height, fontsize }) {
  const jaugeVeloStyle = {
    display: "flex",
    width: "80%",
    backgroundColor: "#7b0828",
    borderRadius: "15px",
    height: height ?? "1.3rem",
  };
  let availableBikes = (station.available_bikes / station.bike_stands) * 100;
  availableBikes += "%";
  const myavailablebikesstyle = {
    width: availableBikes,
    backgroundColor: "#32936F",
    borderRadius: "15px",
    color: "black",
    fontWeight: "bold",
    fontSize: fontsize ?? "1rem",
  };
  let availableBikeStands =
    (station.available_bike_stands / station.bike_stands) * 100;
  availableBikeStands += "%";
  const myavailablebikesstandsstyle = {
    width: availableBikeStands,
    borderRadius: "15px",
    color: "white",
    fontSize: fontsize ?? "1rem",
  };
  let deadBikes =
    ((station.bike_stands -
      station.available_bikes -
      station.available_bike_stands) /
      station.bike_stands) *
    100;
  deadBikes += "%";
  const deadBikesNumber =
    station.bike_stands -
    station.available_bikes -
    station.available_bike_stands;
  const myDeadBikesStyle = {
    width: deadBikes,
    backgroundColor: "grey",
    color: "white",
    borderRadius: "15px",
    fontSize: fontsize ?? "1rem",
  };
  return (
    <div style={jaugeVeloStyle}>
      {station.available_bikes !== 0 ? (
        <div id="available-bikes" style={myavailablebikesstyle}>
          {station.available_bikes}
        </div>
      ) : (
        <div />
      )}
      {station.available_bike_stands !== 0 ? (
        <div id="available-bike-stands" style={myavailablebikesstandsstyle}>
          {station.available_bike_stands}
        </div>
      ) : (
        <div />
      )}
      {deadBikesNumber !== 0 ? (
        <div style={myDeadBikesStyle}>{deadBikesNumber}</div>
      ) : (
        <div />
      )}
    </div>
  );
}
