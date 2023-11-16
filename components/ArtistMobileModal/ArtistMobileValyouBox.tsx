import { Button, Popover, Slide, Tooltip, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import classNames from "classnames";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";

const ArtistMobileValyouBox = ({ close }) => {
  const [valueArray, setValueArray] = useState([
    { text: "$1", status: true },
    { text: "$2", status: false },
    { text: "$3", status: false },
    { text: "$4", status: false },
    { text: "$5", status: false },
  ]);

  var songValueArray = [
    { text: "$1", status: true },
    { text: "$2", status: false },
    { text: "$3", status: false },
    { text: "$4", status: false },
    { text: "$5", status: false },
  ];
  function changeColor(index) {
    const updated = shuffledArr();
    songValueArray.map((item, index) => ({
      ...item,
      status: (updated[index].status = false),
    }));
    valueArray[index].status = true;
    setValueArray([...valueArray]);
  }
  useEffect(() => {
    const updated = shuffledArr();
    const updatedArr = songValueArray.map((item, index) => ({
      ...item,
      status: updated[index].status,
    }));
    setValueArray([...updatedArr]);
  }, []);
  const shuffledArr = () =>
    valueArray
      .map((value) => ({ value, status: value.status }))
      .map(({ value }) => value);

  const [artistModalOpen, setArtistModalOpen] = useState(true);
  const [isGuide, setIsGuide] = useState(false);
  const [isInfo, setIsInfo] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleGuide = (event) => {
    setAnchorEl(event.currentTarget);
    setIsGuide(true);
    setIsInfo(false);
  };

  const handleInfo = (event) => {
    setAnchorEl(event.currentTarget);
    setIsGuide(false);
    setIsInfo(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div>
      <div className="p-2">
        <p className="flex justify-center p-3">
          This Song Valyou : <span className="text-red px-2">$500.00</span>
        </p>
        <div className="flex justify-center">
          {valueArray.map((value, key) => {
            return (
              <div
                key={key}
                onClick={() => changeColor(key)}
                className={classNames("rounded-full w-[46px] h-[46px] mr-2", {
                  "green-gradient text-white": value.status == true,
                })}
              >
                <Tooltip
                  title={`Valyou this song for ${value.text} to receive ${value.text} Artist VIP artist reward points plus unlimited access to this song in your Valyou playlist. The more you Valyou the more points you receive. you can always add more Valyou to boost your vip status.`}
                  arrow
                >
                  <div className="p-3 flex justify-center items-center">
                    {value.text}
                  </div>
                </Tooltip>
              </div>
            );
          })}
          <div className="mt-3">
            <HelpOutlineIcon
              sx={{ width: 25, height: 25 }}
              className="mr-2"
              onClick={handleInfo}
            />
          </div>
        </div>
        <div className="flex justify-center py-4 w-full gap-3">
          <Button variant="contained" className="green-gradient w-[50%] md:w-[25%]">
            Add valyou
          </Button>
          <Button variant="contained" className="pinkGradient w-[50%] md:w-[25%]">
            Cancel
          </Button>
        </div>
        <div className="border rounded color-gray-400 py-4 mt-2">
          <p className="text-center">
            <HelpOutlineIcon
              sx={{ width: 20, height: 20 }}
              className="mr-2"
              onClick={handleGuide}
            />
            <span className="text-[11px] md:text-[16px]">
              Your Streaming & Song Valyou Contributions to this song :
              <span className="text-red px-1">$311.00</span>
            </span>
          </p>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
          >
            {isGuide && (
              <Typography sx={{ p: 2 }}>
                <AdjustIcon sx={{ width: 20, height: 20 }} className="mr-2" />
                This amount also contributed to your Investor and music fan
                <b>Drake</b> ARTIST BRAND GLOBAL VIP REWARD POINTS.
              </Typography>
            )}
            {isInfo && (
              <Typography sx={{ p: 3 }}>
                <AdjustIcon sx={{ width: 20, height: 20 }} className="mr-2" />
                Earn more INVESTOR AND MUSIC FAN VIP POINTS towards that artists
                brand when you Valyou any of their particular song for higher
                amount.
                <br />
                <br />
                <AdjustIcon sx={{ width: 20, height: 20 }} className="mr-2" />
                You can add more Valyou to any particular song at anytime.
              </Typography>
            )}
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default ArtistMobileValyouBox;
