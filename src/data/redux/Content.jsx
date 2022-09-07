import { createSlice } from '@reduxjs/toolkit';
import Database from '../db/Content.json';
import Images from '../db/Images.json';

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
  reducers: {
    SetContent: (state) => {
      const randomImage = Images[Math.floor(Math.random() * Images.length)];
      const data = Database[Math.floor(Math.random() * Database.length)];

      state.content = data.content;
      state.arabic = data.arabic;
      state.reference = data.reference;
      state.category = data.category;
      state.language = data.language;
      state.wallpaper = randomImage;
      state.linkToReference = data.linkToReference;
      state.status = true;
    }
  },
});

export const { SetContent } = contentSlice.actions;
export default contentSlice.reducer;
