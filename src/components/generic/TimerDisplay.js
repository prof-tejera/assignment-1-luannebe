import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../../utils";
import { darken, rem } from 'polished';

export const TimerDisplay = styled.div`
  width: auto;
  height: 80px;
  margin: 0 10px 60px;
  color: ${theme.lightTextColor};
  font-family: ${theme.displayFont};
  font-size: 60px;
  line-height: 78px;
  text-align:  center;
  background-color: ${theme.darkBackground};
  border-radius: 9px;
`;