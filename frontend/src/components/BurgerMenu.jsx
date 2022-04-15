import React from "react";
import LogoVelo from "../assets/images/logo.png";
import LogoTopsecret from "../assets/images/logo-topsecret-about.png";
import LogoVeloToulouse from "../assets/images/logo velo-toulouse.png";
import LogoFavoris from "../assets/images/logo-favoris.png";
import LogoAboutUs from "../assets/images/logo-topsecret-about2.png";
import Cross from "../assets/images/cross.png";
import Facebook from "../assets/images/logo-facebook.png";
import Twitter from "../assets/images/logo-twitter.png";
import Instagram from "../assets/images/logo-insta.png";
import "../assets/css/BurgerMenu.css";
import "../assets/css/darkMode.css";
import "../assets/css/contact.css";
import DarkMode from "./thememode/darkmode";

export default function Nav() {
  return (
    <div className="navbar">
      <div className="logo-title">
        <img className="logo" src={LogoVelo} alt="Logo Vélo" />
        <h2>VELO LOCO</h2>
        <img className="cross" src={Cross} alt="cross" />
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
            <img className="image-item" src={LogoFavoris} alt="Logo Favoris" />
            <a href="/" className="navbar-link">
              Favoris
            </a>
          </li>
          <li className="navbar-item">
            <img className="image-item" src={LogoAboutUs} alt="Logo About Us" />
            <a href="/" className="navbar-link">
              About us
            </a>
          </li>
        </ul>
      </div>
      <hr />
      <DarkMode />
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
  );
}
