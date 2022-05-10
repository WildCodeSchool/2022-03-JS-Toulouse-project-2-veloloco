/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
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
import markerorange from "../assets/images/marker-orange.png";
import markergreen from "../assets/images/marker-green.png";
import markerblack from "../assets/images/marker-black.png";
import bike from "../assets/images/Bicycle-2-2-icon.png";
import heart from "../assets/images/download-icon-heart-131965017458786724_32.png";
import peopledarkmode from "../assets/images/pngwing.com.png";
import bikedarkmode from "../assets/images/bikeocinwhite.png";
import people from "../assets/images/33308.png";

export default function Navigation(props) {
  const {
    setShowLinks,
    showLinks,
    antiConflictMenu,
    setDarkMode,
    darkmode,
    mapState,
  } = props;

  const userConnected = JSON.parse(localStorage.getItem("user"));
  const statusDarkmode = localStorage.getItem("darkmode");

  return (
    <div className="navbar-container">
      <button
        type="button"
        className={showLinks ? "burger-logo display-none" : "burger-logo"}
        onClick={() => antiConflictMenu(false)}
      >
        <img className="logo-burger" src={LogoBurger} alt="Logo Burger" />
      </button>
      <div
        style={{
          backgroundColor: statusDarkmode === "1" ? "#383838" : "white",
        }}
        className={
          showLinks
            ? `navbar${statusDarkmode === "1" ? "dark" : "notdark"} show-nav`
            : `navbar${statusDarkmode === "1" ? "dark" : "notdark"} hide-nav`
        }
      >
        <div className="logo-title">
          <img className="logo-velo" src={LogoVelo} alt="Logo Vélo" />
          <h2
            className={
              statusDarkmode === "1" ? "title-burgerdark" : "title-burger"
            }
          >
            VELO LOCO
          </h2>
          <button
            type="button"
            className="cross-logo"
            onClick={() => setShowLinks(!showLinks)}
          >
            <img className="cross-close" src={Cross} alt="Cross Close" />
          </button>
        </div>
        <div className="welcomeUser">
          {userConnected ? (
            <h2>
              Bonjour{" "}
              {userConnected.firstName
                ? userConnected.firstName
                : "Mysterieux inconnu"}
              <span> {userConnected.firstName ? "👋" : "🧐"}</span>
            </h2>
          ) : null}
        </div>
        <div className="navbar-logo">
          <ul className="navbar-links">
            <li className="navbar-item">
              <img
                className="image-item"
                src={statusDarkmode === "1" ? bikedarkmode : bike}
                alt="Logo Vélo Toulouse"
              />
              <a
                href="http://www.velo.toulouse.fr/Les-stations/Trouver-une-station"
                className={
                  statusDarkmode === "1" ? "navbar-linkdark" : "navbar-link"
                }
              >
                Vélo-Toulouse
              </a>
            </li>
            <li className="navbar-item">
              <img
                className="image-item"
                src={statusDarkmode === "1" ? peopledarkmode : people}
                alt="Logo About Us"
              />
              <Link
                className={
                  statusDarkmode === "1" ? "navbar-linkdark" : "navbar-link"
                }
                to="/aboutus"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="marker-container">
          <span>
            <img src={markergreen} alt="icon" />
            <h3>La station est disponible</h3>
          </span>
          <span>
            <img src={markerorange} alt="icon" />
            <h3>Peu de velo disponible</h3>
          </span>
          <span>
            <img src={markerblack} alt="icon" />
            <h3>Aucun velo disponible</h3>
          </span>
        </div>
        <DarkMode
          setDarkMode={setDarkMode}
          darkmode={darkmode}
          mapState={mapState}
        />

        <div className="contact">
          <h5>Contact us (please do not)</h5>
          <h6>Licence</h6>
          <div className="logo-social">
            <a href="https://www.facebook.com/WildCodeSchool/">
              <img src={Facebook} alt="logo facebook" />
            </a>
            <a href="https://twitter.com/wildcodeschool">
              <img src={Twitter} alt="logo twitter" />
            </a>
            <a href="https://www.instagram.com/wildcodeschoolofficial/?hl=en">
              <img src={Instagram} alt="logo instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
