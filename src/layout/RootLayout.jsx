import { Outlet } from "react-router";
import AuthenticatedNavbar from "../components/Navbar/AuthenticatedNavbar";
import NonAuthenticatedNavbar from "../components/Navbar/NonAuthenticatedNavbar";
import PromoBanner from "../components/PromoBanner";
import { withAuthNavbar } from "../HOCs/withAuth";

const RootLayout = () => {
  const Navbar = withAuthNavbar(AuthenticatedNavbar, NonAuthenticatedNavbar);
  return (
    <>
      <PromoBanner />

      <Navbar />
      <Outlet />
    </>
  );
};

export default RootLayout;
