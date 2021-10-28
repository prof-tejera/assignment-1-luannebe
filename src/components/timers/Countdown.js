import React from "react";
import PropTypes from "prop-types";
import { NumInput, TimerDisplay, } from "../generic";
import { Container, Header, RunTimer, SetTimer, InputDisplay, ButtonGroup,   } from "../../utils/containers";
import { Title, Subtitle, } from "../../utils/headings";
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
          <TimerDisplay hours="00" minutes="00" seconds="00" />
        </RunTimer>
        <SetTimer visible={(this.state.mode === "setTime")}>
          <Subtitle>Set Timer</Subtitle>
          <InputDisplay >
            <NumInput id="hours" name="hours" min="0" max="12" label="Hours" />
            <NumInput id="minutes" name="minutes" min="0" max="59" label="Minutes" />
            <NumInput id="seconds" name="seconds" min="0" max="59" label="Seconds" />
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
