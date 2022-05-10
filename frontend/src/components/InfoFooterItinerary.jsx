export default function InfoFooterItinerary(itineraryInfo) {
  // eslint-disable-next-line react/destructuring-assignment
  const info = itineraryInfo.itineraryInfo.routes[0].summary;

  const distance = Math.floor(info.totalDistance / 10) / 100;
  const duration = distance / 0.25;
  const coDeux = Math.floor(distance * 120);
  let price = 0;
  if (duration > 30 && duration < 60) {
    price = 0.5;
  } else if (duration >= 60) {
    price = 0.5 + Math.floor(duration / 60) - 1;
  }
  // const distance = itineraryInfo.routes[0].summary.totalDistance;
  return (
    <div className="info-footer">
      <li className="info-box"> {distance} Km</li>
      <div className="vertical-separator"> </div>
      <li className="info-box"> - {coDeux} g de CO ²</li>
      <div className="vertical-separator"> </div>
      <li className="info-box"> {duration} mn</li>
      <div className="vertical-separator"> </div>
      <li className="info-box"> {price} €</li>
    </div>
  );
}
