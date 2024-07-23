export const loginErrors = (errorCode) => {
  switch (errorCode) {
    case "auth/invalid-email":
      return "The email address is not valid.";
    case "auth/user-disabled":
      return "The user account has been disabled by an administrator.";
    case "auth/user-not-found":
      return "There is no user record corresponding to this email.";
    case "auth/wrong-password":
      return "The password is incorrect.";
    case "auth/invalid-credential":
      return "The credentials you provided are invalid.";
    default:
      return "An error occurred during login. Please try again.";
  }
};

export default loginErrors;
