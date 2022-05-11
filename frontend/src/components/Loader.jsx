import axios from "axios";

import "../assets/css/loader.css";

export default function Loader({
  setReadyOrNot,
  readyOrNot,
  setValueFirstName,
  valueFirstName,
  setValueLastName,
  valueLastName,
}) {
  function callBDD(e) {
    e.preventDefault();
    setReadyOrNot(!readyOrNot);
    localStorage.setItem("alreadyConnected", true);
    const user = {
      id: null,
      firstName: valueFirstName,
      lastName: valueLastName,
    };
    axios
      .post("http://localhost:5500/user", user)
      .then(() => {
        localStorage.setItem("user", JSON.stringify(user));
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  return (
    <form onSubmit={callBDD}>
      <div
        className="welcome-container"
        data-aos="fade-right"
        data-aos-duration="1100"
      >
        <div className="card">
          <h1 className="title">
            Bienvenue sur <span className="text-color">VeloLoco </span> !
          </h1>
          <h2 className="text-warning">
            Pour continuer , merci d&#39;autoriser la localisation &#128205;
          </h2>
          <h2>Inscrivez vous :</h2>
          <div className="formulaire">
            <p className="form-firstname"> Prenom :</p>
            <input
              id="username"
              type="text"
              onChange={(e) => setValueFirstName(e.target.value)}
              autoComplete="off"
              name="user"
            />

            <p className="form-lastname">Nom :</p>
            <input
              id="username"
              type="text"
              onChange={(e) => setValueLastName(e.target.value)}
              autoComplete="off"
              name="user"
            />
          </div>

          <input className="continue" type="submit" value="Continuer" />
        </div>
      </div>
    </form>
  );
}
