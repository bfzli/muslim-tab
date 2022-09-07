import { createSlice } from '@reduxjs/toolkit';

export const viewSlice = createSlice({
  name: 'view',
  initialState: {
    value: localStorage.getItem('view') || localStorage.setItem('view', 'verse'),
  },
  reducers: {
    viewSwitcher: (state, action) => {
      switch (action.payload) {
        case 'hadith':
          state.value = 'hadith';
          localStorage.setItem('view', state.value);
          break;
        case 'quote':
          state.value = 'quote';
          localStorage.setItem('view', state.value);
          break;
        default:
          state.value = 'verse';
          localStorage.setItem('view', state.value);
          break;
      }
    },
  },
});

export const { viewSwitcher } = viewSlice.actions;
export default viewSlice.reducer;
