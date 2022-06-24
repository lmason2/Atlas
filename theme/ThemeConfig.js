import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#FEF5ED",
  text: "#ADC2A9",
  basic: "#878787",
  font: `'Nunito', sans-serif`,
};

export const darkTheme = {
  body: "#99A799",
  text: "#D3E4CD",
  basic: "white",
  font: `'Nunito', sans-serif`,
};

export const GlobalStyles = createGlobalStyle`
    body {
      background: ${({ theme }) => theme.body};
      color: ${({ theme }) => theme.text};
      font-family: 'Nunito', sans-serif;
      transition: all 0.50s linear;
      height: 100vh;
      margin: 0px;
      display: flex;
      flex-direction: column;
    }

    #__next {
        height: 100%;
    }
  `;
