import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 10px;
`;

export class Cycle extends React.Component {

  render() {
    return (
      <Container> 
        {this.props.children}
      </Container> 
    );
  }
}

Cycle.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};



export default Cycle;
