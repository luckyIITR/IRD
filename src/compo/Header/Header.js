import React from "react";
import Navbar from "../Navbar/Nav";
import Einstein from "../images/Einstein.jpg";

function Header() {
  return (
    <div className="header">
      <Navbar />
      <div className="over-img"></div>
      <div className="content">
        <h1>
          Institute
          <br />
          Research Day
        </h1>
        <p>14th March</p>
        <div className="links">
          <a href="#" className="btn">
            Register Now
          </a>
        </div>
        <img src={Einstein} alt="Einstein Sir" className="einstein" />
      </div>
    </div>
  );
}

export default Header;
