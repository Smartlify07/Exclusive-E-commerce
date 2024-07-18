/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import Logo from "../Logo";
import SearchBar from "../SearchBar";
import ActionIcons from "../ActionIcons";
import { useState } from "react";

const MobileNavbar = ({ children }) => {
  const activeNavClass = `border-b border-b-black py-1`;
  const [toggled, setToggled] = useState(false);

  const handleNavToggle = () => {
    setToggled((prevState) => !prevState);
  };

  return (
    <nav className="flex flex-col items-center pt-10 pb-5 font-poppins border-b border-[#E3E3E3] lg:hidden">
      <div className="flex justify-between items-center w-10/12 relative">
        <Logo />
        <button
          className="flex flex-col gap-1 lg:hidden"
          onClick={handleNavToggle}
        >
          <span className="bg-black w-7 h-1"></span>
          <span className="bg-black w-7 h-1"></span>
          <span className="bg-black w-7 h-1"></span>
        </button>
        <ul
          className={`flex flex-col gap-5 absolute top-10 bg-gray-100 backdrop-filter backdrop-blur-sm rounded-sm  bg-opacity-10 bg-clip-padding px-4 py-4 border w-11/12 z-[1000] transition-all transform  ${
            toggled ? `translate-x-[20%]` : "translate-x-[200%]"
          }`}
        >
          <li className="text-black font-normal text-base">
            <NavLink className={({ isActive }) => isActive && activeNavClass}>
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
          <SearchBar />
          <ActionIcons>{children}</ActionIcons>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNavbar;
