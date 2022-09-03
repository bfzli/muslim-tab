import { createSlice } from '@reduxjs/toolkit';

export const languageSlice = createSlice({
  name: 'language',
  initialState: {
    value: localStorage.getItem('language') || localStorage.setItem('language', 'english'),
  },
  reducers: {
    languageSwitcher: (state, action) => {
      switch (action.payload) {
        case 'shqip':
          state.value = 'shqip';
          localStorage.setItem('language', state.value);
          break;

        default:
          state.value = 'english';
          localStorage.setItem('language', state.value);
          break;
      }
    },
  },
});

export const { languageSwitcher } = languageSlice.actions;
export default languageSlice.reducer;
