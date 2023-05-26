import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Noto Sans', sans-serif;
    color: #000;
    font-size: 16px;
    line-height: 1;
    /* Add more global styles here */
  }

  /* Add more global styles for other elements if needed */
`;

export default GlobalStyle;
