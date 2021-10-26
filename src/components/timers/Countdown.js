import React from "react";
import PropTypes from "prop-types";
import { Container, Header, Title, Subtitle, TimerDisplay, SetTimer, ButtonGroup, NumInput, InputDisplay } from "../generic";
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
        <TimerDisplay 
          visible={(this.state.mode === "displayTime") } >00:00:00</TimerDisplay>
        <SetTimer visible={(this.state.mode === "setTime")}>
          <Subtitle>Set Timer</Subtitle>
          <InputDisplay >
            <NumInput id="hours" name="hours" min="0" max="12" defaultVal="0" label="Hours" />
            <NumInput id="minutes" name="minutes" min="0" max="59" defaultVal="0" label="Minutes" />
            <NumInput id="seconds" name="seconds" min="0" max="59" defaultVal="0" label="Seconds" />
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

Countdown.propTypes = {
  mode: PropTypes.string.isRequired,
}

export default Countdown;
