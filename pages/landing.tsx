import { NextPage } from "next";
import FooterComponent from "../components/footer";
import NavComponent from "../components/navbar";
import MarqueeComponent from "../components/marquee";
import MainLandingComponent from "../components/landingMain";

const LandingPage: NextPage = () => {
  return (
    <>
      <NavComponent />
      <div className="mx-4">
        <MarqueeComponent />
      </div>
      <MainLandingComponent />
      <FooterComponent />
    </>
  );
};

export default LandingPage;
