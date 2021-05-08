import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `

    * {
        box-sizing: border-box;
    }

    html,
    body {
        padding: 0;
        margin: 0;
        scroll-behavior: smooth;
    }

    a {
        color: inherit;
        text-decoration: none;
    }



`;

export default GlobalStyle;