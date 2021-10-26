import React from "react";
import PropTypes from "prop-types";
import { Container, Header, Title, Subtitle, TimerDisplay, SetTimer, RunTimer, ButtonGroup, InputGroup, NumInput, InputDisplay, Rounds } from "../generic";
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
          <TimerDisplay visible={true} >00:00:00</TimerDisplay>
          <Rounds visible={true}>Round: 1 <span>of</span> 4</Rounds>
        </RunTimer>
        <SetTimer visible={(this.state.mode === "setTime")}>
          <Subtitle>Set Timer</Subtitle>
          <InputDisplay >
            <InputGroup title="Rounds">                   
              <NumInput id="rounds" name="rounds" min="1" max="12" defaultVal="1" label="Number" />
            </InputGroup>
            <InputGroup title="Time Per Round">
              <NumInput id="minutes" name="minutes" min="0" max="59" defaultVal="0" label="Minutes" />
              <NumInput id="seconds" name="seconds" min="0" max="59" defaultVal="0" label="Seconds" />
            </InputGroup>
          </InputDisplay>
        </SetTimer>
        <ButtonGroup>
          <StopButton disabled={(this.state.mode === "setTime")} label="Stop"></StopButton>
          <ResetButton disabled={true} label="Reset"></ResetButton>
          <StartButton disabled={(this.state.mode === "displayTime")} label="Start"></StartButton>
        </ButtonGroup>
      </Container>
    );
  }
}

XY.propTypes = {
  mode: PropTypes.string.isRequired,
}

export default XY;

