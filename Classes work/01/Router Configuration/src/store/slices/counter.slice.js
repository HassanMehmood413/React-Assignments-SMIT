import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


export const fetchProducts = createAsyncThunk('fetchProducts', async () => {
    try {

        const res = await axios.get('https://fakestoreapi.com/products')
        return res.data
    }
    catch (error) {
        console.log(error)
        throw error
    }

    

})


export const counterslice = createSlice({

    name: "counter",
    initialState: {
        count: 0,
    },
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        }
    },
    extraReducers: (builder)=>{
        builder
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload
        })

        .addCase(fetchProducts.rejected, (state, action) => {
            state.error = action.error.message
        })  

    }

})

export const { increment, decrement } = counterslice.actions