import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }


  html, body, #root {
    height: 100%;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  body {
    background-color: #F4F6FE;
    font-family: 'Poppins', sans-serif;
    overflow: hidden;
  }



`;

export default GlobalStyle;
