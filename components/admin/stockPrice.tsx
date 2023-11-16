import ScrollContainer from "react-indiana-drag-scroll";

import Image from 'next/image';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, TextField } from "@mui/material";
import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import {
  createStyles,
  fade,
  Theme,
  withStyles,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';

const CustomTextField = withStyles({
  root: {
   
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none',
      },
      '&:hover fieldset': {
        border: 'none',
      },
      '&.Mui-focused fieldset': {
        border: 'none',
      },
    },
  },
})(TextField);

const SellStockPopup = ({open,handleClose}) =>{
  return(
    <>
     <div>
     <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>
          <div className="flex justify-between">
          <p className="text-pink-600"><b>Sell Drake Stocks</b></p>

            <IconButton onClick={handleClose}>
            <CloseIcon></CloseIcon>
            </IconButton>
          </div>
   

        </DialogTitle>
        <DialogContent>
           <div className="pinkGradient border text-xs rounded-md p-8">
            <div className="w-full bg-white rounded-lg p-3">
              <p className="text-center">How many stocks of this artist would you like to sell?</p>
            </div>
            <div className="flex justify-between p-3">
                <IconButton>
                  <RemoveIcon></RemoveIcon>
                </IconButton>
                <CustomTextField
                  hiddenLabel
                  sx={{ border: "none", padding: "0", textAlign: "center" }}
                  margin="dense"
                  id="filled-hidden-label-small"
                  defaultValue="01"
                  inputProps={{ style: { border: "none", padding: "0", textAlign: "center" }}}
                  size="small"
                />
                <IconButton>
                  <AddIcon></AddIcon>
                </IconButton>
            </div>
           </div>

           <div className="py-4 text-center">
            <p className="text-pink-800"><b>Total Amount</b></p>
            <p className="text-pink-800"><b>You will receive: $0.9779 VXD</b></p>
            <br />
            <p><b>Amount of Shares X Current Stock Price - Fees % = Total</b></p>
           </div>
           <Button className="pinkGradient !text-white w-full" onClick={handleClose} autoFocus>
            Sell Now
          </Button>
        </DialogContent>
        <DialogActions>
        
        </DialogActions>
      </Dialog>
     </div>
    </>
  )
}

export const ListenWarnPopup = ({open,handleClose}) =>{
  return(
    <>
     <div>
     <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>
          <div className="flex justify-between">
          <p className="text-pink-500"><b>Pay $0.01 cents and Listen</b></p>
          </div>
   

        </DialogTitle>
        <DialogContent>
           <div className="text-sm">
           You will be charged $0.01 cents if you listen this audio. Do you wish to proceed?
           <br />
           <br />
           If you do not wish to be charged again each time you listen to this song, you have the option to click the Valyou this song for an amount of you choice in order to receive unlimited plays of this song as well Vip artist-fan reward points the more you Valyou.
           <br />
           <br />
           Thank you. We appreciate you support.
           <br />
           <br />
           <b>Drake</b>
           </div>
           <br />
           <div className="flex gap-2 w-full">
           <div className="green-gradient !text-white text-[12px] w-[30%] p-2 py-3 rounded flex justify-center items-center" onClick={handleClose}>
            OK
          </div>
          <div className="pinkGradient !text-white text-[12px] w-[70%] p-2 rounded flex justify-center items-center" onClick={handleClose}>
            Don&apos;t show this message again
          </div>
          </div>
        </DialogContent>
      </Dialog>
     </div>
    </>
  )
}

const BuyStockPopup = ({open,handleClose}) =>{
  return(
    <>
     <div>
     <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>
          <div className="flex justify-between">
          <p className="text-green-800"><b>Buy Drake Stocks</b></p>

            <IconButton onClick={handleClose}>
            <CloseIcon></CloseIcon>
            </IconButton>
          </div>
   

        </DialogTitle>
        <DialogContent>
           <div className="green-gradient border text-xs rounded-md p-8">
            <div className="w-full bg-white rounded-lg p-3">
              <p className="text-center">How many stocks of this artist would you like to 
              purchase?</p>
            </div>
            <div className="flex justify-between p-3">
                <IconButton>
                  <RemoveIcon></RemoveIcon>
                </IconButton>
                <CustomTextField
                  hiddenLabel
                  sx={{ border: "none", padding: "0", textAlign: "center" }}
                  margin="dense"
                  id="filled-hidden-label-small"
                  defaultValue="01"
                  inputProps={{ style: { border: "none", padding: "0", textAlign: "center" }}}
                  size="small"
                />
                <IconButton>
                  <AddIcon></AddIcon>
                </IconButton>
            </div>
           </div>

           <div className="py-4 text-center">
            <p className="text-green-800 text-3xl"><b>Total Cost: $ 1.08066207 VXD</b></p>
            {/* <p className="text-green-800"><b>You will receive: $0.9779 VXD</b></p> */}
            <br />
            <p><b>Amount of Shares X Current Stock Price - Fees % = Total</b></p>
           </div>
           <Button className="green-gradient !text-white w-full" onClick={handleClose} autoFocus>
            Buy Now
          </Button>
        </DialogContent>
        <DialogActions>
        
        </DialogActions>
      </Dialog>
     </div>
    </>
  )
}




