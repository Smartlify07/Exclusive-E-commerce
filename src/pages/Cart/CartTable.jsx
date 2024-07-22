import { useSelector } from "react-redux";
import CartRows from "./CartRows";
import CartTableTitles from "./CartTableTitles";
import { selectCartStatus } from "../../app/user/cartSlice";
import Loader from "../../components/Loader";

const CartTable = () => {
  const status = useSelector(selectCartStatus);
  return (
    <>
      <table className="table w-full table-fixed lg:table-fixed border-separate overflow-x-scroll border-spacing-y-4">
        <CartTableTitles />
        <CartRows />
      </table>
      <div className="flex items-center py-5 justify-center  w-full">
        {status === "pending" && <Loader message={"Getting cart items"} />}
      </div>
    </>
  );
};

export default CartTable;
