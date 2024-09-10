import { Link } from "react-scroll";
import "./header.css";

function Header() {
  return (
    <div className="headerField">
      <div className="header">
        <div className="top">
          <div className="logo">
            <img src="./assets/logo.png" alt="logo"></img>
          </div>
          <div className="name">
            <h1>Ets Clément Duvigeant</h1>
            <p>Evaluation thermique avant travaux</p>
            <p>installations, entretiens et dépannages</p>
          </div>
          <a href="tel:+33781115430" className="phone">
            <img src="./assets/tel.png" alt="logo"></img>
          </a>
        </div>
        <div className="bottom">
          <nav>
            <a href="tel:+33781115430" className="phone">
              <img src="./assets/tel.png" alt="logo"></img>
              <p>07.81.11.54.30</p>
            </a>
            <div className="button active">
              <Link to="coucou" smooth={true}>
                <p>Eau chaude</p>
              </Link>
            </div>
            <div className="active button">
              <Link to="coucou" smooth={true}>
                <p>V.M.C</p>
              </Link>
            </div>
            <div className="button active">
              <Link to="coucou" smooth={true}>
                <p>Chauffage</p>
              </Link>
            </div>
            <div className="button active">
              <Link to="coucou" smooth={true}>
                <p>Climatisation</p>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
