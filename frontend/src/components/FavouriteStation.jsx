import React from "react";
import DisplayFavouriteStation from "./DisplayFavouriteStation";

export default function FavouriteStation({
  mapState,
  setSlideState,
  userPos,
  favouriteStation,
  setUniqueMarker,
  setToggleCard,
}) {
  return (
    <div>
      {favouriteStation ? (
        <DisplayFavouriteStation
          setSlideState={setSlideState}
          favouriteStation={favouriteStation}
          mapState={mapState}
          userPos={userPos}
          setUniqueMarker={setUniqueMarker}
          setToggleCard={setToggleCard}
        />
      ) : (
        "Chargement..."
      )}
    </div>
  );
}
