import { useDispatch, useSelector } from "react-redux";
import { selectAuth } from "../app/auth/authSlice";
import { useEffect } from "react";
import {
  fetchCartProducts,
  selectAllCartItems,
  selectCartStatus,
} from "../app/user/cartSlice";

const useCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(selectAllCartItems);
  const status = useSelector(selectCartStatus);
  const user = useSelector(selectAuth);
  const { userId } = user;

  useEffect(() => {
    if (status === "idle" && userId) {
      dispatch(fetchCartProducts({ userId }));
    }
  }, [dispatch, status, userId]);

  return { cart };
};

export default useCart;
