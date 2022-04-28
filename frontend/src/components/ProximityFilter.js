function deg2rad(deg) {
  return deg * (Math.PI / 180);
}
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1); // deg2rad below
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return d;
}

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
    closer[0].distance = oldDistance * 1000;
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
