import App from "next/app";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";

import LayOut from "../components/layout";
const theme = {
  colors: {
    blackBackground: "#3A3939",
    blacktextColor: "#ffffff",
  },
  mediaqury: {
    laptopLarg: "(max-width: 844px)",
    laptopMid: "(max-width: 734px)",
  },
};
const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin:0;
    box-sizing: border-box;
}

html {
    box-sizing: border-box;
    font-size: 52.6%;
    scroll-behavior: smooth;
    --blackBackgroundColor: ${({ theme }) => theme.colors.blacktextColor};
  --blackTextColor:${({ theme }) => theme.colors.blackBackground}   ;
  @media ${({ theme }) => theme.mediaqury.laptopLarg} {
    font-size: 43.6%;

  }
}

html[data-mode="dark"] {
  --blackBackgroundColor: ${({ theme }) => theme.colors.blackBackground};
  --blackTextColor: ${({ theme }) => theme.colors.blacktextColor};
} 

 body {
    font-family: 'Raleway', sans-serif;
 }
 `;
export default class MyApp extends App {
  componentDidMount() {
    let localState = localStorage.getItem("_theme");
    if (localState) {
      document.documentElement.setAttribute(
        "data-mode",
        JSON.parse(localState)
      );
    } else {
      localStorage.setItem("_theme", JSON.stringify("light"));
    }
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <LayOut>
          <Component {...pageProps} />
          <GlobalStyle />
        </LayOut>
      </ThemeProvider>
    );
  }
}
