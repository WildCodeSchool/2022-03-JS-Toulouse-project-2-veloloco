import React from "react";

export default function JaugeVelo({ proximityStation, iteration }) {
  const jaugeVeloStyle = {
    display: "flex",
    width: "90%",
    height: "3em",
    backgroundColor: "#7b0828",
    borderRadius: "15px",
  };

  let availableBikes =
    (proximityStation[iteration].available_bikes /
      proximityStation[iteration].bike_stands) *
    100;
  availableBikes += "%";
  const myavailablebikesstyle = {
    width: availableBikes,
    backgroundColor: "#32936f",
    borderRadius: "15px",
    color: "black",
    fontWeight: "bold",
  };

  let availableBikeStands =
    (proximityStation[iteration].available_bike_stands /
      proximityStation[iteration].bike_stands) *
    100;
  availableBikeStands += "%";
  const myavailablebikesstandsstyle = {
    width: availableBikeStands,
    borderRadius: "15px",
    color: "white",
  };

  let deadBikes =
    ((proximityStation[iteration].bike_stands -
      proximityStation[iteration].available_bikes -
      proximityStation[iteration].available_bike_stands) /
      proximityStation[iteration].bike_stands) *
    100;
  deadBikes += "%";

  const deadBikesNumber =
    proximityStation[iteration].bike_stands -
    proximityStation[iteration].available_bikes -
    proximityStation[iteration].available_bike_stands;

  const myDeadBikesStyle = {
    width: deadBikes,
    backgroundColor: "grey",
    color: "white",
    borderRadius: "15px",
  };

  return (
    <div style={jaugeVeloStyle}>
      {proximityStation[iteration].available_bikes !== 0 ? (
        <div id="available-bikes" style={myavailablebikesstyle}>
          {proximityStation[iteration].available_bikes}
        </div>
      ) : (
        <div />
      )}

      {proximityStation[iteration].available_bike_stands !== 0 ? (
        <div id="available-bike-stands" style={myavailablebikesstandsstyle}>
          {proximityStation[iteration].available_bike_stands}
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
