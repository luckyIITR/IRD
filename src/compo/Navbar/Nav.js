import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo_175_yr.png";

function hideMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.style.right = "-200px";
}

function Nav({ isnothome }) {
  return (
    <div className="menuContainer">
      <div className="menuWrapper">
        <div className="logo">
          {isnothome === "true" ? <img src={logo} alt="" /> : <></>}
        </div>
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/Register">
                    Register
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/Participants">
                    Participants
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/Schedule">
                    Schedule
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/Contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
