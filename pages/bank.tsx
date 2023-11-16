import { NextPage } from "next";
import React from "react";
import BankCompAdmin from "../components/bank/BankCompAdmin";
import BankComponent from "../components/bank/bankComponent";
import MarketNavComponent from "../components/marketNav/marketNav";
import { withAuth } from "../components/withAuth";

const BankPage: NextPage = () => {
  return (
    <>
      <MarketNavComponent />
      {localStorage.getItem("userProfile") == "Admin" ? (
        <BankCompAdmin />
      ) : (
        <BankComponent />
      )}
    </>
  );
};

export default withAuth(BankPage);
