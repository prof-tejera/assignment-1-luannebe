import React from "react";
import styled from "styled-components";

import Stopwatch from "../components/timers/Stopwatch";
import Countdown from "../components/timers/Countdown";
import XY from "../components/timers/XY";
import Tabata from "../components/timers/Tabata";

const Timers = styled.div`
  width: auto;
`;

const Timer = styled.div`
  width: auto;
  height: auto;
  margin: 30px auto;
`;

const TimerTitle = styled.div``;

function App() {
  const timers = [
    { title: "Stopwatch", C: <Stopwatch /> },
    { title: "Countdown", C: <Countdown /> },
    { title: "XY", C: <XY /> },
    { title: "Tabata", C: <Tabata /> },
  ];

  return (
    <Timers>
      {timers.map((timer) => (
        <Timer>

          {timer.C}
        </Timer>
      ))}
    </Timers>
  );
}

export default App;
