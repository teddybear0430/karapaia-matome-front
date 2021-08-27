import { Store, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import postsSlice, { initialState as postsInitialState } from './posts/slice';
import darkModeSlice, { initialState as darkModeInitialState } from './dark-mode/slice';

const rootReducer = combineReducers({
  posts: postsSlice.reducer,
  darkMode: darkModeSlice.reducer,
});

const preLoadedState = () => {
  return {
    posts: postsInitialState,
    darkMode: darkModeInitialState,
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
