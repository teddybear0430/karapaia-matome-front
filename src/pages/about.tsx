import type { NextPage } from 'next';
import Head from 'next/head';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>カラパイアまとめ | このサイトについて</title>
      </Head>
      <main>
        <h2 className="mb-3 font-bold border-b-2 border-black dark:border-darkmodeWhite leading-8">
          このサイトについて
        </h2>
        <p className="mb-3">カラパイアの更新情報を提供しているまとめサイトです。</p>
        <h2 className="mb-3 font-bold border-b-2 border-black dark:border-darkmodeWhite leading-8">登録基準について</h2>
        <p className="mb-3">毎日午前9時に更新が行われます。</p>
        <h2 className="mb-3 font-bold border-b-2 border-black dark:border-darkmodeWhite leading-8">削除基準について</h2>
        <p className="mb-3">一定期間経過した記事は削除されます。</p>
        <h2 className="mb-3 font-bold border-b-2 border-black dark:border-darkmodeWhite leading-8">
          お問い合わせについて
        </h2>
        <p className="mb-3">
          お問合せに関しては、TwitterのDMまでお願いいたします。改善点やこんな機能を実装して欲しいという要望に関してもお待ちしております。
          <br />
          <a className="hover:underline text-blue dark:text-darkmodeBlue" href="https://twitter.com/karukichi_yah">
            運営者のTwitter
          </a>
        </p>
      </main>
    </>
  );
};

export default About;
