import React from "react";
import Navbar from "./Navbar/Nav";
import Table from "./ParticipantsCompo/Table";

function Participants() {
  return (
    <>
      <Navbar isnothome="true" />
      <Table />;
    </>
  );
}

export default Participants;
