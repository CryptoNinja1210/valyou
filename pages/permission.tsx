import { NextPage } from "next";
import { PermissionComponent } from "../components/admin/permissionComponent";
import MarketNavComponent from "../components/marketNav/marketNav";
import { withAuth } from "../components/withAuth";

const PermissionPage: NextPage = () => {
  return (
    <>
      <MarketNavComponent />
      <PermissionComponent />
    </>
  );
};

export default withAuth(PermissionPage);
