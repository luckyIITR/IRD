import React from "react";
import speaker1 from "../images/Speaker1.jpeg";
import speaker2 from "../images/Speaker2.jpeg";
import speaker3 from "../images/Speaker3.jpeg";

function readmehandler1() {
  var dots = document.getElementById("dots1");
  var moreText = document.getElementById("more1");
  var btnText = document.getElementById("myBtn1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
function readmehandler2() {
  var dots = document.getElementById("dots2");
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("myBtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function Speakers() {
  return (
    <div className="container">
      <h1 className="section-heading">Speakers</h1>
      <div className="container-sp">
        <div className="wrapper">
          <div className="card">
            <div className="card-thumb">
              <img
                src={speaker1}
                className="client-img"
                alt=""
                style={{ height: "78%" }}
              />
              <span className="client-name">
                <span style={{ fontSize: "1.2em", fontWeight: "600" }}>
                  Edward Witten
                </span>
                <br />
                (Fields Medalist, Charles Simonyi Professor, Institute of
                Advanced Study Princeton)
              </span>
            </div>
            <div className="card-body">
              <div className="time">
                <i className="fas fa-clock"> </i>&nbsp; Mar 13, 6:30 pm
              </div>

              <h2>Black Hole Thermodynamics: Then and Now</h2>
              <p className="review2">
                I will review the ideas of black hole thermodynamics as they
                developed in the 1970's, and then I will explain something of a
                more contemporary perspective.
              </p>

              <div
                className="review"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <div className="lect">
                  <a
                    className="ui button outline lifeAtIITRButton"
                    href="https://youtu.be/IIwiM777OzQ"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-youtube" style={{ color: "red" }}>
                      {" "}
                    </i>
                    &nbsp;&nbsp; YouTube
                  </a>
                </div>
                &nbsp;&nbsp;
                <div className="lect">
                  <a
                    className="ui button outline lifeAtIITRButton"
                    href="https://youtu.be/IIwiM777OzQ"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-video" style={{ color: "blue" }}>
                      {" "}
                    </i>
                    &nbsp;&nbsp; Zoom
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-sp">
        <div className="wrapper">
          <div className="card">
            <div className="card-thumb">
              <img
                src={speaker2}
                className="client-img"
                alt=""
                style={{ height: "70%" }}
              />
              <span className="client-name">
                <span style={{ fontWeight: "600", fontSize: "1.2em" }}>
                  Sylvester James Gates Jr.
                </span>
                <br />
                (Brown Theoretical Physics Center Director, Ford Foundation
                Professor of Physics & Affiliate Professor of Mathematics,
                Watson Institute for International Studies & Public Affairs
                Faculty Fellow, Brown University)
              </span>
            </div>
            <div className="card-body">
              <div className="time">
                <i className="fas fa-clock"> </i>&nbsp; Mar 14, 6:45 pm
              </div>
              <h2>
                People No One Can Imagine Anything Of & Following S. Ramanujan’s
                Example
              </h2>
              <p className="review2">
                A comment often attributed to Alan Turing states, "Sometimes
                it’s the people no one imagines anything of who do the things
                that no one can imagine." Though Srinivasa Ramanujan had almost
                no formal training in mathematics, he made
                <span id="dots1">...</span>
                <span id="more1">
                  {" "}
                  substantial contributions to the field and discovered
                  solutions to mathematical problems then considered unsolvable.
                  He once said, “While asleep, I had an unusual experience… As
                  soon as I woke up, I committed them to writing.” This
                  presentation questions whether the subconscious can influence
                  the study of a subject seemingly beyond it.
                </span>
              </p>
              <button
                className="ui button outline lifeAtIITRButton"
                onClick={readmehandler1}
                id="myBtn1"
                style={{ float: "right" }}
              >
                Read More
              </button>
              <div
                className="review"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <div className="lect">
                  <a
                    className="ui button outline lifeAtIITRButton"
                    href="https://youtu.be/IIwiM777OzQ"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-youtube" style={{ color: "red" }}>
                      {" "}
                    </i>
                    &nbsp;&nbsp; YouTube
                  </a>
                </div>
                &nbsp;&nbsp;
                <div className="lect">
                  <a
                    className="ui button outline lifeAtIITRButton"
                    href="https://youtu.be/IIwiM777OzQ"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-video" style={{ color: "blue" }}>
                      {" "}
                    </i>
                    &nbsp;&nbsp; Zoom
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-sp">
        <div className="wrapper">
          <div className="card">
            <div className="card-thumb">
              <img src={speaker3} className="client-img" alt="" />
              <span className="client-name">
                <span style={{ fontWeight: "600", fontSize: "1.2em" }}>
                  Abhay Ashtekar
                </span>
                <br />
                (Eberly Professor of Physics and the Director of the Institute
                for Gravitational Physics and Geometry at Penn State)
              </span>
            </div>
            <div className="card-body">
              <div className="time">
                <i className="fas fa-clock"> </i>&nbsp; Mar 13, 8 pm
              </div>
              <h2>
                Gravity, Geometry and the Quantum: Physics Beyond Einstein
              </h2>
              <p className="review2">
                I will begin by recalling the salient features of general
                relativity that have revolutionized our understanding of the
                cosmos we inhabit. I will then present a broad perspective on a
                central open issue: unification of the principles of general
                relativity <span id="dots2">...</span>
                <span id="more2">
                  and quantum mechanics. A leading approach to address this
                  problem goes under the name Loop Quantum Gravity, in which the
                  very geometry of space-time has a specific ‘atomic structure’.
                  I will then discuss a few illustrative applications of this
                  framework, focusing on cosmology for definiteness. In Loop
                  Quantum Cosmology, the big-bang singularity is naturally
                  resolved; it is no longer the absolute beginning of our
                  universe. Consequently, quantum space-time is vastly larger
                  than in Einstein’s theory. I will conclude with a discussion
                  of some consequences of this new paradigm some of which have
                  already been tested, and others that will be tested by planned
                  observational missions. As per organizers’ suggestion, this
                  talk will be pitched at a level that is accessible to all
                  disciplines in Science and Engineering.
                </span>
              </p>
              <button
                className="ui button outline lifeAtIITRButton"
                onClick={readmehandler2}
                id="myBtn2"
                style={{ float: "right" }}
              >
                Read More
              </button>
              <div
                className="review"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <div className="lect">
                  <a
                    className="ui button outline lifeAtIITRButton"
                    href="https://youtu.be/IIwiM777OzQ"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-youtube" style={{ color: "red" }}>
                      {" "}
                    </i>
                    &nbsp;&nbsp; YouTube
                  </a>
                </div>
                &nbsp;&nbsp;
                <div className="lect">
                  <a
                    className="ui button outline lifeAtIITRButton"
                    href="https://youtu.be/IIwiM777OzQ"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-video" style={{ color: "blue" }}>
                      {" "}
                    </i>
                    &nbsp;&nbsp; Zoom
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Speakers;
