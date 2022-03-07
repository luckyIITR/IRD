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
          <Link to="/Participants">Participants</Link>
        </li>
        {/* <li>
          <Link to="/Dummy">Dummy</Link>
        </li> */}
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
