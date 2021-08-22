import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post } from '../types/post';

export type PostsState = {
  posts: Post[];
};

export const initialState: PostsState = {
  posts: [],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
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
        posts: newPosts,
      };
    }
  },
});

export default postsSlice;
