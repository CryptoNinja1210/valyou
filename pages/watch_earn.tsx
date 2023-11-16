import { NextPage } from "next";
import MarketNavComponent from "../components/marketNav/marketNav";
import { WatchComponent } from "../components/watch_earn/watchComponent";
import { withAuth } from "../components/withAuth";

const WatchPage: NextPage = () => {
  return (
    <>
      <MarketNavComponent />
      <WatchComponent />
    </>
  );
};

export default withAuth(WatchPage);
