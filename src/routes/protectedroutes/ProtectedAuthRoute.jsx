/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router";
import { selectAuth } from "../../app/auth/authSlice";

const ProtectedAuthRoute = ({ children }) => {
  const location = useLocation();
  const user = useSelector(selectAuth);

  if (user?.userId !== null) {
    return children;
  } else {
    return (
      <Navigate to={"/signup"} state={{ from: location }} replace></Navigate>
    );
  }
};

export default ProtectedAuthRoute;
