import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../../utils";
import { darken, rem } from 'polished';
import { Container, Header, Title, Subtitle, TimerDisplay, SetTimer, ButtonGroup, NumInput, InputDisplay } from "../generic";
import { StartButton, StopButton, ResetButton, Button } from "../generic/Button";


class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  render() {
    return (
      <Container>
        <Header><Title>Countdown</Title></Header>
        <TimerDisplay visible={false} >00:00:00</TimerDisplay>
        <SetTimer visible={true}>
          <Subtitle>Set Timer</Subtitle>
          <InputDisplay >
            <NumInput id="hours" name="hours" min="0" max="12" defaultVal="0" label="Hours" />
            <NumInput id="minutes" name="minutes" min="0" max="59" defaultVal="0" label="Minutes" />
            <NumInput id="seconds" name="seconds" min="0" max="59" defaultVal="0" label="Seconds" />
          </InputDisplay>
        </SetTimer>
        <ButtonGroup>
          <StopButton disabled={true} label="Stop"></StopButton>
          <ResetButton disabled={true} label="Reset"></ResetButton>
          <StartButton label="Start">Start</StartButton>
        </ButtonGroup>
      </Container>
    );
  }
}

export default Countdown;
