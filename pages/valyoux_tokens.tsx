import Image from "next/image";
import React from "react";
import { Investments } from "../components/investor/investments";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Link from "next/link";

const valyoux_tokens = () => {
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
        <div className="w-full md:w-[376px] h-56 p-4 rounded-lg background-shadow font-bold">
          <div className="flex justify-between items-center">
            <Image
              src="/assets/valyoux_black_logo.svg"
              width={50}
              height={50}
              alt="valyoux logo"
            />
            <div className="flex flex-col items-end">
              <div>Valyou X Access Tokens</div>
            </div>
          </div>
          <div className="py-10 flex flex-col items-center text-2xl">
            <span>Value : $ 154,000,000</span>
            <div className="flex items-center gap-8">
              <span className="text-[12px]">Tokens : 15,400,000</span>
              <span className="text-[12px] text-green-500">
                Token Price : $ 10
              </span>
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

export default valyoux_tokens;
