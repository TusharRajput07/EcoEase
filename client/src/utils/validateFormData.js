export const validateFormData = (email, password, name, isSignUp) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (isSignUp && !name?.trim()) {
    return "Name is required!";
  }
  if (!isEmailValid) return "Email is not valid!";
  if (!isPasswordValid)
    return "Password should have atleast 8 characters. one capital, one small alphabet, and one digit!";

  return null;
};
