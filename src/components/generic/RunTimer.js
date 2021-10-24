import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../../utils";
import { darken, rem } from 'polished';

export const RunTimer = styled.div`
  display: ${(props) => props.visible ? "block" : "none"};
  width: auto;
  height: auto;
`;
