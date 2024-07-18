import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../../firebaseconfig";

const initialState = {
  user: auth.currentUser || null,
  isAuthenticated: false,
  userError: null,
  userStatus: "idle",
};

export const signUp = createAsyncThunk(
  "user/signup",
  async ({ email, password, name }) => {
    try {
      const userCredientials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const userProfile = await updateProfile(auth.currentUser, {
        displayName: name,
      });
      console.log(userCredientials, userProfile);

      return userCredientials.user;
    } catch (error) {
      console.error(error);
      console.log(email, typeof password);
    }
  }
);

export const userSlice = createSlice({
  initialState,
  name: "user",

  extraReducers(builder) {
    builder
      .addCase(signUp.pending, (state) => {
        state.userStatus = "pending";
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.userStatus = "successful";
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.userStatus = "rejected";
        state.userError = action.error.message;
      });
  },
});

export const selectUser = (state) => state.user.user;
export const selectUserStatus = (state) => state.user.userStatus;
export const selectUserError = (state) => state.user.userError;
export default userSlice.reducer;
