import React from "react";
import speaker1 from "../images/Speaker1.jpeg";
import speaker2 from "../images/Speaker2.jpeg";
import speaker3 from "../images/Speaker3.jpeg";

function Speakers() {
  return (
    <div className="container">
      <h1 className="section-heading">Speakers</h1>
      <div className="container-sp">
        <div className="wrapper">
          <div className="card">
            <div className="card-thumb">
              <img src={speaker1} className="client-img" alt="" />
              <span className="client-name">
                Professor Edward Witten
                <br />
                (IAS, Princeton)
              </span>
            </div>
            <div className="card-body">
              <div className="time">
                <i className="fas fa-clock"> </i>&nbsp; Mar 13, 6:30 pm
              </div>

              <h1>Black Hole Thermodynamics: Then and Now</h1>
              <p className="review">
                [in collaboration with the dept. of Physics; the lecture will
                also be the third C. V. Raman Memorial Lecture],
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-sp">
        <div className="wrapper">
          <div className="card">
            <div className="card-thumb">
              <img src={speaker2} className="client-img" alt="" />
              <span className="client-name">
                Prof. Sylvester James Gates Jr.
                <br />
                (Brown U.)
              </span>
            </div>
            <div className="card-body">
              <div className="time">
                <i className="fas fa-clock"> </i>&nbsp; Mar 13, 6:45 pm
              </div>
              <h2></h2>
              <p className="review">
                “People No One Can Imagine Anything Of & Following S.
                Ramanujan’s Example” – Institute Lecture
              </p>
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
                Professor Abhay Ashtekar
                <br />
                (Penn State)
              </span>
            </div>
            <div className="card-body">
              <div className="time">
                <i className="fas fa-clock"> </i>&nbsp; Mar 13, 8 pm
              </div>
              <h1></h1>
              <p className="review">
                People No One Can Imagine Anything Of & Following S. Ramanujan’s
                Example” – Institute Lecture
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Speakers;
