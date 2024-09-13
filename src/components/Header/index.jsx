import { Link } from "react-scroll";
import "./header.css";

function Header() {
  function clicked(evt) {
    if (!document.querySelector(".cgv").className.includes("hidden")) {
      document.querySelector(".content").classList.remove("hidden");
      document.querySelector(".accueilContent").classList.remove("hidden");
      document.querySelector(".cgv").classList.add("hidden");
    }
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
    if (!document.querySelector(".cgv").className.includes("hidden")) {
      document.querySelector(".content").classList.remove("hidden");
      document.querySelector(".accueilContent").classList.remove("hidden");
      document.querySelector(".cgv").classList.add("hidden");
    }
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
          <div className="logo" onClick={() => clickedLogo()}>
            <Link
              to="acceuil"
              smooth="true"
              onClick={() => clickedLogo()}
              tabIndex={1}
            >
              <img
                src="https://l-araignee.net/ets-clement-duvigeant/assets/logo-header.png"
                alt="logo"
              ></img>
            </Link>
          </div>
          <div className="name">
            <h1>Ets Clément Duvigeant</h1>
            <p>Evaluation thermique avant travaux</p>
            <p>installations, entretiens et dépannages</p>
          </div>
          <a href="tel:+33781115430" className="phone">
            <img
              src="https://l-araignee.net/ets-clement-duvigeant/assets/tel.png"
              alt="logo"
            ></img>
          </a>
        </div>
        <div className="bottom">
          <nav>
            <a href="tel:+33781115430" className="phone">
              <img
                src="https://l-araignee.net/ets-clement-duvigeant/assets/tel.png"
                alt="logo"
              ></img>
              <p>07.81.11.54.30</p>
            </a>
            <div className="button blue">
              <Link
                to="climatisation"
                smooth={true}
                onClick={(evt) => clicked(evt)}
                tabIndex={1}
              >
                <div>
                  <p>Climatisation</p>
                </div>
              </Link>
            </div>
            <div className="button red">
              <Link
                to="eau"
                smooth={true}
                tabIndex={4}
                onClick={(evt) => clicked(evt)}
              >
                <div>
                  <p>Eau chaude</p>
                </div>
              </Link>
            </div>
            <div className="button blue">
              <Link
                to="vmc"
                smooth={true}
                onClick={(evt) => clicked(evt)}
                tabIndex={3}
              >
                <div>
                  <p>V.M.C</p>
                </div>
              </Link>
            </div>
            <div className="button red">
              <Link
                to="chauffage"
                smooth={true}
                onClick={(evt) => clicked(evt)}
                tabIndex={2}
              >
                <div>
                  <p>Chauffage</p>
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
