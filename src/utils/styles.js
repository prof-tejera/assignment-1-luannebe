import styled from "styled-components";
import { rem, darken } from 'polished';
import { theme } from './theme';
import { fontWeight, typeScale } from './typography';

//
// Containers
//

export const Container = styled.div`
  width: ${rem('360px')};
  height: ${rem('480px')};
  border: 1px solid ${theme.neutralBackground};
  border-radius: 12px;
  background-color: ${theme.lightBackground};
  filter: ${theme.dropShadow};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
  margin: 20px auto; 
`;

export const Header = styled.div`
  width: 100%;
  height: auto;
  background-color: ${theme.primaryColor};
  margin: 0;
  border-radius: 12px 12px 0px 0px;
`;

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

export const InputDisplay = styled.div`
  width: auto;
  height: auto;
  margin: 0 auto ;
  text-align: center;
`;

export const InputGroup = styled.div`
  margin: 0 6px 6px 3px;
  padding: 4px 3px;
  display: inline-block;
  width: auto;
  border: 1px solid ${theme.secondaryColor};
`;

export const Cycle = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 10px;
`;

export const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto 32px;
`;

//
// Headings
//
export const Title = styled.h2`
  margin: 1.2rem auto;
  padding: 0 auto;
  color: ${theme.lightTextColor}; 
  font-family: ${theme.primaryFont};
  font-size: ${typeScale.header2} ;
  font-weight: ${fontWeight.bold};
  text-transform: uppercase;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Subtitle = styled.h3`
  margin: 1.2rem auto;
  padding: 0 auto;
  color: ${theme.mediumTextColor}; 
  font-family: ${theme.primaryFont};
  font-size: ${typeScale.header3} ;
  font-weight: ${fontWeight.bold};
  text-transform: none;
  text-align: center;
`;

export const Heading = styled.h4`
  margin: 0.2rem auto 0.5rem;
  padding: 0;
  color: ${theme.mediumTextColor}; 
  font-family: ${theme.primaryFont};
  font-size: ${typeScale.small} ;
  font-weight: ${fontWeight.bold};
  text-transform: uppercase;
  text-align: center;
`;
