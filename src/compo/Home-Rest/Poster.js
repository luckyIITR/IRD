import React from "react";
import poster from "../images/poster.jpg";

function readmehandler() {
  var more = document.getElementById("more");

  if (more.style.display === "none") {
    more.style.display = "inline";
  } else {
    more.style.display = "none";
  }
}

function Poster() {
  return (
    <>
      <div className="container-man">
        <button
          className="ui button outline lifeAtIITRButton"
          onClick={readmehandler}
          id="myBtn"
          style={{
            margin: "70px auto 50px auto",
            fontSize: "1em",
            cursor: "pointer",
          }}
        >
          View Poster
        </button>
        <span id="more" style={{ display: "none" }}>
          <h1 style={{ fontSize: "3em", marginBottom: "50px" }}>Poster</h1>
          <img src={poster} alt="poster" />
        </span>
      </div>
    </>
  );
}

export default Poster;
