import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser, selectAuth } from "../app/auth/authSlice";

const useCurrentUser = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectAuth);
  const { userId } = user;

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return { userId };
};

export default useCurrentUser;
