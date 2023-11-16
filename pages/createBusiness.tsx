import { CreateBusinessComponent } from "../components/business/create_business";
import MarketNavComponent from "../components/marketNav/marketNav";
import { withAuth } from "../components/withAuth";

const CreateBusinessPage = () => {
  return (
    <>
      <MarketNavComponent />
      <CreateBusinessComponent />
    </>
  );
};

export default withAuth(CreateBusinessPage);
