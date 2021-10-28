import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme, typeScale, fontWeight } from "../../utils";

const h3 = styled.h3`
  margin: 1.2rem auto;
  padding: 0 auto;
  color: ${theme.mediumTextColor}; 
  font-family: ${theme.primaryFont};
  font-size: ${typeScale.header3} ;
  font-weight: ${fontWeight.bold};
  text-transform: none;
  text-align: center;

  span {
    font-weight: ${fontWeight.regular}
  }
} 
`;

export class Rounds extends React.Component {
  render() {
    const { currentRound, totalRounds } = this.props;
    return (
      <h3>Round {currentRound} <span>of</span> {totalRounds}</h3>
    );
  }
}

Rounds.propTypes = {
  currentRound: PropTypes.string,
  totalRounds: PropTypes.string,
};

export default Rounds;