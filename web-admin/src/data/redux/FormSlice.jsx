import { createSlice } from '@reduxjs/toolkit';

export const FormSlice = createSlice({
    name: 'form',
    initialState: {
        Id: null,
        Content: "",
        Arabic: "",
        Reference: "",
        Website: "",
        Category: "verse",
        Language: "english",
        Mode: 'add',
        Visible: false,
    },
    reducers: {
        OpenForm: (state, action) => {
            const Action = action.payload;

            state.Id = Action.Id || null;
            state.Content = Action.Content || '';
            state.Arabic = Action.Arabic || '';
            state.Reference = Action.Reference || '';
            state.Website = Action.Website || '';
            state.Category = Action.Category || "verse";
            state.Language = Action.Language || "english";
            state.Mode = Action.Mode || 'add';

            state.Visible = true;
        },
        
        CloseForm: (state) => {
            state.Id = null;
            state.Content = "";
            state.Arabic = "";
            state.Reference = "";
            state.Website = "";
            state.Category = "verse";
            state.Language = "english";
            state.Mode = 'add';
            state.Visible = false;
        },

        ChangeForm: (state, action) => {
            const Action = action.payload;
            state[Action.Target] = Action.Value;
        }
    },
});

export const { OpenForm, CloseForm, ChangeForm} = FormSlice.actions;
export default FormSlice.reducer;