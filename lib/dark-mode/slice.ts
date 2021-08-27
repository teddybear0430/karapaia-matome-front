import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type darkModeState = {
  darkMode: Boolean;
};

export const initialState: darkModeState = {
  darkMode: false,
};

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<Boolean>) => {
      return {
        ...state,
        darkMode: action.payload,
      };
    },
  },
});

export default darkModeSlice;
