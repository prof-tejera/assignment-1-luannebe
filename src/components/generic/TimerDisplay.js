import styled from "styled-components";
import { theme, fontWeight } from "../../utils";
import { rem } from 'polished';

export const TimerDisplay = styled.div`
  display: block;
  width: auto;
  height: ${rem('80px')};
  margin: 0 10px 38px;
  color: ${theme.lightTextColor};
  font-family: ${theme.displayFont};
  font-size: ${rem('60px')};
  font-weight: ${fontWeight.regular};
  line-height: ${rem('80px')};
  text-align:  center;
  background-color: ${theme.darkBackground};
  border-radius: 9px;
`;