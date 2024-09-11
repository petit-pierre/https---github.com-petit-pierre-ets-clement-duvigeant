import Accueil from "../../components/Accueil";
import Climatisation from "../../components/Climatisation";
import Chauffage from "../../components/Chauffage";
import Vmc from "../../components/Vmc";
import Eau from "../../components/Eau";
import Cgv from "../../components/Cgv";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <div className="content">
        <div className="ancre">
          <span id="acceuil" className="id"></span>
        </div>
        <Accueil></Accueil>
        <div className="ancre">
          <span id="climatisation" className="id"></span>
        </div>
        <Climatisation></Climatisation>
        <div className="ancre">
          <span id="chauffage" className="id"></span>
        </div>
        <Chauffage></Chauffage>
        <div className="ancre">
          <span id="vmc" className="id"></span>
        </div>
        <Vmc></Vmc>
        <div className="ancre">
          <span id="eau" className="id"></span>
        </div>
        <Eau></Eau>
      </div>
      <div className="cgv hidden">
        <div className="ancre">
          <span id="cgv" className="id"></span>
        </div>
        <Cgv></Cgv>
      </div>
    </div>
  );
}

export default Home;
