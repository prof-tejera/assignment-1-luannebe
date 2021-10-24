import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../../utils";
import { darken, rem } from 'polished';
import { Container, Header, Title, Subtitle, TimerDisplay, SetTimer, RunTimer, ButtonGroup, InputGroup, NumInput, InputDisplay, Rounds, Cycle } from "../generic";
import { WorkPeriod, RestPeriod, Period } from "../generic/Period";
import { StartButton, StopButton, ResetButton, Button } from "../generic/Button";


class Tabata extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  render() {
    return (
      <Container>
        <Header><Title>Tabata</Title></Header>
        <RunTimer visible={false}>
          <TimerDisplay visible={true} >00:00:00</TimerDisplay>
          <Rounds visible={true}>Round 1 <span>of</span> 4</Rounds>
          <Cycle>
            <WorkPeriod current={true} label="Work" />
            <RestPeriod current={false} label="Rest" />
          </Cycle>
        </RunTimer>
        <SetTimer visible={true}>
          <Subtitle>Set Timer</Subtitle>
          <InputDisplay >
            <InputGroup title="Work Interval">
              <NumInput id="wminutes" name="wminutes" min="0" max="59" defaultVal="0" label="Minutes" />
              <NumInput id="wseconds" name="wseconds" min="0" max="59" defaultVal="0" label="Seconds" />
            </InputGroup>
            <InputGroup title="Rest Interval">
              <NumInput id="rminutes" name="rminutes" min="0" max="59" defaultVal="0" label="Minutes" />
              <NumInput id="rseconds" name="rseconds" min="0" max="59" defaultVal="0" label="Seconds" />
            </InputGroup>            
          </InputDisplay>
          <InputGroup title="Rounds">                   
              <NumInput id="rounds" name="rounds" min="1" max="12" defaultVal="1" label="Number" />
            </InputGroup>
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

export default Tabata;

