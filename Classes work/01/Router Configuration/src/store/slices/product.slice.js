import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const getproducts = createAsyncThunk('products/get',async()=>{
    try{
        const res = await axios.get('https://fakestoreapi.com/products')
        return res.data
    }
    catch(error){
        console.log(error)
        throw error
    }
})


export const productslice = createSlice({
    name:"Products",
    initialState:{
        products:[],
        loading:false,
        loadmore:1
    },
    reducers:{
        Setloadmore:(state)=>{
            state.loadmore+=5   
        }
    },
    extraReducers:(builder)=>{
        builder

        .addCase(getproducts.fulfilled,(state,action)=>{
            state.products=action.payload
            state.loading=false
        })
        .addCase(getproducts.rejected,(state,action)=>{
            state.error=action.error.message
            state.loading=false
        })
    }
})

export const {Setloadmore} = productslice.actions