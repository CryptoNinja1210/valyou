import { ConnectCollaborateComponent } from "../components/business/connect_collaborate";
import MarketNavComponent from "../components/marketNav/marketNav";
import { withAuth } from "../components/withAuth";

const ConnectCollaborate = () => {
  return (
    <>
      <MarketNavComponent />
      <ConnectCollaborateComponent />
    </>
  );
};

export default withAuth(ConnectCollaborate);
