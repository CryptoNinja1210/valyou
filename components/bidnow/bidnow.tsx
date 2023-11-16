import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Select from "react-select";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  IconButton,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { withStyles } from "@material-ui/core/styles";
import Link from "next/link";
import Image from "next/image";
import ScrollContainer from "react-indiana-drag-scroll";

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

export const BidCard = ({
  index,
  image,
  name,
  minbid,
  timeRem,
  avl,
  min,
  time,
  btn,
}) => {
  return (
    <>
      <div className="p-2">
        <Card>
          <CardContent className="!pb-3">
            <div className="flex justify-between w-full">
              <Avatar
                className="!w-[30px] !h-[30px]"
                alt="Travis Howard"
                src={image}
              />
              <div className="flex-col text-xs">
                <p>
                  <b>
                    {index}. {name}
                  </b>
                </p>
                <p>{minbid}</p>
                <p>{timeRem}</p>
              </div>
              <div className="flex-col text-xs">
                {avl !== "" ? (
                  <p>
                    <b>{avl}</b>
                  </p>
                ) : (
                  <p className="text-white">12</p>
                )}
                {avl !== "" ? (
                  <p>{min}</p>
                ) : (
                  <p className="relative left-[-45px]">{min}</p>
                )}
                <p>{time}</p>
              </div>
              <Link href="/bidding">
                <Button
                  variant="contained"
                  className="green-gradient text-white h-[30px]"
                >
                  {btn}
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export const BidModal = () => {
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
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const [region, setRegion] = useState<any>("");
  const [countries, setCountries] = useState<any>([]);
  const [country, setCountry] = useState<any>("");
  const [state, setState] = useState<any>("");
  const [data, setData] = useState<any>([]);
  const [citiesLength, setCitiesLength] = useState<any>(0);
  const [regionSelected, setRegionSelected] = useState<any>(false);

  countries.sort((a, b) => (a.name.common > b.name.common ? 1 : -1));
  useEffect(() => {
    axios
      .get(
        "https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json"
      )
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  const getCountries = (value) => {
    axios
      .get(`https://restcountries.com/v3.1/region/${value}`)
      .then((res) => setCountries(res.data));
  };

  const handleRegion = (value, index) => {
    setRegion(value);
    setRegionSelected(index);
    getCountries(value);
  };

  const states = data
    .filter((item) => item.country === country)
    .map((item) => item.subcountry)
    .filter((state, index, self) => self.indexOf(state) === index)
    .sort();

  const [url, setUrl] = useState("/assets/mcdoland-black.svg");
  const handleChange = (e) => {
    setUrl(URL.createObjectURL(e.target.files[0]));
  };
  const cities = data
    .filter((item) => item.country === country && item.subcountry === state)
    .map((item) => item.name)
    .filter((city, index, self) => self.indexOf(city) === index)
    .sort();

  return (
    <>
      <div className="p-2">
        <div className="flex items-center ml-[-10px]">
          <Link href="/bidnow">
            <IconButton>
              <KeyboardBackspaceIcon className="p-1 text-white bg-black rounded" />
            </IconButton>
          </Link>
        </div>
        <div className="flex items-center gap-4 my-3 font-bold text-red">
          <Image
            src="/assets/drakeDp.png"
            width={70}
            height={70}
            alt="artist icon"
          ></Image>
          <p className="text-[14px]">
            Bid Now to become one of the 10 Brand sponsors for{" "}
            <span className="underline font-[800]">Drake</span> in any
            particular city.
          </p>
        </div>
        <div className="flex items-center">
          <b className="py-2">1. Select Your Brand Exposure Location</b>
          <IconButton>
            <HelpOutlineIcon></HelpOutlineIcon>
          </IconButton>
        </div>
        <div className="flex flex-col gap-4">
          <b className="text-[14px]">I. Choose Region</b>
          <ScrollContainer className="cursor-grab flex">
            {regions.map((item, index) => (
              <div className="m-2 mr-8" key={index}>
                <div
                  className={`w-64 h-40 p-3 flex items-center justify-center rounded-lg background-shadow font-bold ${
                    regionSelected === index ? "border-2 border-black" : ""
                  }`}
                  onClick={() => handleRegion(item, index)}
                >
                  {item}
                </div>
              </div>
            ))}
          </ScrollContainer>
          <b className="text-[14px]">II. Choose Country</b>
          <Select
            isClearable={false}
            isSearchable={false}
            isDisabled={false}
            menuPortalTarget={document.body}
            styles={{
              menuList: (styles) => {
                return {
                  ...styles,
                  maxHeight: "500px",
                };
              },
              option: (styles, { isFocused, isSelected }) => {
                return {
                  ...styles,
                  backgroundColor: isFocused
                    ? "#FC66BC"
                    : isSelected
                    ? "#ff0093"
                    : "",
                  color: isFocused || isSelected ? "white" : "",
                };
              },
              noOptionsMessage: (styles) => {
                return {
                  ...styles,
                  color: "#ff0093",
                };
              },
            }}
            onChange={(value: any) => setCountry(value?.value)}
            options={countries.map((option) => ({
              value: option?.name?.common,
              label: option?.flag + " " + option?.name?.common,
            }))}
            noOptionsMessage={() => "Please Select a Region First"}
          />
          <b className="text-[14px]">iii. Select State</b>
          <Select
            isClearable={false}
            isSearchable={false}
            isDisabled={false}
            menuPortalTarget={document.body}
            styles={{
              menuList: (styles) => {
                return {
                  ...styles,
                  maxHeight: "500px",
                };
              },
              option: (styles, { isFocused, isSelected }) => {
                return {
                  ...styles,
                  backgroundColor: isFocused
                    ? "#FC66BC"
                    : isSelected
                    ? "#ff0093"
                    : "",
                  color: isFocused || isSelected ? "white" : "",
                };
              },
              noOptionsMessage: (styles) => {
                return {
                  ...styles,
                  color: "#ff0093",
                };
              },
            }}
            onChange={(value: any) => setState(value?.value)}
            options={states.map((option) => ({
              value: option,
              label: option,
            }))}
            noOptionsMessage={() => "Please Select a Country First"}
          />
          <b className="text-[14px]">IV. Select City / Town / Suburb</b>
          <Select
            isClearable={false}
            isSearchable={false}
            isMulti
            isDisabled={false}
            menuPortalTarget={document.body}
            styles={{
              menuList: (styles) => {
                return {
                  ...styles,
                  maxHeight: "500px",
                };
              },
              option: (styles, { isFocused, isSelected }) => {
                return {
                  ...styles,
                  backgroundColor: isFocused
                    ? "#FC66BC"
                    : isSelected
                    ? "#ff0093"
                    : "",
                  color: isFocused || isSelected ? "white" : "",
                };
              },
              noOptionsMessage: (styles) => {
                return {
                  ...styles,
                  color: "#ff0093",
                };
              },
            }}
            options={cities.map((option) => ({
              value: option,
              label: option,
            }))}
            noOptionsMessage={() => "Please Select a State First"}
          />
        </div>
        <div className="flex flex-col items-center justify-between gap-3">
          <div className="flex flex-col gap-2 w-[100%]">
            <p className="py-5 text-sm font-bold">
              <span className="underline">Bidding War</span> : 1 spot remaining
              before bidding war starts in this selected city.
            </p>
            <br />
            <b>
              2. Upload your Company Brand Business logos in three formats.
              <br />
              <br />
              Black, White and the original color all in a transparent form with
              no background. ( svg, png)
            </b>
            <br />
          </div>
          <br />
          <div className="w-full">
            <ScrollContainer className="cursor-grab">
              <div className="flex md:justify-center mx-[-15px] w-full">
                <div className="flex-col p-2">
                  <div className="w-64 h-40 p-3 text-center rounded-lg shadow-lg green-gradient">
                    <Image src={url} width={80} height={140}></Image>
                  </div>
                  <p className="px-2 font-bold text-red">White Logo</p>
                </div>
                <div className="flex-col p-2">
                  <div className="w-64 h-40 p-3 text-center bg-black rounded-lg shadow-lg">
                    <Image src={url} width={80} height={140}></Image>
                  </div>
                  <p className="font-bold text-red">Black Logo</p>
                </div>
                <div className="flex-col p-2">
                  <div className="w-64 h-40 p-3 text-center rounded-lg shadow-lg bg-slate-100">
                    <Image src={url} width={80} height={140}></Image>
                  </div>
                  <p className="font-bold text-red">Original Logo</p>
                </div>
              </div>
            </ScrollContainer>
          </div>
        </div>
        <br />
        <Button
          variant="contained"
          component="label"
          className="green-gradient text-white w-[100%]"
        >
          Upload Logo
          <input
            hidden
            accept="image/svg+xml"
            multiple
            type="file"
            onChange={(e) => handleChange(e)}
          />
        </Button>
        <br />
        <br />
        <b>3. Place a Bid. Minimum Starting Bid $10.00</b>
        <br />
        <br />
        <div className="p-8 text-xs bg-black rounded-md">
          <div className="w-full text-center">
            <p className="text-white">Top Bid $10.00</p>
          </div>
          <br />
          <div className="flex justify-between p-3 bg-white rounded-lg">
            <IconButton onClick={decrementPrice}>
              <RemoveIcon className="text-[#050f2f]"></RemoveIcon>
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
              <AddIcon className="text-[#050f2f]"></AddIcon>
            </IconButton>
          </div>
          <div className="w-full p-3 text-center">
            <p className="text-white"> Lowest Bid $10.00</p>
          </div>
        </div>
        <div className="py-4 text-center">
          <span className="text-gray-500 font-[600] text-xl">
            Total Cost + Fees:
          </span>
          <br />
          <br />
          <p className="text-3xl font-bold text-red">${citiesLength} VXD</p>
          <br />
        </div>
        <Button
          className="green-gradient !text-white w-full"
          variant="contained"
        >
          Place a Bid Now
        </Button>
        <br />
        <br />
        <p className="py-4">
          Thank you for choosing to collaborate with Artist <b>Drake</b> by
          becoming a brand sponsor.
          <br />
          <br />
          If your logo is approved, it will appear next to every single video
          and audio content of that particular music artist brand in the
          locations you have selected based on the winning top Bid.
          <br />
          <br />
          You could then proceed to add more advertising content such as video
          commercials or links to you business pages viewers can navigate to.{" "}
        </p>
      </div>
    </>
  );
};
