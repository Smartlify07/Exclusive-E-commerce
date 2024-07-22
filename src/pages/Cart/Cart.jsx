import { ToastContainer } from "react-toastify";
import CartCtas from "./CartCtas";
import CartTable from "./CartTable";
import CartTotal from "./CartTotal";
import CouponForm from "./CouponForm";

const Cart = () => {
  return (
    <main className="py-10 font-poppins flex flex-col items-center lg:py-20">
      <div className="w-11/12 lg:w-10/12 flex flex-col items-center">
        <ToastContainer autoClose={500} />
        <CartTable />
        <CartCtas />
        <div className="flex flex-col gap-7 mt-10 w-full items-start md:flex-row md:gap-0  md:w-full  md:justify-between">
          <CouponForm />
          <CartTotal />
        </div>
      </div>
    </main>
  );
};

export default Cart;
