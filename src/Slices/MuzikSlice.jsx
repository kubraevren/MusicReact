import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const API_URL = "https://itunes.apple.com/search?term=";


export const getMusic = createAsyncThunk(
    'getMusic',
    async (sanatci) => {
        const response = await axios.get(API_URL + sanatci + "&entity=musicTrack");
        console.log(response);
        return response.data.results;
    }
)

export const musicSlice = createSlice({
    name: "music",
    initialState: {
        items: [], //liste
        error: null,//hata
        value: " ",//müzikler
    },
    reducers: {
        },
    
    extraReducers: (builder) => {
        builder
            .addCase(getMusic.fulfilled, (state, action) => {
                state.items = action.payload;
            })
            .addCase(getMusic.rejected, (state, action) => {
                state.error = action.error.message;
            });
    },
});


export const { } = musicSlice.actions;

export default musicSlice.reducer;