import React from "react";

function Nav() {
  return (
    <nav>
      <div className="logo">
        {/* <!-- <img src="images/logo.png" alt="" />
    <span>wearme.</span> --> */}
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
