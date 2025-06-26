import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const BACKEND_URL = "http://localhost:5000/api"


export const getProducts = createAsyncThunk("products/fetch", async () => {
    const res = await axios.get(`${BACKEND_URL}/products`)
    return res.data.data;
})


export const createProduct = createAsyncThunk("products/create", async (product) => {
    const res = await axios.post(`${BACKEND_URL}/create/products`, product)
    return res.data.data;
})

export const updateProduct = createAsyncThunk("products/update", async ({ id, updatedata }) => {
    const res = await axios.put(`${BACKEND_URL}/update/products/${id}`, updatedata)
    return res.data.data;
})

export const deleteProduct = createAsyncThunk("products/delete", async (id) => {
    const res = await axios.delete(`${BACKEND_URL}/delete/products/${id}`)
    return res.data.data;
})


const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.loading = false
                state.products = action.payload
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })

            .addCase(createProduct.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })

            // Update
            .addCase(updateProduct.fulfilled, (state, action) => {
                const index = state.items.findIndex(p => p._id === action.payload._id);
                if (index !== -1) {
                    state.items[index] = action.payload;
                }
            })

            // Delete
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.items = state.items.filter(p => p._id !== action.payload);
            });
    }
})

export default productsSlice;





// These are using Firebase for storage 
// export const createPost = createAsyncThunk(
//     "posts/createpost",
//     async (post) => {
//         try {

//             const add = await addDoc(collection(db, "posts"), post)
//             return { id: add.id, ...post }
//         }
//         catch (error) {
//             console.log("Error", error)
//         }
//     }
// )



// export const getposts = createAsyncThunk(
//     "posts/getposts",
//     async () => {
//         try {
//             const get = await getDocs(collection(db, "posts"))
//             let posts = []
//             get.forEach((doc) => {
//                 posts.push({ id: doc.id, ...doc.data() })
//             })
//             return posts
//         }
//         catch (error) {
//             console.log("Error", error)
//         }
//     }
// )



// export const updateposts = createAsyncThunk(
//     "posts/updatepost",
//     async ({id, postdata}) => {
//         console.log(id,postdata)
//         try {
//             const getpost = doc(db, "posts", id)
//             console.log(getpost)
//             await updateDoc(getpost, postdata)

//             return { id: id, ...postdata }
//         }
//         catch (error) {
//             console.log("Error", error)
//         }
//     }
// )


// export const deletepost = createAsyncThunk(
//     "posts/deletepost",
//     async (id) => {
//         try {
//             const get_post_del = doc(db, "posts", id)
//             await deleteDoc(get_post_del)
//             return id
//         }
//         catch (error) {
//             console.log("Error", error)
//         }
//     }
// )




// export const postslice = createSlice({
//     name: "post",
//     initialState: {
//         post: [],
//         loading: false,
//         error: null
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(getposts.pending, (state) => {
//                 state.loading = true
//                 state.error = null
//             })
//             .addCase(getposts.fulfilled, (state, action) => {
//                 state.loading = false
//                 state.post = action.payload
//             })
//             .addCase(getposts.rejected, (state, action) => {
//                 state.loading = false
//                 state.error = action.error.message
//             })
//             .addCase(createPost.pending, (state) => {
//                 state.loading = true
//                 state.error = null
//             })
//             .addCase(createPost.fulfilled, (state, action) => {
//                 state.loading = false
//                 state.post = [...state.post, action.payload]
//             })
//             .addCase(createPost.rejected, (state, action) => {
//                 state.loading = false
//                 state.error = action.error.message
//             })
//             .addCase(updateposts.pending, (state) => {
//                 state.loading = true
//                 state.error = null
//             })
//             .addCase(updateposts.fulfilled, (state, action) => {
//                 state.loading = false
//                 state.post = state.post.map((post) => {
//                     if (post.id === action.payload.id) {
//                         return action.payload
//                     }
//                     return post
//                 })
//             })
//             .addCase(updateposts.rejected, (state, action) => {
//                 state.loading = false
//                 state.error = action.error.message
//             })
//             .addCase(deletepost.pending, (state) => {
//                 state.loading = true
//                 state.error = null
//             })
//             .addCase(deletepost.fulfilled, (state, action) => {
//                 state.loading = false
//                 state.post = state.post.filter((post) => post.id !== action.payload)
//             })
//             .addCase(deletepost.rejected, (state, action) => {
//                 state.loading = false
//                 state.error = action.error.message
//             })
//     }
// })


// export default postslice