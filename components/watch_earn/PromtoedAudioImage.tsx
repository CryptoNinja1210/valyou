import { Button, Card } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArtistCard } from "../artist/artistCard";

const PromtoedAudioImage = () => {
  return (
    <>
      <div onClick={() => localStorage.removeItem("open")}>
        <Link href="/audiodetail">
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

export default PromtoedAudioImage;

const ArtistButtons = () => {
  return (
    <div className="lg:flex items-center hidden justify-between py-2  hover:cursor-pointer">
      <div className="flex gap-2">
        <Link href="/audiodetail" className="!no-underline ">
          <Button
            variant="outlined"
            className="gradient-border h-10 flex items-center gap-2"
          >
            <Image src="/assets/comment_box.svg" width={30} height={30}></Image>
            <span className="text-[#050f2f] font-bold">Comments</span>
          </Button>
        </Link>
        <div className="!no-underline">
          <Button
            variant="outlined"
            className="gradient-border h-10 flex items-center gap-2"
          >
            <div className="mt-[-1px]">
              <Image
                src="/assets/promote_box.svg"
                width={30}
                height={20}
              ></Image>
            </div>
            <span className="text-[#050f2f] font-bold">Audio Stats</span>
          </Button>
        </div>
      </div>
      <Link href="/audiodetail" className="!no-underline">
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
          <Link href="/audiodetail" className="!no-underline !text-[#050f2f]">
            <div className="flex items-center justify-center gap-2">
              <div className="pt-2">
                <Image
                  src="/assets/comment_box.svg"
                  width={30}
                  height={20}
                ></Image>
              </div>
              <span className="text-xs">Comments</span>
            </div>
          </Link>
        </div>
        <div onClick={() => localStorage.setItem("open", "promote")}>
          <div className="flex items-center justify-center gap-2 !no-underline !text-[#050f2f]">
            <>
              <div>
                <Image
                  src="/assets/promote_box.svg"
                  width={30}
                  height={20}
                ></Image>
              </div>
              <span className="text-xs">Audio Stats</span>
            </>
          </div>
        </div>
        <div onClick={() => localStorage.setItem("open", "song")}>
          <Link
            href="/audiodetail"
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
