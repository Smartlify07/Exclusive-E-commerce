import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../../firebaseconfig";

const initialState = {
  user: null,
  isAuthenticated: false,
  userError: null,
  userStatus: "idle",
};

export const getCurrentUser = createAsyncThunk("user/getuser", async () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          unsubscribe();
          const userDetails = {
            name: user.displayName,
            phoneNumber: user.phoneNumber,
            profilePic: user.photoURL,
            email: user.email,
          };
          resolve(userDetails);
        } else {
          return null;
        }
      },
      (error) => {
        reject(error);
      }
    );
  });
});

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
      const userDetails = {
        name: userCredientials.user.displayName,
        phoneNumber: userCredientials.phoneNumber,
        profilePic: userCredientials.photoURL,
        email: userCredientials.email,
      };
      return userDetails;
    } catch (error) {
      console.error(error);
      console.log(email, typeof password);
    }
  }
);

export const signIn = createAsyncThunk(
  "user/signin",
  async ({ email, password }) => {
    try {
      const userCredientials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userDetails = {
        name: userCredientials.user.displayName,
        phoneNumber: userCredientials.phoneNumber,
        profilePic: userCredientials.photoURL,
        email: userCredientials.email,
      };
      return userDetails;
    } catch (error) {
      console.error(error);
    }
  }
);

export const userSlice = createSlice({
  initialState,
  name: "user",

  extraReducers(builder) {
    builder
      .addCase(getCurrentUser.pending, (state) => {
        state.userStatus = "pending";
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.userStatus = "successful";
        state.isAuthenticated = true;
        state.user = action.payload;
        console.log(action.payload);
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.userStatus = "rejected";
        state.userError = action.error.message;
      })
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
      })
      .addCase(signIn.pending, (state) => {
        state.userStatus = "pending";
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.userStatus = "successful";
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.userStatus = "rejected";
        state.userError = action.error.message;
      });
  },
});

export const selectUser = (state) => state.user.user;
export const selectUserStatus = (state) => state.user.userStatus;
export const selectUserError = (state) => state.user.userError;
export default userSlice.reducer;
