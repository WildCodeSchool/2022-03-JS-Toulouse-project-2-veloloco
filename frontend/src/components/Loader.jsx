import "../assets/css/loader.css";

export default function Loader({ setReadyOrNot, readyOrNot }) {
  return (
    <div
      className="welcome-container"
      data-aos="fade-right"
      data-aos-duration="3000"
    >
      <div className="card">
        <h1 className="title">Bienvenue sur VeloLoco !</h1>
        <h2>Pour continuer , merci d&#39;autoriser la localisation </h2>
        <h2>Inscrivez vous :</h2>
        <div className="formulaire">
          <p className="form-firstname">Prenom :</p>
          <input id="username" type="text" autoComplete="off" name="user" />

          <p className="form-lastname">Nom :</p>
          <input id="username" type="text" autoComplete="off" name="user" />
        </div>
        <h2>Sinon cliquez ici pour continuer </h2>
        <button
          onClick={() => setReadyOrNot(!readyOrNot)}
          className="continue"
          type="button"
        >
          Continuer
        </button>
      </div>
    </div>
  );
}
