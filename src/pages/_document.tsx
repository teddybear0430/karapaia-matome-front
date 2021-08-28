import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return { ...initialProps }
  // }

  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="カラパイアのまとめサイトです。" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className="bg-white dark:bg-black dark:bg-opacity-90 transition-all duration-200">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
