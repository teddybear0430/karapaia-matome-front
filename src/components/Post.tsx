import React from 'react';
import { Post } from '../types/post';

const PostItem: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className="my-3 border-b border-gray">
      <div className="flex justify-start mb-1 text-sm">
        {post.archives.map((cat, i) => (
          <a key={i} href={cat.catUrl} className="mr-4 text-blue hover:underline hover:text-gray">
            {cat.catName}
          </a>
        ))}
      </div>
      <a href={post.url} className="hover:underline text-blue" target="_blank" rel="noreferrer noopener">
        {post.title}
      </a>
      <div className="flex items-baseline justify-start my-2">
        <span className="text-sm">
          コメント数:
          <span className={post.comment >= 50 ? 'text-red-600 font-bold text-base' : ''}> {post.comment}</span>
        </span>
        <span className="ml-2 text-sm">投稿日: {post.createdAt}</span>
      </div>
    </div>
  );
};

export default PostItem;
