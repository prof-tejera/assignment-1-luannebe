import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../../utils";
import { darken, rem } from 'polished';

export const Header = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${theme.primaryColor};
  margin: 0;
  border-radius: 12px 12px 0px 0px;
`;

export default Header;