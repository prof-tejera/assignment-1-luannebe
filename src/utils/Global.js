import { theme } from "./theme";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

	html {
		font-size: 16px;
		box-sizing: border-box;
		 -webkit-font-smoothing: antialiased;
  		-moz-osx-font-smoothing: grayscale;		
	}

	*, *:before, *:after {
		box-sizing: inherit;
	}

	body {
		margin: 20px;
		font-family: ${theme.primaryFont};
		background-color: ${theme.neutralBackground};
	}
`