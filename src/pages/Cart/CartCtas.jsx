/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { uid } from "uid";
import { updateCart } from "../../app/user/cartSlice";
import { selectAuth } from "../../app/auth/authSlice";
// import { notify } from "../../../utils/functions/notify";

const CartCtas = () => {
  const user = useSelector(selectAuth);
  const { userId } = user;
  const notify = (message) => {
    const toastId = uid(5);

    toast.success(message, {
      toastId,
    });
  };

  const handleUpdateCart = async () => {
    await dispatch(updateCart({ userId })).unwrap();
    notify("Updated cart successfully");
  };

  const dispatch = useDispatch();
  return (
    <div className="flex mt-0 w-full gap-3 md:w-full lg:flex-row lg:mt-5 md:justify-between md:items-center ">
      <Link
        to={"/"}
        className="border text-center w-1/2  rounded-sm capitalize border-black border-opacity-50 font-medium font-poppins text-base py-4 px-8 lg:px-12 transition-all hover:bg-red hover:border-none hover:text-white md:w-auto"
      >
        Return to shop
      </Link>
      <button
        onClick={handleUpdateCart}
        className="border rounded-sm capitalize w-1/2 border-black border-opacity-50 font-medium font-poppins text-base py-4 px-8 lg:px-12 transition-all hover:bg-black hover:border-none hover:text-white md:w-auto"
      >
        Update Cart
      </button>
    </div>
  );
};

export default CartCtas;
