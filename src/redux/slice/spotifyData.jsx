import { createSlice } from "@reduxjs/toolkit";
import spotify from '../../component/spotify'

const initialState = {
    data: spotify
}

const data = createSlice({
    name: 'spotifyData',
    initialState,
    reducers:{
        setSpotifyData: (state, action) => {
            state.data= action.payload;
        }
    } 
});

export const { setSpotifyData } = data.actions;
export default data.reducer;
