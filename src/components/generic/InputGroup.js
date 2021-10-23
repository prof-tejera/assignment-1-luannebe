import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme, typeScale, fontWeight } from "../../utils";
import { darken, rem } from 'polished';

const Container = styled.div`
  display: block;
`;

const Title = styled.h6`
  margin: 0.2rem auto 0.5rem;
  padding: 0 auto;
  color: ${theme.mediumTextColor}; 
  font-family: ${theme.primaryFont};
  font-size: ${typeScale.small} ;
  font-weight: ${fontWeight.bold};
  text-transform: uppercase;
  text-align: center;
`;

export class InputGroup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isDisabled: false,
    };
  }

  render() {
    const { title } = this.props;
    return (
      <Container> 
        <Title>{title}</Title> 
        {this.props.children}
      </Container> 
    );
  }
}



export default InputGroup;
