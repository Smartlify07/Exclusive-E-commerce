import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  selectAllProducts,
  selectProductsStatus,
} from "../app/products/productsSlice";
import { useEffect } from "react";
import { selectAuth } from "../app/auth/authSlice";

export const useProducts = () => {
  const status = useSelector(selectProductsStatus);
  const products = useSelector(selectAllProducts);
  const dispatch = useDispatch();
  const user = useSelector(selectAuth);

  useEffect(() => {
    if (user?.userId !== null) {
      if (status === "idle") {
        dispatch(fetchProducts());
      }
    }
  }, [status, dispatch, user]);
  return { products };
};
