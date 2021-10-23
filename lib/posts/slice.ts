import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post } from '../../types/post';
import { SortStatus } from '../../types/sort-status';

export type PostsState = {
  sortStatus: SortStatus;
  initPosts: Post[];
  posts: Post[];
};

export const initialState: PostsState = {
  sortStatus: 'desc',
  // 既読のついた記事、まだ読んでいない記事の絞り込みを行ったときにpostsが上書きされないようにするために必要
  initPosts: [],
  posts: [],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // デフォルトのソート状態は日付の降順
    setPosts: (state, action: PayloadAction<Post[]>) => ({
      ...state,
      initPosts: action.payload,
      posts: action.payload,
    }),
    sortDesc: (state, action: PayloadAction<Post[]>) => {
      // MEMO: 配列をコピーしてから変更しないとエラーが発生した。
      const newPosts = action.payload.slice().sort((a, b) => {
        return a.createdAt < b.createdAt ? 1 : -1;
      });

      return {
        ...state,
        sortStatus: 'desc',
        posts: newPosts,
      };
    },
    sortAsc: (state, action: PayloadAction<Post[]>) => {
      const posts = action.payload.slice().sort((a, b) => {
        return a.createdAt < b.createdAt ? -1 : 1;
      });

      return {
        ...state,
        sortStatus: 'asc',
        posts,
      };
    },
    commentDesc: (state, action: PayloadAction<Post[]>) => {
      const posts = action.payload.slice().sort((a, b) => {
        return a.comment < b.comment ? 1 : -1;
      });

      return {
        ...state,
        sortStatus: 'commentDesc',
        posts,
      };
    },
    commentAsc: (state, action: PayloadAction<Post[]>) => {
      const posts = action.payload.slice().sort((a, b) => {
        return a.comment < b.comment ? -1 : 1;
      });

      return {
        ...state,
        sortStatus: 'commentAsc',
        posts,
      };
    },
    sortReaded(state, action: PayloadAction<Post[]>) {
      const posts = action.payload.slice().filter((post) => post.uuid === localStorage.getItem(post.uuid));

      return {
        ...state,
        sortStatus: 'sortReaded',
        posts,
      };
    },
    sortNotReaded(state, action: PayloadAction<Post[]>) {
      const posts = action.payload.slice().filter((post) => post.uuid !== localStorage.getItem(post.uuid));

      return {
        ...state,
        sortStatus: 'sortNotReaded',
        posts,
      };
    },
  },
});

export default postsSlice;
