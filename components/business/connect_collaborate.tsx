import { Avatar, Box, Card, CardContent, Link, Tab } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import React from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import { useSelector } from "react-redux";

var BusinessTabsArray = [
  { name: "Producer", link: "" },
  { name: "Photographer", link: "" },
  { name: "Music Video Production", link: "" },
  { name: "Ads & Promotion", link: "" },
  { name: "Web Design", link: "" },
  { name: "Artist Collaboration", link: "" },
  { name: "Publicist", link: "" },
  { name: "Venue/GIGS", link: "" },
  { name: "Manager", link: "" },
  { name: "Songwriter", link: "" },
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

const BusinessList = () => {
  return (
    <>
      <Link href="/myBusiness" className="!no-underline">
        <div className="py-2">
          <div className="background-shadow">
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Avatar
                    sx={{ width: 60, height: 60 }}
                    alt="Travis Howard"
                    src="/assets/mcdonald.png"
                  />
                  <div>
                    <p className="lg:text-1xl font-bold customBlack">McDonald&apos;s</p>
                    <p className="text-sm customBlack">Food</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <p className="text-sm">Business</p>
                  <p className="text-sm">
                    <div className="flex items-center">
                      <div>
                      <StarRateIcon sx={{ fill: "black " }}></StarRateIcon>
                      <StarRateIcon sx={{ fill: "black " }}></StarRateIcon>
                      <StarRateIcon sx={{ fill: "black " }}></StarRateIcon>
                      <StarRateIcon sx={{ fill: "black " }}></StarRateIcon>
                      <StarRateIcon sx={{ fill: "black " }}></StarRateIcon>
                      </div>
                      <span className="text-sm ml-4 mt-1">30 Reviews</span>
                    </div>
                  </p>
                </div>
              </div>
            </CardContent>
          </div>
        </div>
      </Link>
    </>
  );
};

var arrList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const BusinessTabs = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const state: any = useSelector((state) => state);
  const {
    flags: { selectedTab },
  } = state;

  React.useEffect(() => {
    setValue(selectedTab);
  }, [selectedTab]);

  return (
    <div className="p-2">
      <Box sx={{ width: "100%", height: "50%" }}>
        <Box sx={{ paddingBottom: "10px" }}>
          <Tabs
            variant="scrollable"
            scrollButtons="auto"
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            {BusinessTabsArray.map((arrayValue, key) => {
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
        <TabPanel value={value} index={0}>
          {arrList.map((val, key) => {
            return <BusinessList key={key} />;
          })}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {arrList.map((val, key) => {
            return <BusinessList key={key} />;
          })}
        </TabPanel>

        <TabPanel value={value} index={2}>
          {arrList.map((val, key) => {
            return <BusinessList key={key} />;
          })}
        </TabPanel>
        <TabPanel value={value} index={3}>
          {arrList.map((val, key) => {
            return <BusinessList key={key} />;
          })}
        </TabPanel>
        <TabPanel value={value} index={4}>
          {arrList.map((val, key) => {
            return <BusinessList key={key} />;
          })}
        </TabPanel>
        <TabPanel value={value} index={5}>
          {arrList.map((val, key) => {
            return <BusinessList key={key} />;
          })}
        </TabPanel>
        <TabPanel value={value} index={6}>
          {arrList.map((val, key) => {
            return <BusinessList key={key} />;
          })}
        </TabPanel>
        <TabPanel value={value} index={7}>
          {arrList.map((val, key) => {
            return <BusinessList key={key} />;
          })}
        </TabPanel>
        <TabPanel value={value} index={8}>
          {arrList.map((val, key) => {
            return <BusinessList key={key} />;
          })}
        </TabPanel>
        <TabPanel value={value} index={9}>
          {arrList.map((val, key) => {
            return <BusinessList key={key} />;
          })}
        </TabPanel>
        <TabPanel value={value} index={10}>
          {arrList.map((val, key) => {
            return <BusinessList key={key} />;
          })}
        </TabPanel>
        <TabPanel value={value} index={11}>
          {arrList.map((val, key) => {
            return <BusinessList key={key} />;
          })}
        </TabPanel>
      </Box>
    </div>
  );
};

export const ConnectCollaborateComponent = () => {
  return <BusinessTabs />;
};
