import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

import { db } from "../../../firebaseconfig";
import {
  collection,
  getDocs,
  getDoc,
  setDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
const wishListProductsAdapter = createEntityAdapter();

const initialState = wishListProductsAdapter.getInitialState({
  wishlistError: null,
  wishListStatus: "idle",
});

export const fetchWishlistProducts = createAsyncThunk(
  "wishlist/fetch",
  async () => {
    const querySnapshot = await getDocs(collection(db, "wishlist"));

    const products = querySnapshot.docs.map((product) => ({
      id: product.id,
      ...product.data(),
    }));
    return products;
  }
);

export const addToWishList = createAsyncThunk(
  "wishlist/add",
  async ({ id, ...data }) => {
    const docRef = doc(db, "wishlist", id);
    await setDoc(docRef, {
      ...data,
    });
    console.log(data, id);

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
  async (id) => {
    await deleteDoc(doc(db, "wishlist", id));
    console.log(id);
    return id;
  }
);

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchWishlistProducts.pending, (state) => {
        state.wishListStatus = "pending";
      })
      .addCase(fetchWishlistProducts.fulfilled, (state, action) => {
        state.productsStatus = "successful";
        const products = action.payload.map((product) => ({
          ...product,
          saleStart: product?.saleStart?.seconds, // Create a serializable property
          saleEnd: product?.saleEnd?.seconds,
        }));

        wishListProductsAdapter.upsertMany(state, products);
      })
      .addCase(fetchWishlistProducts.rejected, (state, action) => {
        state.productsStatus = "rejected";
        state.productsError = action.error.message;
        console.error(action.error.message, action.error.code);
      })
      .addCase(addToWishList.fulfilled, (state, action) => {
        console.log(action.payload);
        wishListProductsAdapter.upsertOne(state, action.payload);
      })
      .addCase(addToWishList.rejected, (state, action) => {
        state.wishListStatus = "rejected";
        state.wishlistError = action.error.message;
        console.error(action.error.message, action.error.code);
      })
      .addCase(removeFromWishList.fulfilled, (state, action) => {
        state.wishListStatus = "fulfilled";
        console.log(action.payload);

        wishListProductsAdapter.removeOne(state, action.payload);
      })
      .addCase(removeFromWishList.rejected, (state, action) => {
        state.wishListStatus = "rejected";
        state.wishlistError = action.error.message;
        console.error(action.error.code);
      });
  },
});

export const {
  selectAll: selectAllWishListProducts,
  selectById: selectWishListProductById,
} = wishListProductsAdapter.getSelectors((state) => state.wishlist);

export const wishListStatus = (state) => state.wishlist.wishListStatus;

export default wishlistSlice.reducer;
