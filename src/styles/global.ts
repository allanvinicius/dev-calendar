import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
    --gray100: #121214;
    --gray200: #202024;
    --gray300: #323238;
    --gray400: #A9A9B2;
    --white: #FFFFFF;
}

* {
    list-style: none;
    text-decoration: none;
    margin: 0;
    padding: 0;
    text-align: left;
    border: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
    color: var(--gray100);
    font-size: 1.6rem;
    font-family: var(--inter);
}

body {
    background-color: var(--gray100);
}

button {
    background: transparent;
    cursor: pointer;
}

html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    overflow-x: hidden;

    @media (max-width: 1050px) {
        font-size: 55%;
    }

    @media(max-width: 990px) {
        font-size: 62.5%;
    }

    @media (max-width: 600px) {
        scroll-behavior: smooth;
        font-size: 62.5%;
    }

    @media (max-width: 280px) {
        font-size: 55%
    }
}

img {
    display: block;
    max-width: 100%;
}

a,
span,
small {
  display: block;
}

input,
button,
textarea {
    appearance: none;
}
`;
