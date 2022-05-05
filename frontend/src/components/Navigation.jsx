import LogoVelo from "../assets/images/logo.png";
import LogoBurger from "../assets/images/Menu hamburger.png";
import LogoTopsecret from "../assets/images/logo-topsecret-about.png";
import LogoVeloToulouse from "../assets/images/logo velo-toulouse.png";
import LogoFavoris from "../assets/images/logo-favoris.png";
import LogoAboutUs from "../assets/images/logo-topsecret-about2.png";
import Cross from "../assets/images/cross.png";
import Facebook from "../assets/images/logo-facebook.png";
import Twitter from "../assets/images/logo-twitter.png";
import Instagram from "../assets/images/logo-insta.png";
import "../assets/css/Navigation.css";
import "../assets/css/darkMode.css";
import "../assets/css/contact.css";
import DarkMode from "./darkmode";
import { Link } from "react-router-dom";

export default function Navigation(props) {
  const {
    setShowLinks,
    showLinks,
    antiConflictMenu,
    setDarkMode,
    darkmode,
    mapState,
  } = props;
  return (
    <div className="navbar-container">
      <button
        type="button"
        className={showLinks ? "burger-logo display-none" : "burger-logo"}
        onClick={() => antiConflictMenu(false)}
      >
        <img className="logo-burger" src={LogoBurger} alt="Logo Burger" />
      </button>
      <div className={showLinks ? "navbar show-nav" : "navbar hide-nav"}>
        <div className="logo-title">
          <img className="logo-velo" src={LogoVelo} alt="Logo Vélo" />
          <h2 className="title-burger">VELO LOCO</h2>
          <button
            type="button"
            className="cross-logo"
            onClick={() => setShowLinks(!showLinks)}
          >
            <img className="cross-close" src={Cross} alt="Cross Close" />
          </button>
        </div>
        <div className="navbar-logo">
          <ul className="navbar-links">
            <li className="navbar-item">
              <img
                className="image-item"
                src={LogoTopsecret}
                alt="Logo Top-secret"
              />
              <a href="/" className="navbar-link">
                TOP-SECRET
              </a>
            </li>
            <li className="navbar-item">
              <img
                className="image-item"
                src={LogoVeloToulouse}
                alt="Logo Vélo Toulouse"
              />
              <a href="/" className="navbar-link">
                Vélo-Toulouse
              </a>
            </li>
            <li className="navbar-item">
              <img
                className="image-item"
                src={LogoFavoris}
                alt="Logo Favoris"
              />
              <a href="/" className="navbar-link">
                Favoris
              </a>
            </li>
            <li className="navbar-item">
              <img
                className="image-item"
                src={LogoAboutUs}
                alt="Logo About Us"
              />
              <Link className="navbar-link" to="/aboutus">
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <hr className="hr-burgertop" />
        <DarkMode
          setDarkMode={setDarkMode}
          darkmode={darkmode}
          mapState={mapState}
        />
        <hr className="hr-burgerbottom" />
        <div className="contact">
          <h5>Contact us (please do not)</h5>
          <h6>Licence</h6>
          <div className="logo-social">
            <img src={Facebook} alt="logo facebook" />
            <img src={Twitter} alt="logo twitter" />
            <img src={Instagram} alt="logo instagram" />
          </div>
        </div>
      </div>
    </div>
  );
}
