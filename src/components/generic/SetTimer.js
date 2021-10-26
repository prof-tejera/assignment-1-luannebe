import PropTypes from "prop-types";
import styled from "styled-components";

export const SetTimer = styled.div`
  display: ${(props) => props.visible ? "block" : "none"};
  width: auto;
  height: auto;
  margin-bottom: 20px
`;

SetTimer.propTypes = {
  visible: PropTypes.bool.isRequired,
};

