import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../../utils";
import { darken, rem } from 'polished';
import { StartButton, StopButton, ResetButton, Button } from "../generic/Button";

const Container = styled.div`
  width: ${rem('360px')};
  height: ${rem('480px')};
  border: 1px solid ${theme.neutralBackground};
  border-radius: 12px;
  background-color: ${theme.lightBackground};
  filter: ${theme.dropShadow};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
  margin: 20px auto;
  position: relative; 
`;

const Header = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${theme.primaryColor};
  margin: 0;
  border-radius: 12px 12px 0px 0px;
`;

const Title = styled.h1`
  color: ${theme.lightTextColor}; 
  font-family: ${theme.primaryFont};
  font-size: 24px ;
  font-weight: 700;
  text-transform: uppercase;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

`

const TimerDisplay = styled.div`
  width: auto;
  height: 80px;
  margin: 0 10px 60px;
  color: ${theme.lightTextColor};
  font-family: ${theme.displayFont};
  font-size: 60px;
  line-height: 78px;
  text-align:  center;
  background-color: ${theme.darkBackground};
  border-radius: 9px;
`;

const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 40px;
`;

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
          <StopButton disabled="true" label="Stop"></StopButton>
          <ResetButton disabled="true" label="Reset"></ResetButton>
          <StartButton label="Start">Start</StartButton>
        </ButtonGroup>
      </Container>
    );
  }
}

export default Stopwatch;
