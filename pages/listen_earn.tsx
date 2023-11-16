import { NextPage } from "next";
import { ListenComponent } from "../components/listen_earn/listenComponent";
import MarketNavComponent from "../components/marketNav/marketNav";
import { withAuth } from "../components/withAuth";

const ListenPage: NextPage = () => {
  return (
    <>
      <MarketNavComponent />
      <ListenComponent />
    </>
  );
};

export default withAuth(ListenPage);
