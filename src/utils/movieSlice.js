import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"moive",
    initialState:{
        nowPlayingMovies:null,
        trailorVideo:null,
        popularVidoes:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies:(state,action) =>{
            state.popularVidoes = action.payload;
        },
        addTrailer:(state,action) =>{
            state.trailorVideo = action.payload
        }
    }
});

export const {addNowPlayingMovies,addTrailer, addPopularMovies} = movieSlice.actions;
export default movieSlice.reducer