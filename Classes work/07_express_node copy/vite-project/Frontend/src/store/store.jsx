import { configureStore } from "@reduxjs/toolkit";
import productslice from "./Slices/product.slice";
// import signupslice from "./Slices/signup.slice";
// import loginslice from "./Slices/login.slice";


export const store = configureStore({
    reducer: {
        postslice: productslice.reducer,
        // signupslice: signupslice.reducer,
        // loginslice: loginslice.reducer
    }
})  