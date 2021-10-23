import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../../utils";
import { darken, rem } from 'polished';

const Input = styled.input`
  height: 40px;
  width: ${rem('60px')};
  margin: 3px;
  border-width: 0;
  border-radius: 3px;
  color: ${theme.mediumBackgroundColor};
  font-size: 36px;
  font-weight: 400;
  font-family: ${theme.displayFont};
  display: block;
`;

const Label = styled.label`
  margin: 6px;
  border-width: 0;
 /* color: ${theme.mediumTextColor};*/
  color: ${(props) => props.color};
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  display: block;
`;

export class NumInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: false,
    };
  }

  render() {
    const { id, name, min, max, defaultVal, label } = this.props;
    return (
      <div>
        <Input type="number" id={id} name={name} min={min} max={max} default={defaultVal} />
        <Label for={id} color={theme.mediumTextColor} > {label} </Label>
      </div> 
    );
  }
}




/*
Input.propTypes = {
  label: PropTypes.string,
}; */

export default NumInput;

