import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}

@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;600&display=swap");

*{
  font-family: "Noto Sans KR", sans-serif;
    outline:none;
}

body {
  background-color: #f5f5f5;
  font-family: "Noto Sans KR", sans-serif;
}
`;

export default GlobalStyle;
