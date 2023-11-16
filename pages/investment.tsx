import { Avatar, Card, CardContent, IconButton } from "@mui/material";
import { GridCheckCircleIcon } from "@mui/x-data-grid";
import Image from "next/image";
import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { Investments } from "../components/investor/investments";
import Link from "next/link";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const investment = () => {
  return (
    <>
      <div className="p-2">
        <div className="flex items-center gap-4 py-4">
          <div className="p-1 text-white bg-black rounded-full">
            <Link href="/wallet">
              <KeyboardBackspaceIcon />
            </Link>
          </div>
          <b className="text-2xl"></b>
        </div>
        {/* <div className="flex items-center justify-between w-[100%]">
          <div className="bg-black rounded-full m-1">
            <IconButton style={{ color: "white" }}>
              <CloseIcon></CloseIcon>
            </IconButton>
          </div>
        </div> */}
        {/* <Card className="border">
          <CardContent sx={{ paddingBottom: "16px !important" }}>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Avatar
                  sx={{ width: 40, height: 40 }}
                  className="border-2 border-black"
                  alt="Travis Howard"
                  src="/assets/bobby_dp.jpeg"
                />
                <div className="flex-col px-2">
                  <p className="lg:text-1xl font-bold">Bobby Oparaocha</p>
                  <p className="flex items-center text-sm">
                    <span>Investor / Music Fan</span>
                    <span className="px-1 mt-[-2px]">
                      <CheckCircleIcon
                        sx={{ fill: "#22C55E", fontSize: "16px" }}
                      />
                    </span>
                  </p>
                </div>
              </div>
              <div className="border !border-black text-[#050f2f] rounded p-1 px-2">
                Following
              </div>
            </div>
          </CardContent>
        </Card> */}
        <div className="m-2 mr-4">
          <div className="w-[90vw] md:w-[374px] h-52 p-4 rounded-lg bg-black shadow font-bold text-white flex flex-col justify-center items-center">
            <span className="text-2xl">Investments : $ 154,000,000</span>
            <div className="flex items-center justify-between w-[96%]">
              <div className="text-[12px]">Music Artist Portfolio</div>
              <span className="text-[12px] text-green-500">
                Profit / Loss : + $10.08
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
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

export default investment;
