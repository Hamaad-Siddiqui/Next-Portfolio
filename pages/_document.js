import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/inter-var-latin.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/favicons/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />

          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="msapplication-TileColor" content="#3d3d3d" />
          <meta name="theme-color" content="#ffffff" />
          <meta
            name="keywords"
            content="Hamaad Siddiqui, developer, javascript, react, software engineer, hammad, siddiqui, hamaad, full stack"
          />
          <meta
            content="/static/favicons/favicons/browserconfig.xml"
            name="msapplication-config"
          />
          <meta
            name="google-site-verification"
            content="GsScwj6oXg1W0jAK1DevFa4p9a5Hows_gxGBqsPS6Pw"
          />
        </Head>
        <body className="bg-light dark:bg-dark text-white dark:text-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
