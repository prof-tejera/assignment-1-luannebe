import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../../utils";
import { darken, rem } from 'polished';

export const InputDisplay = styled.div`
  width: auto;
  height: auto;
  margin: 0 10px 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;