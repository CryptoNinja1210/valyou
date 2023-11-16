import Image from "next/image";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton, Popover } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import React, { useState } from "react";
import { MoreHorizOutlined } from "@mui/icons-material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const ShowCommentWeb = ({ hideSideBarDesktop }) => {
  return (
    <div className="lg:h-[45.5vw] mt-1 lg:!overflow-y-auto rounded-lg background-shadow m-2 lg:w-[30vw]">
      <div className="flex items-center justify-between shadow p-2 !sticky top-0 bg-white z-10">
        <p className="font-bold">Comments</p>
        <IconButton className="float-right" onClick={hideSideBarDesktop}>
          <CloseIcon></CloseIcon>
        </IconButton>
      </div>
      <div className="!overflow-y-auto h-[62vh] p-2 py-7 flex flex-col gap-4">
        <Comments account="Business" color="text-green-500" />
        <Comments account="Music Fan Investor" color="text-red" />
        <Comments account="Music Artist" color="text-gray-500" />
      </div>
      <div className="flex justify-between items-center gap-2 p-2 !sticky bottom-0 bg-white z-10">
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
    </div>
  );
};

export default ShowCommentWeb;

export const Comments = ({ account, color }) => {
  const [isLiked, setIsLiked] = useState(true);

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [openDeleteCommentPopup, setOpenDeleteCommentPopup] =
    React.useState(false);

  const handleClickOpen = () => {
    setOpenDeleteCommentPopup(true);
    handleClose();
  };

  const handleDeleteCommentClose = () => {
    setOpenDeleteCommentPopup(false);
  };
  return (
    <>
      <div className="flex items-start gap-3">
        <img
          src="/assets/comment_image.svg"
          width={40}
          height={40}
          alt="comment image"
        />
        <div className="">
          <div className="flex justify-between">
            <div>
              <div className="font-[600] text-gray-700">Abraham Lincoln</div>
              <div className={`${color} text-[11px] mt-[-5px]`}>{account}</div>
            </div>
            <div className="mt-[-8px]">
              <IconButton onClick={handleClick}>
                <MoreHorizOutlined />
              </IconButton>
            </div>
          </div>
          <div className="text-gray-500 text-[14px]">
            The best way to predict your future is to create it.Success is not
            final, failure is not fatal: It is the courage to continue that
            counts.
          </div>
          <div className="text-[#FF0093] underline text-[14px]">reply</div>
          <div className="flex items-start gap-3 py-2">
            <img
              src="/assets/comment_image.svg"
              width={30}
              height={30}
              alt="comment image"
            />
            <div className="">
              <div className="flex justify-between">
                <div>
                  <div className="font-[600] text-gray-700">
                    Abraham Lincoln
                  </div>
                  <div className={`${color} text-[11px] mt-[-5px]`}>
                    {account}
                  </div>
                </div>
                <div className="mt-[-8px]">
                  <IconButton>
                    <MoreHorizOutlined />
                  </IconButton>
                </div>
              </div>
              <div className="text-gray-500 text-[14px]">
                Hey bro, Nice one.
              </div>
              <div className="text-[#FF0093] underline text-[14px]">reply</div>
            </div>
          </div>
        </div>
        <FavoriteIcon
          className={isLiked ? "text-red" : "text-gray-400"}
          onClick={() => setIsLiked(!isLiked)}
        />
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <div className="p-2 flex flex-col gap-3 cursor-pointer">
            <div className="flex items-center gap-2" onClick={handleClickOpen}>
              <DeleteOutlineOutlinedIcon />
              <div>Delete Comment</div>
            </div>
            <div className="flex items-center gap-2">
              <ModeEditOutlineOutlinedIcon />
              <div>Edit Comment</div>
            </div>
          </div>
        </Popover>
        <Dialog
          open={openDeleteCommentPopup}
          keepMounted
          onClose={handleDeleteCommentClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"Delete Comment"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Delete your comment permanently?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDeleteCommentClose}>Cancel</Button>
            <Button onClick={handleDeleteCommentClose}>Delete</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};
