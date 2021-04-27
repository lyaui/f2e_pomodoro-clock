import { createGlobalStyle } from 'styled-components';

// @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');

export const GlobalStyle = createGlobalStyle`
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
  --transition: all 0.3s ease;
  box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body{
    font-size: var(--base);
    background-color:var(--light-gray-500);
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
