import { NextPage } from "next";
import MarketNavComponent from "../components/marketNav/marketNav";
import { EditArtistComponent } from "../components/admin/edit-artist";
import { withAuth } from "../components/withAuth";

const EditArtistPage: NextPage = () => {
  return (
    <>
      <MarketNavComponent />
      <EditArtistComponent />
    </>
  );
};

export default withAuth(EditArtistPage);
