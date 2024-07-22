/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCartQuantity, updateQuantity } from "../../app/user/cartSlice";
import { selectAuth } from "../../app/auth/authSlice";

const CartRow = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const dispatch = useDispatch();
  const user = useSelector(selectAuth);
  const { userId } = user;
  return (
    <tr key={item.id} className="w-full bg-white   drop-shadow-lg ">
      <td
        scope="row"
        className="px-6  py-6 font-normal text-sm  flex gap-3  items-center "
      >
        <img src={item.image} className=" h-5 object-cover" />
        {item.name}
      </td>
      <td className="px-6 py-6 text-sm text-center">${item.discountedPrice}</td>
      <td className="px-6 py-6 text-sm text-center">
        <input
          type="number"
          onChange={(e) => {
            let number = parseInt(e.target.value, 10);

            if (isNaN(number) || number < 1) {
              number = 1;
              setQuantity(number);
            }
            dispatch(
              updateQuantity({
                quantity: number,
              })
            );
            dispatch(
              updateCartQuantity({
                userId,
                id: item.id,
                quantity: number,
              })
            );
            setQuantity(e.target.value);
          }}
          value={quantity}
          className="border border-black border-opacity-40 rounded-sm inset-2  w-[55px] px-2 py-2 focus:outline-none"
        />
      </td>
      <td
        width="10%"
        className="px-6 text-sm border-collapse py-6 text-center "
      >
        $ {item.discountedPrice * quantity}
      </td>
    </tr>
  );
};

export default CartRow;
