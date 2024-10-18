import Footer from "./Footer";
import GetToKnow from "./GetToKnow";
import HeaderHome from "./HeaderHome";
import Landing from "./Landing";
import Offerings from "./Offerings";
import Redeem from "./Redeem";
import Search from "./Search";

const Home = () => {
  return (
    <div className="bg-[#101826]">
      <HeaderHome />
      {/* landing */}
      <Landing />
      {/* What do we offer */}
      <Offerings />
      {/* Find the nearest E-Waste Facility */}
      <Search />
      {/* know about your e waste */}
      <GetToKnow />
      {/* Redeem your credits */}
      <Redeem />
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Home;
