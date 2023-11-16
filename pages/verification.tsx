import { NextPage } from "next";
import { VerificationComponent } from "../components/verification/verification";
import MarketNavComponent from "../components/marketNav/marketNav";
import { withAuth } from "../components/withAuth";

const VerificationPage: NextPage = () => {
  return (
    <>
      <MarketNavComponent />
      <VerificationComponent />
    </>
  );
};

export default withAuth(VerificationPage);
