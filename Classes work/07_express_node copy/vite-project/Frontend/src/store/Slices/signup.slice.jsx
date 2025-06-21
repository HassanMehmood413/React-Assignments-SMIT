import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import bcrypt from "bcryptjs";  // ✅ Import bcrypt

// 🔹 Async thunk for creating user
export const createuser = createAsyncThunk(
  "signup/createuser",
  async (user, thunkAPI) => {
    try {
      // ✅ Hash the password before saving
      const hashedPassword = await bcrypt.hash(user.password, 10);
      const newUser = {
        ...user,
        password: hashedPassword,
      };

      const adduser = await addDoc(collection(db, "users"), newUser);
      return { id: adduser.id, ...newUser };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// 🔹 Signup Slice
const signupslice = createSlice({
  name: "signup",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createuser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createuser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(createuser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default signupslice;
