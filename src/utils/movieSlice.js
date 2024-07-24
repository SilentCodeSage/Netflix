import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"moive",
    initialState:{
        nowPlayingMovies:null,
        trailorVideo:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addTrailer:(state,action) =>{
            state.trailorVideo = action.payload
        }
    }
});

export const {addNowPlayingMovies,addTrailer} = movieSlice.actions;
export default movieSlice.reducer