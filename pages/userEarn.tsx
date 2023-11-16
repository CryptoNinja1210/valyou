import { NextPage } from "next";
import { UserEarnComponent } from "../components/userEarn/userEarn";
import { withAuth } from "../components/withAuth";

const UserEarnPage: NextPage = () => {
  return (
    <>
      <UserEarnComponent />
    </>
  );
};

export default withAuth(UserEarnPage);
