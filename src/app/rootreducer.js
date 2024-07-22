import { combineReducers } from "@reduxjs/toolkit";
import productsReducer from "./products/productsSlice";
import authReducer from "./auth/authSlice";
import userReducer from "./user/userSlice";
import userWishListReducer from "./user/userWishlistSlice";
import cartReducer from "./user/cartSlice";
export const rootReducer = combineReducers({
  products: productsReducer,
  auth: authReducer,
  user: userReducer,
  wishlist: userWishListReducer,
  cart: cartReducer,
});
