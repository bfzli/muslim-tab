import { createSlice } from "@reduxjs/toolkit";
import { ConfirmationDefaultState } from "./Defaults";

import {
  OpenConfirmation as CallOpenConfirmation,
  CloseConfirmation as CallCloseConfirmation,
} from "./actions";

export const Confirmation = createSlice({
  name: "Confirmation",
  initialState: ConfirmationDefaultState,
  reducers: {
    OpenConfirmation: (state, action) => CallOpenConfirmation(state, action),
    CloseConfirmation: (state, action) => CallCloseConfirmation(state, action),
  },
});

export const { OpenConfirmation, CloseConfirmation } = Confirmation.actions;
export default Confirmation.reducer;
