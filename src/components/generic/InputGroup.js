import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme, typeScale, fontWeight } from "../../utils";

const Container = styled.div`
  margin: 0 6px 6px 3px;
  padding: 4px 3px;
  display: inline-block;
  width: auto;
  border: 1px solid ${theme.secondaryColor};
`;

const Title = styled.h6`
  margin: 0.2rem auto 0.5rem;
  padding: 0;
  color: ${theme.mediumTextColor}; 
  font-family: ${theme.primaryFont};
  font-size: ${typeScale.small} ;
  font-weight: ${fontWeight.bold};
  text-transform: uppercase;
  text-align: center;
`;

export class InputGroup extends React.Component {

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

InputGroup.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default InputGroup;
