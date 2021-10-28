import styled from "styled-components";
import { rem,  } from 'polished';
import { theme } from './theme';

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

export const RunTimer = styled.div`
  display: ${(props) => props.visible ? "block" : "none"};
  width: auto;
  height: auto;
`;

export const SetTimer = styled.div`
  display: ${(props) => props.visible ? "block" : "none"};
  width: auto;
  height: auto;
  margin-bottom: 20px
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


