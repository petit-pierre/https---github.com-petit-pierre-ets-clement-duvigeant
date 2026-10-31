import PhotoSlider from "../PhotoSlider";
import "./accueil.css";
import { useContent } from "../../contexts/ContentContext";

function Accueil({ addMessage }) {
  return (
    <div className="accueil">
      {/*  <img
        src="https://l-araignee.net/ets-clement-duvigeant/assets/photos/pompe.jpg"
        className="full"
        alt="fond"
      ></img> */}
      <div className="onBackground">
        <div className="text">
          <strong>Plomberie, Chauffage, Climatisation</strong>
          <br></br>

          <strong>Dans la region de Castres</strong>
          <br></br>
          <strong>par un professionel agrée</strong>
          <br></br>
          <strong>avec 15 années d'experiences.</strong>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default Accueil;
