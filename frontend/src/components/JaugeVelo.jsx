import React from "react";

export default function JaugeVelo({ favouriteCard }) {
  const jaugeVeloStyle = {
    display: "flex",
    width: "70%",
    backgroundColor: "#7b0828",
    borderRadius: "15px",
  };

  let availableBikes =
    (favouriteCard[8].available_bikes / favouriteCard[8].bike_stands) * 100;
  availableBikes += "%";
  const myavailablebikesstyle = {
    width: availableBikes,
    backgroundColor: "#32936f",
    borderRadius: "15px",
    color: "black",
    fontWeight: "bold",
  };

  let availableBikeStands =
    (favouriteCard[8].available_bike_stands / favouriteCard[8].bike_stands) *
    100;
  availableBikeStands += "%";
  const myavailablebikesstandsstyle = {
    width: availableBikeStands,
    borderRadius: "15px",
    color: "white",
  };

  let deadBikes =
    ((favouriteCard[8].bike_stands -
      favouriteCard[8].available_bikes -
      favouriteCard[8].available_bike_stands) /
      favouriteCard[8].bike_stands) *
    100;
  deadBikes += "%";

  const deadBikesNumber =
    favouriteCard[8].bike_stands -
    favouriteCard[8].available_bikes -
    favouriteCard[8].available_bike_stands;

  const myDeadBikesStyle = {
    width: deadBikes,
    backgroundColor: "grey",
    color: "white",
    borderRadius: "15px",
  };

  return (
    <div style={jaugeVeloStyle}>
      <div id="available-bikes" style={myavailablebikesstyle}>
        {favouriteCard[8].available_bikes}
      </div>
      <div id="available-bike-stands" style={myavailablebikesstandsstyle}>
        {favouriteCard[8].available_bike_stands}
      </div>
      {deadBikesNumber !== 0 ? (
        <div style={myDeadBikesStyle}>{deadBikesNumber}</div>
      ) : (
        <div />
      )}
    </div>
  );
}
