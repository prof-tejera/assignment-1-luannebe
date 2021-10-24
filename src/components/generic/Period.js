import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme, fontWeight, typeScale } from "../../utils";
import { darken, rem } from 'polished';

export class Period extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: props.disabled,
    };
  }

  render() {
    const { label, current } = this.props;
    return (
      <div current={this.props.current} className={this.props.className}>{label}</div>
    );
  }
}

const StyledPeriod = styled(Period)`
  height: auto;
  min-width: 30%;
  margin: 1px;
  padding: .5em 1em;
  border-width: 0;
  border-radius: 0;
  text-align: center;
  font-family: ${theme.primaryFont};
  font-size: ${typeScale.header5};
  font-weight: ${fontWeight.extrabold};
  text-transform: uppercase;
`;

export const WorkPeriod = styled(StyledPeriod) `
  background-color: display: ${(props) => props.current ? theme.stopColor : theme.lightBackground };

`;

export const RestPeriod = styled(StyledPeriod) `
  background-color: ${theme.resetColor};


`;



/*
Button.propTypes = {
  label: PropTypes.string,
}; */

export default Period;

