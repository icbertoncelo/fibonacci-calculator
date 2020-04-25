import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin:0;
    padding:0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100vh;
    padding: 40px;
    font-family: Arial, Helvetica, sans-serif;

    button {
      cursor: pointer;
    }
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
  }

`;
