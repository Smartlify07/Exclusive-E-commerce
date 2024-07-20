import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchWishlistProducts,
  wishListStatus,
} from "../app/user/userWishlistSlice";
import { selectAuth } from "../app/auth/authSlice";

const useWishListProducts = () => {
  const dispatch = useDispatch();
  const status = useSelector(wishListStatus);
  const user = useSelector(selectAuth);
  const { userId } = user;
  useEffect(() => {
    if (status === "idle" && userId) {
      dispatch(fetchWishlistProducts({ userId }));
    }
  }, [dispatch, status, userId]);
};

export default useWishListProducts;
