import { Link } from "react-router-dom";
import "../assets/css/aboutus.css";

export default function AboutUs() {
  return (
    <div className="aboutus-container">
      <div className="aboutus-header">
        <div className="header">
          <div className="btn-header-container">
            <Link to="/">
              <button type="button" className="btn-header">
                <img
                  src="src/assets/images/left-arrow-alt-regular-24.png"
                  alt="icon"
                  className="img-btn-header"
                />
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
            <img
              src="/src/assets/images/antoine-aboutus.gif"
              className="image-member"
              alt="img"
            />
          </div>
          <h2>Michel Tacos</h2>
          <h3>Les tacos c&#39;est la vie</h3>
          <div className="member-icons">
            <img
              type="logo"
              name="github"
              src="/src/assets/images/github-logo-24.png"
              alt="logo"
            />
            <img
              name="linkedin"
              type="logo"
              src="/src/assets/images/linkedin-square-logo-24.png"
              alt="logo"
            />
          </div>
        </div>

        <div className="card-member">
          <div className="image">
            <img
              src="/src/assets/images/pierre-aboutus.gif"
              className="image-member"
              alt="img"
            />
          </div>
          <h2>Pierre Berger</h2>
          <h3>
            {" "}
            <i>&quot;It&#39;s Birtney Bitch&quot;</i>
          </h3>
          <div className="member-icons">
            <a href="https://github.com/Pierre-Berger">
              <img
                type="logo"
                name="github"
                src="/src/assets/images/github-logo-24.png"
                alt="logo"
              />
            </a>
            <a href="https://www.linkedin.com/in/pierre-berger-943903213/">
              <img
                name="linkedin"
                type="logo"
                src="/src/assets/images/linkedin-square-logo-24.png"
                alt="logo"
              />
            </a>
          </div>
        </div>
        <div className="card-member">
          <div className="image">
            <img
              src="/src/assets/images/francois-aboutus.gif"
              className="image-member"
              alt="img"
            />
          </div>
          <h2>Michel Tacos</h2>
          <h3>Les tacos c&#39;est la vie</h3>
          <div className="member-icons">
            <img
              type="logo"
              name="github"
              src="/src/assets/images/github-logo-24.png"
              alt="logo"
            />
            <img
              name="linkedin"
              type="logo"
              src="/src/assets/images/linkedin-square-logo-24.png"
              alt="logo"
            />
          </div>
        </div>
        <div className="card-member">
          <div className="image">
            <img
              src="/src/assets/images/breogan-aboutus.gif"
              className="image-member"
              alt="img"
            />
          </div>
          <h2>Michel Tacos</h2>
          <h3>Les tacos c&#39;est la vie</h3>
          <div className="member-icons">
            <img
              type="logo"
              name="github"
              src="/src/assets/images/github-logo-24.png"
              alt="logo"
            />
            <img
              name="linkedin"
              type="logo"
              src="/src/assets/images/linkedin-square-logo-24.png"
              alt="logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
