import { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import postsSlice from '../posts/slice';
import { StoreState } from '../store';
import { SortStatus } from '../../types/sort-status';
import { Post } from '../../types/post';

export const usePosts = (posts?: Post[]) => {
  const dispatch = useDispatch();
  const postsState = useSelector((state: StoreState) => state.posts);
  const sortStatus = useSelector((state: StoreState) => state.posts.sortStatus);

  // 既読・未読の投稿が0の時に文言を表示するために使用
  const findReadedPosts = useCallback(() => {
    if (!posts) return [];
    return posts.filter((post) => post.uuid === localStorage.getItem(post.uuid));
  }, [posts]);

  // 初回表示時のみ表示された投稿のuuidとlocalStorageのuuidの差分をチェックして、
  // 消えた投稿のuuidをlocalStorageから削除する処理を行う
  /* eslint-disable */
  useEffect(() => {
    if (!posts) return;

    dispatch(postsSlice.actions.setPosts(posts));

    // 表示されている記事リンクで既読済みの記事のuuidを格納する配列を生成
    const findReadedPosts = posts.filter((post) => post.uuid === localStorage.getItem(post.uuid));
    const findUuids = findReadedPosts.map((post) => post.uuid);

    // 既読済みの記事のuuidのみをlocalStorageから取得して、取得したuuidを格納する配列を生成
    const localStorageUuids = Object.keys(localStorage).filter((uuid) => uuid.match(/\d+/g));

    // 削除対象のuuidのみを含む配列を生成
    const deleteUuids = localStorageUuids.filter((uuid) => findUuids.indexOf(uuid) === -1);

    if (deleteUuids.length === 0) return;

    for (const uuid of deleteUuids) {
      localStorage.removeItem(uuid);
    }
  }, [posts]);
  /* eslint-disable */

  const sortedPosts = useMemo(() => {
    return postsState.posts;
  }, [postsState.posts]);

  const handleChange = (event: { target: { value: string } }) => {
    const eventValue = event.target.value as SortStatus;

    switch (eventValue) {
      case 'desc':
        dispatch(postsSlice.actions.sortDesc(postsState.initPosts));
        break;

      case 'asc':
        dispatch(postsSlice.actions.sortAsc(postsState.initPosts));
        break;

      case 'commentDesc':
        dispatch(postsSlice.actions.commentDesc(postsState.initPosts));
        break;

      case 'commentAsc':
        dispatch(postsSlice.actions.commentAsc(postsState.initPosts));
        break;

      case 'sortReaded':
        dispatch(postsSlice.actions.sortReaded(postsState.initPosts));
        break;

      case 'sortNotReaded':
        dispatch(postsSlice.actions.sortNotReaded(postsState.initPosts));
        break;
    }
  };

  return {
    postsSlice,
    dispatch,
    postsState,
    sortStatus,
    findReadedPosts,
    sortedPosts,
    handleChange,
  };
};
