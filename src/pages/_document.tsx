import React from "react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "stitches.config";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="pt_BR">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.ico" />
          <meta
            property="og:image"
            content="https://ecode-zeta.vercel.app/og-image.png"
          />

          <meta property="og:title" content="ecode test frontend" />

          <meta
            property="og:description"
            content="A full description of the page."
          />

          <meta property="og:image:width" content="200" />

          <meta property="og:image:height" content="100" />
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
