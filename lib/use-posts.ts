import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import postsSlice from './posts/slice';
import { StoreState } from './posts/store';
import { SortStatus } from '../types/sort-status';

export const usePosts = () => {
  const dispatch = useDispatch();

  const postsState = useSelector((state: StoreState) => state.posts);
  const sortStatus = useSelector((state: StoreState) => state.posts.sortStatus);

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
