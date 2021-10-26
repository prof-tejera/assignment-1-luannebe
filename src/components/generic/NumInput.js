import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme, fontWeight } from "../../utils";
import { rem } from 'polished';

const Container = styled.div`
  text-align: center;
  display: inline-block;
  width: 5rem;
  margin: 0 0 6px ;
`; 

const Input = styled.input.attrs({ type: 'number' })`
  width: 4.5rem;
  margin: 3px 0;
  border-width: 0;
  border-radius: 3px;
  background-color: ${theme.mediumBackground};
  font-size: ${rem('32px')};
  font-weight: ${fontWeight.regular};
  font-family: ${theme.displayFont};
  color: ${theme.darkTextColor};
  padding: 3px;
  text-align: center;
`;

const Label = styled.label`
  margin: 6px auto;
  border-width: 0;
  color: ${theme.mediumTextColor};
  font-size: 12px;
  font-weight: ${fontWeight.bold};
  text-transform: uppercase;
  text-align: center;
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
        <Label htmlFor="{id}"> {label} </Label>
      </Container> 
    );
  }
}

NumInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
  defaultValue: PropTypes.string,
  label: PropTypes.string,
}; 

export default NumInput;

