import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Map from "./Map";
import Itinerary from "./Itinerary";

export default function Home() {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/itinerary/:destination/:origin"
            element={<Itinerary />}
          />
          <Route path="/" element={<Map />} />
        </Routes>
      </div>
    </Router>
  );
}
