import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSongs = createAsyncThunk("fetchSongs", async() => {
    console.log("asdasd");
    const response = await fetch('https://spotify-web2.p.rapidapi.com/search/?q=%3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=5'
    ,{
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f2c29dc339mshf909552c46b9370p1302a9jsn85c65d8be630',
            'X-RapidAPI-Host': 'spotify-web2.p.rapidapi.com'
        }
    });
    return response.json();
});

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        isLoading: false,
        data: undefined,
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSongs.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        }),
        builder.addCase(fetchSongs.pending, (state, action) => {
            state.isLoading = true;
        }),
        builder.addCase(fetchSongs.rejected, (state, action) => {
            console.log("error", action.payload);
            state.isError= true;
        })
    }
})

export default todoSlice.reducer; 