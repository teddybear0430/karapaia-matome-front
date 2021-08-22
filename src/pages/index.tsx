import { useEffect, useMemo } from 'react';
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
  const sortStatus = useSelector((state: StoreState) => state.posts.sortStatus);

  useEffect(() => {
    if (sortStatus === 'desc') {
      dispatch(postsSlice.actions.setPosts(posts));
    }
  }, [postsState.posts]);

  const sortedPosts = useMemo(() => {
    return postsState.posts;
  }, [postsState.posts]);

  return (
    <>
      <Head>
        <title>カラパイアまとめ</title>
      </Head>
      <main>
        <div className="flex justify-end">
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
