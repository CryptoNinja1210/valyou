import Box from "@mui/material/Box";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import classNames from "classnames";
import { ListenTable } from "./listenTable";
import { useState } from "react";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export var musicArray = [
  { id: 1, text: "Top 100" },
  { id: 2, text: "Trending" },
  { id: 12, text: "Rap" },
  { id: 3, text: "Hip-Hop" },
  { id: 4, text: "Afro Beats" },
  { id: 5, text: "Amapiano" },
  { id: 6, text: "Feel Good" },
  { id: 7, text: "Party" },
  { id: 8, text: "Romance" },
  { id: 9, text: "Workout" },
  { id: 10, text: "Chill" },
  { id: 11, text: "Energy Country" },
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

const NestedTabs = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <>
      <ul className="py-3 whitespace-nowrap overflow-x-auto text-sm font-medium text-center flex ">
        {musicArray.map((value, key) => {
          return (
            <li key={key} className="w-full mr-3">
              <span
                onClick={() => setSelectedTab(value.id)}
                className={classNames(
                  "inline-block hover:cursor-pointer p-2 w-full text-gray-900  rounded focus:ring-4 focus:ring-blue-300 focus:outline-none ",
                  { "active bg-black": selectedTab == value.id },
                  { "bg-gray-100": selectedTab != value.id }
                )}
                aria-current="page"
              >
                {value.text}
              </span>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export const MainTabs = () => {
  const [value, setValue] = React.useState(0);
  const [isEarn, setIsEarn] = useState(false);
  const [isContribution, setIsContribution] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleEarn = () => {
    setIsEarn(true);
    setIsContribution(false);
  };
  const handleContribution = () => {
    setIsEarn(false);
    setIsContribution(true);
  };
  const handlePay = () => {
    setIsEarn(false);
    setIsContribution(false);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box
          className="lg:flex justify-between block sticky top-0 z-10 bg-white"
          sx={{}}
        >
          <Tabs
            className="my-3 lg:my-0"
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Pay per Stream" {...a11yProps(0)} onClick={handlePay} />
            <Tab label="Earn" {...a11yProps(1)} onClick={handleEarn} />
            <Tab
              label="Valyou Playlist"
              {...a11yProps(2)}
              onClick={handleContribution}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <NestedTabs />
          <div className="mb-3">
            <br />

            <TextField
              size="small"
              className=" w-full inputRounded"
              placeholder="Search for songs in this playlist"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {" "}
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <ListenTable isEarn={isEarn} isContribution={isContribution} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <NestedTabs />
          <div className="mb-3">
            <br />

            <TextField
              size="small"
              className=" w-full inputRounded"
              placeholder="Search for songs in this playlist"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {" "}
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <ListenTable isEarn={isEarn} isContribution={isContribution} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <NestedTabs />
          <div className="mb-3">
            <br />

            <TextField
              size="small"
              className=" w-full inputRounded"
              placeholder="Search for songs in this playlist"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {" "}
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <ListenTable isEarn={isEarn} isContribution={isContribution} />
        </TabPanel>
      </Box>
    </>
  );
};
