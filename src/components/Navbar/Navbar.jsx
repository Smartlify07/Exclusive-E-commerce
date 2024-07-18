/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import Logo from "../Logo";
import SearchBar from "../SearchBar";
import ActionIcons from "../ActionIcons";

const Navbar = ({ children }) => {
  const activeNavClass = `border-b border-b-black py-1`;
  return (
    <nav className="flex flex-col items-center pt-10 pb-5 font-poppins border-b border-[#E3E3E3] md:items-center">
      <div className="flex justify-between items-center w-10/12 md:w-11/12 lg:w-10/12 md:justify-between">
        <Logo />
        <ul className="hidden lg:flex  items-center gap-10 ">
          <li className="text-black font-normal text-base">
            <NavLink className={({ isActive }) => isActive && activeNavClass}>
              Home
            </NavLink>
          </li>
          <li className="text-black font-normal text-base">
            <NavLink>About</NavLink>
          </li>
          <li className="text-black font-normal text-base">
            <NavLink>Contact</NavLink>
          </li>
          <li className="text-black font-normal text-base">
            <NavLink>Sign Up</NavLink>
          </li>
        </ul>
        <div className="hidden lg:flex items-center gap-6 ">
          <SearchBar />
          <ActionIcons>{children}</ActionIcons>
        </div>
        <div className="flex flex-col gap-1 lg:hidden">
          <span className="bg-black w-5 h-1 rounded-sm"></span>
          <span className="bg-black w-5 h-1 rounded-sm"></span>
          <span className="bg-black w-5 h-1 rounded-sm"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
