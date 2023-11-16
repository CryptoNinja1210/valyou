import {
  IconButton,
  FormControl,
  Select,
  MenuItem,
  Avatar,
  Button,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Image from "next/image";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

export const PromoteModal = ({ closeModel, hideSideBarDesktop, close }) => {
  const [payValue, setPayValue] = useState<any>(50);
  const [listenerValue, setListnerValue] = useState<any>(50);
  const [spendValue, setSpendValue] = useState<any>(50);
  const [targetPromotion, setTargetPromotion] = useState(false);
  const [openPromotion, setOpenPromotion] = useState(false);
  const [numberInput, setNumberInput] = useState(false);
  const [emailInput, setEmailInput] = useState(false);
  const [investorInput, setInvestorInput] = useState(false);

  if (isNaN(payValue)) {
    setPayValue("");
  }

  if (isNaN(listenerValue)) {
    setListnerValue("");
  }

  const showNumberInput = () => {
    setNumberInput(true);
    setEmailInput(false);
    setInvestorInput(false);
  };
  const showEmailInput = () => {
    setEmailInput(true);
    setNumberInput(false);
    setInvestorInput(false);
  };
  const showInvertorInput = () => {
    setInvestorInput(true);
    setEmailInput(false);
    setNumberInput(false);
  };
  const showTargetedPromotion = () => {
    setTargetPromotion(true);
    setOpenPromotion(false);
  };
  const showOpenPromotion = () => {
    setTargetPromotion(false);
    setOpenPromotion(true);
  };

  const onPayValueChange = (e) => {
    setPayValue(e.target.value.replace(/[^0-9.]/g, ""));
  };
  const onListenerValueChange = (e) => {
    setListnerValue(e.target.value.replace(/\D/g, ""));
  };
  const onPayListnerValueChange = (e) => {
    setSpendValue(e.target.value.replace(/\D/g, ""));
  };
  const IncrementpayValue = () => {
    setPayValue(parseInt(payValue) + 1);
  };
  const DecrementpayValue = () => {
    setPayValue(parseInt(payValue) - 1);
  };
  const IncrementListnerValue = () => {
    setListnerValue(parseInt(listenerValue) + 1);
  };
  const DecrementListnerValue = () => {
    setListnerValue(parseInt(listenerValue) - 1);
  };
  const IncrementSpendValue = () => {
    setSpendValue(parseInt(spendValue) + 1);
  };
  const DecrementSpendValue = () => {
    setSpendValue(parseInt(spendValue) - 1);
  };
  const [age, setAge] = useState(10);
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [method, setMethod] = useState(10);
  const handleMethod = (event) => {
    setMethod(event.target.value);
  };
  return (
    <div className="lg:h-[45.5vw] mt-1 lg:!overflow-y-auto rounded-lg lg:background-shadow m-2 lg:w-[30vw]">
      <div className="hidden lg:flex items-center justify-between shadow p-2 !sticky top-0 bg-white z-10">
        <p className="font-bold">Promote</p>
        <IconButton className="float-right" onClick={closeModel}>
          <CloseIcon></CloseIcon>
        </IconButton>
      </div>
      <div className="p-2">
        <div className="flex flex-col text-xs justify-between mt-4">
          <p>1. How many listeners would you like to reach?</p>
          <div className="flex items-center justify-center background-shadow my-2 p-1">
            <IconButton onClick={DecrementListnerValue}>
              <RemoveIcon></RemoveIcon>
            </IconButton>
            <div className="flex align-center justify-center rounded p-2 w-32">
              <input
                className="text-center w-full border-none outline-none font-[600] text-xl"
                value={listenerValue}
                onChange={(e) => onListenerValueChange(e)}
              />
            </div>
            <IconButton onClick={IncrementListnerValue}>
              <AddIcon></AddIcon>
            </IconButton>
          </div>
        </div>
        <div className="flex flex-col text-xs justify-between mt-4">
          <p>2. How much would you like to pay each listener per stream?</p>
          <div className="flex items-center justify-center background-shadow my-2 p-1">
            <IconButton onClick={DecrementSpendValue}>
              <RemoveIcon></RemoveIcon>
            </IconButton>
            <div className="flex align-center justify-center  rounded p-2 w-32">
              <input
                className="text-center w-full border-none outline-none font-[600] text-xl"
                value={"V$  " + spendValue}
                onChange={(e) => onPayListnerValueChange(e)}
              />
            </div>
            <IconButton onClick={IncrementSpendValue}>
              <AddIcon></AddIcon>
            </IconButton>
          </div>
        </div>
        <div className="flex flex-col text-xs justify-between mt-4">
          <p>3. Total spend</p>
          <div className="flex items-center justify-center background-shadow my-2 p-1">
            <IconButton onClick={DecrementpayValue}>
              <RemoveIcon></RemoveIcon>
            </IconButton>
            <div className="flex align-center justify-center  rounded p-2 w-32">
              <input
                className="text-center w-full border-none outline-none font-[600] text-xl"
                value={"V$  " + payValue}
                onChange={(e) => onPayValueChange(e)}
              />
            </div>
            <IconButton onClick={IncrementpayValue}>
              <AddIcon></AddIcon>
            </IconButton>
          </div>
        </div>
        <div className="block  justify-between">
          <div className="flex-col">
            <label className=" text-xs  mt-4">4. Select Promotion Type </label>
            <div className="mt-3">
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                >
                  <MenuItem value={10} onClick={showTargetedPromotion}>
                    <div className="flex items-center">
                      Targeted promotional campaign
                    </div>
                  </MenuItem>
                  <MenuItem value={20} onClick={showOpenPromotion}>
                    <div className="flex items-center">
                      Open promotional campaign
                    </div>
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {targetPromotion && (
            <div>
              <div>
                <p className="text-[12px] flex flex-col gap-5">
                  <div>
                    🎧 Targeted is a Promotional Campaign Type where by this
                    track is promoted to specific investors and music listeners
                    of your choice.
                  </div>
                  <div>
                    Music fans already on or not yet on the platform can be
                    invited to listen to this content / video / audio for a
                    promotional campaign listeners fee.
                  </div>
                  <div>
                    They will earn the set amount when they listen to it.
                  </div>
                </p>
              </div>
              <br />
              <div className="flex-col">
                <label className="text-[14px]">Select Promotion Method</label>
                <div className="mt-3">
                  <FormControl fullWidth>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                    >
                      <MenuItem value={10} onClick={showInvertorInput}>
                        <div className="flex items-center">
                          Investors On Valyou X
                        </div>
                      </MenuItem>
                      <MenuItem value={20} onClick={showEmailInput}>
                        <div className="flex items-center">Input Email</div>
                      </MenuItem>
                      <MenuItem value={20} onClick={showNumberInput}>
                        <div className="flex items-center">Input Number</div>
                      </MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              {investorInput && (
                <div className="flex-col">
                  <br />
                  <label className="text-[14px]">
                    Select Investors On Valyou X
                  </label>
                  <FormControl fullWidth>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                    >
                      <MenuItem value={10}>
                        <div className="flex items-center">
                          <Avatar
                            className="w-[30px] h-[30px]"
                            alt="Travis Howard"
                            src="/assets/drakeDp.png"
                          ></Avatar>
                          &nbsp; Bob
                        </div>
                      </MenuItem>
                      <MenuItem value={20}>
                        <div className="flex items-center">
                          <Avatar
                            className="w-[30px] h-[30px]"
                            alt="Travis Howard"
                            src="/assets/drakeDp.png"
                          ></Avatar>
                          &nbsp; Jack
                        </div>
                      </MenuItem>
                      <MenuItem value={30}>
                        <div className="flex items-center">
                          <Avatar
                            className="w-[30px] h-[30px]"
                            alt="Travis Howard"
                            src="/assets/drakeDp.png"
                          ></Avatar>
                          &nbsp; Bobby
                        </div>
                      </MenuItem>
                    </Select>
                  </FormControl>
                </div>
              )}
              {emailInput && (
                <div className="flex-col">
                  <br />
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Promote via Email
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 block w-full p-2.5 border border-gray-300 text-gray-900 text-sm rounded-3xl "
                    placeholder="Enter email"
                    required
                  />
                </div>
              )}
              {numberInput && (
                <div className="flex-col">
                  <br />
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Promote via Mobile
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 block w-full p-2.5 border border-gray-300 text-gray-900 text-sm rounded-3xl "
                    placeholder="Enter Mobile or paste"
                    required
                  />
                </div>
              )}
            </div>
          )}
          {openPromotion && (
            <p className="text-[12px]">
              🎧 I would like to have an open campaign. Any one can listen to
              the music on my profile and get paid. The promotional campaign
              will end when the amount of listeners you selected above is
              reached.{" "}
            </p>
          )}
        </div>
        <br />
        <div className="text-center">
          <Button variant="contained" className="green_gradient">
            START PROMOTION
          </Button>
          <br />
          <p className="py-4">Share</p>
          <div className="flex justify-between">
            <div className="flex-col">
              <WhatsAppIcon></WhatsAppIcon>
              <p className="text-xs">WhatsApp</p>
            </div>
            <div className="flex-col">
              <FacebookIcon></FacebookIcon>
              <p className="text-xs">Facebook</p>
            </div>
            <div className="flex-col">
              <MailOutlineOutlinedIcon></MailOutlineOutlinedIcon>
              <p className="text-xs">Messages</p>
            </div>
            <div className="flex-col">
              <Image src="/assets/chat_icon.svg" width={20} height={20}></Image>
              <p className="text-xs">Chat</p>
            </div>
            <div className="flex-col">
              <ContentCopyIcon></ContentCopyIcon>
              <p className="text-xs">Copy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
