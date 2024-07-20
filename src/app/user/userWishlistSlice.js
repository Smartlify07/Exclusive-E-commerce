import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

//Todo: Update firestore to add new users and user data, then let each user have their own database.

import { db } from "../../../firebaseconfig";
import {
  collection,
  getDocs,
  getDoc,
  setDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
const userWishListProductsAdapter = createEntityAdapter();

const initialState = userWishListProductsAdapter.getInitialState({
  wishlistError: null,
  wishlistStatus: "idle",
});

export const fetchWishlistProducts = createAsyncThunk(
  "wishlist/fetch",
  async ({ userId }) => {
    const querySnapshot = await getDocs(
      collection(db, "users", userId, "wishlist")
    );

    const products = querySnapshot.docs.map((product) => ({
      id: product.id,
      ...product.data(),
    }));
    return products;
  }
);

export const addToWishList = createAsyncThunk(
  "wishlist/add",
  async ({ userId, id, ...data }) => {
    const docRef = doc(db, "users", userId, "wishlist", id);
    await setDoc(docRef, {
      ...data,
    });
    console.log(userId, data, id);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log(docSnap.data());
      console.log(docRef.id);
      console.log("Added to wishlist");

      return {
        id: docRef.id,
        ...docSnap.data(),
      };
    } else {
      console.error("No such document");
    }
  }
);

export const removeFromWishList = createAsyncThunk(
  "wishlist/delete",
  async ({ userId, id }) => {
    await deleteDoc(doc(db, "users", userId, "wishlist", id));
    console.log(userId, id);
    return id;
  }
);

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchWishlistProducts.pending, (state) => {
        state.wishlistStatus = "pending";
      })
      .addCase(fetchWishlistProducts.fulfilled, (state, action) => {
        state.wishlistStatus = "successful";
        const products = action.payload.map((product) => ({
          ...product,
          saleStart: product?.saleStart?.seconds, // Create a serializable property
          saleEnd: product?.saleEnd?.seconds,
        }));

        userWishListProductsAdapter.upsertMany(state, products);
      })
      .addCase(fetchWishlistProducts.rejected, (state, action) => {
        state.wishlistStatus = "rejected";
        state.wishlistError = action.error.message;
        console.error(action.error.message);
      })
      .addCase(addToWishList.fulfilled, (state, action) => {
        console.log(action.payload);
        userWishListProductsAdapter.upsertOne(state, action.payload);
      })
      .addCase(addToWishList.rejected, (state, action) => {
        state.wishlistStatus = "rejected";
        state.wishlistError = action.error.message;
        console.error(action.error.message, action.error.code);
      })
      .addCase(removeFromWishList.fulfilled, (state, action) => {
        state.wishlistStatus = "fulfilled";
        console.log(action.payload);

        userWishListProductsAdapter.removeOne(state, action.payload);
      })
      .addCase(removeFromWishList.rejected, (state, action) => {
        state.wishlistStatus = "rejected";
        state.wishlistError = action.error.message;
        console.error(action.error.message);
      });
  },
});

export const {
  selectAll: selectAllWishListProducts,
  selectById: selectWishListProductById,
} = userWishListProductsAdapter.getSelectors((state) => state.wishlist);

export const wishListStatus = (state) => state.wishlist.wishlistStatus;
export const wishlistError = (state) => state.wishlist.wishlistError;

export default wishlistSlice.reducer;
