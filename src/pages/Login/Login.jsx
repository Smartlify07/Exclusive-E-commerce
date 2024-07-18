import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <main
      role="signup"
      className="flex font-poppins w-full min-h-screen items-center justify-center lg:py-20"
    >
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
