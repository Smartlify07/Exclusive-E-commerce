import { Link } from "react-router-dom";

const FooterAccount = () => {
  return (
    <div className="flex flex-col gap-6">
      <header>
        <h1 className="text-[20px] font-semibold text-white">Account</h1>
      </header>

      <div className="flex flex-col gap-4">
        <Link className="capitalize text-[#fafafa] text-base" to={"/account"}>
          My account
        </Link>
        <Link className="capitalize text-[#fafafa] text-base" to={"/Login"}>
          Login / Register
        </Link>
        <Link className="capitalize text-[#fafafa] text-base" to={"/Cart"}>
          Cart
        </Link>
        <Link className="capitalize text-[#fafafa] text-base" to={"/WishList"}>
          WishList
        </Link>
        <Link className="capitalize text-[#fafafa] text-base" to={"/Shop"}>
          Shop
        </Link>
      </div>
    </div>
  );
};

export default FooterAccount;
