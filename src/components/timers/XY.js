import React from "react";
import PropTypes from "prop-types";
import { NumInput, TimerDisplay, Rounds } from "../generic";
import { Container, Header, RunTimer, SetTimer, InputDisplay, InputGroup, ButtonGroup, } from "../../utils/containers";
import { Title, Subtitle, Heading,  } from "../../utils/headings";
import { StartButton, StopButton, ResetButton } from "../generic/Button";


class XY extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: props.mode,
    };
  }

  render() {
    return (
      <Container>
        <Header><Title>XY</Title></Header>
        <RunTimer visible={this.state.mode === "displayTime"}>
          <TimerDisplay hours="00" minutes="00" seconds="00" />
          <Rounds currentRound="1" totalRounds="4" />
        </RunTimer>
        <SetTimer visible={(this.state.mode === "setTime")}>
          <Subtitle>Set Timer</Subtitle>
          <InputDisplay>
            <InputGroup>
              <Heading>Rounds</Heading>                   
              <NumInput id="rounds" name="rounds" min="1" max="12" defaultVal="1" label="Number" />
            </InputGroup>
            <InputGroup>
              <Heading>Time Per Round</Heading> 
              <NumInput id="minutes" name="minutes" min="0" max="59" defaultVal="0" label="Minutes" />
              <NumInput id="seconds" name="seconds" min="0" max="59" defaultVal="0" label="Seconds" />
            </InputGroup>
          </InputDisplay>
        </SetTimer>
        <ButtonGroup>
          <StopButton disabled={(this.state.mode === "setTime")} label="Stop" />
          <ResetButton disabled label="Reset" />
          <StartButton disabled={(this.state.mode === "displayTime")} label="Start"/>
        </ButtonGroup>
      </Container>
    );
  }
}

XY.propTypes = {
  mode: PropTypes.string.isRequired,
}

export default XY;

