const signUpErrors = (error) => {
  switch (error) {
    case "auth/email-already-in-use":
      return "The email address is already in use by another account.";
    case "auth/invalid-email":
      return "The email address is not valid.";
    case "auth/operation-not-allowed":
      return "Email/password accounts are not enabled. Please contact support.";
    case "auth/weak-password":
      return "The password is too weak. Please choose a stronger password.";
    default:
      return "An error occurred during sign-up. Please try again.";
  }
};

export default signUpErrors;
