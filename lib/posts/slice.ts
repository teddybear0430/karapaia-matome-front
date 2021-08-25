import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post } from '../../types/post';
import { SortStatus } from '../../types/sort-status';

export type PostsState = {
  sortStatus: SortStatus;
  posts: Post[];
};

export const initialState: PostsState = {
  sortStatus: 'desc',
  posts: [],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // デフォルトのソート状態は日付の降順
    setPosts: (state, action: PayloadAction<Post[]>) => ({
      ...state,
      posts: action.payload,
    }),
    sortDesc: (state, action: PayloadAction<Post[]>) => {
      // MEMO: 配列をコピーしてから変更しないとエラーが発生した。
      const copy = [...action.payload];

      const newPosts = copy.sort((a, b) => {
        return a.createdAt < b.createdAt ? 1 : -1;
      });

      return {
        ...state,
        sortStatus: 'desc',
        posts: newPosts,
      };
    },
    sortAsc: (state, action: PayloadAction<Post[]>) => {
      const copy = [...action.payload];

      const newPosts = copy.sort((a, b) => {
        return a.createdAt < b.createdAt ? -1 : 1;
      });

      return {
        ...state,
        sortStatus: 'asc',
        posts: newPosts,
      };
    },
    commentDesc: (state, action: PayloadAction<Post[]>) => {
      const copy = [...action.payload];

      const newPosts = copy.sort((a, b) => {
        return a.comment < b.comment ? 1 : -1;
      });

      return {
        ...state,
        sortStatus: 'commentDesc',
        posts: newPosts,
      };
    },
    commentAsc: (state, action: PayloadAction<Post[]>) => {
      const copy = [...action.payload];

      const newPosts = copy.sort((a, b) => {
        return a.comment < b.comment ? -1 : 1;
      });

      return {
        ...state,
        sortStatus: 'commentAsc',
        posts: newPosts,
      };
    }
  },
});

export default postsSlice;
