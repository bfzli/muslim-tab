import { createSlice } from '@reduxjs/toolkit';

export const AuthenticationSlice = createSlice({
    name: 'authentication',
    initialState: {
        Code: null,
        Authenticated: false,
        Visible: false,
    },
    reducers: {
        OpenAuthentication: (state) => {
            state.Visible = true;
        },
        
        CloseAuthentication: (state) => {
            state.Visible = false;
        },

        ChangeCode: (state, action) => {
            state.Code = action.payload;
        }
    },
});

export const { 
    OpenAuthentication, 
    CloseAuthentication, 
    ChangeCode
} = AuthenticationSlice.actions;

export default AuthenticationSlice.reducer;