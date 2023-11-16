import { Box, Typography, Tabs, Tab } from "@mui/material";
import React from "react";
import { SideBar } from "../watch_earn/sideNav";

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
      {value === index && (
        <Box>
          <Typography component="p">
            <div className="md:p-2">{children}</div>
          </Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const UserCard = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={{}}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              className="font-bold text-[#050F3F]"
              label="Watch"
              {...a11yProps(0)}
            />
            <Tab
              className="font-bold text-[#050F3F]"
              label="Earn"
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <SideBar />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SideBar />
        </TabPanel>
      </Box>
    </>
  );
};
