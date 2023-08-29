import React from "react";
import { Link } from "react-router-dom";
import imgLogo from '../img/CocheLogo.png'
import SignIn from './SignIn'

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="Home.js">
            <img src={imgLogo} alt="imgLogo" width='70'/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mx-auto">
              <Link className="nav-link" to="/Home">
                Home
              </Link>
              <Link className="nav-link" to="inputCars">
                inputCars
              </Link>
              <Link className="nav-link" to="./AboutUs">
                AboutUs
              </Link>
              {/* <a class="nav-link disabled" aria-disabled="true">Disabled</a> */}
            </div>
             <SignIn/>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
