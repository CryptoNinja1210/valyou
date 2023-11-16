import { NextPage } from "next";
import Image from "next/image";
import { Avatar, Button, Link } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import * as React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import CloseIcon from "@mui/icons-material/Close";
import ReactPlayer from "react-player";
import { useState } from "react";
import classNames from "classnames";
import { ArtistCard } from "../artist/artistCard";
import { ListenWarnPopup } from "../admin/stockPrice";
import { BidWidget, BranSponser } from "../brandSponser/brandSponser";

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

const SocialMediaComponent: React.FunctionComponent<{
  showSidebar: boolean;
}> = ({ showSidebar }) => {
  const [value, setValue] = React.useState(0);
  const [isValyouOpened, setIsVayouOpend] = React.useState(false);

  const toggleValyouOpend = () => {
    setIsVayouOpend((setIsVayouOpend) => !setIsVayouOpend);
  };

  var brandArray = [
    { color: "green-gradient" },
    { color: "bg-black" },
    { color: "bg-black" },
    { color: "green-gradient" },
    { color: "bg-black" },
    { color: "green-gradient" },
  ];

  const DisplayText = ({ arrowType, change, color }) => {
    return (
      <div className={`bg-[${color}] text-xs px-[9px] py-1 rounded`}>
        <p className="text-white"> + {change}</p>
      </div>
    );
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const SongValyouBox = () => {
    return (
      <>
        <div className="lg:flex hidden p-2 justify-between">
          <div className="flex">
            <div className="border green-gradient rounded-full w-[46px] h-[46px] mr-2">
              <span className="p-2 text-white flex mt-[2px] ml-[4px]">$1</span>
            </div>
            <div className="border rounded-full w-[46px] h-[46px] mr-2">
              <span className="p-2 flex mt-[2px] ml-[4px]">$2</span>
            </div>
            <div className="border rounded-full w-[46px] h-[46px] mr-2">
              <span className="p-2 flex mt-[2px] ml-[4px]">$3</span>
            </div>
            <div className="border rounded-full w-[46px] h-[46px] mr-2">
              <span className="p-2 flex mt-[2px] ml-[4px]">$4</span>
            </div>
            <div className="border rounded-full w-[46px] h-[46px] mr-2">
              <span className="p-2 flex mt-[2px] ml-[4px]">$5</span>
            </div>
          </div>
          <div className="flex mr-2">
            <Button variant="contained" className="green-gradient">
              Proceed
            </Button>
            &nbsp;&nbsp;
            <Button
              variant="contained"
              onClick={toggleValyouOpend}
              className="pinkGradient"
            >
              Cancel
            </Button>
          </div>
        </div>
      </>
    );
  };

  const TrendingArtists = () => {
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
        let randomValue =
          statusArr[Math.floor(Math.random() * statusArr.length)];
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

    const shuffledArr = () =>
      randomColor
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
    return (
      <>
        {arr.map((value, index) => {
          return (
            <div key={index} className="w-full">
              <div key={index} className="background-shadow m-2">
                <div className="flex justify-between p-4">
                  <div className="flex">
                    <p className="flex items-center">{index + 1}</p>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="flex space-x-2">
                      <Link href="/artist">
                        <Avatar
                          src="/assets/drakeDp.png"
                          className="!w-[60px] !h-[60px]"
                          alt="artist icon"
                        ></Avatar>
                      </Link>
                      &nbsp;&nbsp;
                      <div className="flex-col">
                        <p className="!text-[#050F3F] font-bold">
                          {value.name}
                        </p>
                        <p className={`text-bold text-[${value.randomColor}]`}>
                          $ {value.stock}
                        </p>
                        <p className="text-[#2B2C2D]">{value.rap}</p>
                      </div>
                    </span>
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
            </div>
          );
        })}
      </>
    );
  };

  const DisplayArrow = ({ arrowType, arrow }) => {
    return <Image src={arrow} width={15} height={15} />;
  };

  const ArtistScrollBar = () => {
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
        let randomValue =
          statusArr[Math.floor(Math.random() * statusArr.length)];
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

    const shuffledArr = () =>
      randomColor
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);

    return (
      <>
        <Link
          href="/artist"
          className="!no-underline !text-[#050f2f] hover:!text-[#050f2f]"
        >
          <div className="flex px-3">
            <div className="flex-col flex items-center justify-center">
              <div className="border h-[50px] w-[50px] rounded-full pl-[4px] pt-[3px]">
                <Link href="/artist">
                  <Avatar src="/assets/drakeDp.png" alt="artist Image"></Avatar>
                </Link>
              </div>
              <p className="text-center">Bad Bunny</p>
              <div className="flex w-[112px] text-xs">
                <span className="text-bold">$2,827.00</span>
                &nbsp;&nbsp;
                <Image
                  src="/assets/upper_icon.png"
                  width={25}
                  height={25}
                ></Image>
                &nbsp;&nbsp;
                <span className="text-[#1CEA2C]">8.74%</span>
              </div>
            </div>
          </div>
        </Link>
        {arr.map((value, index) => {
          return (
            <>
              <div key={index} className="flex px-3">
                <Link
                  href="/artist"
                  className="!no-underline !text-[#050f2f] hover:!text-[#050f2f]"
                >
                  <div className="flex-col flex items-center justify-center">
                    <div className="border h-[50px] w-[50px] rounded-full pl-[4px] pt-[3px]">
                      <Avatar
                        src="/assets/drakeDp.png"
                        alt="artist Image"
                      ></Avatar>
                    </div>
                    <p className="text-center">Bad Bunny</p>
                    <div className="flex w-[110px] text-xs">
                      <span className={`text-bold text-[${value.randomColor}]`}>
                        $2,827.00
                      </span>
                      &nbsp;&nbsp;
                      <DisplayArrow
                        key={index}
                        arrowType={value.arrowType}
                        arrow={value.arrow}
                      />
                      &nbsp;&nbsp;
                      <span className={`text-[${value.randomColor}]`}>
                        8.74%
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </>
          );
        })}
      </>
    );
  };

  const VideoPlayer = () => {
    const [showWarn, setShowWarn] = React.useState(false);
    const [showHiden, setShowHiden] = React.useState(true);
    const toggleHidden = () => {
      setShowWarn(!showWarn);
    };
    const toggleClose = () => {
      setShowWarn(!showWarn);
      setShowHiden(!showHiden);
    };

    return (
      <div>
        <div>
          <div
            className={showHiden ? "absolute" : "relative"}
            style={{ width: "100%", height: "100%" }}
          >
            <ReactPlayer
              className="bg-black"
              width="100%"
              height="100%"
              playsinline={true}
              controls={true}
              style={{ width: "100%" }}
              url="/assets/drake-started-from-the-bottom.mp4"
            />
          </div>
          {showHiden && (
            <div onClick={toggleHidden} className="opacity-0">
              <>
                <div className="hidden lg:block">
                  <Image
                    src="/assets/drake-starting-bottom.jpeg"
                    width="70%"
                    height="40%"
                    layout="responsive"
                  />
                </div>
                <div className="lg:hidden">
                  <Image
                    src="/assets/drake-starting-bottom.jpeg"
                    width={100}
                    height={60}
                    layout="responsive"
                  />
                </div>
              </>
            </div>
          )}
          {showWarn && (
            <ListenWarnPopup open={showWarn} handleClose={toggleClose} />
          )}
        </div>
        {isValyouOpened ? <SongValyouBox /> : <ArtistButtons />}
        {isValyouOpened ? <ArtistMobileValyouBox /> : <MobileArtistButtons />}
        <div className="lg:hidden background-shadow py-3 mt-2">
          <ArtistCard />
        </div>
      </div>
    );
  };

  const ArtistButtons = () => {
    const setCommentsOpenOnDesktop = () => {
      localStorage.setItem("openOnDesktop", "comments");
      localStorage.removeItem("open");
    };

    const setPromoteOpenOnDesktop = () => {
      localStorage.setItem("openOnDesktop", "promote");
      localStorage.removeItem("open");
    };
    return (
      <div className="lg:flex items-center hidden justify-between py-2  hover:cursor-pointer">
        <div className="flex gap-2">
          <Link href="/videodetail" className="!no-underline ">
            <Button
              variant="outlined"
              className="gradient-border h-10 flex items-center gap-2"
              onClick={setCommentsOpenOnDesktop}
            >
              <Image
                src="/assets/comment_box.svg"
                width={30}
                height={30}
              ></Image>
              <span className="text-[#050f2f] font-bold">Comments</span>
            </Button>
          </Link>
          <Link href="/videodetail" className="!no-underline">
            <Button
              variant="outlined"
              className="gradient-border h-10 flex items-center gap-2"
              onClick={setPromoteOpenOnDesktop}
            >
              <div className="mt-[-1px]">
                <Image
                  src="/assets/promote_box.svg"
                  width={30}
                  height={20}
                ></Image>
              </div>
              <span className="text-[#050f2f] font-bold">Promote</span>
            </Button>
          </Link>
        </div>
        <Link href="/videodetail" className="!no-underline">
          <div className="flex flex-end">
            <Button
              variant="outlined"
              className="gradient-border h-10"
              onClick={() => localStorage.setItem("open", "song")}
            >
              <span className="text-[#050f2f] font-bold">Valyou Song</span>
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button variant="contained" className="green-gradient h-10">
              <span className="text-white font-bold">Invest in Artist</span>
            </Button>
          </div>
        </Link>
      </div>
    );
  };

  const MobileArtistButtons = () => {
    return (
      <div className="lg:hidden background-shadow shadow-xl">
        <div className="flex justify-around items-center py-2">
          <div onClick={() => localStorage.setItem("open", "comments")}>
            <Link href="/videodetail" className="!no-underline !text-[#050f2f]">
              <div className="flex items-center justify-center">
                <div className="pt-2">
                  <Image
                    src="/assets/comment_box.svg"
                    width={30}
                    height={20}
                  ></Image>
                </div>
                <span className="text-xs ml-1">Comments</span>
              </div>
            </Link>
          </div>
          <div onClick={() => localStorage.setItem("open", "promote")}>
            <Link href="/videodetail" className="!no-underline !text-[#050f2f]">
              <div className="flex justify-center items-center">
                <div>
                  <Image
                    src="/assets/promote_box.svg"
                    width={30}
                    height={20}
                  ></Image>
                </div>
                <span className="text-xs ml-1">Promote</span>
              </div>
            </Link>
          </div>
          <div onClick={() => localStorage.setItem("open", "song")}>
            <Link href="/videodetail" className="!no-underline !text-[#050f2f]">
              <Button variant="outlined" className="gradient-border">
                <span className="text-[#050f2f] text-xs font-bold">
                  Valyou Song
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const ArtistMobileValyouBox = () => {
    const [valueArray, setValueArray] = useState([
      { text: "$1", status: true },
      { text: "$2", status: false },
      { text: "$3", status: false },
      { text: "$4", status: false },
      { text: "$5", status: false },
    ]);

    var songValueArray = [
      { text: "$1", status: true },
      { text: "$2", status: false },
      { text: "$3", status: false },
      { text: "$4", status: false },
      { text: "$5", status: false },
    ];
    function changeColor(index) {
      const updated = shuffledArr();
      songValueArray.map((item, index) => ({
        ...item,
        status: (updated[index].status = false),
      }));
      valueArray[index].status = true;
      setValueArray([...valueArray]);
    }
    React.useEffect(() => {
      const updated = shuffledArr();
      const updatedArr = songValueArray.map((item, index) => ({
        ...item,
        status: updated[index].status,
      }));
      setValueArray([...updatedArr]);
    }, []);
    const shuffledArr = () =>
      valueArray
        .map((value) => ({ value, status: value.status }))
        .map(({ value }) => value);
    return (
      <div className="lg:hidden block">
        <div className="p-5">
          <div className="flex justify-between p-4">
            <div></div>
            <div>
              <p>Valyou Song</p>
            </div>
            <div onClick={toggleValyouOpend}>
              <CloseIcon></CloseIcon>
            </div>
          </div>
          <br />
          <div className="border rounded color-gray-400 p-4">
            <p className="text-center">
              Your Contribution : <span className="text-pink-700">$311.00</span>
            </p>
          </div>
          <br />
          <div className="flex justify-center">
            {valueArray.map((value, key) => {
              return (
                <div
                  key={key}
                  onClick={() => changeColor(key)}
                  className={classNames("rounded-full w-[46px] h-[46px] mr-2", {
                    "pink-gradient-border": value.status == true,
                  })}
                >
                  <span className="p-2 flex mt-[2px] ml-[4px]">
                    {value.text}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="flex justify-between p-4">
            <Button
              variant="contained"
              onClick={toggleValyouOpend}
              className="green-gradient"
            >
              Proceed
            </Button>
            <Button
              variant="contained"
              onClick={toggleValyouOpend}
              className="pinkGradient"
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    );
  };

  const ArtistUpload = () => {
    return (
      <>
        <div className="p-2 background-shadow border-2">
          <div className="flex">
            <div className="flex items-start">
              <Image src="/assets/drakeDp.png" width={45} height={45}></Image>
            </div>
            &nbsp;&nbsp;&nbsp;
            <TextareaAutosize
              maxRows={6}
              minRows={3}
              aria-label="maximum height"
              placeholder="Share your Audio and Video Tracks"
              style={{ width: "100%", marginTop: "8px", padding: "3px" }}
            />
          </div>
          <br />
          <div className="flex items-center justify-between w-[100%]">
            <div className="flex items-center gap-5 text-gray-400 w-[50%]">
              <Link href="/upload">
                <Image src="/assets/eye.svg" width={30} height={30}></Image>
              </Link>
              <p className="hidden md:block mt-[-8px]">Upload Video</p>
              <Link href="/upload">
                <Image
                  src="/assets/listen_earn.svg"
                  width={30}
                  height={30}
                ></Image>
              </Link>
              <p className="hidden md:block mt-[-8px]">Upload Audio</p>
            </div>
            <Button variant="contained" className="pinkGradient postNow w-60">
              Post Now
            </Button>
          </div>
        </div>
      </>
    );
  };

  const SideBar = () => {
    return (
      <div>
        <div className="flex justify-between py-10 px-2">
          <p className="font-bold">
            Trending Music Artists Brands in Stock Market
          </p>
          <div className="text-[#4AD920] flex gap-2 cursor-pointer">
            <p className="underline">Up</p>
            <div className="mt-[-2px]">
              <Image src="/assets/greeen-arrow.svg" width={25} height={25} />
            </div>
          </div>
          <div className="text-[#4AD920] flex gap-2 cursor-pointer">
            <p className="underline">Down</p>
            <span className="mt-[-2px]">
              <Image
                src="/assets/down-arrow-circle.svg"
                width={30}
                height={25}
              />
            </span>
          </div>
        </div>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            disableRipple
            sx={{ color: "#050F3F" }}
            className="animate-none text-sm font-medium px-8"
            label="All"
            {...a11yProps(0)}
          />
          <Tab
            disableRipple
            sx={{ color: "#050F3F" }}
            className=" animate-none text-sm font-medium px-8"
            label="United States"
            {...a11yProps(1)}
          />
          <Tab
            disableRipple
            sx={{ color: "#050F3F" }}
            className="animate-none text-sm font-medium px-8"
            label="Canada"
            {...a11yProps(2)}
          />
          <Tab
            disableRipple
            sx={{ color: "#050F3F" }}
            className=" animate-none text-sm font-medium px-8"
            label="Barbados"
            {...a11yProps(3)}
          />
        </Tabs>
        <br />
        <TabPanel className="h-[78vh] overflow-y-auto" value={value} index={0}>
          <TrendingArtists />
        </TabPanel>
        <TabPanel className="h-[78vh] overflow-y-auto" value={value} index={1}>
          <TrendingArtists />
        </TabPanel>
        <TabPanel className="h-[78vh] overflow-y-auto" value={value} index={2}>
          <TrendingArtists />
        </TabPanel>
        <TabPanel className="h-[78vh] overflow-y-auto" value={value} index={3}>
          <TrendingArtists />
        </TabPanel>
      </div>
    );
  };

  return (
    <>
      {showSidebar && (
        <ScrollContainer className="flex lg:hidden cursor-grab my-2">
          <ArtistScrollBar />
        </ScrollContainer>
      )}
      <div className="flex">
        <div className="lg:w-[60vw] w-full p-2">
          <ArtistUpload />
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
            <div key={index} className="p-2 my-6 background-shadow border-2">
              <div className="background-shadow mb-1 p-4 py-6 flex justify-between">
                <div className="flex items-center gap-3">
                  <Link href="/artist">
                    <Avatar
                      src="/assets/drakeDp.png"
                      sx={{ width: 60, height: 60 }}
                      alt="artist icon"
                    ></Avatar>
                  </Link>
                  <div className="flex-col">
                    <p className="md:text-2xl font-bold">Drake</p>
                    <div className="flex items-center gap-1 text-sm">
                      <span className="text-gray-300">Rapper</span>
                      <span>shared video track</span>
                      <div className="mt-[5px]">
                        <Image
                          src="/assets/bunnyPlayer.svg"
                          width={12}
                          height={12}
                        ></Image>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-xs">Major Artist</div>
              </div>
              <div className="my-2">
                <VideoPlayer />
              </div>
              <div className="hidden lg:block background-shadow py-3">
                <ArtistCard />
              </div>
              <div className="background-shadow p-2 mt-4">
                <BranSponser />
                <ScrollContainer className="cursor-grab">
                  <div className="flex mx-[-15px] w-full">
                    {brandArray.map((value, index) => {
                      return <BidWidget key={index} color={value.color} />;
                    })}
                  </div>
                </ScrollContainer>
              </div>
            </div>
          ))}
        </div>
        {showSidebar && (
          <div className="hidden lg:block h-[100vh] w-[40vw] m-2 background-shadow !sticky top-0">
            <SideBar />
          </div>
        )}
      </div>
    </>
  );
};

export default SocialMediaComponent;
