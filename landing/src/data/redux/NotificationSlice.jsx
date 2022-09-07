import { createSlice } from '@reduxjs/toolkit';

export const NotificationSlice = createSlice({
  name: 'notification',
  initialState: {
    Title: '',
    Message: '',
    Status: 'success',
    Visible: false,
  },
  reducers: {
    OpenNotification: (state, action) => {
      const Action = action.payload;

      state.Title = Action.Title || '';
      state.Message = Action.Message || '';
      state.Status = Action.Status || 'success';
      state.Visible = true;
    },

    CloseNotification: (state, action) => {
      state.Title = '';
      state.Message = '';
      state.Status = 'success';
      state.Visible = false;
    },
  },
});

export const { OpenNotification, CloseNotification } = NotificationSlice.actions;
export default NotificationSlice.reducer;
