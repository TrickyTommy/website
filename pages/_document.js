import NextDocument, { Head, Html, Main, NextScript } from "next/document";

import React from "react";

export default class Document extends NextDocument {
  /** @param {import('next/document').DocumentContext} ctx */
  static async getInitialProps(ctx) {
    const initialProps = await NextDocument.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
