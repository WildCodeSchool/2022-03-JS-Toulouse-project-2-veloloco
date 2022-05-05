import React from "react";
import DisplayFavouriteStation from "./DisplayFavouriteStation";

export default function FavouriteStation({
  mapState,
  setSlideState,
  userPos,
  favouriteStation,
}) {
  return (
    <div>
      {favouriteStation ? (
        <DisplayFavouriteStation
          setSlideState={setSlideState}
          favouriteStation={favouriteStation}
          mapState={mapState}
          userPos={userPos}
        />
      ) : (
        "Chargement..."
      )}
    </div>
  );
}
