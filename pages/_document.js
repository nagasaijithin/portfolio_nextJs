import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <html data-mode="light">
        <Head>
          <meta
            name="description"
            content="Hi, my name is nagasai jithin I'm a frontend web developer most passionate, committed person I completed bachelor computer applications (B.C.A) on my second year I started to learn web development mostly my projects all react-redux This portfolio describes my all projects and about me"
          />
          <link rel="shortcut  icon" href="/static/logo.png" />

          <meta
            name="og:title"
            property="og:title"
            content="Naga Sai Jithin Pasupuleti Portfolio"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="robots" content="index, follow" />

          {/* <meta  property="twitter:card" content="summary_large_image"> */}
          {/* <meta  property="twitter:url" content="nagasaijithin"> */}
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
