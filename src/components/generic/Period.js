import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme, fontWeight, typeScale } from "../../utils";
import { lighten } from 'polished';

export class Period extends React.Component {

  render() {
    const { label } = this.props;
    return (
      <div className={this.props.className}>{label}</div>
    );
  }
}

const StyledPeriod = styled(Period)`
  height: auto;
  min-width: 30%;
  margin: 1px;
  padding: .35em 1em;
  border: 1px solid transparent;
  border-width: 1px;
  border-style: solid;
  border: ${theme.secondaryColor};
  text-align: center;
  font-family: ${theme.primaryFont};
  font-size: ${typeScale.header5};
  font-weight: ${fontWeight.bold};
  text-transform: uppercase;
  border-width: 1px;
`;

export const WorkPeriod = styled(StyledPeriod) `
  border-radius: 6px 0 0 6px;
  color: ${(props) => props.currentPeriod ? theme.lightTextColor : lighten(0.4, (theme.mediumTextColor)) };
  background: ${(props) => props.currentPeriod ? theme.hotGradient : theme.neutralBackground };
  border-color: ${(props) => props.currentPeriod ? theme.hotGradient : theme.secondaryColor };
`;

export const RestPeriod = styled(StyledPeriod) `
  border-radius: 0 6px 6px 0;
  color: ${(props) => props.currentPeriod ? theme.lightTextColor : lighten(0.4, (theme.mediumTextColor)) };
  background: ${(props) => props.currentPeriod ? theme.coolGradient : theme.neutralBackground };
  border-color: ${(props) => props.currentPeriod ? theme.coolGradient : theme.secondaryColor };

`;


Period.propTypes = {
  label: PropTypes.string,
  currentPeriod: PropTypes.bool,
}; 

export default Period;

