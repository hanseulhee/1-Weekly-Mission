import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Pretendard";
  }

  html, body {
    position: relative;
    width: 100%;
    height: 100%;
    font-size: 62.5%;
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.black};
  }

  a {
  text-decoration: none;
  cursor: pointer;
}
`;

export default GlobalStyle;
