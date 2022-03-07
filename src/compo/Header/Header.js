import React from "react";
import Navbar from "../Navbar/Nav";
import Einstein from "../images/Einstein.jpg";
import pi from "../images/pi.png"
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
        <p>13-14 March</p>
        <div className="links">
          <Link to="/Register" className="btn">
            Registration for Talks
          </Link>
        </div>
        <div style={{display:"flex", alignItems:"center"}}>
        <div><img src={Einstein} alt="Albert Einstein" className="einstein" /></div>
        <div><img src={pi} alt="Pi" className="pi" /></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
