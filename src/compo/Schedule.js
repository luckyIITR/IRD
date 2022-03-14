import React from "react";
import Navbar from "./Navbar/Nav";

function Schedule() {
  return (
    <>
      <Navbar isnothome="true" />
      <div className="limiter">
        <div className="register-heading sectionHeading participants">
          <h1 style={{ fontSize: "2em" }}>Schedule</h1>
          <br />
          <br />
        </div>
        <div className="container-table100" style={{ paddingBottom: "10px" }}>
          <div className="wrap-table100" style={{ overflowY: "unset" }}>
            <h2>13th March</h2>
            <div className="table">
              <div className="header-table">
                <div className="cell">Time</div>
                <div className="cell">Event</div>
              </div>
              <div className="row-table">
                <div className="cell">4:00 - 4:15pm</div>
                <div className="cell">
                  Inauguration of the Poster Session and Inaugural Address by
                  the Director
                </div>
              </div>
              <div className="row-table">
                <div className="cell">4:15-5:30 pm</div>
                <div className="cell">Poster Session</div>
              </div>
              <div className="row-table">
                <div className="cell">5:30-6:15 pm</div>
                <div className="cell">Refreshments</div>
              </div>
              <div className="row-table">
                <div className="cell">6:15-7:30 pm</div>
                <div className="cell">
                  Technical Session 01, also C.V. Raman Memorial Lecture <br />{" "}
                  Talk by Prof. Edward Witten, Princeton University <br />
                  <i>Black Hole Thermodynamics: Then and Now</i>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* --------------Second Table--------------- */}
        <div className="container-table100">
          <div className="wrap-table100" style={{ overflowY: "unset" }}>
            <h2>14th March</h2>
            <div className="table">
              <div className="header-table">
                <div className="cell">Time</div>
                <div className="cell">Event</div>
              </div>
              <div className="row-table">
                <div className="cell">5:00-5:20 pm</div>
                <div className="cell">
                  Inauguration of Research Day and Launch of Research Gallery by
                  the Director
                </div>
              </div>
              <div className="row-table">
                <div className="cell">5:20-6:00 pm</div>
                <div className="cell">
                  Talk by Prof. Ajit K. Chaturvedi <br />
                  <i>Thesis and Manuscript writing: a Perspective</i>
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
                        href="https://youtu.be/WbIHuv99A6E"
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
                        href="https://us02web.zoom.us/j/81326345423"
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
              <div className="row-table">
                <div className="cell">6:00-6:20 pm</div>
                <div className="cell">Poster Awards</div>
              </div>
              <div className="row-table">
                <div className="cell">6:20-6:40 pm</div>
                <div className="cell">Refreshments</div>
              </div>
              <div className="row-table">
                <div className="cell">6:45-7:45 pm</div>
                <div className="cell">
                  Technical Session 02 <br /> Talk by Prof. James Gates Jr.,
                  Brown University <br />
                  <i>
                    People no one can Imagine Anything of and Following S.
                    Ramanujan’s Example
                  </i>
                </div>
              </div>
              <div className="row-table">
                <div className="cell">8:00-9:00 pm</div>
                <div className="cell">
                  Technical Session 03 <br /> Talk by Prof. Abhay Ashtekar, Penn
                  State University Gravity, <br />
                  <i>Geometry and Quantum: Physics beyond Einstein</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Schedule;
