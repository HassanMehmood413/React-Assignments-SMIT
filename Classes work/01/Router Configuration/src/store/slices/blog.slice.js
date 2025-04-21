import { createSlice } from "@reduxjs/toolkit";
import { blogData } from "../../constants/blog.constant";



export const blogSlice = createSlice({
    name:"blog",
    initialState:{
        blogData,
    },
    reducers:{
        addblog:(state,action)=>{
            state.blogData.push(action.payload)
        },
        removeblog:(state,action)=>{
            state.blogData = state.blogData.filter((blog)=>blog.title!==action.payload.title)
        }   
    }
})

export const {addblog,removeblog} = blogSlice.actions