import React from 'react';
import { Post } from '../types/post';

type PostItem = {
  post: Post;
};

const PostItem: React.FC<PostItem> = (postItem) => {
  return (
    <div className="m-4 border-2">
      <div>コメント数: {postItem.post.comment}</div>
      <div>投稿日: {postItem.post.createdAt}</div>
      <a href={postItem.post.url}>{postItem.post.title}</a>
    </div>
  );
};

export default PostItem;
