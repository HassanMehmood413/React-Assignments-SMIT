import { configureStore } from "@reduxjs/toolkit";
import postslice from "./Slices/post.slice";
import signupslice from "./Slices/signup.slice";
import loginslice from "./Slices/login.slice";


export const store = configureStore({
    reducer: {
        postslice: postslice.reducer,
        signupslice: signupslice.reducer,
        loginslice: loginslice.reducer
    }
})  