import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "../app/auth/authSlice";

const useCurrentUser = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
};

export default useCurrentUser;
