import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    a {
        text-decoration: none;
        color: inherit;
    }

    body, button, input {
        font-family: 'Open Sans', sans-serif;
    }
`