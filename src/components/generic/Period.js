import styled from "styled-components";
import { theme, fontWeight, typeScale } from "../../utils";
import { lighten } from 'polished';

const StyledPeriod = styled.div`
  height: auto;
  min-width: 30%;
  padding: .35em 1em;
  border-width: 1px;
  border-style: solid;
  text-align: center;
  font-family: ${theme.primaryFont};
  font-size: ${typeScale.header5};
  font-weight: ${fontWeight.bold};
  text-transform: uppercase;
  border-width: 1px;
`;

export const WorkPeriod = styled(StyledPeriod) `
  border-radius: 3px 0 0 3px;
  color: ${(props) => props.currentPeriod ? theme.lightTextColor : lighten(0.4, (theme.mediumTextColor)) };
  background: ${(props) => props.currentPeriod ? theme.hotGradient : theme.neutralBackground };
  border-color: ${(props) => props.currentPeriod ? theme.secondaryColor : theme.secondaryColor };
`;

export const RestPeriod = styled(StyledPeriod) `
  border-radius: 0 3px 3px 0;
  color: ${(props) => props.currentPeriod ? theme.lightTextColor : lighten(0.4, (theme.mediumTextColor)) };
  background: ${(props) => props.currentPeriod ? theme.coolGradient : theme.neutralBackground };
  border-color: ${(props) => props.currentPeriod ? theme.secondaryColor : theme.secondaryColor };

`;


