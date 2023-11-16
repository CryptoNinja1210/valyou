import React from "react";
import { AudioDetail } from "../components/audioDetails/AudioDetail";
import MarketNavComponent from "../components/marketNav/marketNav";
import { VideoDetailComponent } from "../components/videoDetailComponent/video";
import { withAuth } from "../components/withAuth";

const audiodetail = () => {
  return (
    <>
      <MarketNavComponent />
      <AudioDetail />
    </>
  );
};

export default withAuth(audiodetail);
