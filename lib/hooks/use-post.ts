import { useState, useEffect } from 'react';
import { Post } from '../../types/post';

export const usePost = (post: Post) => {
  const [readed, setReaded] = useState(false);

  const isReaded = (uuid: string) => Boolean(localStorage.getItem(uuid));

  const handleClick = (post: Post) => {
    const uuid = post.uuid;
    localStorage.setItem(uuid, uuid);

    setReaded(isReaded(uuid));
  };

  useEffect(() => {
    if (post) setReaded(isReaded(post.uuid));
  }, [post]);

  return {
    readed,
    handleClick,
  };
};
