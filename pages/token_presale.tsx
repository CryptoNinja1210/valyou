import { NextPage } from "next";
import FooterComponent from "../components/footer";
import NavComponent from "../components/navbar";
import MainTokenComponent from "../components/token_presale/main";
import { withAuth } from "../components/withAuth";

const TokenPresale: NextPage = () => {
  return (
    <>
      <NavComponent />
      <MainTokenComponent />
      <FooterComponent />
    </>
  );
};

export default withAuth(TokenPresale);
