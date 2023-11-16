import { NextPage } from "next";
import { RoleComponent } from "../components/admin/role";
import MarketNavComponent from "../components/marketNav/marketNav";
import { withAuth } from "../components/withAuth";

const RolePage: NextPage = () => {
  return (
    <>
      <MarketNavComponent />
      <RoleComponent />
    </>
  );
};

export default withAuth(RolePage);
