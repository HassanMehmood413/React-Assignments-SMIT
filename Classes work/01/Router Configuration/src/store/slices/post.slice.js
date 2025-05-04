import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs, deleteDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase.jsx";

export const create = createAsyncThunk('posts/createPost', async (postData) => {
    try {
        const docRef = await addDoc(collection(db, "posts"), postData)
        return {
            id: docRef.id,
            ...postData
        }
    }
    catch (error) {
        console.log(error)
        throw error
    }
})



export 