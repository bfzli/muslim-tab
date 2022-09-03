import { configureStore } from '@reduxjs/toolkit';

import {
  ConfirmationSlice,
  NotificationSlice,
  ContentSlice,
  FormSlice,
  AuthenticationSlice,
} from '../redux';

const Store = configureStore({
  reducer: {
    Confirmation: ConfirmationSlice,
    Notification: NotificationSlice,
    Content: ContentSlice,
    Form: FormSlice,
    Authentication: AuthenticationSlice,
  },
  devTools: true,
});

export default Store;
