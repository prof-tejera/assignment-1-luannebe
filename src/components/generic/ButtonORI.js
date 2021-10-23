import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../../utils";
import { darken, rem } from 'polished';

export class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: false,
    };
  }

  render() {
    const { label } = this.props;
    return (
      <button disabled={this.props.disabled} className={this.props.className} onClick={() => this.setState({ isDisabled: true })}>{label}</button>
    );
  }
}

const StyledButton = styled(Button)`
  height: 40px;
  width: ${rem('80px')};
  margin: 6px;
  border-width: 0;
  border-radius: 40px;
  filter: ${theme.dropShadow};
  color: ${theme.lightTextColor};
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  font-family: "Open Sans", sans-serif;
  font-weight: 700;

  &:hover {
    filter: ${theme.dropShadowOnHover};
  }

  &:disabled {
    background-color: ${theme.disabledColor};
    filter: none;
    &:hover{
      filter: none;
      cursor: not-allowed;
      background-color: ${darken('0', theme.disabledColor)}
    }
  }
`;

export const StartButton = styled(StyledButton) `
  background-color: ${theme.startColor};

  &:hover {
    background-color: ${darken('0.1', theme.startColor)};
  }

  &:disabled {
    background-color: ${theme.disabledColor};
    filter: none;
    &:hover{
      filter: none;
      cursor: not-allowed;
      background-color: ${darken('0', theme.disabledColor)}
    }
  }
`;

export const StopButton = styled(StyledButton) `
  background-color: ${theme.stopColor};

  &:hover {
    background-color: ${darken('0.1', theme.stopColor)};
  }
`;

export const ResetButton = styled(StyledButton) `
  background-color: ${theme.resetColor};

  &:hover {
    background-color: ${darken('0.1', theme.resetColor)};
  }
`;

/*
Button.propTypes = {
  label: PropTypes.string,
}; */

export default Button;

