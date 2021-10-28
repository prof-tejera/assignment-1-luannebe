import styled from "styled-components";
import { theme } from './theme';
import { fontWeight, typeScale } from './typography';
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