import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false
    },
    reducers:{
        toggleGPT:(state) =>{
            state.showGptSearch = !state.showGptSearch;
        }
    }
});

export const {toggleGPT} = gptSlice.actions;
export default gptSlice.reducer;