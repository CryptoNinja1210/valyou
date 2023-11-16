import Image from "next/image";
import React, { useRef } from "react";
import SendIcon from "@mui/icons-material/Send";
import { Comments } from "../../comments";
import { PromoteModal } from "../../promoteModal/promoteModal";
import ArtistMobileValyouBox from "../../ArtistMobileModal/ArtistMobileValyouBox";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Sheet, Header, Content, Footer, Portal } from "react-sheet-slide";
import "react-sheet-slide/style.css";

const SpringBottomSheet = ({
  open,
  setOpen,
  isComment,
  isPromotion,
  isValyou,
}) => {
  const ref = useRef();

  return (
    <Portal>
      <Sheet
        ref={ref}
        open={open}
        onDismiss={() => setOpen(false)}
        detents={(props) => [700, 480]}
        useDarkMode={false}
        useModal={false}
        scrollingExpands={true}
      >
        <Header>
          <div className="flex justify-between items-center w-full mt-2">
            <div className="font-[600] flex justify-center w-full ml-10">
              {isComment ? "Comments" : isPromotion ? "Promote" : "Valyou Song"}
            </div>
            <IconButton className="ml-auto" onClick={() => setOpen(false)}>
              <CloseIcon></CloseIcon>
            </IconButton>
          </div>
        </Header>
        <Content>
          {isComment && (
            <div className="px-2 mt-20 flex flex-col gap-5">
              <Comments account="Business" color="text-green-500" />
              <Comments account="Music Fan Investor" color="text-red" />
              <Comments account="Music Artist" color="text-gray-500" />
            </div>
          )}
          {isPromotion && (
            <div className="mt-20 px-2 bg-white">
              <PromoteModal
                closeModel={undefined}
                hideSideBarDesktop={undefined}
                close={setOpen}
              />
            </div>
          )}
          {isValyou && (
            <div className="mt-20">
              <hr />
              <div className="mt-4">
                <ArtistMobileValyouBox close={setOpen} />
              </div>
            </div>
          )}
        </Content>
        {isComment && (
          <Footer>
            <div className="flex justify-between items-center gap-2 bg-white shadow p-3 m-[-20px]">
              <Image
                src="/assets/comment_image.svg"
                width={40}
                height={40}
                alt="comment image"
              />
              <input
                placeholder="Write a comment"
                className="focus:outline-none flex-1 border-1 border-gray-500 focus:border-[#FF0093] px-2 w-[330px] p-1 rounded-full text-gray-500"
              />
              <div>
                <button className="pinkGradient text-white p-1 rounded-full flex justify-center items-center">
                  <SendIcon />
                </button>
              </div>
            </div>
          </Footer>
        )}
      </Sheet>
    </Portal>
  );
};

export default SpringBottomSheet;
