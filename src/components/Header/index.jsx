import { Link } from "react-scroll";
import "./header.css";

function Header() {
  function clicked(evt) {
    const links = document.querySelectorAll(".active");
    if (links !== null) {
      for (let link of links) {
        link.classList.remove("active");
      }
    }
    if (evt.target.parentElement.parentElement.className.includes("button")) {
      evt.target.parentElement.parentElement.classList.add("active");
    } else {
      evt.target.parentElement.parentElement.parentElement.classList.add(
        "active"
      );
    }
  }
  function clickedLogo() {
    const links = document.querySelectorAll(".active");
    if (links !== null) {
      for (let link of links) {
        link.classList.remove("active");
      }
    }
  }
  return (
    <div className="headerField">
      <div className="header">
        <div className="top">
          <div className="logo" onClick={(evt) => clickedLogo()}>
            <Link to="coucou" smooth="true" onClick={(evt) => clickedLogo()}>
              <img src="./assets/logo.png" alt="logo"></img>
            </Link>
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
            <div className="button red">
              <Link
                to="coucou"
                smooth={true}
                name="prout"
                onClick={(evt) => clicked(evt)}
              >
                <div>
                  <p>Eau chaude</p>
                </div>
              </Link>
            </div>
            <div className="button blue">
              <Link to="coucou" smooth={true} onClick={(evt) => clicked(evt)}>
                <div>
                  <p>V.M.C</p>
                </div>
              </Link>
            </div>
            <div className="button red">
              <Link to="coucou" smooth={true} onClick={(evt) => clicked(evt)}>
                <div>
                  <p>Chauffage</p>
                </div>
              </Link>
            </div>
            <div className="button blue">
              <Link to="coucou" smooth={true} onClick={(evt) => clicked(evt)}>
                <div>
                  <p>Climatisation</p>
                </div>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
