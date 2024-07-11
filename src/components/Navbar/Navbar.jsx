/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import Logo from "../Logo";
import SearchBar from "../SearchBar";
import ActionIcons from "../ActionIcons";

const Navbar = ({ children }) => {
  const activeNavClass = `border-b border-b-black py-1`;
  return (
    <nav className="flex flex-col pt-10 pb-5 font-poppins border-b border-[#E3E3E3] md:items-center">
      <div className="flex items-center md:w-10/12 md:justify-between">
        <Logo />
        <ul className="flex items-center gap-10 ">
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
        <div className="flex items-center gap-6 ">
          <SearchBar />
          <ActionIcons>{children}</ActionIcons>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
