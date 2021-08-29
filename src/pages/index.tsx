import type { NextPage, InferGetStaticPropsType, GetStaticProps } from 'next';
import Head from 'next/head';
import SelectBox from '../components/SelectBox';
import PostItem from '../components/Post';
import { Post } from '../../types/post';
import { options } from '../../config/config';
import { usePosts } from '../../lib/hooks/use-posts';
import { dateUtil } from '../../lib/utils/date-util';

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ posts }) => {
  const { sortedPosts } = usePosts(posts);
  const { todayDate } = dateUtil();

  return (
    <>
      <Head>
        <title>カラパイアまとめ</title>
      </Head>
      <main>
        <div className="flex justify-between">
          <span className="dark:text-darkmodeWhite">{todayDate()}</span>
          <SelectBox options={options} />
        </div>
        {sortedPosts.map((post: Post, i: number) => (
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
