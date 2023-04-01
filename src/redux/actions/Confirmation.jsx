const OpenConfirmation = (state, action) => {
  const data = action.payload;

  state.Title = data.Title;
  state.Message = data.Message;
  state.Action = data.Action;
  state.Status = data.Status;
};

const CloseConfirmation = (state, action) => {
    state.Title = null;
    state.Message = null;
    state.Action = null;
    state.Status = false;
}

export { OpenConfirmation, CloseConfirmation };
