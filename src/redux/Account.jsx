import { createSlice } from "@reduxjs/toolkit";
import { AccountDefaultState } from "./Defaults";

import {
  Authenticate as CallAuthenticate,
  Deauthenticate as CallDeauthenticate,
} from "./actions";

export const Account = createSlice({
  name: "Account",
  initialState: AccountDefaultState,
  reducers: {
    Authenticate: (state, action) => CallAuthenticate(state, action),
    Deauthenticate: (state, action) => CallDeauthenticate(state, action),
  },
});

export const { Authenticate, Deauthenticate } = Account.actions;
export default Account.reducer;
