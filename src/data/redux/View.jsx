import { createSlice } from '@reduxjs/toolkit';

export const viewSlice = createSlice({
  name: 'view',
  initialState: {
    value: null,
    status: false,
  },
  reducers: {
    viewSwitcher: (state, action) => {
      switch (action.payload) {
        case 'hadith':
          state.value = 'hadith';
          state.status = true;

          localStorage.setItem('view', state.value);
          break;

        case 'quote':
          state.value = 'quote';
          state.status = true;

          localStorage.setItem('view', state.value);
          break;

        default:
          state.value = 'verse';
          state.status = true;

          localStorage.setItem('view', state.value);
          break;
      }
    },
    viewLoader: (state) => {
      const view = localStorage.getItem('view');

      if (view === null) {
        state.value = 'verse';
        state.status = true;

      } else {
        state.value = view;
        state.status = true;
      }

      localStorage.setItem('view', state.value);
    }
  },
});

export const { viewSwitcher, viewLoader } = viewSlice.actions;
export default viewSlice.reducer;
