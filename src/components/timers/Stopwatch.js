import React from "react";
import { TimerDisplay, } from "../generic";
import { Container, Header, ButtonGroup } from "../../utils/containers";
import { Title,  } from "../../utils/headings";
import { StartButton, StopButton, ResetButton } from "../generic/Button";


class Stopwatch extends React.Component {

  render() {
    return (
      <Container>
        <Header><Title>Stopwatch</Title></Header>
        <TimerDisplay hours="00" minutes="00" seconds="00" />
        <ButtonGroup>
          <StopButton disabled label="Stop" />
          <ResetButton disabled label="Reset" />
          <StartButton label="Start" />
        </ButtonGroup>
      </Container>
    );
  }
}

export default Stopwatch;
