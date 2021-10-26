import React from "react";
import PropTypes from "prop-types";
import { Container, Header, Title, Subtitle, TimerDisplay, SetTimer, RunTimer, ButtonGroup, NumInput, InputDisplay } from "../generic";
import { StartButton, StopButton, ResetButton } from "../generic/Button";


class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: props.mode,
    };
  }

  render() {
    return (
      <Container>
        <Header><Title>Countdown</Title></Header>
        <RunTimer visible={this.state.mode === "displayTime"}>
          <TimerDisplay>00:00:00</TimerDisplay>
        </RunTimer>
        <SetTimer visible={(this.state.mode === "setTime")}>
          <Subtitle>Set Timer</Subtitle>
          <InputDisplay >
            <NumInput id="hours" name="hours" min="0" max="12" defaultVal="0" label="Hours" />
            <NumInput id="minutes" name="minutes" min="0" max="59" defaultVal="0" label="Minutes" />
            <NumInput id="seconds" name="seconds" min="0" max="59" defaultVal="0" label="Seconds" />
          </InputDisplay>
        </SetTimer>
        <ButtonGroup>
          <StopButton disabled={(this.state.mode === "setTime")} label="Stop" />
          <ResetButton disabled label="Reset"  />
          <StartButton disabled={(this.state.mode === "displayTime")} label="Start" />
        </ButtonGroup>
      </Container>
    );
  }
}

Countdown.propTypes = {
  mode: PropTypes.string.isRequired,
}

export default Countdown;
