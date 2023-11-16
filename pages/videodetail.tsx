import { NextPage } from "next";
import MarketNavComponent from "../components/marketNav/marketNav";
import { VideoDetailComponent } from "../components/videoDetailComponent/video";
import { withAuth } from "../components/withAuth";

const VideoDetailPage: NextPage = () => {
  return (
    <>
      <MarketNavComponent />
      <VideoDetailComponent />
    </>
  );
};

export default withAuth(VideoDetailPage);
