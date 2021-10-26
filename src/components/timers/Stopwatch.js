import React from "react";
import { Container, Header, Title, TimerDisplay, ButtonGroup } from "../../utils/styles";
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
