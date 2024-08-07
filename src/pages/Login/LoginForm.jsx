import { Form, Formik } from "formik";
import TextInput from "../../components/Form/TextInput";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAuthError,
  selectAuthStatus,
  signIn,
} from "../../app/auth/authSlice";
import { notify } from "../../../utils/functions/notify";

const LoginForm = () => {
  const dispatch = useDispatch();
  const authStatus = useSelector(selectAuthStatus);
  const authError = useSelector(selectAuthError);
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-black font-medium text-4xl">Login to Exclusive</h1>
      <p className="text-base">Enter your details below</p>

      <Formik
        initialValues={{
          email: "",
          phoneNumber: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Please enter a valid email address")
            .required("Email address is required")
            .matches(
              /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
              "Please enter a valid email address"
            ),
          password: Yup.string().required("Your password is required"),
        })}
        onSubmit={(values) => {
          const handleSignIn = () => {
            const email = values.email;
            const password = values.password;
            dispatch(signIn({ email, password }));
          };

          if (authStatus === "rejected") {
            notify(authError, "error");
          }

          handleSignIn();
        }}
      >
        <Form className="flex flex-col gap-7 my-5">
          <div className="flex flex-col gap-6">
            <TextInput
              placeholder="Email or Phone Number"
              type="text"
              name="email"
            />
            <TextInput placeholder="Password" type="password" name="password" />
          </div>

          <div className="flex gap-5 mt-5 flex-col items-center justify-between lg:gap-0 lg:flex-row  lg:mt-4">
            <button
              type="submit"
              className="bg-red w-full rounded-[4px] py-4 px-12 text-white font-medium transition-all lg:w-auto hover:bg-[#db4443]"
            >
              Log In
            </button>

            <a className="text-red font-normal text-base cursor-pointer">
              Forgot password?
            </a>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
