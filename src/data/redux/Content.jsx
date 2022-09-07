import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Database from '../db/Content.json';

export const FetchContent = createAsyncThunk('/', async (params) => {
  const { view, language } = params;

  // const response = await fetch(`http://localhost:1234/${view}/${language}`);
  // const response = await fetch(`https://api.muslim-tab.com/${view}/${language}`);

  const randomFileName = Database[Math.floor(Math.random() * Database.length)];
  return randomFileName;
});

export const contentSlice = createSlice({
  name: 'content',
  initialState: {
    content: null,
    arabic: null,
    reference: null,
    category: null,
    language: null,
    wallpaper: null,
    linkToReference: null,
    status: false,
  },
  reducers: {},
  extraReducers: {
    [FetchContent.fulfilled]: (state, action) => {
      const data = action.payload;

      state.content = data.content;
      state.arabic = data.arabic;
      state.reference = data.reference;
      state.category = data.category;
      state.language = data.language;
      state.wallpaper = data.wallpaper;
      state.website = data.website;
      state.status = true;
    },
  },
});

export default contentSlice.reducer;
