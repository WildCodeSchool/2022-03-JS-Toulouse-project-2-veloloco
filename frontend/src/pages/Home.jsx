import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Map from "./Map";
import Itinerary from "./Itinerary";
import AboutUs from "./AboutUs";

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
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}
