const SetContent = (state, action) => {
  const quote = action.payload;

  state.Loading = true;
  state.Loaded = false;

  state.Content = quote.content;
  state.Author = quote.author;
  state.Wallpaper = "";

  state.Loaded = true;
  state.Loading = false;
};

export { SetContent };