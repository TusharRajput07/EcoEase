import AcUnitIcon from "@mui/icons-material/AcUnit";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import Ecard from "./Ecard";
import TvIcon from "@mui/icons-material/Tv";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import KitchenIcon from "@mui/icons-material/Kitchen";
import PrintIcon from "@mui/icons-material/Print";
import Battery2BarIcon from "@mui/icons-material/Battery2Bar";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LightIcon from "@mui/icons-material/Light";
import RouterIcon from "@mui/icons-material/Router";
import StorageIcon from "@mui/icons-material/Storage";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import DynamicFormIcon from "@mui/icons-material/DynamicForm";
import { useEffect, useState } from "react";

const GetToKnow = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight; // how much you have come down
    const divPosition = document.getElementById("animateInsights").offsetTop; // where the div starts (eg. 2000px)

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
    <div className="w-full text-gray-300 py-10">
      {/* heading */}
      <div className="mb-5 text-center">
        <div className="text-4xl text-center font-bold text-[#404040] leading-normal text-transparent bg-gradient-to-r from-[#56B4AC] to-[#a34b74] dark:bg-clip-text dark:animate-gradient">
          Get to know about your E-waste
        </div>
        <div className="text-xs">
          Check what electronic items contain in them that is harmful
        </div>
      </div>
      {/* icons */}
      <div
        id="animateInsights"
        className={`container py-6 px-8 md:px-32 text-gray-300transition-all duration-700 ease-in-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Outer div with grid */}
        <div className="grid gap-3 md:gap-5 grid-cols-3 sm:grid-cols-3 md:grid-cols-5">
          {/* Manually placed boxes */}
          <Ecard Icon={LaptopMacIcon} title="Laptops" name="laptops" />
          <Ecard Icon={TvIcon} title="Computers" name="computers" />
          <Ecard
            Icon={PhoneAndroidIcon}
            title="Smartphones"
            name="smartphones"
          />
          <Ecard Icon={PrintIcon} title="Printers" name="printers" />
          <Ecard Icon={StorageIcon} title="Hard Disks" name="hard_disks" />
          <Ecard Icon={DeveloperBoardIcon} title="RAM chips" name="ram_chips" />
          <Ecard Icon={AcUnitIcon} title="ACs" name="ac" />
          <Ecard Icon={LiveTvIcon} title="TVs" name="tv" />
          <Ecard Icon={KitchenIcon} title="Fridges" name="fridge" />
          <Ecard
            Icon={LocalLaundryServiceIcon}
            title="Washing Machines"
            name="washing_machine"
          />
          <Ecard Icon={LightIcon} title="Lamps" name="fluorescent_lamps" />
          <Ecard Icon={RouterIcon} title="Routers" name="router" />
          <Ecard Icon={Battery2BarIcon} title="Batteries" name="batteries" />
          <Ecard Icon={ElectricalServicesIcon} title="Wires" name="wires" />
          <Ecard
            Icon={DynamicFormIcon}
            title="Circuit Boards"
            name="circuit_boards"
          />
        </div>
      </div>
    </div>
  );
};

export default GetToKnow;
