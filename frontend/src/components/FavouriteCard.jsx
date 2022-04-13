import React, { useEffect, useState } from "react";
import axios from "axios";
import DisplayFavouriteCard from "./DisplayFavouriteCard";

export default function FavouriteCard() {
  const [cardInfos, setcardInfos] = useState(null);

  useEffect(
    () => {
      axios
        .get(
          "https:/api.jcdecaux.com/vls/v1/stations?contract=toulouse&apiKey=ac948d6ebb42f6edfe3322e2089d50095869b8e3"
        )
        .then((response) => setcardInfos(response.data));
    },
    [],
    console.log(cardInfos)
  );

  return (
    <div>
      {cardInfos !== null ? (
        <DisplayFavouriteCard favouriteCard={cardInfos} />
      ) : (
        console.log("nique ta maman")
      )}
    </div>
  );
}
