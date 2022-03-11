import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo_175_yr.png";
import "./bootstrap.scoped.css";

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
              <span class="navbar-toggler-icon" />
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link" to="/" style={{ color: "black" }}>
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link"
                    to="/Register"
                    style={{ color: "black" }}
                  >
                    Register
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link"
                    to="/Participants"
                    style={{ color: "black" }}
                  >
                    Participants
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link"
                    to="/Schedule"
                    style={{ color: "black" }}
                  >
                    Schedule
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link"
                    to="/Contact"
                    style={{ color: "black" }}
                  >
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
