const ShowNotification = (state, action) => {
  const data = action.payload;

  state.Title = data.Title;
  state.Message = data.Message;
  state.Status = data.Status;
};

const HideNotification = (state, action) => {
  state.Title = null;
  state.Message = null;
  state.Status = false;
};

export { ShowNotification, HideNotification };
