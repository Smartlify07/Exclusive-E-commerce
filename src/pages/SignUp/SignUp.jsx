import SignUpForm from "./SignUpForm";

const SignUp = () => {
  return (
    <main
      role="signup"
      className="flex font-poppins w-full min-h-screen justify-center items-center lg:py-20 "
    >
      <div className="flex flex-col relative justify-between lg:flex-row">
        <div className="hidden lg:flex left-0 lg:w-6/12 justify-center items-center bg-[#CBE4E8] border border-black">
          <img src="/images/signup.png" className="w-9/12" alt="signupimage" />
        </div>
        <SignUpForm />
      </div>
    </main>
  );
};

export default SignUp;
