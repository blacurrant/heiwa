import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const users = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.data = [...state.data, action.payload];
    },
  },
});

export const { setUser } = users.actions;
export default users.reducer;
