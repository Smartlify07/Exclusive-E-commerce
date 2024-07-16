import { Outlet } from "react-router";
import AuthenticatedNavbar from "../components/Navbar/AuthenticatedNavbar";
import NonAuthenticatedNavbar from "../components/Navbar/NonAuthenticatedNavbar";
import PromoBanner from "../components/PromoBanner";
import { withAuthNavbar } from "../HOCs/withAuth";
import { Suspense } from "react";

const RootLayout = () => {
  const Navbar = withAuthNavbar(AuthenticatedNavbar, NonAuthenticatedNavbar);
  return (
    <>
      <PromoBanner />

      <Navbar />

      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default RootLayout;
