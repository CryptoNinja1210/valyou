import { NextPage } from "next";
import { ArtistListComponent } from "../components/admin/artist-list";
import MarketNavComponent from "../components/marketNav/marketNav";
import { withAuth } from "../components/withAuth";

const ArtistListPage: NextPage = () => {
  return (
    <>
      <MarketNavComponent />
      <ArtistListComponent />
    </>
  );
};

export default withAuth(ArtistListPage);
