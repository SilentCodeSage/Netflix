import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import movieSlice from "./movieSlice";
import gptSlice from "./gptSlice";
import watchSlice from "./watchSlice";

const appStore = configureStore(
    {
        reducer:{
            user:userReducer,
            movies:movieSlice,
            gpt:gptSlice,
            watch:watchSlice,
        }
    }
)

export default appStore;