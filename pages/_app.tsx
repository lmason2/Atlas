import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { lightTheme, darkTheme, GlobalStyles } from "../theme/ThemeConfig";
import { LandingPageButton, NavBarContainer } from "./index";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
      <NavBarContainer id="root-nav">
        <LandingPageButton onClick={toggleTheme}>
          {theme == "light" ? `Dark Mode` : `Light Mode`}
        </LandingPageButton>
      </NavBarContainer>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
