import { Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { withAuth } from "../components/withAuth";
import ScrollContainer from "react-indiana-drag-scroll";
import Image from "next/image";
import Link from "next/link";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import {
  Activity,
  GrowthRate,
  LatestTransaction,
  SocialSource,
  TopCities,
} from "../components/admin/dashboard";
import { AdminChart } from "../components/admin/adminChart";

const Wallet = () => {
  const currentUsers = [
    { text: "Current Users", value: "60,000" },
    { text: "Music Artists", value: "20,000" },
    { text: "Fans / Investors", value: "20,000" },
    { text: "Business", value: "10,000" },
    { text: "Brand Sponsors", value: "10,000" },
  ];
  const revenue = [
    {
      text: "Valyou X Dollar Reserve Currency",
      value: "399,999,787,288.21",
    },
    {
      text: "Valyou X Dollar Circulating Supply",
      value: "212,711.79",
    },
    {
      text: "VXD Security Compliance Asset",
      value: "102,788.79",
    },
    {
      text: "Currency Exchange",
      value: "200.07",
    },
    {
      text: "Market Cap",
      value: "1000.06",
    },
    {
      text: "Users Selling Stocks Revenue",
      value: "999,293.07",
    },
    {
      text: "Users Buying Stocks Revenue",
      value: "24,242,493.07",
    },
    {
      text: "Video Streaming Revenue",
      value: "46,549,293.07",
    },
    {
      text: "Audio Streaming Revenue",
      value: "93,546,293.12",
    },
    {
      text: "Products Merchandise Sales Revenue",
      value: "68,593.12",
    },
    {
      text: "User Buying VXD (Fiat/Debit Card)",
      value: "968,653.12",
    },
    {
      text: "User Selling VXD (Fiat/Debit Card)",
      value: "96,985,43.12",
    },
    {
      text: "User Buying VXD (Crypto) Revenue",
      value: "657,493.12",
    },
    {
      text: "User Selling VXD (Crypto) Revenue",
      value: "999,293.12",
    },
    {
      text: "Brand Sponsors Video Advertising",
      value: "95,678,429.12",
    },
    {
      text: "Visitors to Brand Sponsors Website",
      value: "999,293.12",
    },
    {
      text: "Brand Logo Sponsoring Artist revenue",
      value: "99,543,293.12",
    },
    {
      text: "Artist Promoting their Audio Revenue",
      value: "74,349,293.12",
    },
    {
      text: "Artist Promoting  their Video Revenue",
      value: "999,293.12",
    },
    {
      text: "User Valyou A song Revenue",
      value: "32,564,293.12",
    },
  ];
  return (
    <div>
      <div className="!sticky top-2 z-10 float-right bg-white rounded-full m-4">
        <Link href="investor">
          <IconButton>
            <CloseIcon></CloseIcon>
          </IconButton>
        </Link>
      </div>
      {localStorage.getItem("userProfile") === "Admin" ? (
        <div className="bg-black p-4 h-[500px] pt-[250px]">
          <div className="font-[800] text-[40px] text-white">
            $413,014,638,246.81 VXD
          </div>
          <div className="font-[700] py-2 text-white">
            Valyou X Platform Earnings
          </div>
          <div className="flex">
            <p className="text-[#34c38f]"> 12%</p>
            <ArrowUpwardIcon className="text-[#34c38f]"></ArrowUpwardIcon>
            &nbsp;
            <p className="text-white">From Previous Month</p>
          </div>
          <hr className="border-2 border-dashed my-4" />
          <Button
            variant="contained"
            className="green-gradient !text-white lg:w-[30%] w-full flex justify-center"
          >
            Bank / Wallet
          </Button>
        </div>
      ) : (
        <div className="bg-black p-4 h-[500px] pt-[250px]">
          <div className="font-[800] text-[40px] text-white">$ 760,000 VXD</div>
          <div className="font-[700] py-2 text-white">
            Total Balance of Assets You Own
          </div>
          <div className="font-[700] py-2 text-white">
            Available Balance to Cashout : $ 10,000 VXD
          </div>
          <hr className="border-2 border-dashed my-4" />
          <Button
            variant="contained"
            className="green-gradient !text-white lg:w-[30%] w-full flex justify-center"
          >
            Bank / Wallet
          </Button>
        </div>
      )}
      <div className="py-4 rounded-3xl mt-[-30px] bg-white">
        <ScrollContainer className="flex">
          <div className="m-2 mr-4">
            <Link href="exchange">
              <div className="w-64 h-40 p-5 rounded-lg background-shadow font-bold flex items-center justify-center">
                <span className="text-2xl">DEPOSIT</span>
              </div>
            </Link>
          </div>
          <div className="m-2 mr-4">
            <Link href="send_payment">
              <div className="w-64 h-40 p-5 rounded-lg background-shadow font-bold flex items-center justify-center">
                <span className="text-2xl">SEND</span>
              </div>
            </Link>
          </div>
          <div className="m-2 mr-4">
            <Link href="recieve_payment">
              <div className="w-64 h-40 p-5 rounded-lg background-shadow font-bold flex items-center justify-center">
                <span className="text-2xl">RECEIVE</span>
              </div>
            </Link>
          </div>
          <div className="m-2 mr-4">
            <Link href="exchange">
              <div className="w-64 h-40 p-5 rounded-lg background-shadow font-bold flex items-center justify-center">
                <span className="text-2xl">EXCHANGE</span>
              </div>
            </Link>
          </div>
          <div className="m-2 mr-4">
            <Link href="valyouX_currency">
              <div className="w-64 h-40 p-5 rounded-lg background-shadow font-bold flex items-center justify-center">
                <span className="text-2xl">PERSONAL</span>
              </div>
            </Link>
          </div>
          <div className="m-2 mr-4">
            <Link href="valyouX_currency">
              <div className="w-64 h-40 p-5 rounded-lg background-shadow font-bold flex items-center justify-center">
                <span className="text-2xl">ARTIST FUNDS</span>
              </div>
            </Link>
          </div>
          <div className="m-2 mr-4">
            <Link href="valyouX_currency">
              <div className="w-64 h-40 p-5 rounded-lg background-shadow font-bold flex items-center justify-center">
                <span className="text-2xl">BUSINESS</span>
              </div>
            </Link>
          </div>
          <div className="m-2 mr-4">
            <Link href="valyoux_tokens">
              <div className="w-64 h-40 p-5 rounded-lg background-shadow font-bold flex items-center justify-center">
                <span className="text-2xl">ACCESS TOKENS</span>
              </div>
            </Link>
          </div>
          <div className="m-2 mr-4">
            <Link href="transaction_info">
              <div className="w-64 h-40 p-5 rounded-lg background-shadow font-bold flex items-center justify-center">
                <span className="text-2xl">INVESTMENTS</span>
              </div>
            </Link>
          </div>
        </ScrollContainer>
        <br />
        {localStorage.getItem("userProfile") === "Admin" ? (
          <ScrollContainer className="flex cursor-grab">
            {revenue.map((item, index) => (
              <div className="m-2 mr-4" key={index}>
                {/* <Link href="valyouX_currency"> */}
                <div
                  className={`w-[376px] h-52 p-4 rounded-lg font-bold ${
                    index % 2 === 0
                      ? "bg-black text-white shadow"
                      : "background-shadow"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <Image
                      src="/assets/valyoux_black_logo.svg"
                      width={50}
                      height={50}
                      alt="valyoux logo"
                    />
                    <div className="flex flex-col items-end">
                      <div>{item.text}</div>
                    </div>
                  </div>
                  <div className="py-10 flex justify-center text-2xl">
                    <span>VXD : $ {item.value}</span>
                  </div>
                </div>
                {/* </Link> */}
              </div>
            ))}
          </ScrollContainer>
        ) : (
          <ScrollContainer className="cursor-grab flex">
            <div className="m-2 mr-4">
              <Link href="valyouX_currency">
                <div className="w-[376px] h-52 p-4 rounded-lg font-bold bg-black text-white shadow">
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
                    <span>VXD : $ 56,000</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="m-2 mr-4">
              <Link href="valyoux_tokens">
                <div className="w-[376px] h-52 p-4 rounded-lg background-shadow font-bold">
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
                    <span>Value : $ 152,000</span>
                    <div className="flex items-center gap-8">
                      <span className="text-[12px]">Tokens : 15,200</span>
                      <span className="text-[12px] text-green-500">
                        Token Price : $ 10
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="m-2 mr-4">
              <Link href="transaction_info">
                <div className="w-[376px] h-52 p-4 rounded-lg font-bold bg-black text-white shadow">
                  <div className="flex justify-between items-center">
                    <Image
                      src="/assets/valyoux_black_logo.svg"
                      width={50}
                      height={50}
                      alt="valyoux logo"
                    />
                    <div className="flex flex-col items-end">
                      <div>Valyou X Investments</div>
                    </div>
                  </div>
                  <div className="py-10 flex justify-center text-2xl">
                    <span>VXD : $ 42,000</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="m-2 mr-4">
              <Link href="artist_funds">
                <div className="w-[376px] h-52 p-4 rounded-lg font-bold background-shadow">
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
              </Link>
            </div>
            <div className="m-2 mr-4">
              <Link href="business_funds">
                <div className="w-[376px] h-52 p-4 rounded-lg font-bold bg-black text-white shadow">
                  <div className="flex justify-between items-center">
                    <Image
                      src="/assets/valyoux_black_logo.svg"
                      width={50}
                      height={50}
                      alt="valyoux logo"
                    />
                    <div className="flex flex-col items-end">
                      <div>Business</div>
                    </div>
                  </div>
                  <div className="py-10 flex justify-center text-2xl">
                    <span>VXD : $ 10,000</span>
                  </div>
                </div>
              </Link>
            </div>
          </ScrollContainer>
        )}
        <br />
        {localStorage.getItem("userProfile") === "Admin" && (
          <>
            <b className="underline text-[#050f2f] p-2 text-2xl">
              Current Users
            </b>
            <ScrollContainer className="cursor-grab flex">
              {currentUsers.map((item, index) => (
                <div className="m-2 mr-4" key={index}>
                  <div className="w-72 h-44 p-5 rounded-lg background-shadow font-bold flex flex-col items-center justify-center text-2xl">
                    <span>{item.text}</span>
                    <span className="text-red px-2">{item.value}</span>
                  </div>
                </div>
              ))}
            </ScrollContainer>
            <br />
            <br />
            <div className="m-1">
              <AdminChart />
              <br />
              <br />
              <GrowthRate />
              <br />
              <br />
              <div className="flex items-center gap-6 flex-wrap lg:flex-nowrap">
                <SocialSource />
                <Activity />
                <TopCities />
              </div>
              <br />
              <br />
              <LatestTransaction />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default withAuth(Wallet);