const MarqueeTag = () =>{
    return(
        <>
        <ScrollContainer className="container-width-mob mt-[-17px] md:container-width">
        {/* <div className="overflow-x-scroll"> */}
        <div className=" cursor-grab scrolling">
          {" "}
          <span className="font-bold text-4xl"> EXCHANGE RATES</span>
          <span className="pink">:</span>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Image
            src="https://stocks.valyoux.io/public/assets/images/valyoux/ethereum_logo_valyou_x_music.svg"
            width="15"
            height="15"
            alt=""
          />
          <span className="font-bold text-4xl">0.02776 BTC</span> &nbsp;=&nbsp; <span className="font-bold text-4xl">$ 1185.89000000 USD</span>{" "}
          &nbsp;&nbsp;
          <p className="text-[#00B8BA]"> + 0.25% </p>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Image
            src="https://stocks.valyoux.io/public/assets/images/valyoux/bitcoinlogo.svg"
            width="15"
            height="15"
            alt=""
          />
          &nbsp;&nbsp; <span className="font-bold text-4xl">1 BITCOIN (BTC) </span> &nbsp;=&nbsp; <span className="font-bold text-4xl">$ 20504.84000000 USD</span>{" "}
          &nbsp;&nbsp;
          <span className="text-red"> - 0.15% </span>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Image
            src="https://stocks.valyoux.io/public/assets/images/valyoux/vuxlogo.svg"
            width="15"
            height="15"
            alt=""
          />
          &nbsp;&nbsp; <span className="font-bold text-4xl">1 Valyou X Dollar (VXD)</span>  = &nbsp;&nbsp;
          <span className="font-bold text-4xl">$ 1.00090000 USDC</span> &nbsp;&nbsp;
          <p className="text-red"> - 0.1% </p>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Image
            src="https://stocks.valyoux.io/public/assets/images/valyoux/vuxlogo.svg"
            width="15"
            height="15"
            alt=""
          />
          &nbsp;&nbsp; <span className="font-bold text-4xl">1 VALYOU X MUSIC (VALYOU X)</span> = &nbsp;&nbsp;
          <span className="font-bold text-4xl">$0.50 USDC</span> &nbsp;&nbsp;
          <Image src="/assets/upper_icon.png" width={50} height={50}/>
          <p className="text-[#00B8BA]"> + 2.5% </p>
          &nbsp;&nbsp;&nbsp;
          {/* </div> */}
        </div>
      </ScrollContainer>
        </>
    )
}


export const StockPrice = () =>{
  const [sellStockOpen, SetsellStockOpen] = React.useState(false);
  const [buyStockOpen, SetBuyStockOpen] = React.useState(false);

  const buyStockHandler = () =>{
    SetBuyStockOpen(buyStockOpen => !buyStockOpen);
  }

 const sellStockHandler = () =>{
    SetsellStockOpen(sellStockOpen => !sellStockOpen);
  }

    return(
        <>
          <div>
            <div className="text-center">
                <p>Stock Price</p>
            </div>
            <br />
            <div>
                <MarqueeTag/>
            </div>
            <div className="flex p-3 justify-center">
                <Button variant="contained" onClick={sellStockHandler} className="pinkGradient w-[50%] md:w-[20%]">
                    Sell Stock
                </Button>
                <SellStockPopup open={sellStockOpen} handleClose={sellStockHandler} />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button onClick={buyStockHandler} variant="contained" className="green-gradient w-[50%] md:w-[20%]">
                    Buy Stock
                </Button>
                <BuyStockPopup open={buyStockOpen} handleClose={buyStockHandler}/>

            </div>
          </div>
        
        </>
        
    )
}