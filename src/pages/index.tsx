import React, { useState, useEffect } from 'react';
import type { NextPage, InferGetStaticPropsType, GetStaticProps } from 'next';
import CustomHead from '../components/CustomHead';
import SelectBox from '../components/SelectBox';
import PostItem from '../components/Post';
import { siteConfig, options } from '../../config/config';
import { usePosts } from '../../lib/hooks/use-posts';
import { dateUtil } from '../../lib/utils/date-util';
import { Post } from '../../types/post';

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ posts }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // localstorage is not definedを回避するために必要
    setMounted(true);
  }, []);

  const { siteName, siteUrl, description, totalPosts } = siteConfig;
  const { sortStatus, findReadedPosts, sortedPosts } = usePosts(posts);
  const { todayDate } = dateUtil();

  const readedToggleMessage = () => {
    if (mounted) {
      if (sortStatus === 'sortReaded') {
        return (
          <>
            {findReadedPosts().length === 0 && (
              <p className="text-base font-bold text-red-600 dark:text-red-400">既読のついた記事はありません</p>
            )}
          </>
        );
      } else if (sortStatus === 'sortNotReaded') {
        return (
          <>
            {findReadedPosts().length === totalPosts && (
              <p className="text-base font-bold text-red-600 dark:text-red-400">未読の記事はありません</p>
            )}
          </>
        );
      }
    }

    return <></>;
  };

  return (
    <>
      <CustomHead title={siteName} url={siteUrl} description={description} />
      <main>
        <div className="flex justify-between mb-9">
          <span className="dark:text-darkmodeWhite">{todayDate()}</span>
          <SelectBox options={options} />
        </div>
        {sortedPosts.map((post: Post, i: number) => (
          <PostItem key={i} post={post} />
        ))}
        {readedToggleMessage()}
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
