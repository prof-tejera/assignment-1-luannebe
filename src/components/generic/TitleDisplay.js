import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../../utils";
import { darken, rem } from 'polished';

export const Title = styled.h1`
  color: ${theme.lightTextColor}; 
  font-family: ${theme.primaryFont};
  font-size: 24px ;
  font-weight: 700;
  text-transform: uppercase;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`