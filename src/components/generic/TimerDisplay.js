import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme, typeScale, fontWeight } from "../../utils";
import { darken, rem } from 'polished';

export const TimerDisplay = styled.div`
  display: ${(props) => props.visible};
  width: auto;
  height: ${rem('80px')};
  margin: 0 10px 60px;
  color: ${theme.lightTextColor};
  font-family: ${theme.displayFont};
  font-size: ${rem('60px')};
  font-weight: ${fontWeight.regular};
  line-height: ${rem('80px')};
  text-align:  center;
  background-color: ${theme.darkBackground};
  border-radius: 9px;
`;