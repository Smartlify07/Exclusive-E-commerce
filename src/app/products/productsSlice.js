import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

import { db } from "../../../firebaseconfig";
import { collection, getDocs } from "firebase/firestore";

const productsAdapter = createEntityAdapter();
const initialState = productsAdapter.getInitialState({
  productsStatus: "idle",
  productsError: null,
});

export const fetchProducts = createAsyncThunk(
  "products/fetchproducts",
  async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    const products = querySnapshot.docs.map((product) => ({
      id: product.id,
      ...product.data(),
    }));
    return products;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,

  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.productsStatus = "pending";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.productsStatus = "successful";
        const products = action.payload.map((product) => ({
          ...product,
          saleStart: product?.saleStart?.seconds, // Create a serializable property
          saleEnd: product?.saleEnd?.seconds,
        }));

        productsAdapter.upsertMany(state, products);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.productsStatus = "rejected";
        console.log(action.error.message);
        state.productsError = action.error.message;
      });
  },
});

export const { selectAll: selectAllProducts, selectById: selectProductById } =
  productsAdapter.getSelectors((state) => state.products);

export const selectProductsStatus = (state) => state.products.productsStatus;
export const selectProductsError = (state) => state.products.productsError;
export default productsSlice.reducer;
