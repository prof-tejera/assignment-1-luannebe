import PropTypes from "prop-types";
import styled from "styled-components";

export const RunTimer = styled.div`
  display: ${(props) => props.visible ? "block" : "none"};
  width: auto;
  height: auto;
`;

RunTimer.propTypes = {
  visible: PropTypes.bool.isRequired,
};
