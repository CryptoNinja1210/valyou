import MarketNavComponent from "../components/marketNav/marketNav";
import { Message } from "../components/messages/messages";
import { withAuth } from "../components/withAuth";

const Messages = () => {
  return (
    <>
      <MarketNavComponent />
      <Message />
    </>
  );
};

export default withAuth(Messages);
