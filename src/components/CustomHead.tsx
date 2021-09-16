import React from 'react';
import Head from 'next/head';

type Props = {
  title: string;
  url: string;
  description: string;
};

const CustomHead: React.FC<Props> = ({ title, url, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@karukichi_yah" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content="ja_JP" />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${url}/ogp.png`} />
      <meta property="og:type" content="website" />
    </Head>
  );
};

export default CustomHead;
