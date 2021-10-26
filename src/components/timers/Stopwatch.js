import React from "react";
import { Container, Header, Title, TimerDisplay, ButtonGroup } from "../generic";
import { StartButton, StopButton, ResetButton } from "../generic/Button";


class Stopwatch extends React.Component {

  render() {
    return (
      <Container>
        <Header><Title>Stopwatch</Title></Header>
        <TimerDisplay visible={true}>00:00:00</TimerDisplay>
        <ButtonGroup>
          <StopButton disabled={true} label="Stop"></StopButton>
          <ResetButton disabled={true} label="Reset"></ResetButton>
          <StartButton disabled={false} label="Start"></StartButton>
        </ButtonGroup>
      </Container>
    );
  }
}

export default Stopwatch;
