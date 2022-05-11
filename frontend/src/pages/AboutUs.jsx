import { Link } from "react-router-dom";
import "../assets/css/aboutus.css";

import leftArrow from "../assets/images/left-arrow-alt-regular-24.png";
import github from "../assets/images/github-logo-24.png";
import linkedin from "../assets/images/linkedin-square-logo-24.png";
import antoine from "../assets/images/antoine-aboutus.gif";
import pierre from "../assets/images/pierre-aboutus.gif";
import francois from "../assets/images/francois-aboutus.gif";
import breogan from "../assets/images/breogan-aboutus.gif";
import henri from "../assets/images/logo-flappy-henri.png";

export default function AboutUs() {
  return (
    <div className="aboutus-container">
      <div className="aboutus-header">
        <div className="header">
          <div className="btn-header-container">
            <Link to="/">
              <button type="button" className="btn-header">
                <img src={leftArrow} alt="icon" className="img-btn-header" />
              </button>
            </Link>
          </div>
          <h1>About us </h1>
        </div>
        <h2>
          Projet 2 pour la Wild Code School <br /> Fais avec du &#10084;&#65039;
          pas mal de &#127866; et surtout des &#129369;
        </h2>
      </div>

      <div className="card-container">
        <div className="card-member">
          <div className="image">
            <img src={antoine} className="image-member" alt="img" />
          </div>
          <h2>Antoine Belloni</h2>
          <h3>
            <i>
              &quot;Con velo loco no hay problemo ! &quot; <br />
              &#40;C&#39;est faux&#41;
            </i>
          </h3>
          <div className="member-icons">
            <a href="https://github.com/Aristotia">
              <img type="logo" name="github" src={github} alt="logo" />
            </a>
            <a href="https://www.linkedin.com/in/antoine-belloni-7b132160/">
              <img name="linkedin" type="logo" src={linkedin} alt="logo" />
            </a>
          </div>
        </div>

        <div className="card-member">
          <div className="image">
            <img src={pierre} className="image-member" alt="img" />
          </div>
          <h2>Pierre Berger</h2>
          <h3>
            <i>&quot;It&#39;s Britney Bitch&quot;</i>
          </h3>
          <div className="member-icons">
            <a href="https://github.com/Pierre-Berger">
              <img type="logo" name="github" src={github} alt="logo" />
            </a>
            <a href="https://www.linkedin.com/in/pierre-berger-943903213/">
              <img name="linkedin" type="logo" src={linkedin} alt="logo" />
            </a>
          </div>
        </div>
        <div className="card-member">
          <div className="image">
            <img src={francois} className="image-member" alt="img" />
          </div>
          <h2>François Pobelle</h2>
          <h3>
            <i>&quot;Dream Big&quot;</i>
          </h3>
          <div className="member-icons">
            <a href="https://github.com/francois2008">
              <img type="logo" name="github" src={github} alt="logo" />
            </a>
            <a href="https://www.linkedin.com/in/fran%C3%A7ois-pobelle/">
              <img name="linkedin" type="logo" src={linkedin} alt="logo" />
            </a>
          </div>
        </div>
        <div className="card-member">
          <div className="image">
            <img src={breogan} className="image-member" alt="img" />
          </div>
          <h2>Breogan Bertelet</h2>
          <h3>
            <i>&quot;Bicycletteeeeeeeeuuuuuh&quot;</i>
          </h3>
          <div className="member-icons">
            <a href="https://github.com/BreoganBP">
              <img type="logo" name="github" src={github} alt="logo" />
            </a>
            <a href="https://www.linkedin.com/in/br%C3%A9ogan-bertelet-627347180/">
              <img name="linkedin" type="logo" src={linkedin} alt="logo" />
            </a>
            <a href="https://flappyhenri.vercel.app/index.html">
              <img
                name="logo-flappy-henri"
                type="logo"
                src={henri}
                alt="logo"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
