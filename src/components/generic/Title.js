import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme, typeScale, fontWeight } from "../../utils";
import { darken, rem } from 'polished';

export const Title = styled.h2`
  margin: 1.2rem auto;
  padding: 0 auto;
  color: ${theme.lightTextColor}; 
  font-family: ${theme.primaryFont};
  font-size: ${typeScale.header2} ;
  font-weight: ${fontWeight.bold};
  text-transform: uppercase;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`