import { NextPage } from "next";
import { useEffect, useState } from "react";
import { AdminComponent } from "../components/admin/adminComponent";
import { StockPrice } from "../components/artist/stockPrice";
import MarketNavComponent from "../components/marketNav/marketNav";
import { withAuth } from "../components/withAuth";

const ArtistPage: NextPage = () => {
  const [isStore, setIsStore] = useState(true);
  useEffect(() => {
    localStorage.setItem("userProfile", "Admin");
  }, []);
  return (
    <>
      <MarketNavComponent />
      <AdminComponent setIsStore={setIsStore} />
      {isStore && (
        <div className="z-10 overflow-hidden sticky bottom-0 left-0 bg-white p-2">
          <StockPrice />
        </div>
      )}
    </>
  );
};

export default withAuth(ArtistPage);
