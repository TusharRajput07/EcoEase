import SendIcon from "@mui/icons-material/Send";
import { useEffect, useState } from "react";

const Search = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight; // how much you have come down
    const divPosition = document.getElementById("animateSearch").offsetTop; // where the div starts (eg. 2000px)

    // check if the amount you have come down is more than the position where the div starts
    if (scrollPosition >= divPosition + 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="search" className="w-full text-gray-300 px-20 py-10">
      {/* heading */}
      <div className="mb-5 text-center">
        <div className="text-4xl text-center font-bold text-[#404040] leading-normal text-transparent bg-gradient-to-r from-[#56B4AC] to-[#a34b74] dark:bg-clip-text dark:animate-gradient">
          Find the nearest E-Waste Facility
        </div>
        <div className="text-xs">see what are facilities are nearby you</div>
      </div>
      <div
        id="animateSearch"
        className={`w-full flex transition-all duration-700 ease-in-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="w-1/2 px-5 flex flex-col items-center justify-center">
          <div className="text-xl font-bold text-gray-400 mb-6">
            Drop your location below
          </div>
          <form className="w-full">
            <div className="w-full relative">
              <input
                name="user_location"
                placeholder="your city, state, country"
                className="bg-transparent border-2  border-gray-700 shadow-md rounded-md w-full p-4 mb-4"
              />
              <span className="absolute -top-2 left-3  bg-[#101826] text-xs text-gray-400 px-1">
                Location *
              </span>
            </div>

            <button
              type="submit"
              className="bg-[#404040] mt-2 text-white text-lg font-medium w-fit rounded-lg cursor-pointer hover:shadow-lg bg-gradient-to-r from-[#56B4AC] to-[#094a44] animate-gradient flex mx-auto"
            >
              <div className="px-14 py-2 flex justify-center items-center hover:scale-[90%] transition-all duration-150 ease-in-out">
                Find me
                <SendIcon className="-rotate-45 ml-2 mb-1" fontSize="small" />
              </div>
            </button>
          </form>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <img
            className="w-96"
            // src="https://img1.picmix.com/output/stamp/normal/8/4/3/1/2381348_3b6aa.gif"
            src="https://img1.picmix.com/output/stamp/normal/0/7/6/1/2331670_c541c.gif"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
