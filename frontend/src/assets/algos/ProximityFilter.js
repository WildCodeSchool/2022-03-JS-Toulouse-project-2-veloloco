import getDistanceFromLatLonInKm from "./getDistanceFromLatLonInKm";

const ProximityFilter = (userPosition, stationsList) => {
  const userPos = {
    x: userPosition.coordinates.lat,
    y: userPosition.coordinates.lng,
  };
  const closerFounder = (coords, userCoord) => {
    let distance = 0;
    let oldDistance = 1000;
    let closer;

    for (let i = 0; i < coords.length; i += 1) {
      distance = getDistanceFromLatLonInKm(
        userCoord.x,
        userCoord.y,
        coords[i].position.lat,
        coords[i].position.lng
      );
      if (distance < oldDistance) {
        closer = [coords[i], i];
        oldDistance = distance;
      }
    }
    closer[0].distance = oldDistance;
    return closer;
  };

  const list = stationsList;

  const closestList = [];

  for (let k = 0; k < 5; k += 1) {
    closestList.push(closerFounder(list, userPos)[0]);
    list.splice(closerFounder(list, userPos)[1], 1);
  }
  return closestList;
};

export default ProximityFilter;
