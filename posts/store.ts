import { Store, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import postsSlice, { initialState } from './slice';

const rootReducer = combineReducers({
  posts: postsSlice.reducer,
});

const preLoadedState = () => {
  return {
    posts: initialState,
  };
};

export type StoreState = ReturnType<typeof preLoadedState>;

export type ReduxStore = Store<StoreState>;

const createStore = () => {
  return configureStore({
    reducer: rootReducer,
    preloadedState: preLoadedState(),
  });
};

export default createStore;
