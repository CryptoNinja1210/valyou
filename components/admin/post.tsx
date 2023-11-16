import { Card, Avatar, Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import ScrollContainer from "react-indiana-drag-scroll";
import ReactPlayer from "react-player";
import { ListenWarnPopup } from "./stockPrice";
import React, { useState } from "react";

const AristCard = () => {
  return (
    <div>
      <div>
        <div className="flex items-center p-2">
          <Link href="/artist">
            <img
              src="/assets/drakeDp.png"
              width={50}
              height={50}
              alt="artist icon"
            ></img>
          </Link>
          &nbsp;
          <div className="flex flex-col px-2 lg:w-[90%] overflow-y-hidden py-1 ml-[4px]">
            <ScrollContainer
              vertical={false}
              className="cursor-grab !overflow-y-hidden"
            >
              <div className="flex items-center relative whitespace-nowrap text-[#FF0093] font-bold text-[16px]">
                <Link className="!no-underline" href="/artist">
                  <p className="text-[#050F3F] !no-underline text-[16px]">
                    Drake -
                  </p>
                </Link>
                &nbsp;
                <div className="font-normal flex items-center relative border rounded-[50px] p-1 border-[rgba(255, 255, 255, 1)]">
                  <span className="text-[16px]">
                    {" "}
                    &nbsp; Stock Price{" "}
                    <span className="font-bold"> $78.44 VXD &nbsp;</span>
                  </span>
                  &nbsp;
                  <Avatar
                    src="/assets/down-arrow-circle.svg"
                    className="!h-4 !w-4"
                  ></Avatar>
                  &nbsp;
                  {/* <p className="bg-[#FF0093] relative top-[-5px] border rounded-[50px] p-1"> */}
                  &nbsp;
                  <span className="text-[16px] text-[#FF0093] ">
                    {" "}
                    - 10.77%{" "}
                  </span>{" "}
                  &nbsp;
                  {/* &nbsp; <span className="text-gray-300"> Song Valyou :
                                                    <span className="font-bold  text-[#050f2f]"> $1,000,000,24,567</span>
                                                
                                            </span> &nbsp; */}
                  {/* </p> */}
                </div>
                &nbsp;&nbsp;&nbsp;
                <div className="px-4 flex items-center relative">
                  <img src="/assets/song-title.png" className="w-5 h-5" />
                  &nbsp;
                  <div className="flex p-2 text-[16px] ">
                    <p className="text-gray-400 text-[16px]">
                      Song Title:{" "}
                      <span className="font-bold">Started From The Bottom</span>
                    </p>
                    &nbsp;&nbsp;
                    <span className="text-gray-300 text-[16px]">
                      {" "}
                      Song Valyou :
                      <span className="font-bold  text-[#050f2f]">
                        {" "}
                        $1,000,000,24,567
                      </span>
                    </span>
                    &nbsp;&nbsp;
                    <span className="text-gray-300 text-[16px]">
                      {" "}
                      Artist Brand Listing Category : &nbsp;
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
      <div className="px-2">
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

var brandArray = [
  { color: "green-gradient" },
  { color: "bg-black" },
  { color: "bg-black" },
  { color: "green-gradient" },
  { color: "bg-black" },
  { color: "green-gradient" },
];
const VideoUpload = () => {
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
    <>
      <div>
        <br />
        <div className="m-[-10px] lg:m-0 bg-black">
          <div
            className={showHiden ? "absolute" : "relative"}
            style={{ width: "100%", height: "100%" }}
          >
            <ReactPlayer
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
        </div>
        {showWarn && (
          <ListenWarnPopup open={showWarn} handleClose={toggleClose} />
        )}
        <br />
        <AristCard />
        <br />
      </div>
    </>
  );
};
const ArtistNameCard = () => {
  return (
    <>
      <Card>
        <div className="flex p-4 items-center justify-between">
          <div className="flex items-center">
            <Link href="/artist">
              <Avatar
                src="/assets/drakeDp.png"
                sx={{ width: 60, height: 60 }}
                alt="artist icon"
              ></Avatar>
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div className="flex-col relative top-[-7px]">
              <p className="md:text-2xl font-bold">Drake</p>
            </div>
          </div>
          <div className="relative text-xs top-[-7px]">
            <p>Major Artist</p>
          </div>
        </div>

        <div className="relative w-[90%] top-[-40px] text-xs left-[80px] lg:flex block">
          &nbsp;&nbsp;&nbsp; <span className="text-gray-300"> Rapper </span>
          &nbsp; shared video track &nbsp;
          <span className="relative top-[1px]">
            <Image src="/assets/bunnyPlayer.svg" width={12} height={12}></Image>
          </span>
        </div>
      </Card>
    </>
  );
};
export const PostComponent = () => {
  return (
    <>
      <div>
        <ArtistNameCard />
        <br />
        <VideoUpload />
        <VideoUpload />
        <VideoUpload />
        <VideoUpload />
        <VideoUpload />
      </div>
    </>
  );
};
