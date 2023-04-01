import { createSlice } from "@reduxjs/toolkit";
import { ContentDefaultState } from "./Defaults";
import { SetContent as CallSetContent } from "./actions";

export const Content = createSlice({
  name: "Content",
  initialState: ContentDefaultState,
  reducers: {
    SetContent: (state, action) => CallSetContent(state, action),
  },
});

export const { SetContent } = Content.actions;
export default Content.reducer;
