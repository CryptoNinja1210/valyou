import { NextPage } from "next";
import { UploadComponent } from "../components/artist/upload";
import MarketNavComponent from "../components/marketNav/marketNav";
import { withAuth } from "../components/withAuth";

const WatchPage: NextPage = () => {
  return (
    <>
      <MarketNavComponent />
      <UploadComponent />
    </>
  );
};

export default withAuth(WatchPage);
