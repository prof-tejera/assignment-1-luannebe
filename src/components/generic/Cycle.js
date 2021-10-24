import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme, typeScale, fontWeight } from "../../utils";
import { darken, rem } from 'polished';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 10px;
`;

export class Cycle extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isDisabled: false,
    };
  }

  render() {
    return (
      <Container> 
        {this.props.children}
      </Container> 
    );
  }
}



export default Cycle;
