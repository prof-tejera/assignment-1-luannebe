import React from "react";
import styled from "styled-components";

import Stopwatch from "../components/timers/Stopwatch";
import Countdown from "../components/timers/Countdown";
import XY from "../components/timers/XY";
import Tabata from "../components/timers/Tabata";

const Timers = styled.div`
  margin: 0 3rem 0;
  display: inline-grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 2rem;
`;

const Timer = styled.div`
  width: auto;
  height: auto;
  margin: 30px auto;

`;


function App() {

  return (
    <Timers>
      <b></b>
      <Timer>
        <Stopwatch mode="displayTime"/>
      </Timer>
      <Timer>
        <Countdown mode="setTime"/>
      </Timer>
      <Timer>
        <Countdown mode="displayTime" />
      </Timer>
      <Timer>
        <XY mode="setTime" />
      </Timer>
      <Timer>
        <XY mode="displayTime" />
      </Timer>
      <Timer>
        <Tabata mode="setTime"/>
      </Timer>
      <Timer>
        <Tabata mode="displayTime"/>
      </Timer>
    </Timers>
  );
}

export default App;
