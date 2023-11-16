import { SideBar } from "./sideNav";
import { Box, Typography, Tabs, Tab } from "@mui/material";
import React from "react";
import Image from "next/image";
import { Avatar, Button, Link } from "@mui/material";
import Card from "@mui/material/Card";
import { BranSponser, BidWidget } from "../brandSponser/brandSponser";
import ScrollContainer from "react-indiana-drag-scroll";
import { ArtistCard } from "../artist/artistCard";
import { PromotedVideosCard } from "./promotedVideosCard";
import { PromotedAudiosCard } from "./promotedAudiosCard";
import PromtoedAudioImage from "./PromtoedAudioImage";
import PromtoedVideoImage from "./PromotedVideoImage";

var brandArray = [
  { color: "green-gradient" },
  { color: "bg-black" },
  { color: "green-gradient" },
  { color: "bg-black" },
  { color: "green-gradient" },
  { color: "bg-black" },
  { color: "green-gradient" },
  { color: "bg-black" },
  { color: "green-gradient" },
  { color: "bg-black" },
  { color: "green-gradient" },
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

const setCommentsOpenOnDesktop = () => {
  localStorage.setItem("openOnDesktop", "comments");
  localStorage.removeItem("open");
};

const setPromoteOpenOnDesktop = () => {
  localStorage.setItem("openOnDesktop", "promote");
  localStorage.removeItem("open");
};

const ArtistButtons = () => {
  return (
    <div className="lg:flex items-center hidden justify-between py-2  hover:cursor-pointer">
      <div className="flex gap-2">
        <Link href="/videodetail" className="!no-underline ">
          <Button
            variant="outlined"
            className="gradient-border h-10 flex items-center gap-2"
            onClick={setCommentsOpenOnDesktop}
          >
            <Image src="/assets/comment_box.svg" width={30} height={30}></Image>
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
    <Card className="lg:hidden">
      <div className="flex justify-between items-center p-2 px-4">
        <div onClick={() => localStorage.setItem("open", "comments")}>
          <Link
            href="/videodetail"
            className="flex items-center justify-center gap-2 !no-underline !text-[#050f2f]"
          >
            <>
              <div className="pt-2">
                <Image
                  src="/assets/comment_box.svg"
                  width={30}
                  height={20}
                ></Image>
              </div>
              <span className="text-xs">Comments</span>
            </>
          </Link>
        </div>
        <div onClick={() => localStorage.setItem("open", "promote")}>
          <Link
            href="/videodetail"
            className="flex items-center justify-center gap-2 !no-underline !text-[#050f2f]"
          >
            <>
              <div>
                <Image
                  src="/assets/promote_box.svg"
                  width={30}
                  height={20}
                ></Image>
              </div>
              <span className="text-xs">Promote</span>
            </>
          </Link>
        </div>
        <div onClick={() => localStorage.setItem("open", "song")}>
          <Link
            href="/videodetail"
            className="flex items-center justify-center gap-2 !no-underline !text-[#050f2f]"
          >
            <>
              <Button variant="outlined" className="gradient-border">
                <span className="text-[#050f2f] text-xs font-bold">
                  Valyou Song
                </span>
              </Button>
            </>
          </Link>
        </div>
      </div>
    </Card>
  );
};

const AristCard = () => {
  return (
    <div className="lg:border rounded lg:p-4 lg:shadow-lg lg:shadow-gray-300">
      <div className="py-3 ">
        <div className="flex items-center">
          <Link href="/artist">
            <Avatar src="/assets/drakeDp.png" alt="artist icon"></Avatar>
          </Link>
          &nbsp;
          <div className="flex flex-col px-2 lg:w-[90%] overflow-y-hidden py-1 ml-[4px]">
            <ScrollContainer
              vertical={false}
              className="cursor-grab !overflow-y-hidden"
            >
              <div className="flex relative top-[5px] whitespace-nowrap text-[#FF0093] font-bold text-[10.5px]">
                <Link className="!no-underline" href="/artist">
                  <p className="text-[#050F3F] !no-underline">Drake -</p>
                </Link>
                &nbsp;
                <div className="font-normal mt-[1px] flex items-center relative top-[-6px] border rounded-[50px] p-1  border-[rgba(255, 255, 255, 1)]">
                  <span>
                    {" "}
                    &nbsp; Stock Price{" "}
                    <span className="font-bold"> $78.44 VXD &nbsp;</span>
                  </span>
                  &nbsp;
                  <Avatar
                    src="/assets/down-arrow-circle.svg"
                    className="!h-4 !w-4"
                  ></Avatar>
                  &nbsp; &nbsp;
                  <span className="text-[10.5px] text-[#FF0093] ">
                    {" "}
                    - 10.77%{" "}
                  </span>{" "}
                  &nbsp;
                </div>
                &nbsp;&nbsp;&nbsp;
                <div className="px-4 flex items-center relative top-[-6px]">
                  <img src="/assets/song-title.png" className="w-5 h-5" />
                  &nbsp;
                  <div className="flex p-2 text-[10.5px] ">
                    <p className="text-gray-400">
                      Song Title:{" "}
                      <span className="font-bold">Started From The Bottom</span>
                    </p>
                    &nbsp;&nbsp;
                    <span className="text-gray-300 text-[10.5px]">
                      {" "}
                      Song Valyou :
                      <span className="font-bold  text-[#050f2f]">
                        {" "}
                        $1,000,000,24,567
                      </span>
                    </span>
                    &nbsp;&nbsp;
                    <span className="text-gray-300 text-[10.5px]">
                      {" "}
                      Music Artist Brand Listing Category : &nbsp;
                      <span className="font-bold  text-[#050f2f]">
                        {" "}
                        Upcoming Artist / Rapper{" "}
                      </span>
                    </span>
                  </div>
                </div>
                &nbsp;&nbsp;&nbsp;
              </div>
            </ScrollContainer>
          </div>
        </div>
      </div>
      <div className=" lg:hidden">
        <Link href="/artist" className="!no-underline">
          <Button
            variant="contained"
            className="!no-underline green-gradient w-full"
          >
            <span className="text-white font-bold !no-underline	">
              Invest in Artist
            </span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

const ResponisveImage = () => {
  return (
    <>
      <div onClick={() => localStorage.removeItem("open")}>
        <Link href="/videodetail">
          <Image
            src="/assets/drake-starting-bottom.jpeg"
            width={100}
            height={60}
            layout="responsive"
          />
        </Link>
      </div>
      <ArtistButtons />
      <MobileArtistButtons />
      <div className="bg-white px-2 lg:hidden shadow">
        <ArtistCard />
      </div>
    </>
  );
};

const UserCard = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="px-2 background-shadow m-2">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            className="font-bold text-[#050F3F]"
            label="PAY PER VIEW"
            {...a11yProps(0)}
          />
          <Tab
            className="font-bold text-[#050F3F]"
            label="WATCH & EARN"
            {...a11yProps(1)}
          />
          <Tab
            className="font-bold text-[#050F3F]"
            label="VALYOU PLAYLIST"
            {...a11yProps(2)}
          />
          {localStorage.getItem("userProfile") === "Artist" && (
            <Tab
              className="font-bold text-[#050F3F]"
              label="PROMOTED VIDEOS"
              {...a11yProps(3)}
            />
          )}
          {localStorage.getItem("userProfile") === "Artist" && (
            <Tab
              className="font-bold text-[#050F3F]"
              label="PROMOTED AUDIOS"
              {...a11yProps(4)}
            />
          )}
        </Tabs>
      </div>
      <TabPanel value={value} index={0}>
        <div className="lg:flex w-full block">
          <div className="lg:w-[70%] w-full md:!relative z-10 top-0 !sticky lg:background-shadow lg:p-2 lg:border-2 bg-white">
            <ResponisveImage />
          </div>
          <div className="px-2 lg:hidden m-2 md:mx-[-8px]">
            <Link href="/artist" className="!no-underline">
              <Button
                variant="contained"
                className="!no-underline green-gradient w-full"
              >
                <span className="text-white font-bold !no-underline	">
                  Invest in Artist
                </span>
              </Button>
            </Link>
          </div>
          <div className="p-2 lg:hidden m-4 background-shadow md:mx-0">
            <BranSponser />
            <ScrollContainer className="cursor-grab">
              <div className="flex mx-[-15px] w-full">
                {brandArray.map((value, index) => {
                  return <BidWidget key={index} color={value.color} />;
                })}
              </div>
            </ScrollContainer>
          </div>
          <div className="m-2 md:mx-[-8px] lg:m-0">
            <SideBar />
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="lg:flex w-full block">
          <div className="lg:w-[70%] w-full md:!relative  z-10 top-0 !sticky lg:background-shadow lg:p-2 lg:border-2">
            <ResponisveImage />
          </div>
          <div className="px-2 lg:hidden m-2 md:mx-[-8px]">
            <Link href="/artist" className="!no-underline">
              <Button
                variant="contained"
                className="!no-underline green-gradient w-full"
              >
                <span className="text-white font-bold !no-underline	">
                  Invest in Artist
                </span>
              </Button>
            </Link>
          </div>
          <div className="p-2 lg:hidden m-4 background-shadow md:mx-0">
            <BranSponser />
            <ScrollContainer className="cursor-grab">
              <div className="flex mx-[-15px] w-full">
                {brandArray.map((value, index) => {
                  return <BidWidget key={index} color={value.color} />;
                })}
              </div>
            </ScrollContainer>
          </div>
          <div className="m-2 md:mx-[-8px] lg:m-0">
            <SideBar />
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="lg:flex w-full block">
          <div className="lg:w-[70%] w-full md:!relative  z-10 top-0 !sticky  lg:background-shadow lg:p-2 lg:border-2">
            <ResponisveImage />
          </div>
          <div className="px-2 lg:hidden m-2 md:mx-[-8px]">
            <Link href="/artist" className="!no-underline">
              <Button
                variant="contained"
                className="!no-underline green-gradient w-full"
              >
                <span className="text-white font-bold !no-underline	">
                  Invest in Artist
                </span>
              </Button>
            </Link>
          </div>
          <div className="p-2 lg:hidden m-4 background-shadow md:mx-0">
            <BranSponser />
            <ScrollContainer className="cursor-grab">
              <div className="flex mx-[-15px] w-full">
                {brandArray.map((value, index) => {
                  return <BidWidget key={index} color={value.color} />;
                })}
              </div>
            </ScrollContainer>
          </div>
          <div className="m-2 md:mx-[-8px] lg:m-0">
            <SideBar />
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className="lg:flex w-full block">
          <div className="lg:w-[70%] w-full md:!relative  z-10 top-0 !sticky lg:background-shadow lg:p-2 lg:border-2">
            <PromtoedVideoImage />
          </div>
          <div className="px-2 lg:hidden m-2 md:mx-[-8px]">
            <Link href="/artist" className="!no-underline">
              <Button
                variant="contained"
                className="!no-underline green-gradient w-full"
              >
                <span className="text-white font-bold !no-underline	">
                  Invest in Artist
                </span>
              </Button>
            </Link>
          </div>
          <div className="p-2 lg:hidden m-4 background-shadow md:mx-0">
            <BranSponser />
            <ScrollContainer className="cursor-grab">
              <div className="flex mx-[-15px] w-full">
                {brandArray.map((value, index) => {
                  return <BidWidget key={index} color={value.color} />;
                })}
              </div>
            </ScrollContainer>
          </div>
          <div className="m-2 md:mx-[-8px] lg:m-0">
            <PromotedVideosCard />
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <div className="lg:flex w-full block">
          <div className="lg:w-[70%] w-full md:!relative  z-10 top-0 !sticky lg:background-shadow lg:p-2 lg:border-2">
            <PromtoedAudioImage />
          </div>
          <div className="px-2 lg:hidden m-2 md:mx-[-8px]">
            <Link href="/artist" className="!no-underline">
              <Button
                variant="contained"
                className="!no-underline green-gradient w-full"
              >
                <span className="text-white font-bold !no-underline	">
                  Invest in Artist
                </span>
              </Button>
            </Link>
          </div>
          <div className="p-2 lg:hidden m-4 background-shadow md:mx-0">
            <BranSponser />
            <ScrollContainer className="cursor-grab">
              <div className="flex mx-[-15px] w-full">
                {brandArray.map((value, index) => {
                  return <BidWidget key={index} color={value.color} />;
                })}
              </div>
            </ScrollContainer>
          </div>
          <div className="m-2 md:mx-[-8px] lg:m-0">
            <PromotedAudiosCard />
          </div>
        </div>
      </TabPanel>
    </>
  );
};

export const WatchComponent = () => {
  return (
    <div className="w-full">
      <UserCard />
      <div className="hidden lg:block lg:background-shadow lg:p-2 mx-2 mt-4 mb-6">
        <ArtistCard />
      </div>
      <div className="hidden lg:block m-2 background-shadow p-2">
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
  );
};
