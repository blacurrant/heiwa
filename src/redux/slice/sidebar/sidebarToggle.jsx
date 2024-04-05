import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const sidebar = createSlice({
    name: 'sidebarToggle',
    initialState,
    reducers: {
        setSidebarToggle: state => state = !state,
    }
});

export const { setSidebarToggle } = sidebar.actions;
export default sidebar.reducer;