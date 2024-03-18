import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: 'loginToggle',
    initialState: false,

    reducers: {
        setLoginState: state => !state,
    }
})


export const { setLoginState } = loginSlice.actions;
export default loginSlice.reducer;
