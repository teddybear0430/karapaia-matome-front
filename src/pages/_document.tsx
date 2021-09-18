import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return { ...initialProps }
  // }

  render() {
    const GA_TRACKING_ID = 'G-KFMR91P7Z6';

    return (
      <Html>
        <Head>
          <meta name="description" content="カラパイアのまとめサイトです。" />
          <link rel="icon" href="/favicon.ico" />
          {
            // <!-- Global site tag (gtag.js) - Google Analytics -->
          }
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_TRACKING_ID}');
            `,
            }}
          />
        </Head>
        <body className="bg-white dark:bg-black transition-all duration-200">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
