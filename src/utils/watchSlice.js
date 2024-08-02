import { createSlice } from "@reduxjs/toolkit";

const watchSlice = createSlice({
    name:"watch",
    initialState:{
        trailerVideoData:null,
        navigate:true,
    },
    reducers:{
        setTrailerContent:(state,action) =>{
            state.trailerVideoData = action.payload;
        },
        setNavigate:(state) =>{
            state.navigate = false;
        },
    }
})

export const {setTrailerContent, setNavigate} = watchSlice.actions;
export default watchSlice.reducer


