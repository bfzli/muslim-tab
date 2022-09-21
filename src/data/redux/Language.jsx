import { createSlice } from '@reduxjs/toolkit';
import { English, Shqip } from '../langs';

export const languageSlice = createSlice({
  name: 'language',
  initialState: {
    value: null,
    t: null,
    status: false,
  },
  reducers: {
    languageSwitcher: (state, action) => {
      switch (action.payload) {
        case 'shqip':
          state.value = 'shqip';
          state.status = true;
          state.t = Shqip;

          localStorage.setItem('language', state.value);
          break;

        default:
          state.value = 'english';
          state.status = true;
          state.t = English;

          localStorage.setItem('language', state.value);
          break;
      }
    },
    languageLoader: (state) => {
      const language = localStorage.getItem('language');

      if (language === null || language === undefined) {
        state.value = 'english';
        state.status = true;
        state.t = English;

        localStorage.setItem('language', state.value);
      } 
      
      else {
        state.value = language;
        state.status = true;
        state.t = language === 'english' ? English : Shqip;
      }
    },
  },
});

export const { languageSwitcher, languageLoader } = languageSlice.actions;
export default languageSlice.reducer;
