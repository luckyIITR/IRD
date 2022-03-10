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
          <div className="wrap-table100">
            <h2>13th March</h2>
            <div className="table">
              <div className="header-table">
                <div className="cell">Time</div>
                <div className="cell">Event</div>
              </div>
              <div className="row-table">
                <div className="cell">4:00 pm</div>
                <div className="cell">
                  Inauguration of the Poster Session and inaugural address by
                  Director.
                </div>
              </div>
              <div className="row-table">
                <div className="cell">4:00-5:30 pm</div>
                <div className="cell">Poster session</div>
              </div>
              <div className="row-table">
                <div className="cell">5:45-6:15 pm</div>
                <div className="cell">Refreshments</div>
              </div>
              <div className="row-table">
                <div className="cell">6:30-7:30 pm</div>
                <div className="cell">
                  Technical session 1 (also CV Raman Talk) (Prof. Witten,
                  Princeton)
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
                  Launch of Research Gallery by the Director
                </div>
              </div>
              <div className="row-table">
                <div className="cell">5:20-6:20 pm</div>
                <div className="cell">
                  Workshop: Resource Person: Prof. Ajit K. Chaturvedi and poster
                  awards
                </div>
              </div>
              <div className="row-table">
                <div className="cell">6:20-6:40 pm</div>
                <div className="cell">Refreshments</div>
              </div>
              <div className="row-table">
                <div className="cell">6:45-7:45 pm</div>
                <div className="cell">
                  Technical session 2 (Prof. James Gates, Brown Univ.)
                </div>
              </div>
              <div className="row-table">
                <div className="cell">8:00-9:00 pm</div>
                <div className="cell">
                  Technical session 3 (Prof. Abhay Ashtekar, Penn State Univ.)
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
