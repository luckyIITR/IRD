import React from "react";
import image1 from "../images/image1.jpeg";
import image2 from "../images/image2.jpeg";
import image3 from "../images/image3.jpeg";
import image4 from "../images/image4.jpeg";

function Events() {
  return (
    <section className="container">
      <h1 className="section-heading">Events</h1>
      <div className="row">
        <div className="events-col">
          <img src={image1} alt="image1" />
          <h1>Launch of a Virtual Research Gallery</h1>
        </div>
        <div className="events-col">
          <img src={image2} alt="image1" />
          <h1>Research poster competition</h1>
        </div>
        <div className="events-col">
          <img src={image3} alt="image1" />
          <h1>Workshop on manuscript writing and plagiarism</h1>
        </div>
        <div className="events-col">
          <img src={image4} alt="image1" />
          <h1>Talk by eminent researchers</h1>
        </div>
      </div>
    </section>
  );
}

export default Events;
