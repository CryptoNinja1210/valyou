import * as React from "react";
import Avatar from "@mui/material/Avatar";
import ScrollContainer from "react-indiana-drag-scroll";
import Link from "next/link";

export const ArtistCard = () => {
  return (
    <>
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
        <div className="flex flex-col overflow-y-hidden py-1 ml-[4px]">
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
                  &nbsp; Stock Price{" "}
                  <span className="font-bold"> $78.44 VXD &nbsp;</span>
                </span>
                &nbsp;
                <Avatar
                  src="/assets/down-arrow-circle.svg"
                  className="!h-4 !w-4"
                ></Avatar>
                &nbsp; &nbsp;
                <span className="text-[16px] text-[#FF0093] ">
                  - 10.77%{" "}
                </span>{" "}
                &nbsp;
              </div>
              &nbsp;&nbsp;&nbsp;
              <div className="px-4 flex items-center relative">
                <img src="/assets/song-title.png" className="w-5 h-5" />
                &nbsp;
                <div className="flex p-2 text-[16px] ">
                  <p className="text-gray-400 text-[16px]">
                    Song Title :
                    <span className="font-bold"> Started From The Bottom</span>
                  </p>
                  &nbsp;&nbsp;
                  <span className="text-gray-300 text-[16px]">
                    Song Valyou :
                    <span className="font-bold  text-[#050f2f] px-1">
                      $1,000,000,24,567
                    </span>
                  </span>
                  &nbsp;&nbsp;
                  <span className="text-gray-300 text-[16px]">
                    Artist Brand Listing Category : &nbsp;
                    <span className="font-bold  text-[#050f2f]">
                      Upcoming Artist / Rapper
                    </span>
                  </span>
                </div>
              </div>
              &nbsp;&nbsp;&nbsp;
            </div>
          </ScrollContainer>
        </div>
      </div>
    </>
  );
};
