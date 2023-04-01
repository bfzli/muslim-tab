import { createSlice } from "@reduxjs/toolkit";
import { NotificationDefaultState } from "./Defaults";

import {
  ShowNotification as CallShowNotification,
  HideNotification as CallHideNotification,
} from "./actions";

export const Notification = createSlice({
  name: "Notification",
  initialState: NotificationDefaultState,
  reducers: {
    ShowNotification: (state, action) => CallShowNotification(state, action),
    HideNotification: (state, action) => CallHideNotification(state, action),
  },
});

export const { ShowNotification, HideNotification } = Notification.actions;
export default Notification.reducer;
