import { useEffect, useState } from "react";
import { ScrollBar } from "../components/artist/scrollBar";
import { StockPrice } from "../components/artist/stockPrice";
import MarketNavComponent from "../components/marketNav/marketNav";
import { withAuth } from "../components/withAuth";

const ArtistPage = () => {
  const [isStore, setIsStore] = useState(true);
  useEffect(() => {
    localStorage.setItem("userProfile", "Artist");
  }, []);
  return (
    <>
      <MarketNavComponent />
      <ScrollBar setIsStore={setIsStore}></ScrollBar>
      {isStore && (
        <div className="z-10 overflow-hidden !sticky bottom-0 left-0 bg-white p-2">
          <StockPrice />
        </div>
      )}
    </>
  );
};

export default withAuth(ArtistPage);
