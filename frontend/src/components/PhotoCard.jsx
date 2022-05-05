import React from "react";

function PhotoCard({ photoSource }) {
  return (
    <div>
      <img className="image-city" src={photoSource} alt="de la ville" />
    </div>
  );
}

export default PhotoCard;
