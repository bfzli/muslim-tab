import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const onError = () => {
  const data = {
    status: true,
    content: 'O mankind, worship your Lord, who created you and those before you, that you may become righteous.',
    category: 'verse',
    reference: '2:39',
    language: 'english',
    website: 'https://quran.com/',
    wallpaper: '',
  }

  return data;
};

export const FetchContent = createAsyncThunk('/', async (params) => {
  const { view, language } = params;

  try {
    const response = await fetch(`http://localhost:1234/${view}/${language}`);
    // const response = await fetch(`https://api.muslim-tab.com/${view}/${language}`);

    const data = response.json();
    if(data) return data;
    else onError();
  } catch (error) { onError() }
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
    website: null,
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
