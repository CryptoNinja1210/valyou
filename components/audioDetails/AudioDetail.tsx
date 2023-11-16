import { useEffect, useState } from "react";
import ShowCommentWeb from "../comments";
import { VideoPlayer } from "../watch_earn/videoPlayer";
import ScrollContainer from "react-indiana-drag-scroll";
import { BidWidget, BranSponser } from "../brandSponser/brandSponser";
import { Link } from "@mui/material";
import Button from "@mui/material/Button";
import { SideBar } from "../watch_earn/sideNav";
import { PromoteModal } from "../../components/promoteModal/promoteModal";
import { ArtistCard } from "../artist/artistCard";
import SpringBottomSheet from "../socialMedia/bottomSheet/BottomSheet";
import { AllAudiosCard } from "./AllAudiosCard";

export const AudioDetail = () => {
  const [isCommentOpened, setIsCommentOpened] = useState(false);
  const [promoteAction, setPromoteAction] = useState(false);
  const [isValyouOpened, setIsVayouOpend] = useState(false);
  const [isCommentDesktop, setIsCommentDesktop] = useState(false);
  const [isPromoteDesktop, setIsPromoteDesktop] = useState(false);
  const [isArtistButtons, setIsArtistButtons] = useState(false);

  const toggleValyouOpend = () => {
    setIsArtistButtons((isArtistButtons) => !isArtistButtons);
  };

  const handleCommentClick = () => {
    setIsCommentOpened(true);
    setPromoteAction(false);
    setIsVayouOpend(false);
  };
  const handleActionOpen = () => {
    setIsCommentOpened(false);
    setPromoteAction(false);
    setIsVayouOpend(true);
  };
  const handlePromoteActionOpen = () => {
    setIsCommentOpened(false);
    setPromoteAction(true);
    setIsVayouOpend(false);
  };

  const handleActionClose = () => {
    setIsCommentOpened(false);
    setPromoteAction(false);
    setIsVayouOpend(false);
  };

  const showDesktopComment = () => {
    setIsCommentDesktop(true);
    setIsPromoteDesktop(false);
  };

  const showDesktopPromote = () => {
    setIsCommentDesktop(false);
    setIsPromoteDesktop(true);
  };

  const hideSideBarDesktop = () => {
    setIsCommentDesktop(false);
    setIsPromoteDesktop(false);
  };

  var brandArray = [
    { color: "green-gradient" },
    { color: "bg-black" },
    { color: "green-gradient" },
    { color: "bg-black" },
    { color: "green-gradient" },
    { color: "bg-black" },
  ];

  useEffect(() => {
    const open = localStorage?.getItem("open");
    if (open === "comments") {
      setIsCommentOpened(true);
    } else if (open === "promote") {
      setPromoteAction(true);
    } else if (open === "song") {
      setIsVayouOpend(true);
    }
  }, []);

  useEffect(() => {
    const openOnDesktop = localStorage?.getItem("openOnDesktop");
    if (openOnDesktop === "comments") {
      setIsCommentDesktop(true);
    } else if (openOnDesktop === "promote") {
      setIsPromoteDesktop(true);
    }
  }, []);

  useEffect(() => {}, []);

  return (
    <>
      {(isCommentOpened || promoteAction || isValyouOpened) && (
        <div
          className="absolute w-full top-0 h-full bg-[#00000030] z-50"
          onClick={handleActionClose}
        ></div>
      )}
      <SpringBottomSheet
        open={isCommentOpened || promoteAction || isValyouOpened}
        setOpen={handleActionClose}
        isComment={isCommentOpened}
        isPromotion={promoteAction}
        isValyou={isValyouOpened}
      />
      <div className="flex mr-1 mb-2">
        <div className="lg:w-[70vw] w-full block p-0 lg:p-2">
          <div className="!sticky top-0 z-10 md:!relative md:top-[-5px] lg:background-shadow lg:p-2 lg:py-2 lg:border-2">
            <VideoPlayer
              handleCommentClick={handleCommentClick}
              handleActionOpen={handleActionOpen}
              handlePromoteActionOpen={handlePromoteActionOpen}
              showDesktopComment={showDesktopComment}
              showDesktopPromote={showDesktopPromote}
              toggleValyouOpend={toggleValyouOpend}
              isValyouOpened={isArtistButtons}
            />
            <div className="ml-[-5px] bg-white px-2 lg:hidden shadow">
              <ArtistCard />
            </div>
          </div>
          <div className="px-2 pt-2 lg:hidden">
            {isCommentOpened || isValyouOpened || promoteAction || (
              <>
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
              </>
            )}
            <div className="background-shadow my-4 p-2">
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
          {!isCommentOpened || !isValyouOpened || !promoteAction || (
            <div className="h-[45px]"></div>
          )}
          {isCommentOpened || isValyouOpened || promoteAction || (
            <div className="lg:hidden">
              <AllAudiosCard />
            </div>
          )}
        </div>
        {!isCommentDesktop && !isPromoteDesktop && (
          <div className="hidden lg:block">
            <AllAudiosCard />
          </div>
        )}
        {isCommentDesktop && (
          <div className="hidden lg:block">
            <ShowCommentWeb hideSideBarDesktop={hideSideBarDesktop} />
          </div>
        )}
        {isPromoteDesktop && (
          <PromoteModal
            closeModel={hideSideBarDesktop}
            hideSideBarDesktop={undefined}
            close={undefined}
          />
        )}
      </div>
      {!isValyouOpened && (
        <div className="hidden lg:block background-shadow lg:p-2 mx-2">
          <ArtistCard />
        </div>
      )}
      <div className="hidden lg:block background-shadow m-2 p-2 my-6">
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
