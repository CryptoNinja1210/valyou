import { NextPage } from "next";
import { UserComponent } from "../components/admin/users";
import MarketNavComponent from "../components/marketNav/marketNav";
import { withAuth } from "../components/withAuth";

const UsersPage: NextPage = () => {
  return (
    <>
      <MarketNavComponent />
      <UserComponent />
    </>
  );
};

export default withAuth(UsersPage);
