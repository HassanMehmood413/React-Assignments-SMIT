import { configureStore } from "@reduxjs/toolkit";
import { counterslice } from "./slices/counter.slice";
import { productslice } from "./slices/product.slice";
import { aboutSlice } from "./slices/about.slice";
import { blogSlice } from "./slices/blog.slice";
import { portfolioslice } from "./slices/portfolio.slice";
import { resumeslice } from "./slices/resume.slice";



export const store = configureStore({
    reducer:{
        counterSlice: counterslice.reducer,
        productSlice: productslice.reducer,
        aboutSlice: aboutSlice.reducer,
        blogSlice: blogSlice.reducer,
        portfolioslice : portfolioslice.reducer,
        resumeslice : resumeslice.reducer
    }
})