import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

const productsAdapter = createEntityAdapter();
const initialState = productsAdapter.getInitialState({
  products: [],
  productsStatus: "idle",
  productsError: null,
});

const fetchProducts = createAsyncThunk(
  "products/fetchproducts",
  async () => {}
);

const productsSlice = createSlice({
  name: "products",
  initialState,

  extraReducers(builder) {},
});

export default productsSlice.reducer;
