import Link from "next/link";
import Image from "next/image";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { NextPage } from "next";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
  styled,
} from "@mui/material";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import "react-sheet-slide/style.css";
import * as React from "react";
import Box from "@mui/material/Box";
import { setInterval } from "timers";
import { PublicOutlined } from "@mui/icons-material";
import { Content, Footer, Header, Portal, Sheet } from "react-sheet-slide";
import CloseIcon from "@mui/icons-material/Close";

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
    name: "Drake",
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
    name: "Drake",
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
    name: "Drake",
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
    name: "Drake",
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
    name: "Drake",
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
    name: "Drake",
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
    name: "Drake",
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
    name: "Drake",
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
    name: "Drake",
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
    name: "Drake",
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
    name: "Drake",
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

const MarketMainComponent: NextPage = () => {
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
  const [randomArrow, setRandomArrow] = React.useState(
    "/assets/down-arrow-circle.svg"
  );

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

  const showArrow = (id) => {
    var doc = document.getElementById(id);
    doc.classList.remove("hidden");
    doc.classList.add("block");
  };
  const hideArrow = (id) => {
    var doc = document.getElementById(id);
    doc.classList.remove("block");
    doc.classList.add("hidden");
  };

  const WebViewTable = () => {
    return (
      <>
        <div className="hidden lg:block">
          <div className="background-shadow">
            <div className="flex justify-between p-4">
              <span># Rank</span>
              <span className="lg:ml-[60px]">Artist</span>
              <span className="flex space-x-1"></span>
              <span className="lg:ml-[-32px]">Change %</span>
              <span className="lg:ml-[-50px]"></span>
              <span>
                Stock Price &nbsp;
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
              <span>Trade</span>
              <span>
                <InfoOutlinedIcon></InfoOutlinedIcon>
              </span>
            </div>
          </div>
          <br />
          {arr.map((value, index) => {
            return (
              <div key={index} className="background-shadow my-2">
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
                  </span>
                  <span
                    className={`flex space-x-1 items-center text-[${value.randomColor}]`}
                  >
                    $ {value.stock}
                  </span>
                  <span className="flex space-x-1 items-center">
                    $ {value.value}
                  </span>
                  <span className="flex space-x-1 items-center">
                    {value.dividends}
                  </span>
                  <span className="mt-2">
                    <Link href="/artist">
                      <Button className="!bg-black" variant="contained">
                        Invest in Artist
                      </Button>
                    </Link>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  };

  const SelectedTabView: Function = (): JSX.Element[] => {
    return arr.map((value, index) => {
      return (
        <div key={index} className="background-shadow my-2">
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
        </div>
      );
    });
  };

  const TabComponent = () => {
    return (
      <>
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{ paddingBottom: "10px" }}
            className="sticky top-0 z-10 bg-white"
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <AntTab
                sx={{
                  fontWeight: "bold",
                  color: "#050F3F",
                  textTranform: "none",
                }}
                label="All"
                {...a11yProps(0)}
              />
              <AntTab
                sx={{
                  fontWeight: "bold",
                  color: "#050F3F",
                  textTranform: "none",
                }}
                label="Expression of Interest waitlist"
                {...a11yProps(1)}
              />
              <AntTab
                sx={{
                  fontWeight: "bold",
                  color: "#050F3F",
                  textTranform: "none",
                }}
                label="Unlisted"
                {...a11yProps(2)}
              />
              <AntTab
                sx={{
                  fontWeight: "bold",
                  color: "#050F3F",
                  textTranform: "none",
                }}
                label="Upcoming"
                {...a11yProps(3)}
              />

              <AntTab
                sx={{
                  fontWeight: "bold",
                  color: "#050F3F",
                  textTranform: "none",
                }}
                label="Professional"
                {...a11yProps(4)}
              />
              <AntTab
                sx={{
                  fontWeight: "bold",
                  color: "#050F3F",
                  textTranform: "none",
                }}
                label="Major Artists"
                {...a11yProps(5)}
              />
            </Tabs>
          </Box>
          <div className="p-2">
            <TabPanel value={value} index={0}>
              <SelectedTabView />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <SelectedTabView />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <SelectedTabView />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <SelectedTabView />
            </TabPanel>
            <TabPanel value={value} index={4}>
              <SelectedTabView />
            </TabPanel>
            <TabPanel value={value} index={5}>
              <SelectedTabView />
            </TabPanel>
          </div>
        </Box>
      </>
    );
  };

  const MobileView = () => {
    return (
      <div className="lg:hidden background-shadow h-[75vh] overflow-auto">
        <TabComponent />
      </div>
    );
  };
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef();
  const dismiss = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  };
  return (
    <>
      {open && (
        <div
          className="absolute w-full top-0 h-full bg-[#00000030] z-50"
          onClick={dismiss}
        ></div>
      )}
      <Portal>
        <Sheet
          ref={ref}
          open={open}
          onDismiss={dismiss}
          detents={() => [700, 500]}
          useDarkMode={false}
          useModal={false}
          scrollingExpands={true}
        >
          <Header>
            <div className="flex justify-between items-center w-full mt-2">
              <div className="font-[600] flex justify-center w-full ml-10">
                Select Region
              </div>
              <IconButton className="ml-auto" onClick={dismiss}>
                <CloseIcon></CloseIcon>
              </IconButton>
            </div>
          </Header>
          <Content>
            <div className="mt-20 px-4">
              <FormControl component="fieldset">
                <FormGroup aria-label="position">
                  <FormControlLabel
                    value="end"
                    control={<Checkbox />}
                    label="All - Continents"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="end"
                    control={<Checkbox />}
                    label="Africa / Middle East"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="end"
                    control={<Checkbox />}
                    label="America / Canada"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="end"
                    control={<Checkbox />}
                    label="Europe"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="end"
                    control={<Checkbox />}
                    label="Latin America"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="end"
                    control={<Checkbox />}
                    label="Asia"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="end"
                    control={<Checkbox />}
                    label="Australia / Oceania"
                    labelPlacement="end"
                  />
                </FormGroup>
              </FormControl>
            </div>
            <div className="m-4">
              <Button
                variant="contained"
                className="green-gradient w-full"
                onClick={dismiss}
              >
                View Artists
              </Button>
            </div>
          </Content>
        </Sheet>
      </Portal>
      <main className="p-2">
        <div className="flex justify-between items-center background-shadow rounded-full px-2 mt-3">
          <div className="flex items-center justify-between w-full lg:w-auto gap-2 mr-2">
            <SearchIcon />
            <input
              className="lg:w-96 w-full inputRounded m-0 p-2 outline-none border-none"
              placeholder="Search for music artist brands to invest"
            />
            <div
              className="border-[1px] rounded-full p-1 flex justify-center items-center border-gray-600 lg:hidden cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <PublicOutlined
                style={{ width: "20px", height: "20px" }}
                className="text-[#444444]"
              ></PublicOutlined>
            </div>
          </div>
          <Box className="hidden lg:flex items-center gap-3">
            <div
              className="border-[1px] rounded-full p-1 flex justify-center items-center border-gray-600 cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <PublicOutlined
                style={{ width: "20px", height: "20px" }}
                className="text-[#444444]"
              ></PublicOutlined>
            </div>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <AntTab
                sx={{
                  fontWeight: "bold",
                  color: "#050F3F",
                  textTranform: "none",
                }}
                disableRipple
                label="All"
                {...a11yProps(0)}
              />
              <AntTab
                sx={{
                  fontWeight: "bold",
                  color: "#050F3F",
                  textTranform: "none",
                }}
                disableRipple
                label="Expression of interest"
                {...a11yProps(1)}
              />
              <AntTab
                sx={{
                  fontWeight: "bold",
                  color: "#050F3F",
                  textTranform: "none",
                }}
                disableRipple
                label="Upcoming"
                {...a11yProps(2)}
              />
              <AntTab
                sx={{
                  fontWeight: "bold",
                  color: "#050F3F",
                  textTranform: "none",
                }}
                disableRipple
                label="Professional"
                {...a11yProps(3)}
              />
              <AntTab
                sx={{
                  fontWeight: "bold",
                  color: "#050F3F",
                  textTranform: "none",
                }}
                disableRipple
                label="Major Artists"
                {...a11yProps(4)}
              />
            </Tabs>
          </Box>
        </div>
        <br />
        <WebViewTable />
        <MobileView />
      </main>
    </>
  );
};

export default MarketMainComponent;
