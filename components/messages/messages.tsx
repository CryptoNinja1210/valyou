import { Badge, InputAdornment, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { MessageTab } from "./message_tab";
import { Notifications } from "./notifications";

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

const MessageTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", minHeight: "730px" }}>
      <Box sx={{ paddingBottom: "10px" }}>
        <Tabs
          variant="scrollable"
          scrollButtons="auto"
          className="px-3"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            disableRipple
            icon={
              <Badge
                sx={{ marginTop: "0px", marginLeft: "18px !important" }}
                badgeContent={4}
                color="primary"
              />
            }
            iconPosition="end"
            className="whitespace-nowrap animate-none text-sm font-medium min-h-0	capitalize text-[#050F2F]"
            sx={{ fontWeight: "bold", textTransform: "none" }}
            label="Messages "
            {...a11yProps(0)}
          />
          <Tab
            disableRipple
            icon={
              <Badge
                sx={{ marginTop: "0px", marginLeft: "18px !important" }}
                badgeContent={4}
                color="primary"
              />
            }
            iconPosition="end"
            className="whitespace-nowrap animate-none text-sm font-medium min-h-0	capitalize text-[#050F2F]"
            sx={{ fontWeight: "bold", textTransform: "none" }}
            label="Notifications"
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <MessageTab />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="flex flex-col gap-4 mx-3">
          <TextField
            size="small"
            className="lg:w-[30%] w-full inputRounded m-0 p-0"
            placeholder="Search for all notifications"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              style: { fontSize: "12px" },
            }}
          />
          <Notifications />
          <Notifications />
          <Notifications />
        </div>
      </TabPanel>
    </Box>
  );
};

export const Message = () => {
  return (
    <div>
      <MessageTabs />
    </div>
  );
};
