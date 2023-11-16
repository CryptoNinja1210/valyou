import { NextPage } from "next";
import React from "react";
import { BidModal } from "../components/bidnow/bidnow";
import MarketNavComponent from "../components/marketNav/marketNav";
import { withAuth } from "../components/withAuth";

const BidNowPage: NextPage = () => {
  return (
    <>
      <MarketNavComponent />
      <BidModal />
    </>
  );
};

export default withAuth(BidNowPage);
