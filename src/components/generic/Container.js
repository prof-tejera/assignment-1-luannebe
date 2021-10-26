import styled from "styled-components";
import { theme } from "../../utils";
import { rem } from 'polished';

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
