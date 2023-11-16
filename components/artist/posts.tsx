import { Card, Avatar, Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import ScrollContainer from "react-indiana-drag-scroll";
import { BranSponser, BidWidget } from "../brandSponser/brandSponser";
import ReactPlayer from "react-player";
import { ArtistCard } from "./artistCard";

const ArtistNameCard = () => {
  return (
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

export const Post = () => {
  return (
    <>
      <div>
        <ArtistNameCard />
        <br />
        <div className="m-[-10px] lg:m-0">
          <div className="lg:w-[50vw] lg:ml-[23vw]">
            <div>
              <div className="bg-black">
                <ReactPlayer
                  width="100%"
                  height="100%"
                  playsinline={true}
                  controls={true}
                  style={{ width: "100%" }}
                  url="/assets/drake-started-from-the-bottom.mp4"
                />
              </div>
              <div className="hidden lg:block lg:border rounded lg:p-4 lg:shadow-lg lg:shadow-gray-300">
                <ArtistCard />
              </div>
            </div>
          </div>
          <div className="lg:hidden">
            <ArtistCard />
          </div>
        </div>
        <br />
        <BranSponser />
        <ScrollContainer className="cursor-grab">
          <div className="flex mx-[-15px] w-full">
            {brandArray.map((value, index) => {
              return <BidWidget key={index} color={value.color} />;
            })}
          </div>
        </ScrollContainer>
      </div>
    </>
  );
};
