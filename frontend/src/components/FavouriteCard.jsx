import React from "react";
import { useState } from "react/cjs/react.production.min";
import axios from "axios";
import DisplayFavouriteCard from "./DisplayFavouriteCard";

export default function FavouriteCard() {
  const [cardInfos, setcardInfos] = useState(null);

  const getCardInfos = () => {
    axios
      .get(
        "https:/api.jcdecaux.com/vls/v1/stations?contract=toulouse&apiKey=ac948d6ebb42f6edfe3322e2089d50095869b8e3/"
      )
      .then((response) => response.data)
      .then((response) => setcardInfos(response.data[2]));
  };

  return (
    <div>
      <DisplayFavouriteCard favouriteCard={cardInfos} />
      <button type="button" onClick={getCardInfos}>
        Change Infos
      </button>
    </div>
  );
}
// const [number, setNumber] = useState(null);
// const [name, setName] = useState(null);
// const [adress, setAdress] = useState(null);
// const [availableBikes, setavailableBikes] = useState(null);
// const [availableBikesStands, setavailableBikesStands] = useState(null);

// const getNumber = () => {
//   axios
//     .get(
//       "https:/api.jcdecaux.com/vls/v1/stations?contract=toulouse&apiKey=ac948d6ebb42f6edfe3322e2089d50095869b8e3/"
//     )
//     .then((response) => response.data)
//     .then((data) => {
//       setNumber(data[0]);
//     });
// };

// // const getName = () => {
//   axios
//     .get(
//       "https:/api.jcdecaux.com/vls/v1/stations?contract=toulouse&apiKey=ac948d6ebb42f6edfe3322e2089d50095869b8e3/"
//     )
//     .then((response) => response.data)
//     .then((data) => {
//       setName(data[0]);
//     });
// };

// const getAdress = () => {
//   axios
//     .get(
//       "https:/api.jcdecaux.com/vls/v1/stations?contract=toulouse&apiKey=ac948d6ebb42f6edfe3322e2089d50095869b8e3/"
//     )
//     .then((response) => response.data)
//     .then((data) => {
//       setAdress(data[0]);
//     });
// };

// const getAvailableBikes = () => {
//   axios
//     .get(
//       "https:/api.jcdecaux.com/vls/v1/stations?contract=toulouse&apiKey=ac948d6ebb42f6edfe3322e2089d50095869b8e3/"
//     )
//     .then((response) => response.data)
//     .then((data) => {
//       setavailableBikes(data[0]);
//     });
// };

// const getAvailableBikesStands = () => {
//   axios
//     .get(
//       "https:/api.jcdecaux.com/vls/v1/stations?contract=toulouse&apiKey=ac948d6ebb42f6edfe3322e2089d50095869b8e3/"
//     )
//     .then((response) => response.data)
//     .then((data) => {
//       setavailableBikesStands(data[0]);
//     });
// };
