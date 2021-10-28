import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme, fontWeight,  } from "../../utils";
import { rem } from 'polished';

const Container = styled.div`
  display: block;
  width: auto;
  height: ${rem('80px')};
  margin: 0 10px 38px;
  color: ${theme.lightTextColor};
  font-family: ${theme.displayFont};
  font-size: ${rem('60px')};
  font-weight: ${fontWeight.regular};
  line-height: ${rem('80px')};
  text-align:  center;
  background-color: ${theme.darkBackground};
  border-radius: 9px;
`;

export class TimerDisplay extends React.Component {
  render() {
    const { hours, minutes, seconds } = this.props;
    return (
      <Container>{hours}:{minutes}:{seconds}</Container>
    );
  }
}

TimerDisplay.propTypes = {
  hours: PropTypes.string,
  minutes: PropTypes.string,
  seconds: PropTypes.string,
};

TimerDisplay.defaultProps = {
  hours: "00",
  minutes: "00",
  seconds: "00",
};


export default TimerDisplay;

