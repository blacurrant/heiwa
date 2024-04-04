import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: 'loginToggle',
    initialState: false,

    reducers: {
        setLoginState: (state, action) => state = action.payload,
    }
})


export const { setLoginState } = loginSlice.actions;
export default loginSlice.reducer;
