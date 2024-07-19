import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchWishlistProducts,
  wishListStatus,
} from "../app/wishlist/wishlistSlice";

const useWishListProducts = () => {
  const dispatch = useDispatch();
  const status = useSelector(wishListStatus);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchWishlistProducts());
    }
  }, [dispatch, status]);
};

export default useWishListProducts;
