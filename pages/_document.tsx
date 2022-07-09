import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          {/* Meta Tags */}
          <meta name="title" content="RPM Esports F1" key="title" />

          {/* Mukta Font Import */}
          <link
            rel="preload"
            href="/assets/fonts/Mukta-Regular.ttf"
            as="font"
            crossOrigin=""
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
