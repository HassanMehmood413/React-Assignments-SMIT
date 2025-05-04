import { configureStore } from "@reduxjs/toolkit";
import postslice from "./slices/post.slice";




export const store = configureStore({
    reducer: {
        postslice: postslice.reducer
    }
})

