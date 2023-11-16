import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Card, CardContent } from "@mui/material";
import { Investments } from "../investor/investments";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
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

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Budget = () => {
  const budgetArray = [
    { text: "Fund Management", value: "3000" },
    { text: "Living Allowance", value: "1600" },
    { text: "Marketing", value: "300" },
    { text: "Recording", value: "200" },
    { text: "Video Production", value: "200" },
    { text: "Team", value: "1000" },
    { text: "Travel Touring", value: "500" },
  ];
  return (
    <>
      <br />
      {budgetArray.map((val, key) => {
        return (
          <div key={key} className="py-2">
            <Card className="border">
              <CardContent className="!pb-[16px]">
                <div className="flex justify-between items-center">
                  <p>{val.text}</p>
                  <p>${val.value}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      })}
    </>
  );
};

export const ArtistBand = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="p-2 py-6">
      <div className="text-center">
        <p className="text-3xl font-[600]">
          Transactions &amp; Earning History
        </p>
      </div>
      <Box sx={{ width: "100%" }}>
        <Box className="flex justify-center mt-6">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              disableRipple
              className="border-lg rounded"
              label="Budget"
              {...a11yProps(0)}
            />
            <Tab disableRipple label="Income" {...a11yProps(1)} />
            <Tab disableRipple label="Expense" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Budget />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="flex flex-col gap-4 py-4">
            <b className="text-xl">Latest Card Transactions</b>
            <Investments />
            <Investments />
            <Investments />
            <Investments />
            <Investments />
            <Investments />
            <Investments />
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className="flex flex-col gap-4 py-4">
            <b className="text-xl">Latest Card Transactions</b>
            <Investments />
            <Investments />
            <Investments />
            <Investments />
            <Investments />
            <Investments />
            <Investments />
          </div>
        </TabPanel>
      </Box>
    </div>
  );
};

export const InvestorBand = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="p-2 py-6">
      <Box sx={{ width: "100%" }}>
        <Box className="flex justify-center mt-6">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab disableRipple label="Income" {...a11yProps(0)} />
            <Tab disableRipple label="Investments" {...a11yProps(1)} />
            <Tab disableRipple label="Expense" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div className="flex flex-col gap-4 py-4">
            {/* <b className="text-xl">Latest Card Transactions</b> */}
            <Investments />
            <Investments />
            <Investments />
            <Investments />
            <Investments />
            <Investments />
            <Investments />
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="flex flex-col gap-4 py-4">
            {/* <b className="text-xl">Latest Card Transactions</b> */}
            <Investments />
            <Investments />
            <Investments />
            <Investments />
            <Investments />
            <Investments />
            <Investments />
          </div>
        </TabPanel>
      </Box>
    </div>
  );
};
