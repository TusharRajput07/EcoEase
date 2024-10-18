import PlaceIcon from "@mui/icons-material/Place";

const Landing = () => {
  const scrollToSection = () => {
    console.log("hello");

    const element = document.getElementById("search");
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="relative h-[100vh] text-gray-300 w-full">
      <div className="w-full h-full overflow-hidden">
        <img
          className="w-full -translate-y-24"
          src="https://res.americancentury.com/f_auto/t_desktop/e-waste-crisis-global-impact-and-sustainable-solutions-hero"
        />
      </div>

      <div className="absolute top-0 w-full h-[100vh] z-10 bg-gradient-to-t from-[#101826] flex flex-col items-center justify-center text-white pt-10">
        <div className="text-8xl font-extrabold">EcoEase</div>
        <div className="text-2xl font-bold my-3">
          Your one stop destination to take part in recycling E-Waste
        </div>
        <div className="text-base font-light">
          Find the nearest e-waste facility to recycle all your electronic waste
          safely and responsibly with government authorised E-Waste disposal
          facilities.
        </div>
        <div
          onClick={scrollToSection}
          // from-[#56B4AC] to-[#7728a4]
          // from-[#56B4AC] to-[#094a44]
          className="bg-[#404040] text-white text-xl font-medium mt-8 w-fit rounded-lg cursor-pointer hover:shadow-lg bg-gradient-to-r  from-[#56B4AC] to-[#094a44] animate-gradient"
        >
          <div className="px-10 py-4 flex justify-center items-center hover:scale-[90%] transition-all duration-150 ease-in-out">
            Explore Locations
            <PlaceIcon fontSize="medium" />
          </div>
        </div>
      </div>

      {/* <div className="absolute top-0 h-[100vh] bg-gradient-to-t from-[#101826] w-full"></div> */}
    </div>
  );
};

export default Landing;
