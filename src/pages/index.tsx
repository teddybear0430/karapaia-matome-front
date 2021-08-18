import type { NextPage, InferGetStaticPropsType, GetStaticProps } from 'next';
import Head from 'next/head';
import SelectBox from '../components/SelectBox';
import PostItem from '../components/Post';
import { Post } from '../types/post';
import { options } from '../config/config';

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>カラパイアまとめ</title>
      </Head>
      <main>
        <div className="flex justify-end">
          <SelectBox options={options} />
        </div>
        {posts.map((post: Post, i: number) => (
          <PostItem key={i} post={post} />
        ))}
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.ENDPOINT}/posts`);
  const posts: Post[] = await res.json();

  return {
    props: {
      posts,
    },
  };
};

export default Home;
