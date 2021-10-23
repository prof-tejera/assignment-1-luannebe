import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../../utils";
import { darken, rem } from 'polished';
import { Container, Header, Title, TimerDisplay, ButtonGroup } from "../generic";
import { StartButton, StopButton, ResetButton, Button } from "../generic/Button";


class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  render() {
    return (
      <Container>
        <Header><Title>Stopwatch</Title></Header>
        <TimerDisplay>00:00:00</TimerDisplay>
        <ButtonGroup>
          <StopButton disabled={true} label="Stop"></StopButton>
          <ResetButton disabled={true} label="Reset"></ResetButton>
          <StartButton label="Start">Start</StartButton>
        </ButtonGroup>
      </Container>
    );
  }
}

export default Stopwatch;
