import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { ListenComponent } from "../listen_earn/listenComponent";
import MainStore from "../store/products";
import { WatchComponent } from "../watch_earn/watchComponent";
import { About } from "./about";
import { Academy } from "./academy";
import { AdminCard } from "./adminCard";
import { BrandOverView } from "./brandOverView";
import { CandleChart } from "./candleChart";
import { Collaborate } from "./collaborate";
import { Followers } from "./followers";
import { Photos } from "./photos";
import { PostComponent } from "./post";

var artistArray = [
  { name: "Valyou X Token Stock Price", link: "" },
  { name: "All Audios", link: "" },
  { name: "All Videos", link: "" },
  { name: "About", link: "" },
  { name: "All Posts", link: "" },
  { name: "Your Followers", link: "" },
  { name: "You Are Following", link: "" },
  { name: "All Photos", link: "" },
  { name: "Collaborate", link: "" },
  { name: "Store", link: "" },
  { name: "Academy", link: "" },
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

export const AdminComponent = ({ setIsStore }) => {
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
    if (newValue === 9) {
      setIsStore(false);
    } else setIsStore(true);
  };

  return (
    <div className="p-2">
      <AdminCard />
      <Box sx={{ width: "100%", height: "50%" }}>
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
                  sx={{ fontWeight: "bold" }}
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
          <ListenComponent />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <WatchComponent />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <About />
        </TabPanel>
        <TabPanel
          className="h-[78vh] lg:w-[50vw] lg:ml-[25vw] overflow-x-auto"
          value={value}
          index={4}
        >
          <PostComponent />
        </TabPanel>
        <TabPanel className="h-[78vh] overflow-x-auto" value={value} index={5}>
          <Followers />
        </TabPanel>
        <TabPanel className="h-[78vh] overflow-x-auto" value={value} index={6}>
          <Followers />
        </TabPanel>
        <TabPanel className="h-[78vh] overflow-x-auto" value={value} index={7}>
          <Photos />
        </TabPanel>
        <TabPanel className="h-[78vh] overflow-x-auto" value={value} index={8}>
          <Collaborate />
        </TabPanel>
        <TabPanel className="h-[78vh] overflow-x-auto" value={value} index={9}>
          <MainStore />
        </TabPanel>
        <TabPanel className="h-[78vh] overflow-x-auto" value={value} index={10}>
          <Academy />
        </TabPanel>
      </Box>
    </div>
  );
};
