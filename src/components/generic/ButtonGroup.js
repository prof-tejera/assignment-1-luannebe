import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../../utils";
import { darken, rem } from 'polished';

export const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto 32px;
`;