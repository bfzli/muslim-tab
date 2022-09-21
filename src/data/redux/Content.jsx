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
      const content = localStorage.getItem('view') || 'verse';
      const language = localStorage.getItem('language') || 'english';

      const randomImage = Images[Math.floor(Math.random() * Images.length)];
      const filterContent = Database.filter(object => object.category === content);
      const filterLanguage = filterContent.filter(object => object.language === language);
      const data = filterLanguage[Math.floor(Math.random() * filterLanguage.length)];

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
