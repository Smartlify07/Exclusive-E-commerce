import { Link } from "react-router-dom";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const AuthenticatedNavbar = () => {
  return (
    <>
      <DesktopNavbar>
        <Link to={"/account"}>
          <img src="/images/icons/usericon.svg" alt="usericon" />
        </Link>
      </DesktopNavbar>

      <MobileNavbar>
        <Link to={"/account"}>
          <img src="/images/icons/usericon.svg" alt="usericon" />
        </Link>
      </MobileNavbar>
    </>
  );
};

export default AuthenticatedNavbar;
