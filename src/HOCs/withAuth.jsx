import { useSelector } from "react-redux";
import { selectAuth } from "../app/auth/authSlice";

export const withAuthNavbar = (AuthenticatedNavbar, NonAuthenticatedNavbar) => {
  const WithAuthNavbar = () => {
    const user = useSelector(selectAuth);

    if (!user.userId) {
      return <NonAuthenticatedNavbar />;
    } else {
      return <AuthenticatedNavbar />;
    }
  };
  return WithAuthNavbar;
};
