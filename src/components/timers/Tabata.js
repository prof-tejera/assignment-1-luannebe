import React from "react";
import PropTypes from "prop-types";
import { Container, Header, Title, Subtitle, TimerDisplay, SetTimer, RunTimer, ButtonGroup, InputGroup, NumInput, InputDisplay, Rounds, Cycle } from "../generic";
import { WorkPeriod, RestPeriod } from "../generic/Period";
import { StartButton, StopButton, ResetButton } from "../generic/Button";


class Tabata extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: props.mode,
    };
  }

  render() {
    
    return (
      <Container>
        <Header><Title>Tabata</Title></Header>
        <RunTimer visible={this.state.mode === "displayTime"}>
          <TimerDisplay visible={true} >00:00:00</TimerDisplay>
          <Rounds visible={true}>Round 1 <span>of</span> 4</Rounds>
          <Cycle>
            <WorkPeriod currentPeriod={false} label="Work" />
            <RestPeriod currentPeriod={true} label="Rest" />
          </Cycle>
        </RunTimer>

        <SetTimer visible={ this.state.mode === "setTime" }>
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
            <InputGroup title="Rounds">                   
              <NumInput id="rounds" name="rounds" min="1" max="12" defaultVal="1" label="Number" />
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

Tabata.propTypes = {
  mode: PropTypes.string.isRequired,
  currentPeriod: PropTypes.bool
}

export default Tabata;

