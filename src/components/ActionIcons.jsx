/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ActionIcons = ({ children }) => {
  return (
    <div className="flex  gap-5 order-1  lg:flex-row lg:order-2 lg:items-center lg:gap-4">
      <Link to={"/wishlist"} className="">
        <img src="/images/icons/hearticon.svg" alt="hearticon" />
      </Link>
      <Link to={"/cart"} className="">
        <img src="/images/icons/carticon.svg" alt="carticon" />
      </Link>

      {children}
    </div>
  );
};

export default ActionIcons;
