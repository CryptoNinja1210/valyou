import { Avatar, Button } from "@mui/material";
import Link from "next/link";
import ScrollContainer from "react-indiana-drag-scroll";
import ReactPlayer from "react-player";

const BrandCard = () => {
  return (
    <div className="border rounded shadow-lg shadow-gray-300">
      <div className="py-3 pl-[7px]">
        <div className="flex items-center">
          <Avatar
            src="/assets/mcdonald.png"
            // width={50}
            // height={50}
            alt="artist icon"
          ></Avatar>
          &nbsp;
          <div className="flex-col w-80 px-2 lg:w-[90%] overflow-y-hidden py-1 ml-[4px]">
            <ScrollContainer
              vertical={false}
              className="cursor-grab !overflow-y-hidden"
            >
              <p className="text-gray-400 font-bold text-xs py-1">
                Sponsored By McDonalds
              </p>

              <div className="flex  whitespace-nowrap text-[#FF0093] font-bold text-[10.5px]">
                <p className="text-[#050F3F] !no-underline">
                  Watch Ad and Earn $3.00 in VXD
                </p>
              </div>
            </ScrollContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export const UserEarnComponent = () => {
  return (
    <>
      <div className="!sticky top-0 z-10">
        <ReactPlayer
          className="lg:h-auto h-[40vh] "
          width="100%"
          playsinline={true}
          controls={true}
          style={{ width: "100%", height: "60%" }}
          url="https://www.youtube.com/watch?v=wdSVk3RRHGY"
        />
      </div>
      <div>
        <BrandCard />
      </div>
    </>
  );
};
