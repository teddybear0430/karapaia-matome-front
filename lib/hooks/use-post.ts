import { useState, useEffect } from 'react';
import { generateUuid } from '../../lib/utils/generate-uuid';
import { Post } from '../../types/post';

export const usePost = (post: Post) => {
  const [readed, setReaded] = useState(false);

  const isReaded = (uuid: string) => Boolean(localStorage.getItem(uuid));

  const handleClick = () => {
    const uuid = generateUuid(post.url);
    localStorage.setItem(uuid, uuid);

    setReaded(isReaded(uuid));
  };

  useEffect(() => {
    const uuid = generateUuid(post.url);

    // 投稿の存在と既読じゃないかのチェック
    if (post && !readed) {
      setReaded(isReaded(uuid));
    }
  }, []);

  return {
    readed,
    handleClick,
  };
};
