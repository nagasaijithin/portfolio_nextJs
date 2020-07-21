import App from "next/app";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";

import LayOut from "../components/layout";
const theme = {
  colors: {
    blackBackground: "#3A3939",
    textColor: "#ffffff",
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
}
 body {
    font-family: 'Raleway', sans-serif;
 }
 `;
export default class MyApp extends App {
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
