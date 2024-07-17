import { Outlet } from "react-router";
import AuthenticatedNavbar from "../components/Navbar/AuthenticatedNavbar";
import NonAuthenticatedNavbar from "../components/Navbar/NonAuthenticatedNavbar";
import PromoBanner from "../components/PromoBanner";
import { withAuthNavbar } from "../HOCs/withAuth";
import { Suspense } from "react";
import Footer from "../components/Footer/Footer";

const RootLayout = () => {
  const Navbar = withAuthNavbar(AuthenticatedNavbar, NonAuthenticatedNavbar);
  return (
    <>
      <PromoBanner />

      <Navbar />

      <Suspense>
        <Outlet />
      </Suspense>

      <Footer />
    </>
  );
};

export default RootLayout;
