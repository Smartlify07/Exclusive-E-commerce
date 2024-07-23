import { ToastContainer } from "react-toastify";
import LoginForm from "./LoginForm";
import { useSelector } from "react-redux";
import { selectAuth, selectAuthStatus } from "../../app/auth/authSlice";
import { Navigate } from "react-router";

const Login = () => {
  const user = useSelector(selectAuth);
  const authStatus = useSelector(selectAuthStatus);

  if (user?.userId !== null && authStatus === "authenticated") {
    return <Navigate to={"/"} />;
  }
  return (
    <main
      role="signup"
      className="flex font-poppins w-full min-h-screen items-center justify-center lg:py-20"
    >
      <ToastContainer autoClose={3000} />
      <div className="flex flex-col  items-center justify-around lg:flex-row">
        <div className="hidden lg:block lg:w-6/12 ">
          <img src="/images/signup.png" alt="signupimage" />
        </div>
        <LoginForm />
      </div>
    </main>
  );
};

export default Login;
