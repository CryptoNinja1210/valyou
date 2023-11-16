import { NextPage } from "next";
import MarketNavComponent from "../components/marketNav/marketNav";
import { MyBusinessComponent } from "../components/myBusiness/myBusiness";
import { withAuth } from "../components/withAuth";

const MyBusinessPage: NextPage = () => {
  return (
    <>
      <MarketNavComponent />
      <MyBusinessComponent />
    </>
  );
};

export default withAuth(MyBusinessPage);
