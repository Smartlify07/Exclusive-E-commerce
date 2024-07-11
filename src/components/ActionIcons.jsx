/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ActionIcons = ({ children }) => {
  return (
    <div className="flex items-center gap-4">
      <Link to={"/"} className="">
        <img src="/images/icons/hearticon.svg" alt="carticon" />
      </Link>
      <Link to={"/"} className="">
        <img src="/images/icons/carticon.svg" alt="carticon" />
      </Link>

      {children}
    </div>
  );
};

export default ActionIcons;
