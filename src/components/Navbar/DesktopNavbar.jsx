/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import Logo from "../Logo";
import SearchBar from "../SearchBar";
import ActionIcons from "../ActionIcons";

const DesktopNavbar = ({ children }) => {
  const activeNavClass = `border-b border-b-black py-1`;
  return (
    <nav className="hidden relative lg:flex flex-col items-center pt-10 pb-5 font-poppins border-b border-[#E3E3E3] md:items-center">
      <div className="flex justify-between items-center w-10/12 md:w-11/12 lg:w-10/12 md:justify-between">
        <Logo />
        <ul className="hidden lg:flex  items-center gap-10 ">
          <li className="text-black font-normal text-base">
            <NavLink
              to={"/"}
              className={({ isActive }) => isActive && activeNavClass}
            >
              Home
            </NavLink>
          </li>
          <li className="text-black font-normal text-base">
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li className="text-black font-normal text-base">
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
          <li className="text-black font-normal text-base">
            <NavLink to={"/signup"}>Sign Up</NavLink>
          </li>
        </ul>

        <div className="hidden lg:flex items-center gap-6 ">
          <SearchBar />
          <ActionIcons>{children}</ActionIcons>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNavbar;
