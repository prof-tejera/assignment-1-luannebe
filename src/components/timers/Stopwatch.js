import React from "react";
import { StartButton, StopButton, ResetButton } from "../generic/Button";

class Stopwatch extends React.Component {
  render() {
    return (
      <div>
        <StartButton label="Start"></StartButton>
        <StopButton>Stop</StopButton>
        <ResetButton disabled >Reset</ResetButton>
      </div>
    );
  }
}

export default Stopwatch;
