import { createSlice } from '@reduxjs/toolkit';

export const ConfirmationSlice = createSlice({
    name: 'confirmation',
    initialState: {
        Title: "",
        Message: "",
        OnConfirm: null,
        Status: "success",
        Visible: false,
    },
    reducers: {
        OpenConfirmation: (state, action) => {
            const Action = action.payload;

            state.Title = Action.Title || 'Are you sure you want to continue?';
            state.Message = Action.Message || 'Ths is going to delete all your files on your computer and format it.';
            state.OnConfirm = Action.OnConfirm;
            state.Status = Action.Status || 'success';
            state.Visible = true;
        },
        
        CloseConfirmation: (state) => {
            state.Title = "";
            state.Message = "";
            state.OnConfirm = null;
            state.Status = "success";
            state.Visible = false;
        },
    },
});

export const { OpenConfirmation, CloseConfirmation} = ConfirmationSlice.actions;
export default ConfirmationSlice.reducer;