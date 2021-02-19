import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: Arial, Helvetica, sans-serif;
		color: #fff;
	}

	body {
		max-width: 100vw;
		background-color: #eee;
	}

	a {
		color: inherit;
		text-decoration: none;
	}
`

export default GlobalStyle;
