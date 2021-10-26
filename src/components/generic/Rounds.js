import PropTypes from "prop-types";
import styled from "styled-components";
import { theme, typeScale, fontWeight } from "../../utils";

export const Rounds = styled.h3`
  display: ${(props) => props.visible ? "block" : "none"};
  margin: 1.2rem auto;
  padding: 0 auto;
  color: ${theme.mediumTextColor}; 
  font-family: ${theme.primaryFont};
  font-size: ${typeScale.header3} ;
  font-weight: ${fontWeight.bold};
  text-transform: none;
  text-align: center;

  span {
    font-weight: ${fontWeight.regular}
  }
} 
`;

Rounds.propTypes = {
  visible: PropTypes.bool.isRequired,
}