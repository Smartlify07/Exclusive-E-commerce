import { useSelector } from "react-redux";
import { selectAuth, selectAuthStatus } from "../app/auth/authSlice";
import { Navigate } from "react-router";

export const useAuth = () => {
  const user = useSelector(selectAuth);
  console.log(user);
  const authStatus = useSelector(selectAuthStatus);

  if (user?.userId !== null && authStatus !== "rejected") {
    console.log(user);
    return <Navigate to={"/"} />;
  }
};
