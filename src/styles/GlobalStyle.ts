import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  *,
  ::after,
  ::before {
  box-sizing: border-box;
  }
  
  html {
    font-family: ${(prop) => prop.theme.font.primary};
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  body {
    color: ${(prop) => prop.theme.color.lightText};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input, select  {
    font-family: inherit;
    outline: none;
    border: none;
  }

  button {
    cursor: pointer;
    font-family: inherit;
    border-style: none;
  }

  ul, li {
    list-style: none;
    text-decoration: none;
    padding-left: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
