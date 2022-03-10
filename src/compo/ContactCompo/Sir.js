import React from "react";

function Sir() {
  return (
    <div>
      <div className="cmsContainer" style={{ marginBottom: "0" }}>
        <div className="sectionHeading" style={{ fontSize: "2em" }}>
          Contact us
        </div>
      </div>
      <div className="cmsContainer" style={{ marginTop: "0", height: "40vh" }}>
        <div className="textArea noticeboard-upcoming-events-container">
          <div
            className="upcoming-events-container"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div>
              <div className="row">
                <div className="data">
                  <i className="fas fa-envelope-open-text fa-10x"> </i>
                </div>
              </div>
            </div>
          </div>
          <div className="noticeboard-container">
            <div className="main-page-noticeboard">
              <div className="row">
                <div className="data">
                  <i
                    className="fas fa-envelope-square"
                    style={{ color: "#1a76bb" }}
                  >
                    {" "}
                  </i>
                  &nbsp;
                  <span>irdc@iitr.ac.in</span>
                  <br />
                  <i
                    className="fas fa-envelope-square"
                    style={{ color: "#1a76bb" }}
                  >
                    {" "}
                  </i>
                  &nbsp;
                  <span>aalok.misra@ph.iitr.ac.in (Aalok Misra)</span>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sir;
