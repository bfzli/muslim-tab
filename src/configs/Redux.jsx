import { configureStore } from "@reduxjs/toolkit";
import { Account, Confirmation, Notification, Content } from "../redux";

export const Redux = configureStore({
  reducer: {
    Content,
    Account,
    Notification,
    Confirmation,
  },
});

export default Redux;
