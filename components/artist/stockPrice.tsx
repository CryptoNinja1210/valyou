import ScrollContainer from "react-indiana-drag-scroll";
import Marquee from "../react-fast-marquee/dist";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { withStyles } from "@material-ui/core/styles";

const style = {
  height: "120vh",
};
const CustomTextField = withStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "none",
      },
      "&:hover fieldset": {
        border: "none",
      },
      "&.Mui-focused fieldset": {
        border: "none",
      },
    },
  },
})(TextField);

const SellStockPopup = ({ open, handleClose }) => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  const [sellPrice, setSellPrice] = useState<any>(50);
  if (isNaN(sellPrice)) {
    setSellPrice("");
  }
  const incrementPrice = () => {
    setSellPrice(parseInt(sellPrice) + 1);
  };
  const decrementPrice = () => {
    if (sellPrice == 0) return;
    setSellPrice(parseInt(sellPrice) - 1);
  };
  return (
    <>
      <div>
        <Dialog style={style} open={open} onClose={handleClose}>
          <DialogTitle>
            <div className="flex justify-between">
              <p className="text-pink-600">
                <b>Sell Drake Stocks</b>
              </p>

              <IconButton onClick={handleClose}>
                <CloseIcon></CloseIcon>
              </IconButton>
            </div>
          </DialogTitle>
          <DialogContent>
            <div className="pinkGradient border text-xs rounded-md p-8">
              <div className="w-full p-3">
                <p className="text-white">
                  How many stocks of this artist would you like to sell?
                </p>
              </div>
              <br />
              <div className="flex bg-white rounded-lg justify-between p-3">
                <IconButton onClick={decrementPrice}>
                  <RemoveIcon></RemoveIcon>
                </IconButton>
                <CustomTextField
                  hiddenLabel
                  sx={{ border: "none", padding: "0", textAlign: "center" }}
                  margin="dense"
                  id="filled-hidden-label-small"
                  defaultValue={sellPrice}
                  value={sellPrice}
                  onChange={(e) =>
                    setSellPrice(parseInt(e.target.value.replace(/\D/g, "")))
                  }
                  inputProps={{
                    style: {
                      border: "none",
                      padding: "0",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: "28px",
                    },
                  }}
                  size="small"
                />
                <IconButton onClick={incrementPrice}>
                  <AddIcon></AddIcon>
                </IconButton>
              </div>
            </div>

            <div className="py-4 text-center">
              <p className="text-pink-600">
                <b>Total Amount</b>
              </p>
              <p className="text-pink-600">
                <b>You will receive: $0.9779 VXD</b>
              </p>
              <br />
              <p>
                <b>Amount of Shares X Current Stock Price - Fees % = Total</b>
              </p>
            </div>
            <Button
              className="pinkGradient !text-white w-full"
              onClick={handleClose}
              autoFocus
            >
              Sell Now
            </Button>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

const BuyStockPopup = ({ open, handleClose }) => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  const [buyPrice, setbuyPrice] = useState<any>(50);
  if (isNaN(buyPrice)) {
    setbuyPrice("");
  }
  const incrementPrice = () => {
    setbuyPrice(parseInt(buyPrice) + 1);
  };
  const decrementPrice = () => {
    if (buyPrice == 0) return;
    setbuyPrice(parseInt(buyPrice) - 1);
  };
  return (
    <Dialog open={open} onClose={handleClose} style={style}>
      <DialogTitle>
        <div className="flex justify-between">
          <p className="text-green-800">
            <b>Buy Drake Stocks</b>
          </p>
          <IconButton onClick={handleClose}>
            <CloseIcon></CloseIcon>
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent>
        <div className="green-gradient border text-xs rounded-md p-8">
          <div className="w-full p-3">
            <p className="text-white">
              How many stocks of this artist would you like to purchase?
            </p>
          </div>
          <br />
          <div className="flex  bg-white rounded-lg justify-between p-3">
            <IconButton onClick={decrementPrice}>
              <RemoveIcon></RemoveIcon>
            </IconButton>
            <CustomTextField
              hiddenLabel
              sx={{ border: "none", padding: "0", textAlign: "center" }}
              margin="dense"
              id="filled-hidden-label-small"
              defaultValue={buyPrice}
              value={buyPrice}
              onChange={(e) =>
                setbuyPrice(parseInt(e.target.value.replace(/\D/g, "")))
              }
              inputProps={{
                style: {
                  border: "none",
                  padding: "0",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "28px",
                },
              }}
              size="small"
            />
            <IconButton onClick={incrementPrice}>
              <AddIcon></AddIcon>
            </IconButton>
          </div>
        </div>
        <div className="py-4 text-center">
          <p className="text-green-800 text-3xl">
            <b>Total Cost: $ 1.08066207 VXD</b>
          </p>
          {/* <p className="text-green-800"><b>You will receive: $0.9779 VXD</b></p> */}
          <br />
          <p>
            <b>Amount of Shares X Current Stock Price - Fees % = Total</b>
          </p>
        </div>
        <Button
          className="green-gradient !text-white w-full"
          onClick={handleClose}
          autoFocus
        >
          Buy Now
        </Button>
      </DialogContent>
    </Dialog>
  );
};

