import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOut, selectAuth } from "../../app/auth/authSlice";

const DropDown = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
  };
  const user = useSelector(selectAuth);
  const { userId } = user;

  return (
    <div className="bg-black right-4  rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm  border border-gray-100 absolute w-[300px]  py-3 px-4 z-[10000] -bottom-[220px] lg:-bottom-[220px] lg:bg-opacity-40 lg:right-10 ">
      <ul className="flex flex-col gap-5">
        <Link
          to={`/account/${userId}`}
          className=" flex items-center gap-3 text-[#fafafa] text-sm font-normal"
        >
          <img src="/images/icons/user.svg" />
          Manage My Account
        </Link>
        <Link
          to={`/account/${userId}/orders`}
          className=" flex items-center gap-3 text-[#fafafa] text-sm font-normal"
        >
          <img src="/images/icons/icon-mallbag.svg" />
          My Orders
        </Link>
        <Link
          to={`/account/${userId}/cancellations`}
          className=" flex items-center gap-3 text-[#fafafa] text-sm font-normal"
        >
          <img src="/images/icons/icon-cancel.svg" />
          My Cancellations
        </Link>
        <Link
          to={`/account/${userId}/reviews`}
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
