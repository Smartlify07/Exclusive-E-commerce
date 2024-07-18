import { Form, Formik } from "formik";
import TextInput from "../../components/Form/TextInput";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { selectUser, signUp } from "../../app/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-3 self-center lg:w-4/12">
      <h1 className="text-black font-medium text-4xl">Create an account</h1>
      <p className="text-base">Enter your details below</p>

      <Formik
        initialValues={{
          name: "",
          email: "",
          phoneNumber: "",
          password: "",
        }}
        onSubmit={(values) => {
          console.log("submit");

          const handleSignUp = () => {
            const email = values.email;
            const password = values.password;
            const name = values.name;
            dispatch(signUp({ email, password, name }));
            console.log(typeof values.password);
          };

          if (user) {
            navigate("/");
          }

          handleSignUp();
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Name is required"),
          email: Yup.string()
            .email("Please enter a valid email address")
            .required("Email address is required")
            .matches(
              /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
              "Please enter a valid email address"
            ),

          password: Yup.string()
            .min(6, "Must be at least 6 characters")
            .required("Your password is required")
            .matches(
              /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
              "Password invalid"
            ),
        })}
      >
        <Form className="flex flex-col gap-4">
          <div className="mt-5 flex flex-col gap-5">
            <TextInput placeholder="John Doe" type="text" name="name" />

            <TextInput
              placeholder="Email or Phone Number"
              type="text"
              name="email"
            />
            <TextInput placeholder="Password" type="password" name="password" />
          </div>

          <button
            type="submit"
            className="bg-red mt-5 rounded-[4px] py-4 px-6 text-white font-medium transition-all hover:bg-[#b12722]"
          >
            Create Account
          </button>

          <button className="flex items-center text-black justify-center py-4 gap-4 border border-black border-opacity-40 rounded-[4px] ">
            <img src="/images/icons/Icon-Google.svg" alt="googleicon" />
            Sign up with Google
          </button>
        </Form>
      </Formik>

      <div className="flex justify-center items-center gap-2">
        <p className="text-black opacity-70">Already have an account?</p>
        <Link to={"/login"} className="text-black opacity-70 font-medium">
          Log in
        </Link>
      </div>
    </div>
  );
};

export default SignUpForm;
