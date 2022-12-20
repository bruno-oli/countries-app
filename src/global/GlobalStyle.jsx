import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;
    transition: background .3s;
  } body {
    background-color: ${props => props.theme.colors.background};
  }
`

export default GlobalStyle