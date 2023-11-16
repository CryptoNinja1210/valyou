import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { WatchComponent } from "../watch_earn/watchComponent";
import { About } from "./about";
import { Academy } from "./academy";
import { BrandOverView } from "./brandOverView";
import { CandleChart } from "./candleChart";
import { Collaborate } from "./collaborate";
import { Followers } from "./followers";
import { Photos } from "./photos";
import { Post } from "./posts";
import Card from "@mui/material/Card";
import { Avatar } from "@mui/material";
import { ConnectCollaborateComponent } from "../business/connect_collaborate";
import { Revenue } from "./revenue";
import { MainTabs } from "../listen_earn/main_tabs";
import MainStore from "../store/products";
import IPOProgress from "./ipoProgress";
import SocialMediaComponent from "../socialMedia/socialMedia";

var artistArray = [
  { name: "Stock Price", link: "" },
  { name: "Audios", link: "" },
  { name: "Videos", link: "" },
  { name: "About", link: "" },
  { name: "Posts", link: "" },
  { name: "Your Followers", link: "" },
  { name: "You Are Following", link: "" },
  { name: "Photos", link: "" },
  { name: "Revenue", link: "" },
  { name: "Collaborate", link: "" },
  { name: "Connect", link: "" },
  { name: "Store", link: "" },
  { name: "Academy", link: "" },
  { name: "IPO progress", link: "" },
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

export const ScrollBar = ({ setIsStore }) => {
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
    if (newValue === 11) {
      setIsStore(false);
    } else setIsStore(true);
  };

  return (
    <>
      <div className="p-2">
        <div>
          <Card
            sx={{ backgroundColor: "black", color: "white" }}
            className="bg-black"
          >
            <div className="flex justify-between items-center p-4">
              <div className="flex items-center gap-4">
                <Avatar
                  sx={{ width: 60, height: 60 }}
                  className="relative top-0"
                  alt="Travis Howard"
                  src="/assets/drakeDp.png"
                />
                <div className="flex-col">
                  <p className="lg:text-1xl font-bold text-white whitespace-nowrap w-28 overflow-x-auto">
                    Drake
                  </p>
                  <p className="text-sm text-white">Rapper</p>
                  <p className="text-sm text-white"> Major Artist</p>
                </div>
              </div>
              <div className="flex-col">
                <p className="text-sm float-right text-white">Market Value</p>
                <p className="lg:text-2xl font-bold text-white">
                  V$2,000,000,000
                </p>
              </div>
            </div>
          </Card>
        </div>
        <Box className="p-0" sx={{ width: "100%", minHeight: "50vh" }}>
          <Box sx={{ paddingBottom: "10px" }}>
            <Tabs
              variant="scrollable"
              scrollButtons="auto"
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              {artistArray.map((arrayValue, key) => {
                return (
                  <Tab
                    key={key}
                    disableRipple
                    className="whitespace-nowrap animate-none text-sm font-medium"
                    sx={{ fontWeight: "bold", color: "#050F3F" }}
                    label={arrayValue.name}
                    {...a11yProps(key)}
                  />
                );
              })}
            </Tabs>
          </Box>
          <TabPanel className="overflow-x-hidden" value={value} index={0}>
            <div className="hidden lg:block border-2 rounded">
              <div className="px-[50px] mx-40">
                <CandleChart />
              </div>
            </div>
            <div className="lg:hidden">
              <CandleChart />
            </div>
            <BrandOverView />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <MainTabs />
          </TabPanel>
          <TabPanel className="m-[-8px]" value={value} index={2}>
            <WatchComponent />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <About />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <div className="lg:flex justify-center m-[-8px]">
              <SocialMediaComponent showSidebar={false} />
            </div>
          </TabPanel>
          <TabPanel value={value} index={5}>
            <Followers />
          </TabPanel>
          <TabPanel value={value} index={6}>
            <Followers />
          </TabPanel>
          <TabPanel value={value} index={7}>
            <Photos />
          </TabPanel>
          <TabPanel value={value} index={8}>
            <Revenue />
          </TabPanel>
          <TabPanel value={value} index={9}>
            <Collaborate />
          </TabPanel>
          <TabPanel value={value} index={10}>
            <ConnectCollaborateComponent />
          </TabPanel>
          <TabPanel value={value} index={11}>
            <MainStore />
          </TabPanel>
          <TabPanel value={value} index={12}>
            <Academy />
          </TabPanel>
          <TabPanel value={value} index={13}>
            <IPOProgress />
          </TabPanel>
        </Box>
      </div>
    </>
  );
};
