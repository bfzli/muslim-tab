import { configureStore } from '@reduxjs/toolkit';

import {
  ConfirmationSlice,
  NotificationSlice,
} from '../redux';

const Store = configureStore({
  reducer: {
    Confirmation: ConfirmationSlice,
    Notification: NotificationSlice,
  },
  devTools: true,
});

export default Store;
