import { useSelector } from "react-redux";
import { selectAllCartItems } from "../../app/user/cartSlice";
import { useCallback } from "react";

const CartTotal = () => {
  const cartItems = useSelector(selectAllCartItems);
  const calculateTotal = useCallback(() => {
    const newTotal = cartItems.map(
      (item) => item.discountedPrice * item.quantity
    );
    if (newTotal.length > 0) {
      return newTotal.reduce((a, b) => a + b);
    }
  }, [cartItems]);

  return (
    <div className="px-5 py-6 border w-full rounded-md border-black md:w-2/4 lg:w-2/6">
      <h1 className="text-[20px] font-medium">Cart Total</h1>

      <div className="flex flex-col gap-2 mt-3">
        <div className="flex items-center justify-between border-b py-2 border-b-black border-opacity-30">
          <p className="text-black  text-base">Subtotal:</p>
          <p className="text-black font-normal text-base">
            ${calculateTotal()}
          </p>
        </div>
        <div className="flex items-center justify-between border-b py-2 border-b-black border-opacity-30">
          <p className="text-black  text-base">Shipping:</p>
          <p className="text-black font-normal text-base">free</p>
        </div>
        <div className="flex items-center justify-between py-2">
          <p className="text-black  text-base">Total:</p>
          <p className="text-black font-normal text-base">
            ${calculateTotal()}
          </p>
        </div>

        <button className="bg-red py-3  rounded-[4px] mt-2 text-white font-medium md:self-center md:w-11/12 ">
          Proceed to checkout
        </button>
      </div>
    </div>
  );
};

export default CartTotal;
