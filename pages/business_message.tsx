import { withAuth } from "../components/withAuth";
import { ChatComp } from "./chat";

const BusinessMessages = () => {
  return <ChatComp />;
};

export default withAuth(BusinessMessages);
