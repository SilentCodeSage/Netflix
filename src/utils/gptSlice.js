import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false,
        gptSearchResults:null,
    },
    reducers:{
        toggleGPT:(state) =>{
            state.showGptSearch = !state.showGptSearch;
        },
        setMovieSearchResults:(state,action) =>{
            state.gptSearchResults = action.payload;
        }
    }
});

export const {toggleGPT,setMovieSearchResults} = gptSlice.actions;
export default gptSlice.reducer;