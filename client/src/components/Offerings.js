import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PlaceIcon from "@mui/icons-material/Place";
import RedeemIcon from "@mui/icons-material/Redeem";
import AboutCard from "./AboutCard";
import { useEffect, useState } from "react";

const Offerings = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const divPosition = document.getElementById("animateOfferings").offsetTop;

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
    <div id="offerings" className="text-gray-300 py-10 overflow-hidden">
      {/* heading */}
      <div className="text-center">
        <div className="text-4xl text-center font-bold text-[#404040] leading-normal dark:text-transparent dark:bg-gradient-to-r dark:from-[#56B4AC] dark:to-[#a34b74] dark:bg-clip-text dark:animate-gradient">
          What do we offer?
        </div>
        <div className="text-xs">Our offerings</div>
      </div>
      <div
        id="animateOfferings"
        className={`py-10 w-full gap-6 px-20 flex justify-center items-center transition-all duration-700 ease-in-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-x-10"
        }`}
      >
        {/* cards */}
        <AboutCard
          Icon={PlaceIcon}
          heading="Locate your nearest E-Waste facility"
          message="Users can easily find the nearest e-waste collection and recycling facilities in their area. This feature makes it convenient for people to responsibly dispose of their electronic devices."
        />
        <AboutCard
          Icon={ShoppingBagIcon}
          heading="Book a slot for E-waste pickup"
          message="Users can choose from a variety of E-Waste facilities and book a slot according to them for E-Waste pickup at your doorstep."
        />
        <AboutCard
          Icon={RedeemIcon}
          heading="Redeem credit points to buy stuff"
          message="Users can earn credit points by disposing E-Waste in nearest facilities, and earn credit points relative to precious metals that could be scrapped from device. These credit points can be redeemed into useful items."
        />
      </div>
    </div>
  );
};

export default Offerings;
