import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { NextPage, InferGetStaticPropsType, GetStaticProps } from 'next';
import Head from 'next/head';
import SelectBox from '../components/SelectBox';
import PostItem from '../components/Post';
import { Post } from '../../types/post';
import { options } from '../../config/config';
import postsSlice from '../../posts/slice';
import { StoreState } from '../../posts/store';

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ posts }) => {
  const dispatch = useDispatch();
  const postsState = useSelector((state: StoreState) => state.posts);

  useEffect(() => {
    dispatch(postsSlice.actions.setPosts(posts));
  }, []);

  return (
    <>
      <Head>
        <title>カラパイアまとめ</title>
      </Head>
      <main>
        <div className="flex justify-end">
          <SelectBox options={options} />
        </div>
        {postsState.posts.map((post: Post, i: number) => (
          <PostItem key={i} post={post} />
        ))}
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  console.log(`${process.env.ENDPOINT}/posts`)
  const res = await fetch(`${process.env.ENDPOINT}/posts`);
  const posts: Post[] = await res.json();

  return {
    props: {
      posts,
    },
  };
};

export default Home;
