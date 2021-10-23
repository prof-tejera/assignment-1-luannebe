import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../../utils";
import { darken, rem } from 'polished';

const Container = styled.div`
  text-align: center;
  display: inline-block;
`; 

const Input = styled.input.attrs({ type: 'number' })`
  display: inline;
  margin: 3px;
  border-width: 0;
  border-radius: 3px;
  background-color: ${theme.mediumBackground};
  font-size: 36px;
  font-weight: 400;
  font-family: ${theme.displayFont};
  color: ${theme.darkTextColor};

`;

const Label = styled.label`
  margin: 6px;
  border-width: 0;
  color: ${theme.mediumTextColor};
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
    this.value = React.createRef();
  }

  render() {
    const { id, name, min, max, defaultVal, label } = this.props;
    return (
      <Container>
        <Input type="number" id={id} name={name} min={min} max={max} ref={this.value} defaultValue={defaultVal} />
        <Label for={id}> {label} </Label>
      </Container> 
    );
  }
}




/*
Input.propTypes = {
  label: PropTypes.string,
}; */

export default NumInput;

