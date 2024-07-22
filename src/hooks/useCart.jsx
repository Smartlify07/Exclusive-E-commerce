import { useDispatch, useSelector } from "react-redux";
import { selectAuth } from "../app/auth/authSlice";
import { useEffect } from "react";
import { fetchCartProducts, selectCartStatus } from "../app/user/cartSlice";

const useCart = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectCartStatus);
  const user = useSelector(selectAuth);
  const { userId } = user;

  useEffect(() => {
    if (status === "idle" && userId) {
      dispatch(fetchCartProducts({ userId }));
    }
  }, [dispatch, status, userId]);
};

export default useCart;
