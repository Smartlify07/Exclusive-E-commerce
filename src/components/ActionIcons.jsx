/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllWishListProducts } from "../app/user/userWishlistSlice";
import { selectAllCartItems } from "../app/user/cartSlice";
import Badge from "./Badge";

const ActionIcons = ({ children }) => {
  const wishListItems = useSelector(selectAllWishListProducts);
  const cartItems = useSelector(selectAllCartItems);
  const cartAmount = cartItems.length;
  const wishListAmount = wishListItems.length;
  return (
    <div className="flex  gap-5 order-1  lg:flex-row lg:order-2 lg:items-center lg:gap-4">
      <Link to={"/wishlist"} className="relative">
        <img src="/images/icons/hearticon.svg" alt="hearticon" />
        <Badge amount={wishListAmount} />
      </Link>
      <Link to={"/cart"} className="relative">
        <img src="/images/icons/carticon.svg" alt="carticon" />
        <Badge amount={cartAmount} />
      </Link>

      {children}
    </div>
  );
};

export default ActionIcons;
