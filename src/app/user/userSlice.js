import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../../../firebaseconfig";
import { doc, setDoc } from "firebase/firestore";

const initialState = {
  user: null,
  userId: null,
  userStatus: "idle",
  userError: null,
};

export const addUser = createAsyncThunk("user/addUser", async ({ user }) => {
  console.log(user);
  const docRef = doc(db, "users", user.userId);
  console.log(docRef);
  console.log(user);
  await setDoc(docRef, {
    ...user,
  });

  return user;
});

const userSlice = createSlice({
  initialState,
  name: "user",

  reducers: {
    //     getUserId: (state) => {},
  },
  extraReducers(builder) {
    builder
      .addCase(addUser.pending, (state) => {
        state.userStatus = "pending";
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.userStatus = "fulfilled";
        state.user = action.payload;
        console.log(action.payload);
        console.log(state.user);
        state.userId = action.payload.id;
      })
      .addCase(addUser.rejected, (state, action) => {
        state.userStatus = "rejected";
        state.userError = action.error.message;
        console.error(action.error.message);
      });
  },
});

export const selectUser = (state) => state.user.user;
export const { getUserId } = userSlice.actions;
export default userSlice.reducer;
