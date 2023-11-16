import Link from "next/link";
import Image from "next/image";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { NextPage } from "next";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Button, InputAdornment, styled } from "@mui/material";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";

import * as React from "react";

import Box from "@mui/material/Box";
import { setInterval } from "timers";

const AntTab = styled((props: any) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
  })
);

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
      {/* {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )} */}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

var initialArr = [
  {
    name: "Beyonce",
    rap: "rapper",
    arrow: "/assets/greeen-arrow.svg",
    change: "249.9020%",
    stock: "1.4100",
    arrowType: "up",
    value: "141,000,000",
    dividends: "0.0100%",
    status: 2,
    randomColor: "#FF0093",
  },
  {
    name: "Beyonce",
    rap: "rapper",
    arrow: "/assets/greeen-arrow.svg",
    change: "249.9020%",
    stock: "1.4100",
    arrowType: "up",

    value: "141,000,000",
    dividends: "0.0100%",
    status: 2,
    randomColor: "#FF0093",
  },
  {
    name: "Beyonce",
    rap: "rapper",
    arrow: "/assets/down-arrow-circle.svg",
    change: "249.9020%",
    stock: "1.4100",
    arrowType: "down",

    value: "141,000,000",
    dividends: "0.0100%",
    status: 2,
    randomColor: "#FF0093",
  },
  {
    name: "Beyonce",
    rap: "rapper",
    arrow: "/assets/down-arrow-circle.svg",
    change: "249.9020%",
    stock: "1.4100",
    arrowType: "down",
    value: "141,000,000",
    dividends: "0.0100%",
    status: 2,
    randomColor: "#FF0093",
  },
  {
    name: "Beyonce",
    rap: "rapper",
    arrow: "/assets/greeen-arrow.svg",
    change: "249.9020%",
    stock: "1.4100",
    arrowType: "up",
    value: "141,000,000",
    dividends: "0.0100%",
    status: 2,
    randomColor: "#FF0093",
  },
  {
    name: "Beyonce",
    rap: "rapper",
    arrow: "/assets/down-arrow-circle.svg",
    change: "249.9020%",
    stock: "1.4100",
    arrowType: "down",
    value: "141,000,000",
    dividends: "0.0100%",
    status: 2,
    randomColor: "#FF0093",
  },
  {
    name: "Beyonce",
    rap: "rapper",
    arrow: "/assets/greeen-arrow.svg",
    change: "249.9020%",
    stock: "1.4100",
    arrowType: "up",
    value: "141,000,000",
    dividends: "0.0100%",
    status: 2,
    randomColor: "#FF0093",
  },
  {
    name: "Beyonce",
    rap: "rapper",
    arrow: "/assets/down-arrow-circle.svg",
    change: "249.9020%",
    stock: "1.4100",
    arrowType: "down",
    value: "141,000,000",
    dividends: "0.0100%",
    status: 2,
    randomColor: "#FF0093",
  },
  {
    name: "Beyonce",
    rap: "rapper",
    arrow: "/assets/greeen-arrow.svg",
    change: "249.9020%",
    stock: "1.4100",
    arrowType: "up",
    value: "141,000,000",
    dividends: "0.0100%",
    status: 2,
    randomColor: "#FF0093",
  },
  {
    name: "Beyonce",
    rap: "rapper",
    arrow: "/assets/down-arrow-circle.svg",
    change: "249.9020%",
    stock: "1.4100",
    arrowType: "down",
    value: "141,000,000",
    dividends: "0.0100%",
    status: 2,
    randomColor: "#FF0093",
  },
  {
    name: "Beyonce",
    rap: "rapper",
    arrow: "/assets/greeen-arrow.svg",
    change: "249.9020%",
    stock: "1.4100",
    arrowType: "up",
    value: "141,000,000",
    dividends: "0.0100%",
    status: 2,
    randomColor: "#FF0093",
  },
];

