import FooterComponent from "../components/footer";
import NavComponent from "../components/navbar";
import MarqueeComponent from "../components/marquee";
import PricingComponent from "../components/pricing/pricing";

const Pricing = () => {
  return (
    <>
      <NavComponent />
      <div className="mx-4">
        <MarqueeComponent />
      </div>
      <PricingComponent />
      <FooterComponent />
    </>
  );
};

export default Pricing;
