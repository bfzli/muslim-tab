import { createSlice } from '@reduxjs/toolkit';

export const ContentSlice = createSlice({
  name: 'content',
  initialState: {
    Content: null,
    LimitedContent: null,
  },
  reducers: {
    SetContent: (state, action) => {
      const Content = action.payload;
      state.Content = Content;

      for (let i = 0; i < Content.length; i += 4) {
        const Limited = Content.slice(i, i + 4);
        state.LimitedContent = Limited;
      }
    },
  },
});

export const { SetContent } = ContentSlice.actions;
export default ContentSlice.reducer;
