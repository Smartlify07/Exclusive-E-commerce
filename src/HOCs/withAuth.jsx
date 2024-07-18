import { useSelector } from "react-redux";
import { selectUser } from "../app/user/userSlice";

export const withAuthNavbar = (AuthenticatedNavbar, NonAuthenticatedNavbar) => {
  const WithAuthNavbar = () => {
    const user = useSelector(selectUser);

    console.log(user);

    if (!user) {
      return <NonAuthenticatedNavbar />;
    } else {
      return <AuthenticatedNavbar />;
    }
  };
  return WithAuthNavbar;
};
