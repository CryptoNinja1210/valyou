import {
  Card,
  CardContent,
  Button,
  Avatar,
  Grid,
  Link,
  Box,
  LinearProgress,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { AdminChart } from "./adminChart";
import { GrowthChart } from "./growthChart";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ArchiveIcon from "@mui/icons-material/Archive";
import InventoryIcon from "@mui/icons-material/Inventory";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import RadarIcon from "@mui/icons-material/Radar";
import Pagination from "@mui/material/Pagination";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ScrollContainer from "react-indiana-drag-scroll";
import Image from "next/image";

const MonthlyEarning = () => {
  return (
    <div className="bg-black text-white shadow-lg m-1 rounded-lg">
      <CardContent>
        <div className="lg:flex justify-between items-center block">
          <div>
            <p className="text-2xl">
              <b>Monthly Earning</b>
            </p>
            <br />
            <br />
            <p>This Month</p>
            <br />
            <div className="font-[800] text-[40px] text-white">
              $ 489,538,017.38 VXD
            </div>
            <br />
            <div className="flex">
              <p className="text-[#34c38f]"> 12%</p>
              <ArrowUpwardIcon className="text-[#34c38f]"></ArrowUpwardIcon>
              &nbsp;
              <p>From Previous Month</p>
            </div>
          </div>
          <AdminChart />
        </div>
      </CardContent>
    </div>
  );
};

const CurrencyExchange = () => {
  return (
    <Card className="p-4 flex justify-between items-center h-32">
      <div>
        <p>Currency Exchange</p>
        <b className="text-red float-left">20</b>
      </div>
      <Avatar sx={{ backgroundColor: "#556ee6" }}>
        <ContentCopyIcon></ContentCopyIcon>
      </Avatar>
    </Card>
  );
};

const Revenue = ({ text, value }) => {
  return (
    <Card className="p-4 flex justify-between items-center h-32">
      <div>
        <p>{text}</p>
        <b className="text-red float-left">$ {value} VXD</b>
      </div>
      <Avatar sx={{ backgroundColor: "#556ee6" }}>
        <ArchiveIcon></ArchiveIcon>
      </Avatar>
    </Card>
  );
};

const VXDMarketCap = () => {
  return (
    <Card className="p-4 flex justify-between items-center h-32">
      <div>
        <p>VXD Market Cap</p>
        <b className="text-red float-left">0</b>
      </div>
      <Avatar sx={{ backgroundColor: "#556ee6" }}>
        <InventoryIcon></InventoryIcon>
      </Avatar>
    </Card>
  );
};

export const GrowthRate = () => {
  return (
    <div className="background-shadow m-1">
      <CardContent>
        <p className="text-[#FF0093]">
          <b>Growth Rate Users</b>
        </p>
        <br />
        <GrowthChart />
      </CardContent>
    </div>
  );
};

export const SocialSource = () => {
  return (
    <div className="background-shadow w-full lg:w-[33vw] m-1">
      <CardContent>
        <p className="text-[#FF0093]">
          <b>Social Source</b>
        </p>
        <div className="text-center">
          <FacebookRoundedIcon
            sx={{ fontSize: 40, color: "blue" }}
          ></FacebookRoundedIcon>
          <p>
            <b>Facebook -</b> 124 sales
          </p>
          <br />
          <p>
            Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut
            libero venenatis faucibus tincidunt.
          </p>
          <Link href="/#">Learn more</Link>
        </div>
        <Grid
          className="text-center py-4"
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={4}>
            <FacebookRoundedIcon
              sx={{ fontSize: 40, color: "blue" }}
            ></FacebookRoundedIcon>
            <p>
              <b>Facebook</b>
            </p>
            <p>125 sales</p>
          </Grid>
          <Grid item xs={4}>
            <TwitterIcon sx={{ fontSize: 40, color: "#00acee" }}></TwitterIcon>
            <p>
              <b>Twitter</b>
            </p>
            <p>112 sales</p>
          </Grid>
          <Grid item xs={4}>
            <InstagramIcon
              sx={{ fontSize: 40, color: "#3f729b" }}
            ></InstagramIcon>
            <p>
              <b>Instagram</b>
            </p>
            <p>104 sales</p>
          </Grid>
        </Grid>
      </CardContent>
    </div>
  );
};

export const TopCities = () => {
  return (
    <div className="background-shadow w-full lg:w-[33vw] m-1">
      <CardContent>
        <p className="text-[#FF0093]">
          <b>Top Cities with the most use type</b>
        </p>
        <div className="text-center">
          <RadarIcon sx={{ color: "#556ee6", fontSize: "60px" }}></RadarIcon>
          <p className="text-lg">
            <b>1,456</b>
          </p>
          <p>San Francisco</p>
        </div>
        <br />
        <hr />

        <div className="flex justify-between items-center p-3">
          <p>San Francisco</p>
          <p>
            <b>1,456</b>
          </p>
          <Box className="hidden lg:block" sx={{ width: "60%" }}>
            <LinearProgress variant="determinate" value={82} />
          </Box>
        </div>
        <hr />

        <div className="flex justify-between items-center p-3">
          <p>Los Angeles</p>
          <p>
            <b>1,123</b>
          </p>
          <Box className="hidden lg:block" sx={{ width: "60%" }}>
            <LinearProgress variant="determinate" value={62} />
          </Box>
        </div>
        <hr />

        <div className="flex justify-between items-center p-3">
          <p>San Diego</p>
          <p>
            <b>1,026</b>
          </p>
          <Box className="hidden lg:block" sx={{ width: "60%" }}>
            <LinearProgress variant="determinate" value={22} />
          </Box>
        </div>
      </CardContent>
    </div>
  );
};

export const LatestTransaction = () => {
  var arrayTable = [
    {
      orderID: "SK2540",
      billingName: "Bobby Oparaocha",
      date: "07 Oct, 2019",
      total: "$400",
      paymentStatus: "Paid",
      paymentMethod: "MasterCard",
    },
    {
      orderID: "SK2541",
      billingName: "Neal Matthews	",
      date: "07 Oct, 2019",
      total: "$380",
      paymentStatus: "Chargeback",
      paymentMethod: "Visa",
    },
    {
      orderID: "SK2542",
      billingName: "Jamal Burnett	",
      date: "07 Oct, 2019",
      total: "$380",
      paymentStatus: "Paid",
      paymentMethod: "Paypal",
    },
    {
      orderID: "SK2543",
      billingName: "Juan Mitchell	",
      date: "07 Oct, 2019",
      total: "$384",
      paymentStatus: "Paid",
      paymentMethod: "MasterCard",
    },
    {
      orderID: "SK2544",
      billingName: "Barry Dick	",
      date: "07 Oct, 2019",
      total: "$384",
      paymentStatus: "Paid",
      paymentMethod: "Visa",
    },
    {
      orderID: "SK2545",
      billingName: "Ronald Taylor	",
      date: "04 Oct, 2019",
      total: "$404",
      paymentStatus: "Refund",
      paymentMethod: "Visa",
    },
  ];
  return (
    <div>
      <div className="overflow-x-auto relative">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="background-shadow">
            <tr>
              <th scope="col" className="py-3 px-6 whitespace-nowrap">
                <span> # &nbsp;</span>
              </th>
              <th scope="col" className="py-3 whitespace-nowrap">
                <span>Order &nbsp;</span>
              </th>
              <th scope="col" className="py-3 px-6 whitespace-nowrap">
                <span>Billing Name &nbsp;</span>
              </th>
              <th scope="col" className="py-3 px-6 whitespace-nowrap">
                <span> Date &nbsp;</span>
              </th>
              <th scope="col" className="py-3 px-6 whitespace-nowrap">
                <span> Total</span>
              </th>
              <th scope="col" className="py-3 px-6 whitespace-nowrap">
                <span> Payment Status</span>
              </th>
              <th scope="col" className="py-3 px-6 whitespace-nowrap">
                <span> Payment Method</span>
              </th>
              <th scope="col" className="py-3 px-6 whitespace-nowrap">
                <span> View Details</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <br />
            {arrayTable.map((value, index) => {
              return (
                <>
                  <tr key={index} className="background-shadow">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap 
                                "
                    >
                      {index + 1}
                    </th>
                    <td className="py-4 whitespace-nowrap">
                      <p>{value.orderID}</p>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      {value.billingName}
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      {value.date}
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      {value.total}
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      {value.paymentStatus == "Paid" && (
                        <span className="bg-green-200 text-green-600 p-1 rounded-lg">
                          {value.paymentStatus}
                        </span>
                      )}
                      {value.paymentStatus == "Chargeback" && (
                        <span className="bg-red-200 text-red-600 p-1 rounded-lg">
                          {value.paymentStatus}
                        </span>
                      )}
                      {value.paymentStatus == "Refund" && (
                        <span className="bg-yellow-200 text-yellow-600 p-1 rounded-lg">
                          {value.paymentStatus}
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <CreditCardIcon></CreditCardIcon>&nbsp;{" "}
                      {value.paymentMethod}
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <Button
                        variant="contained"
                        className="rounded-lg text-white !bg-black"
                      >
                        View Details
                      </Button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center p-4">
        <Pagination count={10} shape="rounded" color="primary" />
      </div>
    </div>
  );
};

export const Activity = () => {
  return (
    <div className="background-shadow w-full lg:w-[33vw] m-1">
      <CardContent>
        <p>
          <b>Activity</b>
        </p>
        <br />
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-2">
            <ArrowCircleRightOutlinedIcon />
            22 Nov
            <ArrowForwardIcon></ArrowForwardIcon>
            <p>Responded to need &quot;Volunteer Activities&quot;</p>
          </div>
          <div className="flex items-center gap-2">
            <ArrowCircleRightOutlinedIcon />
            22 Nov
            <ArrowForwardIcon></ArrowForwardIcon>
            <p>
              Everyone realizes why a new common language would be desirable...
            </p>
          </div>
          <div className="flex items-center gap-2">
            <ArrowCircleRightOutlinedIcon />
            22 Nov
            <ArrowForwardIcon></ArrowForwardIcon>
            <p>Joined the group &quot;Boardsmanship Forum&quot;</p>
          </div>
        </div>
        <br />
        <Button variant="contained" className=" h-10">
          View More
        </Button>
      </CardContent>
    </div>
  );
};

export const AdminDashboard = () => {
  const revenue = [
    {
      text: "Currency Exchange",
      value: "200",
    },
    {
      text: "Market Cap",
      value: "1000",
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
      <MonthlyEarning />
      <br />
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
      <br />
      <GrowthRate />
      <div className="flex items-center gap-6 flex-wrap lg:flex-nowrap">
        <SocialSource />
        <Activity />
        <TopCities />
      </div>
      <LatestTransaction />
    </div>
  );
};
