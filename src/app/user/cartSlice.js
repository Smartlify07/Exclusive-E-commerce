import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../firebaseconfig";

const cartAdapter = createEntityAdapter();
const initialState = cartAdapter.getInitialState({
  cartStatus: "idle",
  cartError: null,
});

export const fetchCartProducts = createAsyncThunk(
  "cart/fetch",
  async ({ userId }) => {
    try {
      const querySnapshot = await getDocs(
        collection(db, "users", userId, "cart")
      );

      const products = querySnapshot.docs.map((product) => ({
        id: product.id,
        ...product.data(),
      }));
      return products;
    } catch (error) {
      console.error(error);
    }
  }
);

export const addToCart = createAsyncThunk(
  "cart/add",
  async ({ userId, id, ...data }) => {
    try {
      const docRef = doc(db, "users", userId, "cart", id);
      await setDoc(docRef, {
        ...data,
      });

      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Added to cart");

        return {
          id: docRef.id,
          ...docSnap.data(),
        };
      } else {
        console.error("No such document");
      }
    } catch (error) {
      console.error(error);
    }
  }
);

export const updateCartQuantity = createAsyncThunk(
  "cart/updatequantity",
  async ({ userId, id, quantity }) => {
    try {
      const docRef = doc(db, "users", userId, "cart", id);
      console.log(quantity);
      await updateDoc(docRef, {
        quantity: quantity,
      });
      return { userId, id, quantity };
    } catch (error) {
      console.error(error);
    }
  }
);
export const updateCart = createAsyncThunk(
  "cart/update",
  async ({ userId }) => {
    try {
      const querySnapshot = await getDocs(
        collection(db, "users", userId, "cart")
      );

      const products = querySnapshot.docs.map((product) => ({
        id: product.id,
        ...product.data(),
      }));
      return products;
    } catch (error) {
      console.error(error);
    }
  }
);

export const removeFromCart = createAsyncThunk(
  "cart/delete",
  async ({ userId, id }) => {
    try {
      await deleteDoc(doc(db, "users", userId, "cart", id));
      return id;
    } catch (error) {
      console.error(error);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    updateQuantity: (state, action) => {
      console.log(action.payload.quantity);
      cartAdapter.updateOne(state, {
        changes: {
          quantity: action.payload.quantity,
        },
      });
    },
  },

  extraReducers(builder) {
    builder
      .addCase(fetchCartProducts.pending, (state) => {
        state.cartStatus = "pending";
      })
      .addCase(fetchCartProducts.fulfilled, (state, action) => {
        state.cartStatus = "successful";
        const products = action.payload.map((product) => ({
          ...product,
          saleStart: product?.saleStart?.seconds, // Create a serializable property
          saleEnd: product?.saleEnd?.seconds,
          quantity: product.quantity || 1,
        }));

        cartAdapter.upsertMany(state, products);
      })
      .addCase(fetchCartProducts.rejected, (state, action) => {
        state.cartStatus = "rejected";
        state.cartError = action.error.message;
        console.error(action.error);
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.cartStatus = "successful";
        console.log(state, action.payload);
        cartAdapter.upsertOne(state, action.payload);
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.cartStatus = "rejected";
        state.cartError = action.error.message;

        console.error(action.error.message, action.error.code);
      })
      .addCase(updateCartQuantity.fulfilled, (state, action) => {
        state.cartStatus = "successful";
        console.log(action);
        cartAdapter.updateOne(state, {
          changes: {
            quantity: action.payload.quantity,
          },
        });
      })
      .addCase(updateCartQuantity.rejected, (state, action) => {
        state.cartStatus = "rejected";
        state.cartError = action.error.message;

        console.error(action.error.message, action.error.code);
      })

      .addCase(updateCart.fulfilled, (state, action) => {
        state.cartStatus = "successful";
        console.log(action);
        cartAdapter.setAll(state, action.payload);
      })
      .addCase(updateCart.rejected, (state, action) => {
        state.cartStatus = "rejected";
        state.cartError = action.error.message;

        console.error(action.error.message, action.error.code);
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.cartStatus = "fulfilled";

        cartAdapter.removeOne(state, action.payload);
      })
      .addCase(removeFromCart.rejected, (state, action) => {
        state.cartStatus = "rejected";
        state.cartError = action.error.message;
        console.error(action.error.message);
      });
  },
});

export const { selectAll: selectAllCartItems, selectById: selectCartItemById } =
  cartAdapter.getSelectors((state) => state.cart);
export const selectCartStatus = (state) => state.cart.cartStatus;
export const selectCartError = (state) => state.cart.cartError;
export const { updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
