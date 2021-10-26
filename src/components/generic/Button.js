import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme, fontWeight, typeScale } from "../../utils";
import { darken, rem } from 'polished';

export class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: props.disabled,
    };
  }

  render() {
    const { disabled, className, label } = this.props;
    return (
      <button disabled={disabled} className={className} onClick={() => this.setState({ isDisabled: true })}>{label}</button>
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
  font-family: ${theme.primaryFont};
  font-size: ${typeScale.header5};
  font-weight: ${fontWeight.bold};
  text-transform: uppercase;
  cursor: pointer;

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


Button.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  disabled: false,
};

export default Button;