const Trade: NextPage = () => {
  const [value, setValue] = React.useState(0);
  const [randomColor, setRandomColor] = React.useState([
    { color: "#FF0093", arrow: "/assets/down-arrow-circle.svg" },
    { color: "#FF0093", arrow: "/assets/down-arrow-circle.svg" },
    { color: "#FF0093", arrow: "/assets/down-arrow-circle.svg" },
    { color: "#FF0093", arrow: "/assets/down-arrow-circle.svg" },
    { color: "#FF0093", arrow: "/assets/down-arrow-circle.svg" },
    { color: "#1CEA2C", arrow: "/assets/greeen-arrow.svg" },
    { color: "#1CEA2C", arrow: "/assets/greeen-arrow.svg" },
    { color: "#1CEA2C", arrow: "/assets/greeen-arrow.svg" },
    { color: "#1CEA2C", arrow: "/assets/greeen-arrow.svg" },
    { color: "#1CEA2C", arrow: "/assets/greeen-arrow.svg" },
    { color: "#1CEA2C", arrow: "/assets/greeen-arrow.svg" },
  ]);
  const [randomStatus, setRandomStatus] = React.useState(1);
  const [arr, setArr] = React.useState([...initialArr]);

  const IntervalFunc = () => {
    const statusArr = [1, 2];
    setInterval(() => {
      let randomValue = statusArr[Math.floor(Math.random() * statusArr.length)];
      setRandomStatus(randomValue);
    }, 6000);
  };
  React.useEffect(() => {
    IntervalFunc();
  }, []);

  React.useEffect(() => {
    const updated = shuffledArr();
    const updatedArr = arr.map((item, index) => ({
      ...item,
      randomColor: updated[index].color,
      arrow: updated[index].arrow,
    }));
    setArr([...updatedArr]);
  }, [randomStatus]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const shuffledArr = () =>
    randomColor
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

  const DisplayArrow = ({ arrowType, arrow }) => {
    return <Image src={arrow} width={25} height={20} />;
  };

  const DisplayText = ({ arrowType, change, color }) => {
    return (
      <div className={`bg-[${color}] text-sm px-[9px] py-1 rounded`}>
        <p className="text-white"> + {change}</p>
      </div>
    );
  };

  const WebViewTable = () => {
    return (
      <>
        <div className="hidden lg:block">
          <Card
            sx={{ boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)" }}
            variant="outlined"
          >
            <div className="flex justify-between p-4">
              <span> #Rank</span>
              <span className="lg:ml-[70px]">Artist</span>
              <span className="flex space-x-1"></span>
              <span className="lg:ml-[-32px]">Change%</span>
              <span className="lg:ml-[-50px]"></span>
              <span>
                Stock &nbsp;
                <UnfoldMoreIcon></UnfoldMoreIcon>
              </span>
              <span>
                Market Value&nbsp;
                <UnfoldMoreIcon></UnfoldMoreIcon>
              </span>
              <span>
                Dividends&nbsp;
                <UnfoldMoreIcon></UnfoldMoreIcon>
              </span>
              <span className="flex gap-5">
                <span>Trade</span>
                <span>
                  <InfoOutlinedIcon></InfoOutlinedIcon>
                </span>
              </span>
            </div>
          </Card>
          <br />
          {arr.map((value, index) => {
            return (
              <Card
                key={index}
                sx={{
                  marginBottom: "10px",
                  boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
                }}
                variant="outlined"
              >
                <div className="flex justify-between p-4">
                  <span className="flex space-x-1 items-center">
                    {index + 1}
                  </span>
                  <span className="flex items-center space-x-2">
                    <Link href="/artist">
                      <Image
                        src="/assets/drakeDp.png"
                        width={50}
                        height={50}
                        alt="artist icon"
                      ></Image>
                    </Link>
                    &nbsp;&nbsp;
                    <div className="flex-col cursor-pointer">
                      <Link href="/artist">
                        <p>{value.name}</p>
                      </Link>
                      <p>{value.rap}</p>
                    </div>
                  </span>
                  <span className="flex space-x-1 items-center">
                    <>
                      <DisplayArrow
                        key={index}
                        arrowType={value.arrowType}
                        arrow={value.arrow}
                      />
                      <DisplayText
                        key={index + 1}
                        arrowType={value.arrowType}
                        color={value.randomColor}
                        change={value.change}
                      />
                    </>

                    {/* <div className="bg-[#1CEA2C] px-[9px] rounded text-white">
                      <p> + {value.change}</p>
                    </div> */}
                  </span>

                  <span
                    className={`flex font-bold space-x-1 items-center text-[${value.randomColor}]`}
                  >
                    {" "}
                    $ {value.stock}
                  </span>

                  <span className="flex space-x-1 items-center">
                    $ {value.value}
                  </span>
                  <span className="flex space-x-1 items-center">
                    {value.dividends}
                  </span>
                  <span className="mt-2">
                    <Button className="!bg-black" variant="contained">
                      TRADE
                    </Button>
                  </span>
                </div>
              </Card>
            );
          })}
        </div>
      </>
    );
  };

  const SelectedTabView: Function = (): JSX.Element[] => {
    return arr.map((value, index) => {
      return (
        <Card
          key={index}
          sx={{
            marginBottom: "10px",
            marginTop: "8px",
            boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "10px",
          }}
          variant="outlined"
        >
          <div className="flex justify-between p-4">
            <div className="flex">
              <Link href="/artist">
                <span className="flex space-x-2">
                  <div className="mt-2">
                    <Avatar
                      src="/assets/drakeDp.png"
                      className="!w-[50px] !h-[50px]"
                      alt="artist icon"
                    ></Avatar>
                  </div>
                  <div className="flex-col">
                    <p className="text-[#050F3F] text-sm font-bold">
                      {index + 1}.&nbsp;<span> {value.name}</span>{" "}
                    </p>

                    <p className={`font-bold text-[${value.randomColor}]`}>
                      &nbsp;&nbsp;&nbsp;&nbsp;${value.stock}
                    </p>

                    <p className="text-[#2B2C2D] text-sm">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{value.rap}
                    </p>
                  </div>
                </span>
              </Link>
            </div>

            <span className="flex space-x-1 items-center">
              <>
                <DisplayArrow
                  key={index}
                  arrowType={value.arrowType}
                  arrow={value.arrow}
                />
                <DisplayText
                  key={index + 2}
                  color={value.randomColor}
                  arrowType={value.arrowType}
                  change={value.change}
                />
              </>
            </span>
          </div>
        </Card>
      );
    });
  };

  const TabComponent = () => {
    return (
      <>
        <Box sx={{ width: "100%" }}>
          <Box>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <AntTab disableRipple label="All" {...a11yProps(0)} />
              <AntTab
                disableRipple
                label="Expression of Interest"
                {...a11yProps(1)}
              />
              <AntTab disableRipple label="Upcoming" {...a11yProps(2)} />

              <AntTab disableRipple label="Professional" {...a11yProps(3)} />
              <AntTab disableRipple label="Major Artists" {...a11yProps(4)} />
            </Tabs>
          </Box>
          <TabPanel
            className="h-[78vh] overflow-x-auto"
            value={value}
            index={0}
          >
            <SelectedTabView />
          </TabPanel>
          <TabPanel
            className="h-[78vh] overflow-x-auto"
            value={value}
            index={1}
          >
            <SelectedTabView />
          </TabPanel>
          <TabPanel
            className="h-[78vh] overflow-x-auto"
            value={value}
            index={2}
          >
            <SelectedTabView />
          </TabPanel>
          <TabPanel
            className="h-[78vh] overflow-x-auto"
            value={value}
            index={3}
          >
            <SelectedTabView />
          </TabPanel>
          <TabPanel
            className="h-[78vh] overflow-x-auto"
            value={value}
            index={4}
          >
            <SelectedTabView />
          </TabPanel>
        </Box>
      </>
    );
  };

  const MobileView = () => {
    return (
      <>
        <div className="lg:hidden">
          <TabComponent />
        </div>
      </>
    );
  };

  return (
    <main className="py-2">
      <div className="flex justify-between flex-wrap lg:ml-[-10px]">
        <TextField
          size="small"
          className="lg:w-96 w-full inputRounded m-0 p-0"
          placeholder="Search for music artist brands"
          sx={{ m: 1 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Box className="hidden lg:block">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <AntTab disableRipple label="All" {...a11yProps(0)} />
            <AntTab
              disableRipple
              label="Expression of interest"
              {...a11yProps(1)}
            />
            <AntTab disableRipple label="Upcoming" {...a11yProps(2)} />
            <AntTab disableRipple label="Professional" {...a11yProps(3)} />
            <AntTab disableRipple label="Major Artists" {...a11yProps(4)} />
          </Tabs>
        </Box>
      </div>
      <br />
      <WebViewTable />
      <MobileView />
    </main>
  );
};

export default Trade;
