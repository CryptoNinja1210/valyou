import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { SearchComponent } from "../searchComponent";
import classNames from "classnames";
import { ListenTable } from "./listenTable";
import { useState } from "react";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { musicArray } from "./main_tabs";

export const ListenComponent = () => {
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
        <ul className="py-6 whitespace-nowrap overflow-x-auto text-sm font-medium text-center flex ">
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
    <div className="p-2">
      <Box sx={{ width: "100%" }}>
        <NestedTabs />
        <Box className="lg:flex justify-between block !sticky top-0 z-10 px-2 pb-4 rounded-lg bg-[#F3F4F6]">
          <Tabs
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
        <br />
        <TabPanel value={value} index={0}>
          <div className="my-4">
            <TextField
              size="small"
              className=" w-full inputRounded"
              placeholder="Search for a song"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <ListenTable isEarn={isEarn} isContribution={isContribution} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="mb-3">
            <br />
            <TextField
              size="small"
              className=" w-full inputRounded"
              placeholder="Search for a song"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <ListenTable isEarn={isEarn} isContribution={isContribution} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className="mb-3">
            <br />
            <TextField
              size="small"
              className=" w-full inputRounded"
              placeholder="Search for a song"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <ListenTable isEarn={isEarn} isContribution={isContribution} />
        </TabPanel>
      </Box>
    </div>
  );
};
