/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router";

const ProtectedAuthRoute = ({ children }) => {
  const location = useLocation();
  const isAuthenticated = false;
  if (isAuthenticated) {
    return children;
  } else {
    return (
      <Navigate to={"/signup"} state={{ from: location }} replace></Navigate>
    );
  }
};

export default ProtectedAuthRoute;
