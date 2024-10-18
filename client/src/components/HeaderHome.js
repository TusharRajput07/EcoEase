import { HandymanOutlined } from "@mui/icons-material";
import LoginIcon from "@mui/icons-material/Login";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HeaderHome = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    // on mount
    window.addEventListener("scroll", handleScroll);
    // on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 z-20 w-full text-sm font-semibold bg-gradient-to-b from-[#101826] text-gray-300 flex justify-between items-center py-2 px-10 transition-colors duration-700 ease-in-out ${
        isScrolled ? "bg-[#101826]" : "bg-transparent"
      }`}
    >
      {/* logo */}
      <div>Eco Ease logo</div>

      {/* Navigation Links */}
      <div className="flex items-center gap-5">
        <div className="py-2 border-b-[6px] border-transparent cursor-pointer transition-all duration-300 ease-in-out hover:border-[#56B4AC] hover:text-white">
          Home
        </div>
        <div className="py-2 border-b-[6px] border-transparent cursor-pointer transition-all duration-300 ease-in-out hover:border-[#56B4AC] hover:text-white">
          Offerings
        </div>
        <div className="py-2 border-b-[6px] border-transparent cursor-pointer transition-all duration-300 ease-in-out hover:border-[#56B4AC] hover:text-white">
          Locate
        </div>
        <div className="py-2 border-b-[6px] border-transparent cursor-pointer transition-all duration-300 ease-in-out hover:border-[#56B4AC] hover:text-white">
          Insights
        </div>
        <div className="py-2 border-b-[6px] border-transparent cursor-pointer transition-all duration-300 ease-in-out hover:border-[#56B4AC] hover:text-white">
          Redeem
        </div>
        <Link to="/login">
          <div className="bg-[#404040] text-white text-sm w-fit rounded-md cursor-pointer hover:shadow-lg bg-gradient-to-r  from-[#56B4AC] to-[#094a44] animate-gradient">
            <div className="px-3 py-2 flex justify-center items-center hover:scale-[90%] transition-all duration-150 ease-in-out">
              Get Started
              <LoginIcon className="ml-1" fontSize="small" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HeaderHome;
