import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const AuthenticatedNavbar = () => {
  return (
    <Navbar>
      <Link>
        <img src="/images/icons/usericon.svg" alt="" />
      </Link>
    </Navbar>
  );
};

export default AuthenticatedNavbar;
