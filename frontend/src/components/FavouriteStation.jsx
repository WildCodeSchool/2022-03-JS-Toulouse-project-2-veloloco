import React from "react";
import DisplayFavouriteStation from "./DisplayFavouriteStation";

export default function FavouriteStation({
  iteration,
  mapState,
  setSlideState,
  userPos,
  isFavourite,
}) {
  return (
    <div>
      {isFavourite !== null ? (
        <DisplayFavouriteStation
          setSlideState={setSlideState}
          favouriteStation={isFavourite}
          iteration={iteration}
          mapState={mapState}
          userPos={userPos}
        />
      ) : (
        "Chargement..."
      )}
    </div>
  );
}
