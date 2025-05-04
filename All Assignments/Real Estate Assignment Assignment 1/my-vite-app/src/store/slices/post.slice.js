import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs, addDoc, updateDoc, deleteDoc,doc } from "firebase/firestore";
import { db } from "../../config/firebase"



export const createPost = createAsyncThunk(
    "posts/createpost",
    async (post) => {
        try {

            const add = await addDoc(collection(db, "posts"), post)
            return { id: add.id, ...post }
        }
        catch (error) {
            console.log("Error", error)
        }
    }
)



export const getposts = createAsyncThunk(
    "posts/getposts",
    async () => {
        try {
            const get = await getDocs(collection(db, "posts"))
            let posts = []
            get.forEach((doc) => {
                posts.push({ id: doc.id, ...doc.data() })
            })
            return posts
        }
        catch (error) {
            console.log("Error", error)
        }
    }
)



export const updateposts = createAsyncThunk(
    "posts/updatepost",
    async (id, postdata) => {
        try {
            const getpost = doc(db, "posts", id)
            await updateDoc(getpost, postdata)

            return { id: id, ...postdata }
        }
        catch (error) {
            console.log("Error", error)
        }
    }
)


export const deletepost = createAsyncThunk(
    "posts/deletepost",
    async (id) => {
        try {
            const get_post_del = doc(db, "posts", id)
            await deleteDoc(get_post_del)
            return id
        }
        catch (error) {
            console.log("Error", error)
        }
    }
)




export const postslice = createSlice({
    name: "post",
    initialState: {
        post: [],
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(getposts.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(getposts.fulfilled, (state, action) => {
                state.loading = false
                state.post = action.payload
            })
            .addCase(getposts.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
            .addCase(createPost.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(createPost.fulfilled, (state, action) => {
                state.loading = false
                state.post = [...state.post, action.payload]
            })
            .addCase(createPost.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
            .addCase(updateposts.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(updateposts.fulfilled, (state, action) => {
                state.loading = false
                state.post = state.post.map((post) => {
                    if (post.id === action.payload.id) {
                        return action.payload
                    }
                    return post
                })
            })
            .addCase(updateposts.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
            .addCase(deletepost.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(deletepost.fulfilled, (state, action) => {
                state.loading = false
                state.post = state.post.filter((post) => post.id !== action.payload)
            })
            .addCase(deletepost.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    }
})


export default postslice