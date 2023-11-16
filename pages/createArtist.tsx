import { CreateArtist } from "../components/artist/create_artist";
import MarketNavComponent from "../components/marketNav/marketNav";
import { withAuth } from "../components/withAuth";

const CreateArtistPage = () => {
  return (
    <>
      <MarketNavComponent />
      <CreateArtist />
    </>
  );
};

export default withAuth(CreateArtistPage);
