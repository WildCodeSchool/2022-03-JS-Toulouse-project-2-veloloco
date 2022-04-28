import React from "react";

export default function JaugeVelo({ favouriteCard, iteration }) {
  const jaugeVeloStyle = {
    display: "flex",
    width: "90%",
    height: "1.5em",
    backgroundColor: "#7b0828",
    borderRadius: "15px",
  };

  let availableBikes =
    (favouriteCard[iteration].available_bikes /
      favouriteCard[iteration].bike_stands) *
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
    (favouriteCard[iteration].available_bike_stands /
      favouriteCard[iteration].bike_stands) *
    100;
  availableBikeStands += "%";
  const myavailablebikesstandsstyle = {
    width: availableBikeStands,
    borderRadius: "15px",
    color: "white",
  };

  let deadBikes =
    ((favouriteCard[iteration].bike_stands -
      favouriteCard[iteration].available_bikes -
      favouriteCard[iteration].available_bike_stands) /
      favouriteCard[iteration].bike_stands) *
    100;
  deadBikes += "%";

  const deadBikesNumber =
    favouriteCard[iteration].bike_stands -
    favouriteCard[iteration].available_bikes -
    favouriteCard[iteration].available_bike_stands;

  const myDeadBikesStyle = {
    width: deadBikes,
    backgroundColor: "grey",
    color: "white",
    borderRadius: "15px",
  };

  return (
    <div style={jaugeVeloStyle} className="health-bar">
      <div id="available-bikes" style={myavailablebikesstyle}>
        {favouriteCard[iteration].available_bikes}
      </div>
      <div id="available-bike-stands" style={myavailablebikesstandsstyle}>
        {favouriteCard[iteration].available_bike_stands}
      </div>
      {deadBikesNumber !== 0 ? (
        <div style={myDeadBikesStyle}>{deadBikesNumber}</div>
      ) : (
        <div />
      )}
    </div>
  );
}
