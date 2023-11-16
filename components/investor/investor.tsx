import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { WatchComponent } from "../watch_earn/watchComponent";
import { Investments, Reward, VipPoints } from "./investments";
import { InvestorBand } from "../bank/artistBrand";
import { ListenComponent } from "../listen_earn/listenComponent";
import { Followers } from "./followers";
import { InvestorCard } from "./investorCard";
import Image from "next/image";
import { Avatar } from "@mui/material";
import { GridCheckCircleIcon } from "@mui/x-data-grid";
import ScrollContainer from "react-indiana-drag-scroll";

var investorArray = [
  { name: "Audio Playlist", link: "" },
  { name: "Video Playlist", link: "" },
  { name: "Investments", link: "" },
  { name: "Following You", link: "" },
  { name: "You Are Following", link: "" },
  { name: "Rewards & Earnings", link: "" },
  { name: "Artist VIP points", link: "" },
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {children}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export const InvestorComponent = () => {
  const [value, setValue] = React.useState(0);
  const state: any = useSelector((state) => state);
  const {
    flags: { selectedTab },
  } = state;

  useEffect(() => {
    setValue(selectedTab);
  }, [selectedTab]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="p-2">
      <InvestorCard />
      <Box className="p-0" sx={{ width: "100%" }}>
        <Box sx={{ paddingBottom: "10px" }}>
          <Tabs
            variant="scrollable"
            scrollButtons="auto"
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            {investorArray.map((arrayValue, key) => {
              return (
                <Tab
                  key={key}
                  disableRipple
                  className="whitespace-nowrap animate-none text-sm font-medium"
                  sx={{ fontWeight: "bold" }}
                  label={arrayValue.name}
                  {...a11yProps(key)}
                />
              );
            })}
          </Tabs>
        </Box>
        <TabPanel className="overflow-x-auto" value={value} index={0}>
          <ListenComponent />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <WatchComponent />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className="flex flex-col gap-3">
            <div className="w-full md:w-[376px] h-56 p-4 rounded-lg font-bold background-shadow">
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
            <Investments />
            <Investments />
            <Investments />
            <Investments />
            <Investments />
            <Investments />
            <Investments />
          </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Followers />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Followers />
        </TabPanel>
        <TabPanel value={value} index={5}>
          <Reward />
        </TabPanel>
        <TabPanel value={value} index={6}>
          <VipPoints />
        </TabPanel>
      </Box>
    </div>
  );
};
