import { createGlobalStyle } from 'styled-components';
import { baseFontSize, colors, fontSize } from './theme';

export default createGlobalStyle`

:root {
  --toastify-color-light: #3498db;
  --toastify-color-info: white;
  --toastify-toast-background: #3498db;
  --toastify-text-color-light: white;
  height: 100%;
  font-size: ${baseFontSize};
}
body {
	margin: 0 auto;
	height: 100%;
	display: flex;
	flex-direction: column;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
		'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
		sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	font-size: ${fontSize.regular};
	color: ${colors.text};
}

#__next {
    flex: 1;
    flex-direction: column;
    display: flex;
    align-items: stretch;
}   

code {
	font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
		monospace;
}
#root {
	height: 100%;
	display: flex;
	flex-direction: column;
}

a {
	color: blue;
	text-decoration: none;
	cursor: pointer;
}

p {
  margin: 8px 0;
}

h1, h2, h3,h4,h5,h6 {
  margin: 0;
}
`;
