import { useSelector } from "react-redux";
import SignUpForm from "./SignUpForm";
import { Navigate } from "react-router";
import { selectAuth } from "../../app/auth/authSlice";
import { ToastContainer } from "react-toastify";

const SignUp = () => {
  const user = useSelector(selectAuth);
  if (user?.userId !== null) {
    return <Navigate to={"/"} />;
  }
  return (
    <main
      role="signup"
      className="flex font-poppins w-full min-h-screen justify-center items-center  lg:px-0 lg:py-20 "
    >
      <ToastContainer autoClose={3000} />
      <div className="flex flex-col relative justify-around w-11/12 lg:w-auto lg:flex-row">
        <div className="hidden lg:flex  lg:w-6/12 justify-center items-center bg-[#CBE4E8]">
          <img src="/images/signup.png" className="w-9/12" alt="signupimage" />
        </div>

        <SignUpForm />
      </div>
    </main>
  );
};

export default SignUp;
