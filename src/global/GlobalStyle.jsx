import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;
    transition: background .2s;
  } body {
    background-color: ${props => props.theme.colors.background};
  } a {
    text-decoration: none;
  }
`

export default GlobalStyle