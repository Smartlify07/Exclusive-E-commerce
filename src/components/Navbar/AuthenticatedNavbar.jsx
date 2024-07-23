import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import { useState } from "react";
import DropDown from "./DropDown";

const AuthenticatedNavbar = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <>
      <DesktopNavbar>
        <button
          onClick={() => {
            setShowDropDown((prevState) => !prevState);
          }}
          onBlur={() => {
            setShowDropDown(false);
          }}
        >
          <img src="/images/icons/usericon.svg" alt="usericon" />
        </button>
        {showDropDown && <DropDown />}
      </DesktopNavbar>

      <MobileNavbar>
        <button
          onClick={() => {
            setShowDropDown((prevState) => !prevState);
          }}
          onMouseLeave={() => {
            setShowDropDown(false);
          }}
        >
          <img src="/images/icons/usericon.svg" alt="usericon" />
        </button>
        {showDropDown && <DropDown />}
      </MobileNavbar>
    </>
  );
};

export default AuthenticatedNavbar;
