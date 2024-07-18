import { Link } from "react-router-dom";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const AuthenticatedNavbar = () => {
  return (
    <>
      <DesktopNavbar>
        <Link>
          <img src="/images/icons/usericon.svg" alt="" />
        </Link>
      </DesktopNavbar>

      <MobileNavbar>
        <Link>
          <img src="/images/icons/usericon.svg" alt="" />
        </Link>
      </MobileNavbar>
    </>
  );
};

export default AuthenticatedNavbar;
