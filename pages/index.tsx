import * as React from "react";
import type { NextPage } from "next";
import LandingPage from "./landing";

const Home: NextPage = () => {
  var arry = [
    {
      image: "https://avatars.githubusercontent.com/u/6250754?s=200&v=4",
      text: "Ethereum (ETH)",
    },
    {
      image: "https://avatars.githubusercontent.com/u/6250754?s=200&v=4",
      text: "Bitcoin (BTC)",
    },
    {
      image: "https://avatars.githubusercontent.com/u/6250754?s=200&v=4",
      text: "USD Coin (USDC)",
    },
    {
      image: "https://avatars.githubusercontent.com/u/6250754?s=200&v=4",
      text: " Valyou X Dollar (VXD) = $1.00 USDC",
    },
    {
      image: "https://avatars.githubusercontent.com/u/6250754?s=200&v=4",
      text: " Valyou X Token (Valyou X) = USDC $0.50",
    },
  ];
  return (
    <>
      <LandingPage></LandingPage>
    </>
  );
};

export default Home;
