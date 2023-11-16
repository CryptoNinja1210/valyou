import { NextPage } from "next";
import React from "react";
import { BidNowComponent } from "../components/bidnow/BidnowComponent";
import MarketNavComponent from "../components/marketNav/marketNav";
import { withAuth } from "../components/withAuth";

const BidNowPage: NextPage = () => {
  return (
    <>
      <MarketNavComponent />
      <BidNowComponent />
    </>
  );
};

export default withAuth(BidNowPage);
