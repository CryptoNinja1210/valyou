import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import {
  Box,
  Button,
  Card,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { CloseOutlined } from "@mui/icons-material";
import Image from "next/image";
import { showSuccessMessage } from "./sendMoney";

export const Fiat = () => {
  const [customInput, setCustomInput] = useState<any>("");
  return (
    <>
      <div className="w-full py-3">
        <TextField
          className="w-full"
          id="outlined-basic"
          variant="outlined"
          label="How much VXD would you like to purchase?"
          value={customInput}
          onChange={(e) => setCustomInput(e.target.value.replace(/\D/g, ""))}
        />
        <br /> <br />
        <TextField
          className="w-full"
          id="outlined-basic"
          label="Name on Card"
          variant="outlined"
        />
        <br /> <br />
        <TextField
          className="w-full"
          id="outlined-basic"
          label="Card Number"
          variant="outlined"
        />
        <br /> <br />
        <div className="lg:flex">
          <TextField
            className="w-full"
            id="outlined-basic"
            label="Expiration"
            variant="outlined"
          />
          &nbsp;&nbsp;
          <TextField
            className="w-full"
            id="outlined-basic"
            label="CVC"
            variant="outlined"
          />
        </div>
        <br />
        <Button
          variant="contained"
          className="w-full"
          onClick={showSuccessMessage}
        >
          BUY NOW
        </Button>
      </div>
    </>
  );
};

export const Crypto = () => {
  const [customInput, setCustomInput] = useState<any>("");
  return (
    <>
      <div className="p-[7px]">
        <Box sx={{ width: "100%" }}>
          <div className="w-full">
            <label className="flex items-start font-[500] my-2">
              Custom Amount
            </label>
            <TextField
              className="w-full"
              id="outlined-basic"
              variant="outlined"
              placeholder="How much VXD would you like to purchase?"
              value={customInput}
              onChange={(e) =>
                setCustomInput(e.target.value.replace(/\D/g, ""))
              }
            />
            <br />
            <br />
            <div className="md:flex md:mb-4">
              <Button
                variant="contained"
                sx={{ backgroundColor: "black" }}
                className="w-full bg-black mx-1"
                onClick={() => setCustomInput(10)}
              >
                SELL $10 VXD
              </Button>
              &nbsp;&nbsp;
              <Button
                variant="contained"
                sx={{ backgroundColor: "black" }}
                className="w-full bg-black mx-1"
                onClick={() => setCustomInput(20)}
              >
                SELL $20 VXD
              </Button>
              &nbsp;&nbsp;
              <Button
                variant="contained"
                sx={{ backgroundColor: "black" }}
                className="w-full bg-black mx-1"
                onClick={() => setCustomInput(50)}
              >
                SELL $50 VXD
              </Button>
              &nbsp;&nbsp;
              <Button
                variant="contained"
                sx={{ backgroundColor: "black" }}
                className="w-full bg-black mx-1"
                onClick={() => setCustomInput(100)}
              >
                SELL $100 VXD
              </Button>
              &nbsp;&nbsp;
              <Button
                variant="contained"
                sx={{ backgroundColor: "black" }}
                className="w-full bg-black mx-1"
                onClick={() => setCustomInput(500)}
              >
                SELL $500 VXD
              </Button>
              &nbsp;&nbsp;
              <Button
                variant="contained"
                sx={{ backgroundColor: "black" }}
                className="w-full bg-black mx-1"
                onClick={() => setCustomInput(1000)}
              >
                SELL $1000 VXD
              </Button>
              &nbsp;&nbsp;
            </div>
          </div>
        </Box>
      </div>
      <Button
        variant="contained"
        className="w-full"
        onClick={showSuccessMessage}
      >
        BUY NOW
      </Button>
    </>
  );
};

export const RadioSelect = ({ value, onChange }) => {
  return (
    <>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          value={value}
          onChange={onChange}
          name="radio-buttons-group"
        >
          <div className="flex items-center justify-between">
            <FormControlLabel
              value="fiat"
              control={<Radio />}
              label="Fiat (Debit/Credit Card)"
            />
            <p className="flex items-center gap-1">
              <Image
                src="/assets/images/paypalimg.jpg"
                width={30}
                height={20}
                alt="coin image"
                className="rounded"
              />
              <Image
                src="/assets/images/visaImg.png"
                width={30}
                height={20}
                alt="coin image"
                className="rounded"
              />{" "}
              <Image
                src="/assets/images/masterCard.jpg"
                width={30}
                height={20}
                alt="coin image"
                className="rounded border-2 border-black"
              />{" "}
              <Image
                src="/assets/images/americanCard.jpg"
                width={30}
                height={20}
                alt="coin image"
                className="rounded"
              />
            </p>
          </div>
          <div className="flex items-center justify-between w-[90vw]">
            <FormControlLabel
              value="crypto"
              control={<Radio />}
              label="Crypto"
            />
            <p className="flex items-center gap-1">
              <Image
                src="/assets/images/usdcoin.png"
                width={20}
                height={20}
                alt="coin image"
              />
              <span>USD Coin</span>
            </p>
          </div>
        </RadioGroup>
      </FormControl>
    </>
  );
};

export const Deposit = ({ handleDeposit }) => {
  const [radioType, setRadioType] = useState("crypto");
  const changeRadioType = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioType((event.target as HTMLInputElement).value);
  };
  return (
    <>
      <div className="w-full">
        <Card className="p-2">
          <div className="flex justify-between items-center p-1 mb-2">
            <p className="font-[500]">Select Deposit Method</p>
            <IconButton>
              <CloseOutlined onClick={handleDeposit} />
            </IconButton>
          </div>
          {/* <br /> */}
          <RadioSelect value={radioType} onChange={changeRadioType} />
          <br />
          {radioType == "crypto" ? <Crypto /> : <Fiat />}
        </Card>
      </div>
    </>
  );
};
