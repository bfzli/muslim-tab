import Database from '../db/Content.json';
import Images from '../db/Images.json';

import { createSlice } from '@reduxjs/toolkit';

export const contentSlice = createSlice({
  name: 'content',
  initialState: {
    quote: null,
    author: null,
    wallpaper: null,
    status: false,
  },
  reducers: {
    SetContent: (state) => {
      const randomImage = Images[Math.floor(Math.random() * Images.length)];
      const randomContent = Database[Math.floor(Math.random() * Database.length)];

      state.quote = randomContent.quote;
      state.author = randomContent.author;
      state.wallpaper = randomImage;
      state.status = true;
    }
  },
});

export const { SetContent } = contentSlice.actions;
export default contentSlice.reducer;
