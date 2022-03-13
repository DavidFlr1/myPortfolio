import { createGlobalStyle } from 'styled-components'
import fontFiles from './fonts/fonts'

export const GlobalStyle = createGlobalStyle`
	html {
	   overflow-y: visible;
	   box-sizing: border-box;
     font-size: 62.5%;
	}
	*,
	*::before,
	*::after {
	   box-sizing: inherit;
	}
  
`
