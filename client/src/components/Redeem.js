import { useEffect, useState } from "react";
import img1 from "../utils/card-img-1.png";
import img2 from "../utils/card-img-2.png";
import img3 from "../utils/card-img-3.png";

const Redeem = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const divPosition = document.getElementById("animateRedeem").offsetTop;

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
    <div id="offerings" className="text-gray-300 py-10">
      {/* heading */}
      <div className="text-center">
        <div className="text-4xl text-center font-bold text-[#404040] leading-normal dark:text-transparent dark:bg-gradient-to-r dark:from-[#56B4AC] dark:to-[#a34b74] dark:bg-clip-text dark:animate-gradient">
          Redeem your Credits
        </div>
        <div className="text-xs">
          Use your credit points to redeem them to get our handcrafted
          sustainable products
        </div>
      </div>
      <div
        id="animateRedeem"
        className={`py-10 w-full gap-6 px-20 flex justify-center items-center transition-all duration-700 ease-in-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* cards */}
        <div className="w-1/3 h-72 px-3 py-5 border border-gray-500 rounded-lg shadow-2xl cursor-pointer hover:bg-[#0a111e]">
          <div className="flex justify-center  mt-4">
            <img className="w-28" src={img1} />
          </div>
          <div className="text-2xl font-bold my-2 text-center">
            Homemeade Garden Diary
          </div>
          <div className="text-sm font-light text-center">
            Writing Notebook, Recycled Handmade Paper
          </div>
          <div className="border border-gray-500 text-base text-white rounded-lg w-fit px-3 py-2 mx-auto mt-4">
            Redeem at 100 credits
          </div>
        </div>

        <div className="w-1/3 h-72 p-3 border border-gray-500 rounded-lg shadow-2xl cursor-pointer hover:bg-[#0a111e]">
          <div className="flex justify-center">
            <img className="w-28" src={img2} />
          </div>
          <div className="text-2xl font-bold my-2 text-center">
            Cotton Quilted Tote Bag
          </div>
          <div className="text-sm font-light text-center">
            Indian handmade cotton quilted tote bag
          </div>
          <div className="border border-gray-500 text-base text-white rounded-lg w-fit px-3 py-2 mx-auto mt-4">
            Redeem at 150 credits
          </div>
        </div>

        <div className="w-1/3 h-72 p-3 border border-gray-500 rounded-lg shadow-2xl cursor-pointer hover:bg-[#0a111e]">
          <div className="flex justify-center">
            <img className="w-28" src={img3} />
          </div>
          <div className="text-2xl font-bold my-2 mt-6 text-center">
            Rattan Basket With Lid
          </div>
          <div className="text-sm font-light text-center">
            Handmade Rattan basket, sustainable gifts
          </div>
          <div className="border border-gray-500 text-base text-white rounded-lg w-fit px-3 py-2 mx-auto mt-4">
            Redeem at 50 credits
          </div>
        </div>
      </div>
    </div>
  );
};

export default Redeem;
