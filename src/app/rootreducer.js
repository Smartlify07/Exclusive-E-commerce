import { combineReducers } from "@reduxjs/toolkit";
import productsReducer from "./products/productsSlice";
import userReducer from "./user/userSlice";
import wishlistReducer from "./wishlist/wishlistSlice";
export const rootReducer = combineReducers({
  products: productsReducer,
  user: userReducer,
  wishlist: wishlistReducer,
});
