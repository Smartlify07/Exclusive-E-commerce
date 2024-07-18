import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";
import Navbar from "./DesktopNavbar";

const NonAuthenticatedNavbar = () => {
  return (
    <>
      <DesktopNavbar />
      <MobileNavbar />
    </>
  );
};

export default NonAuthenticatedNavbar;
