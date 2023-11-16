import Image from "next/image";
import React from "react";
import { Investments } from "../components/investor/investments";
import Link from "next/link";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const transaction_info = () => {
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
        <div className="w-full md:w-[376px] h-56 p-4 rounded-lg font-bold bg-black text-white shadow">
          <div className="flex justify-between items-center">
            <Image
              src="/assets/valyoux_black_logo.svg"
              width={50}
              height={50}
              alt="valyoux logo"
            />
            <div className="flex flex-col items-end">
              <div>Valyou X Music Artist Investments</div>
            </div>
          </div>
          <div className="py-10 flex flex-col items-center text-2xl">
            <span>VXD : $ 22,000</span>
            <div className="text-[12px] text-green-500">
              Profit / Loss : + $10.08
            </div>
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

export default transaction_info;
