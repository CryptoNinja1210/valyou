import Image from "next/image";
import React from "react";
import { Investments } from "../components/investor/investments";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Link from "next/link";

const artist_funds = () => {
  return (
    <>
      <div className="p-2">
        <div className="flex items-center gap-4 py-4">
          <div className="p-1 text-white bg-black rounded-full">
            <Link href="/wallet">
              <KeyboardBackspaceIcon />
            </Link>
          </div>
        </div>
        <div className="w-full md:w-[376px] h-56 p-4 rounded-lg font-bold background-shadow">
          <div className="flex justify-between items-center">
            <Image
              src="/assets/valyoux_black_logo.svg"
              width={50}
              height={50}
              alt="valyoux logo"
            />
            <div className="flex flex-col items-end">
              <div>Artist Funds</div>
            </div>
          </div>
          <div className="py-10 flex justify-center text-2xl">
            <span>VXD : $ 500,000</span>
          </div>
        </div>
        <div className="flex flex-col gap-3 py-2">
          <Investments />
          <Investments />
          <Investments />
          <Investments />
          <Investments />
          <Investments />
          <Investments />
        </div>
      </div>
    </>
  );
};

export default artist_funds;
