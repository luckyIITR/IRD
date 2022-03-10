import React from "react";
import Header from "./Header/Header";
import Events from "./Home-Rest/Events";
import Poster from "./Home-Rest/Poster";
import Speakers from "./Home-Rest/Speakers";
function Home() {
  return (
    <>
      <Header />
      <Poster />
      <Events />
      <Speakers />
    </>
  );
}

export default Home;
