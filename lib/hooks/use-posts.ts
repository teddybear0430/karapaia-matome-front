import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import postsSlice from '../posts/slice';
import { StoreState } from '../store';
import { SortStatus } from '../../types/sort-status';
import { Post } from '../../types/post';

export const usePosts = (posts?: Post[]) => {
  const dispatch = useDispatch();
  const postsState = useSelector((state: StoreState) => state.posts);
  const sortStatus = useSelector((state: StoreState) => state.posts.sortStatus);

  useEffect(() => {
    if (!posts) return;

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

  useEffect(() => {
    // ソート状態が日付の降順に設定かつ、初回表示時のみ処理を実行する
    if (sortStatus === 'desc' && posts) {
      dispatch(postsSlice.actions.setPosts(posts));
    }
  }, [dispatch, sortStatus, posts]);

  const sortedPosts = useMemo(() => {
    return postsState.posts;
  }, [postsState.posts]);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const eventValue = event.target.value as SortStatus;

    if (eventValue === 'desc') {
      dispatch(postsSlice.actions.sortDesc(postsState.posts));
    } else if (eventValue === 'asc') {
      dispatch(postsSlice.actions.sortAsc(postsState.posts));
    } else if (eventValue === 'commentDesc') {
      dispatch(postsSlice.actions.commentDesc(postsState.posts));
    } else if (eventValue === 'commentAsc') {
      dispatch(postsSlice.actions.commentAsc(postsState.posts));
    }
  };

  return {
    dispatch,
    postsState,
    postsSlice,
    sortStatus,
    sortedPosts,
    handleChange,
  };
};
