import { useSelector } from "react-redux";
import { selectAuth } from "../app/auth/authSlice";

export const withAuthNavbar = (AuthenticatedNavbar, NonAuthenticatedNavbar) => {
  const WithAuthNavbar = () => {
    const user = useSelector(selectAuth);

    if (user?.userId === null) {
      console.log("no user");
      return <NonAuthenticatedNavbar />;
    } else {
      console.log(user);
      return <AuthenticatedNavbar />;
    }
  };
  return WithAuthNavbar;
};
