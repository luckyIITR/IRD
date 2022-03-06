import React from "react";
import Navbar from "../Navbar/Nav";
import Einstein from "../images/Einstein.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Navbar isnothome="false" />
      <div className="over-img"></div>
      <div className="content">
        <h1>
          Institute
          <br />
          Research Day
        </h1>
        <p>14th March</p>
        <div className="links">
          <Link to="/Register" className="btn">
            Register Now
          </Link>
        </div>
        <img src={Einstein} alt="Einstein Sir" className="einstein" />
      </div>
    </div>
  );
}

export default Header;
