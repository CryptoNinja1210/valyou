import React, { useState } from "react";
import MarketNavComponent from "../components/marketNav/marketNav";
import { Crypto, Fiat, RadioSelect } from "../components/bank/deposit";
import { Card } from "@mui/material";
import Link from "next/link";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Image from "next/image";

const Exchange = () => {
  const [radioType, setRadioType] = useState("crypto");
  const changeRadioType = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioType((event.target as HTMLInputElement).value);
  };
  return (
    <>
      <div className="w-full p-2">
        <div className="flex items-center gap-4 py-4">
          <div className="p-1 text-white bg-black rounded-full">
            <Link href="/wallet">
              <KeyboardBackspaceIcon />
            </Link>
          </div>
          <b className="text-2xl">EXCHANGE VXD</b>
        </div>
        <div className="w-full md:w-[376px] h-56 p-4 rounded-lg font-bold bg-black text-white shadow my-1">
          <div className="flex justify-between items-center">
            <Image
              src="/assets/valyoux_black_logo.svg"
              width={50}
              height={50}
              alt="valyoux logo"
            />
            <div className="flex flex-col items-end">
              <div>Valyou X Dollars - Platform Currency</div>
            </div>
          </div>
          <div className="py-10 flex justify-center text-2xl">
            <span>VXD : $ 16,000</span>
          </div>
        </div>
        <div className="background-shadow p-2 my-1">
          <div className="flex justify-between items-center p-1 mb-2">
            <p className="font-[500]">Select Exchange Method</p>
          </div>
          <RadioSelect value={radioType} onChange={changeRadioType} />
          <br />
          {radioType == "crypto" ? <Crypto /> : <Fiat />}
        </div>
      </div>
    </>
  );
};

export default Exchange;
