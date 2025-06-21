import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import bcrypt from "bcryptjs";

export const loginapproved = createAsyncThunk(
  "login/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const checkdb = await getDocs(collection(db, "users"));
      let matchedUser = null;

      checkdb.forEach((doc) => {
        const userData = doc.data();
        if (userData.email === email) {
          matchedUser = { id: doc.id, ...userData };
        }
      });

      if (!matchedUser) {
        return rejectWithValue("User not found");
      }

      const isMatch = await bcrypt.compare(password, matchedUser.password);

      if (!isMatch) {
        return rejectWithValue("Incorrect password");
      }

      return matchedUser;

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const loginslice = createSlice({
  name: "login",
  initialState: {
    user: null,
    loading: false,
    error: null
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginapproved.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginapproved.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginapproved.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed";
      });
  }
});

export default loginslice;
