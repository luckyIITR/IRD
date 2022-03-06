import React from "react";
import logo from "../images/logo_175_yr.png";

function Nav({ isnothome }) {
  return (
    <nav>
      <div className="logo">
        {isnothome === "true" ? <img src={logo} alt="" /> : <></>}
      </div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Register</a>
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
