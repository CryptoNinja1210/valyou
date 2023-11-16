import { NextPage } from "next";
import { InvestorComponent } from "../components/investor/investor";
import MarketNavComponent from "../components/marketNav/marketNav";
import { withAuth } from "../components/withAuth";
import { useEffect } from "react";

const InvestorPage: NextPage = () => {
  useEffect(() => {
    localStorage.setItem("userProfile", "Investor");
  }, []);
  return (
    <>
      <MarketNavComponent />
      <InvestorComponent />
    </>
  );
};

export default withAuth(InvestorPage);
