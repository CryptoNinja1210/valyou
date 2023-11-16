import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Image from "next/image";
import * as React from "react";
import Modal from "@mui/material/Modal";
import { Link } from "@mui/material";
import ReactPlayer from "react-player";
import { PromoteModal } from "../promoteModal/promoteModal";
import { ListenWarnPopup } from "../admin/stockPrice";
import { useRouter } from "next/router";

export const VideoPlayer = ({
  handleCommentClick,
  handleActionOpen,
  handlePromoteActionOpen,
  isValyouOpened,
  toggleValyouOpend,
  showDesktopComment,
  showDesktopPromote,
}) => {
  const [showWarn, setShowWarn] = React.useState(false);
  const [showHiden, setShowHiden] = React.useState(true);
  const toggleHidden = () => {
    setShowWarn(!showWarn);
  };
  const toggleClose = () => {
    setShowWarn(!showWarn);
    setShowHiden(!showHiden);
  };

  const router = useRouter();

  return (
    <>
      <div className="bg-black">
        <div
          className={showHiden ? "absolute" : "relative"}
          style={{ width: "100%", height: "100%" }}
        >
          {router.pathname == "/videodetail" ? (
            <ReactPlayer
              width="100%"
              height="100%"
              playsinline={true}
              controls={true}
              style={{ width: "100%" }}
              url="/assets/drake-started-from-the-bottom.mp4"
            />
          ) : (
            <Image
              src="/assets/drake-starting-bottom.jpeg"
              width={100}
              height={60}
              layout="responsive"
            />
          )}
        </div>
        {showHiden && (
          <div onClick={toggleHidden} className="opacity-0">
            <Image
              src="/assets/drake-starting-bottom.jpeg"
              width={100}
              height={60}
              layout="responsive"
            />
          </div>
        )}
      </div>
      {showWarn && (
        <ListenWarnPopup open={showWarn} handleClose={toggleClose} />
      )}

      {isValyouOpened ? (
        <SongValyouBox toggleValyouOpend={toggleValyouOpend} />
      ) : (
        <ArtistButtons
          toggleValyouOpend={toggleValyouOpend}
          showDesktopComment={showDesktopComment}
          showDesktopPromote={showDesktopPromote}
          handleActionOpen={handleActionOpen}
        />
      )}
      <MobileArtistButtons
        handleActionOpen={handleActionOpen}
        handlePromoteActionOpen={handlePromoteActionOpen}
        handleCommentClick={handleCommentClick}
      />
    </>
  );
};

const ArtistButtons = ({
  toggleValyouOpend,
  handleActionOpen,
  showDesktopComment,
  showDesktopPromote,
}) => {
  const [openModel, setopenModel] = React.useState(false);
  function toogleModel() {
    setopenModel((openModel) => !openModel);
  }

  return (
    <div className="lg:flex hidden items-center justify-between py-3">
      <div className="flex">
        <div className="flex flex-end">
          <Button
            onClick={showDesktopComment}
            variant="outlined"
            className="gradient-border h-10 flex justify-between items-center"
          >
            <Image src="/assets/comment_box.svg" width={25} height={25}></Image>
            <span
              className="text-[#050f2f] font-bold ml-2"
              onClick={() => localStorage.removeItem("openOnDesktop")}
            >
              Comments
            </span>
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button
            variant="outlined"
            className="gradient-border h-10 flex justify-between items-center"
            onClick={showDesktopPromote}
          >
            <div>
              <Image
                src="/assets/promote_box.svg"
                width={25}
                height={20}
              ></Image>
            </div>
            <span
              className="text-[#050f2f] font-bold ml-3"
              onClick={() => localStorage.removeItem("openOnDesktop")}
            >
              Promote
            </span>
          </Button>
        </div>
        <Modal
          open={openModel}
          onClose={toogleModel}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box
            className="lg:w-[56%] w-full"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
            }}
          >
            <PromoteModal
              closeModel={toogleModel}
              hideSideBarDesktop={undefined}
              close={undefined}
            />
          </Box>
        </Modal>
      </div>

      <div className="flex flex-end">
        <Button
          onClick={handleActionOpen}
          variant="outlined"
          className="gradient-border h-10 flex justify-between items-center"
        >
          <span
            className="text-[#050f2f] font-bold"
            onClick={() => localStorage.removeItem("openOnDesktop")}
          >
            Valyou Song
          </span>
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Link href="/artist" className="!no-underline">
          <Button
            variant="contained"
            className="green-gradient h-10 flex justify-between items-center"
            onClick={() => localStorage.removeItem("openOnDesktop")}
          >
            <span className="text-white font-bold">Invest in Artist</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

const MobileArtistButtons = ({
  handleActionOpen,
  handlePromoteActionOpen,
  handleCommentClick,
}) => {
  return (
    <Card className="lg:hidden">
      <div className="flex justify-between items-center p-2">
        <div
          className="flex items-center justify-center gap-2"
          onClick={handleCommentClick}
        >
          <div className="pt-2">
            <Image src="/assets/comment_box.svg" width={30} height={20}></Image>
          </div>
          <span className="text-xs">Comments</span>
        </div>
        <div
          className="flex justify-center items-center gap-2"
          onClick={handlePromoteActionOpen}
        >
          <div>
            <Image src="/assets/promote_box.svg" width={30} height={20}></Image>
          </div>
          <span className="text-xs">Promote</span>
        </div>
        <Button
          variant="outlined"
          className="gradient-border"
          onClick={handleActionOpen}
        >
          <span className="text-[#050f2f] text-xs font-bold">Valyou Song</span>
        </Button>
      </div>
    </Card>
  );
};

const SongValyouBox = ({ toggleValyouOpend }) => {
  return (
    <>
      <div className="lg:flex hidden py-4 justify-between">
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
        <div className="flex">
          <Button variant="contained" className="green-gradient w-40">
            Proceed
          </Button>
          &nbsp;&nbsp;
          <Button
            variant="contained"
            onClick={toggleValyouOpend}
            className="pinkGradient w-40"
          >
            Cancel
          </Button>
        </div>
      </div>
    </>
  );
};
