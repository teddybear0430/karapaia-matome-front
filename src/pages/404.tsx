import type { NextPage } from 'next';
import Head from 'next/head';

const Custom404: NextPage = () => {
  // MEMO: 404の時はレイアウトを変更したい
  // 参考サイト: https://imatomix.com/imatomix/notes/1591872503
  return (
    <>
      <Head>
        <title>404 Not Found</title>
      </Head>
      <p className="font-bold">404 Not Found</p>
    </>
  );
};

export default Custom404;
