import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/lato/v17/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2) format('woff2');
  }

@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/lato/v17/S6uyw4BMUTPHjx4wXiWtFCc.woff2) format('woff2');
  }

@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/lato/v17/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2) format('woff2');
  }

  html {
  /* color */
  --primary: #EA5548;
  --secondary: #B5E254;
  --secondary-500: #316901;
  --light-gray: #FCFCFC;
  --light-gray-500: #EAEAEA;
  --middle-gray: #ACACAC;
  --middle-gray-500: #606060;
  --dark-gray: #414141;
  --dark-gray-500: #333333;

  /* size */
  --xxs:.5rem; // 8px
  --xs:.625rem; // 10px
  --sm:.875rem; // 14px
  --base:1rem;
  --lg	:1.25rem; // 20px
  --xl: 1.5rem; // 24px
  --xxl:2.5rem; // 40px

  /* others */
  --font-weight-light:300;
  --font-weight-normal: 400;
  --font-weight-bold:700;
  --transition: all 0.3s ease;
  
  box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body{
    font-family:'Lato';
    font-weight:var(--font-weight-normal);
    font-size: var(--base);
    background-color:var(--light-gray-500);
  }

  #root {
    display:flex
  }
  
  button {
    width: 100%;
    outline:none;
    border:none;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }
`;
