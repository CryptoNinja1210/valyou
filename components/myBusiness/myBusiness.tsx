import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Link from "next/link";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { AutocompleteComponent } from "../autoComplete/autocomplete";
import { SearchComponent } from "../searchComponent";
import { About } from "./about";
import { BusinessCard } from "./businessCard";
import { Portfolio } from "./portfolio";
import { Reviews } from "./reviews";
import { Services } from "./services";

var businessArray = [
  { name: "About", link: "" },
  { name: "Services", link: "" },
  { name: "Reviews & Rating", link: "" },
  { name: "Portfolio", link: "" },
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

export const MyBusinessComponent = () => {
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

  useEffect(() => {
    localStorage.setItem("userProfile", "Business");
  }, []);

  return (
    <div className="p-2">
      <BusinessCard />
      <div className="my-2 rounded">
        <Link href="/business_message">
          <Button variant="contained" className="green_gradient w-full">
            MESSAGE
          </Button>
        </Link>
      </div>
      <div className="h-[100vh]">
        <Box sx={{ paddingBottom: "10px" }}>
          <Tabs
            variant="scrollable"
            scrollButtons="auto"
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            {businessArray.map((arrayValue, key) => {
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
        <TabPanel value={value} index={0}>
          <About />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Services />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Reviews />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Portfolio />
        </TabPanel>
      </div>
    </div>
  );
};
