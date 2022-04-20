const ProximityFilter = (userPosition, stationsList) => {
  const userPos = {
    x: userPosition.coordinates.lat,
    y: userPosition.coordinates.lng,
  };

  const lessFarFounder = (coord, userCoord) => {
    let pith = 0;
    let oldPith = 1000;
    let lessFar;

    for (let i = 0; i < coord.length; i += 1) {
      const coordDiffX = userCoord.x - coord[i].position.lat;
      const coordDiffY = userCoord.y - coord[i].position.lng;
      pith = Math.sqrt(coordDiffX ** 2 + coordDiffY ** 2);
      if (pith < oldPith) {
        lessFar = [coord[i], i];
        oldPith = pith;
      }
    }
    return lessFar;
  };

  const list = stationsList;

  const lessFarList = [];

  for (let k = 0; k < 5; k += 1) {
    lessFarList.push(lessFarFounder(list, userPos)[0]);
    list.splice(lessFarFounder(list, userPos)[1], 1);
  }

  return lessFarList;
};

export default ProximityFilter;
