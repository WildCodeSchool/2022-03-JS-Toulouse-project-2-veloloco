import "./assets/css/App.css";
import AOS from "aos";
import Home from "./pages/Home";
import "aos/dist/aos.css";

AOS.init();
function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