const MarqueeTag = () => {
  return (
    <>
      <ScrollContainer>
        <Marquee pauseOnHover={true} style={{ cursor: "grab" }}>
          <p className="font-bold text-4xl">0.000014 BTC</p>
          &nbsp; &nbsp;&nbsp; &nbsp;
          <img src="/assets/upper_icon.png" />
          &nbsp; &nbsp;&nbsp; &nbsp;
          <p className="text-[#1cea2c] font-bold text-xl"> + 0.28% </p>
          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
          <p className="font-bold text-4xl">$ 1.0303 USDC</p>
          &nbsp; &nbsp;&nbsp; &nbsp;
          <img src="/assets/upper_icon.png" />
          &nbsp; &nbsp;&nbsp; &nbsp;
          <p className="text-[#1cea2c] font-bold text-xl"> + 0.0972% </p>
          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
          <p className="font-bold text-4xl">$0.0019 ETH</p>
          &nbsp; &nbsp;&nbsp; &nbsp;
          <img src="/assets/upper_icon.png" />
          &nbsp; &nbsp;
          <p className="text-[#1cea2c] font-bold text-xl"> + 28.57% </p>
          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
          <p className="font-bold text-4xl">$58.60 VXD</p>
          &nbsp; &nbsp;&nbsp; &nbsp;
          <img src="/assets/upper_icon.png" />
          &nbsp; &nbsp;
          <p className="text-[#1cea2c] font-bold text-xl"> + 28.57% </p>
          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
        </Marquee>
      </ScrollContainer>
    </>
  );
};

export const StockPrice = () => {
  const [sellStockOpen, SetsellStockOpen] = React.useState(false);
  const [buyStockOpen, SetBuyStockOpen] = React.useState(false);

  const buyStockHandler = () => {
    SetBuyStockOpen((buyStockOpen) => !buyStockOpen);
  };

  const sellStockHandler = () => {
    SetsellStockOpen((sellStockOpen) => !sellStockOpen);
  };

  return (
    <>
      <div className="text-center">
        <p className="text-[#050F3F]">
          {localStorage.getItem("userProfile") === "Admin" ? (
            <b>Valyou X Token Price</b>
          ) : (
            <b>Drake&apos;s Stock Price</b>
          )}
        </p>
      </div>
      <br />
      <div>
        <MarqueeTag />
      </div>
      <div className="flex p-3 justify-center">
        <Button
          variant="contained"
          onClick={sellStockHandler}
          className="pinkGradient w-[50%] md:w-[20%]"
        >
          Sell Stock
        </Button>
        <SellStockPopup open={sellStockOpen} handleClose={sellStockHandler} />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button
          onClick={buyStockHandler}
          variant="contained"
          className="green-gradient !text-white w-[50%] md:w-[20%]"
        >
          Buy Stock
        </Button>
        <BuyStockPopup open={buyStockOpen} handleClose={buyStockHandler} />
      </div>
    </>
  );
};
