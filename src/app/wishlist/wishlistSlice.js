import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  nanoid,
} from "@reduxjs/toolkit";

import { db } from "../../../firebaseconfig";
import { collection, getDocs, addDoc, getDoc } from "firebase/firestore";
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
  async ({ ...data }) => {
    const docRef = await addDoc(collection(db, "wishlist"), {
      id: nanoid(),
      ...data,
    });

    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log(docSnap.data());
      return {
        id: docRef.id,
        ...docSnap.data(),
      };
    } else {
      console.error("No such document");
    }
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
        console.log(action.error.message);
        state.productsError = action.error.message;
      })
      .addCase(addToWishList.fulfilled, (state, action) => {
        wishListProductsAdapter.upsertOne(state, action.payload);
      })
      .addCase(addToWishList.rejected, (state, action) => {
        state.wishListStatus = "rejected";
        state.wishlistError = action.error.message;
      });
  },
});

export const {
  selectAll: selectAllWishListProducts,
  selectById: selectWishListProductById,
} = wishListProductsAdapter.getSelectors((state) => state.wishlist);

export const wishListStatus = (state) => state.wishlist.wishListStatus;

export default wishlistSlice.reducer;
