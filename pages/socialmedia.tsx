import { NextPage } from "next";
import MarketNavComponent from "../components/marketNav/marketNav";
import SocialMediaComponent from "../components/socialMedia/socialMedia";
import { withAuth } from "../components/withAuth";

const SocialMedia: NextPage = () => {
  return (
    <>
      <MarketNavComponent />
      <SocialMediaComponent showSidebar={true} />
    </>
  );
};

export default withAuth(SocialMedia);
