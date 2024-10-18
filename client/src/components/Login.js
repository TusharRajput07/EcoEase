import PlaceIcon from "@mui/icons-material/Place";
import HeaderHome from "./HeaderHome";
import { useRef, useState } from "react";
import { validateFormData } from "../utils/validateFormData";
import Footer from "./Footer";

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const [isSignUp, setIsSignUp] = useState(false);
  const handleSignUp = () => {
    setIsSignUp(!isSignUp);
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  const handleAuth = () => {
    // Validation
    let response;
    if (isSignUp) {
      response = validateFormData(
        emailRef.current.value,
        passwordRef.current.value,
        nameRef.current.value,
        true
      );
    } else {
      response = validateFormData(
        emailRef.current.value,
        passwordRef.current.value
      );
    }
    setErrorMessage(response);

    if (response != null) return;

    // Sign in/ Sign up code below...
  };

  return (
    <>
      <div className="bg">
        <HeaderHome />

        <div className="relative h-[105vh] text-gray-300 w-full">
          <div className="w-full h-full overflow-hidden">
            <img
              className="w-full"
              src="https://res.americancentury.com/f_auto/t_desktop/e-waste-crisis-global-impact-and-sustainable-solutions-hero"
            />
          </div>

          <form className="absolute top-[20vh] z-10 left-1/2 -translate-x-1/2 text-white w-[300px] md:w-[450px] px-6 md:px-16 py-6 md:py-12 box-border bg-black bg-opacity-70 p-4 rounded-lg">
            <div className="font-bold mb-4 md:mb-7 text-2xl md:text-3xl">
              {isSignUp ? "Sign Up" : "Sign In"}
            </div>
            {isSignUp && (
              <input
                ref={nameRef}
                className="w-full my-2 py-2 md:py-4 rounded-sm px-2 bg-transparent border border-[#5E5F60]"
                type="text"
                placeholder="Name"
              />
            )}
            <input
              ref={emailRef}
              className="w-full my-2 py-2 md:py-4 rounded-sm px-2 bg-transparent border border-[#5E5F60]"
              type="email"
              placeholder="Email"
            />
            <input
              ref={passwordRef}
              className="w-full my-2 py-2 md:py-4 rounded-sm px-2 bg-transparent border border-[#5E5F60]"
              type="password"
              placeholder="Password"
            />

            <div className="text-red-700 text-sm">{errorMessage}</div>

            <div
              onClick={handleAuth}
              className="bg-[#404040] mt-4 text-center text-white text-base font-semibold rounded-md cursor-pointer hover:shadow-lg bg-gradient-to-r  from-[#56B4AC] to-[#094a44] animate-gradient"
            >
              <div className="px-4 py-2 hover:scale-[90%] transition-all duration-150 ease-in-out">
                {isSignUp ? "Sign Up" : "Sign In"}
              </div>
            </div>

            <div className="mt-6">
              <span className="mr-1">
                {isSignUp ? "Already a user?" : "New to EcoEase?"}
              </span>
              <span
                onClick={handleSignUp}
                className="cursor-pointer font-bold hover:underline"
              >
                {isSignUp ? "Log in" : "Sign up now."}
              </span>
            </div>
          </form>

          <div className="absolute bottom-0 h-full w-full bg-gradient-to-t from-[#101826]"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
