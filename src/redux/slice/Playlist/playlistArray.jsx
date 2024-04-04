import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const playlist = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setPlaylist: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    deletePlaylist: (state, action) => {
      console.log(action.payload)
      state.data = state.data.filter((playlist, index) => index != action.payload);
    }
  },
});

export const { setPlaylist, deletePlaylist } = playlist.actions;
export default playlist.reducer;
