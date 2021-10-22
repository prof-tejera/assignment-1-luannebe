import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../../utils";
import { darken, rem } from 'polished';

export const ControlPanel = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 40px;
`;