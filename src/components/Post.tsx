import React from 'react';
import { Post } from '../types/post';

const PostItem: React.FC<{ post: Post }> = (postItem) => {
  return (
    <div className="my-3 border-b border-gray-500">
      <div className="flex justify-start mb-1 text-sm">
        {postItem.post.archives.map((cat, i) => (
          <a key={i} href={cat.catUrl} className="mr-4 text-blue hover:underline hover:text-gray-500">
            {cat.catName}
          </a>
        ))}
      </div>
      <a href={postItem.post.url} className="hover:underline text-blue">
        {postItem.post.title}
      </a>
      <div className="flex justify-start my-2 text-sm">
        <span>コメント数: {postItem.post.comment}</span>
        <span className="ml-2">投稿日: {postItem.post.createdAt}</span>
      </div>
    </div>
  );
};

export default PostItem;
