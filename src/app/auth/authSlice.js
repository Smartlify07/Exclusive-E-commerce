import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../../firebaseconfig";

const initialState = {
  user: {
    userId: null,
    name: "",
    phoneNumber: "",
    email: "",
    profilePic: "",
  },
  isAuthenticated: false,
  authError: null,
  authStatus: "idle",
};

export const getCurrentUser = createAsyncThunk("auth/getuser", async () => {
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
            userId: user.uid,
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
  "auth/signup",
  async ({ email, password, name }) => {
    try {
      const userCredientials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(auth.currentUser, {
        displayName: name,
      });
      const userDetails = {
        name: userCredientials.user.displayName,
        phoneNumber: userCredientials.user.phoneNumber,
        profilePic: userCredientials.user.photoURL,
        email: userCredientials.user.email,
        userId: userCredientials.user.uid,
      };
      return userDetails;
    } catch (error) {
      console.error(error);
    }
  }
);

export const signIn = createAsyncThunk(
  "auth/signin",
  async ({ email, password }) => {
    try {
      const userCredientials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userDetails = {
        name: userCredientials.user.displayName,
        phoneNumber: userCredientials.user.phoneNumber,
        profilePic: userCredientials.user.photoURL,
        email: userCredientials.user.email,
        userId: userCredientials.user.uid,
      };
      return userDetails;
    } catch (error) {
      console.error(error);
    }
  }
);

export const logOut = createAsyncThunk("auth/signout", async () => {
  signOut(auth);
  console.log("Signed out successfully");
});
export const authSlice = createSlice({
  initialState,
  name: "auth",

  extraReducers(builder) {
    builder
      .addCase(getCurrentUser.pending, (state) => {
        state.authStatus = "pending";
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.authStatus = "successful";
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.authStatus = "rejected";
        state.authError = action.error.message;
      })
      .addCase(signUp.pending, (state) => {
        state.authStatus = "pending";
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.authStatus = "successful";
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.authStatus = "rejected";
        state.authError = action.error.message;
        console.log(action.error.message);
      })
      .addCase(signIn.pending, (state) => {
        state.authStatus = "pending";
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.authStatus = "successful";
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.authStatus = "rejected";
        state.authError = action.error.message;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.user = null;
        state.authStatus = "fulfilled";
      })
      .addCase(logOut.rejected, (state, action) => {
        state.authStatus = "rejected";
        state.authError = action.error.message;
        console.log(action.error.message);
      });
  },
});

export const selectAuth = (state) => state.auth.user;
export const selectAuthStatus = (state) => state.auth.authStatus;
export const selectAuthError = (state) => state.auth.authError;
export default authSlice.reducer;
