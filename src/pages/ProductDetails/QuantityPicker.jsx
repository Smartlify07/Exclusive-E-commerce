/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { addToCart, updateCartQuantity } from "../../app/user/cartSlice";
import useCurrentUser from "../../hooks/useCurrentUser";
import { useDispatch } from "react-redux";

const QuantityPicker = ({ product, quantity, id }) => {
  const { userId } = useCurrentUser();
  const [amount, setAmount] = useState(quantity);

  const dispatch = useDispatch();
  useEffect(() => {
    setAmount(quantity);
  }, [quantity]);

  const increment = () => {
    if (quantity === 0) {
      dispatch(
        addToCart({
          userId,
          id,
          saleStart: product.saleStart,
          saleEnd: product.saleEnd,
          name: product.name,
          discountedPrice: product.discountedPrice,
          actualPrice: product.actualPrice,
          image: product.image,
          revenue: product.revenue,
          unitSold: product.unitSold,
          likes: product.likes,
          views: product.views,
          stars: product.stars,
          quantity: 1,
        })
      );
    } else {
      const newAmount = amount + 1;
      setAmount(newAmount);
      dispatch(updateCartQuantity({ userId, id, quantity: newAmount }));
    }
  };

  const decrement = () => {
    const newAmount = amount - 1;

    setAmount(newAmount);

    dispatch(updateCartQuantity({ userId, id, quantity: newAmount }));
  };

  return (
    <div className="flex items-stretch relative">
      <button
        onClick={() => {
          decrement();
        }}
        disabled={amount === 0}
        className="relative left-2  text-xl bg-transparent border rounded-[4px] w-[40px] h-[40px] disabled:bg-opacity-85"
      >
        -
      </button>
      <input
        type="number"
        className="border-t  border-b self-stretch text-center w-[80px]"
        value={amount}
      />
      <button
        className=" text-xl font-poppins text-white relative right-2 bg-red rounded-[4px] w-[40px] h-[40px]"
        onClick={() => {
          increment();
        }}
      >
        +
      </button>
    </div>
  );
};

export default QuantityPicker;
