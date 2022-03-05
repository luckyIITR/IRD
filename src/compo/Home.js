import React from "react";
import Header from "./Header/Header";
import Events from "./Home-Rest/Events";
import Speakers from "./Home-Rest/Speakers";
function Home() {
  return (
    <>
      <Header />;
      <Events />
      <Speakers />
    </>
  );
}

export default Home;
