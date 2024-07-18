import { Outlet } from "react-router";
import AuthenticatedNavbar from "../components/Navbar/AuthenticatedNavbar";
import NonAuthenticatedNavbar from "../components/Navbar/NonAuthenticatedNavbar";
import PromoBanner from "../components/PromoBanner";
import { withAuthNavbar } from "../HOCs/withAuth";
import { lazy, Suspense } from "react";

const RootLayout = () => {
  const Navbar = withAuthNavbar(AuthenticatedNavbar, NonAuthenticatedNavbar);

  const Footer = lazy(() => import("../components/Footer/Footer"));
  return (
    <main role="root" className="overflow-x-hidden">
      <PromoBanner />

      <Navbar />

      <Suspense>
        <Outlet />
      </Suspense>

      <Suspense fallback={<div className="w-full h-[300px] bg-gray-100"></div>}>
        <Footer />
      </Suspense>
    </main>
  );
};

export default RootLayout;
