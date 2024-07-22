import { useSelector } from "react-redux";
import { memo } from "react";
import { selectAllCartItems } from "../../app/user/cartSlice";
import useCart from "../../hooks/useCart";
import CartRow from "./CartRow";

const CartRows = () => {
  useCart();
  const cartItems = useSelector(selectAllCartItems);
  console.log(cartItems);
  const renderedCartRows = cartItems.map((item) => (
    <CartRow key={item.id} item={item} />
  ));
  return <tbody>{renderedCartRows}</tbody>;
};

const memoCartRows = memo(CartRows);
export default memoCartRows;
