import Nav from "./components/BurgerMenu";
import "./App.css";
import DarkMode from "./components/thememode/darkmode";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Nav />
      <DarkMode />
    </div>
  );
}

export default App;
