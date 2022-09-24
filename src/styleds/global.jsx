import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --font: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    --dark-color-a: #141C2F;
    --dark-color-b: #1F2A48;
    --dark-color-c: #33363D;
    --light-color-a: #F5F8FF;
    --light-color-b: #FEFEFE;
    --blue-color: #0677FB;
    
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-family: var(--font), sans-serif;
    font-size: 1.0rem;
    margin: 0px;
    padding: 0px;
    font-weight: 300;
    background: var(--light-color-a);
    color: var(--dark-color-c);
  }
  h1, h2, h3, h4, p, ul, li, ol, span, a {
    list-style: none;
    font-size: 1rem;
    text-decoration: none;
    padding: 0px;
    margin: 0px;
    color: var(--dark-color-c);
  }
  img {
    max-width: 100%;
  }
`;
