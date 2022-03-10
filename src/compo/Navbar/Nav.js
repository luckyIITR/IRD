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
        <nav id="navLinks">
          <div className="logo">
            {isnothome === "true" ? <img src={logo} alt="" /> : <></>}
          </div>
          <i className="fas fa-times" onClick={hideMenu}></i>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Register">Register</Link>
            </li>
            <li>
              <Link to="/Participants">Participants</Link>
            </li>
            <li>
              <Link to="/Schedule">Schedule</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
