import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'dark', 
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setLightTheme: (state) => {
      state.theme = 'light';
    },
    setDarkTheme: (state) => {
      state.theme = 'dark';
    },
  },
});

export const { setLightTheme, setDarkTheme } = themeSlice.actions;
export const selectTheme = (state) => state.theme.theme;

export default themeSlice.reducer;
