import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TwitterShareButton } from 'react-share';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { dateUtil } from '../../lib/utils/date-util';
import { Post } from '../../types/post';

const PostItem: React.FC<{ post: Post }> = ({ post }) => {
  const { getWeekChars } = dateUtil();

  return (
    <div className="my-3 border-b border-gray">
      <div className="flex items-center justify-between mb-1 text-sm">
        <div>
          {post.archives.map((cat, i) => (
            <a
              key={i}
              href={cat.catUrl}
              className="mr-4 text-blue dark:text-darkmodeBlue hover:underline hover:text-gray dark:hover:text-indigo-200"
            >
              {cat.catName}
            </a>
          ))}
        </div>
        <TwitterShareButton url={post.url}>
          <FontAwesomeIcon
            icon={faTwitter}
            className="text-2xl hover:text-yellow-400 dark:hover:text-yellow-500 transition-all duration-200"
          />
        </TwitterShareButton>
      </div>
      <a
        href={post.url}
        className="hover:underline text-blue dark:text-darkmodeBlue"
        target="_blank"
        rel="noreferrer noopener"
      >
        {post.title}
      </a>
      <div className="flex items-baseline justify-start my-2">
        <span className="text-sm dark:text-darkmodeWhite">
          コメント数:
          <span className={post.comment >= 50 ? 'text-red-600 font-bold text-base dark:text-red-400' : ''}>
            {' '}
            {post.comment}
          </span>
        </span>
        <span className="ml-2 text-sm dark:text-darkmodeWhite">
          投稿日: {post.createdAt}
          {getWeekChars(post.createdAt)}
        </span>
      </div>
    </div>
  );
};

export default PostItem;
