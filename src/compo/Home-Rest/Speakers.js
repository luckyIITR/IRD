import React from "react";
import speaker3 from "../images/speakers3.jpeg";

function Speakers() {
  return (
    <section className="container">
      <h1 className="section-heading">Speakers</h1>
      <div className="row">
        <div className="speakers-col">
          <img src={speaker3} alt="" />
          <div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias nesciunt fugiat ipsa architecto unde nihil nemo. Ea
              animi nobis ut.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Speakers;
