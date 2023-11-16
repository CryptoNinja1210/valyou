import { NextPage } from "next";
import MarketNavComponent from "../components/marketNav/marketNav";
import { SettingComponent } from "../components/settings/settings";
import { withAuth } from "../components/withAuth";

const SettingsPage: NextPage = () => {
  return (
    <>
      <MarketNavComponent />
      <SettingComponent />
    </>
  );
};

export default withAuth(SettingsPage);
