import MarketNavComponent from "../components/marketNav/marketNav";
import MainStore from "../components/store/products";
import { withAuth } from "../components/withAuth";

const StorePage = () => {
  return (
    <>
      <MarketNavComponent />
      <MainStore />
    </>
  );
};

export default withAuth(StorePage);
