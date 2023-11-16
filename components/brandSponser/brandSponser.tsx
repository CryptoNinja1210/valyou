import { Modal, Box, Select, MenuItem, Button } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CloseIcon from "@mui/icons-material/Close";

const CityPromoteModal = ({
  openModel,
  closeModel,
  countryCode,
  handleChangeCountry,
  countryCodes,
  selectedCity,
  handleChangeCity,
  cities,
  citydisabled,
}) => {
  return (
    <div>
      <Modal
        open={openModel}
        onClose={closeModel}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          className="lg:w-[56%] w-[370px]"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            // width:"56%",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
          }}
        >
          <div className="p-2 bg-white text-[#050f2f]">
            <div className="flex justify-between">
              <p>Select City</p>
              <div onClick={closeModel}>
                <CloseIcon></CloseIcon>
              </div>
            </div>
            <br />
            <hr />
            <br />
            <div className="block py-4 ">
              <p className="p-2">Select Country</p>
              <Select
                className="w-full"
                id="outlined-select-currency"
                value={countryCode}
                onChange={handleChangeCountry}
              >
                {countryCodes.map((option, index) => (
                  <MenuItem key={index} value={option.name}>
                    <div className="flex">
                      <span className="flex items-center">
                        <img
                          src={option.flag}
                          className="w-5 h-2 px-1"
                          alt="country flag"
                        />
                      </span>
                      <span>{option.name}</span>
                    </div>
                  </MenuItem>
                ))}
              </Select>
              <br />
              <p className="p-2">Select City</p>
              <Select
                disabled={citydisabled}
                className="w-full"
                id="outlined-select-currency"
                value={selectedCity}
                onChange={handleChangeCity}
              >
                {cities.map((option, index) => (
                  <MenuItem key={index} value={option.cityName}>
                    <div>
                      <span>{option.cityName}</span>
                    </div>
                  </MenuItem>
                ))}
              </Select>
            </div>
            <br />
            <div className="text-center">
              <Button
                onClick={closeModel}
                variant="contained"
                className="green_gradient"
              >
                Submit
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

const BidImages = ({ color }) => {
  return (
    <div className={color + " " + "w-64 h-40 rounded-lg p-3 text-center"}>
      <Image src="/assets/mcdoland-black.svg" width={80} height={140}></Image>
    </div>
  );
};

export const BidWidget = ({ color }) => {
  return (
    <Link href="/userEarn">
      <div className="p-2 flex-col">
        <BidImages color={color} />
        <div className="py-4 px-2 flex">
          <Image
            src="/assets/mcdonald.png"
            width={50}
            height={50}
            alt="artist icon"
          ></Image>
          <div className="flex-col px-2">
            <p className="font-bold">Crypto</p>
            <p className="text-gray-800"> Click &amp; Earn $3.00VXD</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const BranSponser = () => {
  const [currentCity, setCurrentCity] = useState("");
  const cityLocal = localStorage.getItem("city");
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const apiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;

        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
            const city = data.locality;
            setCurrentCity(city);
          })
          .catch((error) => {
            console.error(error);
          });
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);
  console.log(currentCity, cityLocal);
  return (
    <div className="py-2 lg:px-0">
      <div className="flex items-center justify-between">
        <div className="flex px-0 items-center">
          <Link href="/bidnow">
            <p className="font-bold mr-[10px] text-xs">
              Drake&#39;s Brand Sponsors in &nbsp;
              <span className="text-[#FF0093] text-xs hover:cursor-pointer">
                {currentCity || cityLocal} City
              </span>
              <span>
                &nbsp;&nbsp;&nbsp;<ArrowDropDownIcon></ArrowDropDownIcon>
              </span>
            </p>
          </Link>
        </div>
        <Link href="/bidding">
          <p className="text-[#FF0093] hover:cursor-pointer text-xs">
            Bid Now (See All)
          </p>
        </Link>
      </div>
    </div>
  );
};
