/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router";
import { selectUser } from "../../app/user/userSlice";

const ProtectedAuthRoute = ({ children }) => {
  const location = useLocation();
  const user = useSelector(selectUser);
  if (user) {
    return children;
  } else {
    return (
      <Navigate to={"/signup"} state={{ from: location }} replace></Navigate>
    );
  }
};

export default ProtectedAuthRoute;
