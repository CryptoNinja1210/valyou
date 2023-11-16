import { NextPage } from "next";
import MarketMainComponent from "../components/market/marketMain";
import MarketNavComponent from "../components/marketNav/marketNav";
import MarqueeComponent from "../components/marquee";
import { withAuth } from "../components/withAuth";

const MarketPage: NextPage = () => {
  return (
    <>
      <MarketNavComponent />
      <div className="mx-2">
        <MarqueeComponent />
      </div>
      <MarketMainComponent />
    </>
  );
};

export default withAuth(MarketPage);
