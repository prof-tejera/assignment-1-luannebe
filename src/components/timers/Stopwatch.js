import React from "react";
import { Container, Header, TimerDisplay, ButtonGroup } from "../../utils/containers";
import { Title,  } from "../../utils/headings";
import { StartButton, StopButton, ResetButton } from "../generic/Button";


class Stopwatch extends React.Component {

  render() {
    return (
      <Container>
        <Header><Title>Stopwatch</Title></Header>
        <TimerDisplay >00:00:00</TimerDisplay>
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
