import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo_175_yr.png";

function Nav({ isnothome }) {
  return (
    <nav>
      <div className="logo">
        {isnothome === "true" ? <img src={logo} alt="" /> : <></>}
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Register">Register</Link>
        </li>
        <li>
          <a href="#">Participants</a>
        </li>
        <li>
          <a href="#">Dummy</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
