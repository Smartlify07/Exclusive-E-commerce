import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../../app/auth/authSlice";

const DropDown = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <div className="bg-black right-4  rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm  border border-gray-100 absolute w-[300px]  py-3 px-4 -bottom-[220px] lg:-bottom-[220px] lg:bg-opacity-10 lg:right-10 ">
      <ul className="flex flex-col gap-5">
        <Link
          to={"/account"}
          className=" flex items-center gap-3 text-[#fafafa] text-sm font-normal"
        >
          <img src="/images/icons/user.svg" />
          Manage My Account
        </Link>
        <Link
          to={"/account/orders"}
          className=" flex items-center gap-3 text-[#fafafa] text-sm font-normal"
        >
          <img src="/images/icons/icon-mallbag.svg" />
          My Orders
        </Link>
        <Link
          to={"/account/orders"}
          className=" flex items-center gap-3 text-[#fafafa] text-sm font-normal"
        >
          <img src="/images/icons/icon-cancel.svg" />
          My Cancellations
        </Link>
        <Link
          to={"/account/orders"}
          className=" flex items-center gap-3 text-[#fafafa] text-sm font-normal"
        >
          <img src="/images/icons/Icon-Reviews.svg" />
          My Reviews
        </Link>
        <button
          onClick={handleLogout}
          className=" flex items-center gap-3 text-[#fafafa] text-sm font-normal"
        >
          <img src="/images/icons/Icon-logout.svg" />
          Logout
        </button>
      </ul>
    </div>
  );
};

export default DropDown;
