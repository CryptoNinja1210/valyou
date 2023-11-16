import { Button, IconButton } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ScrollContainer from "react-indiana-drag-scroll";
import Image from "next/image";
import Select from "react-select";

export const BidNowComponent = () => {
  var ary: any = [
    {
      image: "/assets/mcdonald.png",
      name: "McDonalds",
      minbid: "Lowest Bid",
      timeRem: "Time Remaining",
      avl: "$10",
      min: "$50",
      time: "24 hr :00 mins",
      btn: "Bid Now",
      color: "green-gradient",
    },
    {
      image: "/assets/mcdonald.png",
      name: "McDonalds",
      minbid: "Lowest Bid",
      timeRem: "Time Remaining",
      avl: "$10",
      min: "$40",
      time: "24 hr :00 mins",
      btn: "Bid Now",
      color: "bg-black",
    },
    {
      image: "/assets/mcdonald.png",
      name: "McDonalds",
      minbid: "Lowest Bid",
      timeRem: "Time Remaining",
      avl: "$10",
      min: "$35",
      time: "24 hr :00 mins",
      btn: "Bid Now",
      color: "green-gradient",
    },
    {
      image: "/assets/mcdonald.png",
      name: "McDonalds",
      minbid: "Lowest Bid",
      timeRem: "Time Remaining",
      avl: "$10",
      min: "$32",
      time: "24 hr :00 mins",
      btn: "Bid Now",
      color: "bg-black",
    },
    {
      image: "/assets/mcdonald.png",
      name: "McDonalds",
      minbid: "Lowest Bid",
      timeRem: "Time Remaining",
      avl: "$10",
      min: "$32",
      time: "24 hr :00 mins",
      btn: "Bid Now",
      color: "green-gradient",
    },
    {
      image: "/assets/mcdonald.png",
      name: "McDonalds",
      minbid: "Lowest Bid",
      timeRem: "Time Remaining",
      avl: "$10",
      min: "$28",
      time: "24 hr :00 mins",
      btn: "Bid Now",
      color: "bg-black",
    },
    {
      image: "/assets/mcdonald.png",
      name: "McDonalds",
      minbid: "Lowest Bid",
      timeRem: "Time Remaining",
      avl: "$10",
      min: "$26",
      time: "24 hr :00 mins",
      btn: "Bid Now",
      color: "green-gradient",
    },
    {
      image: "/assets/mcdonald.png",
      name: "McDonalds",
      minbid: "Lowest Bid",
      timeRem: "Time Remaining",
      avl: "$10",
      min: "$20",
      time: "24 hr :00 mins",
      btn: "Bid Now",
      color: "bg-black",
    },
    {
      image: "/assets/mcdonald.png",
      name: "McDonalds",
      minbid: "Lowest Bid",
      timeRem: "Time Remaining",
      avl: "$10",
      min: "$15",
      time: "24 hr :00 mins",
      btn: "Bid Now",
      color: "green-gradient",
    },
    {
      image: "/assets/valyoux_black_logo.svg",
      name: "Become a Sponsor",
      minbid: "Buy now",
      timeRem: "Available",
      avl: "",
      min: "$10",
      time: "",
      btn: "Sponsor",
      color: "bg-black",
    },
  ];

  const submitCity = () => {
    localStorage.setItem("city", selectedCities.join(", "));
  };

  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const [region, setRegion] = useState<any>("");
  const [countries, setCountries] = useState<any>([]);
  const [country, setCountry] = useState<any>("");
  const [state, setState] = useState<any>("");
  const [data, setData] = useState<any>([]);
  const [regionSelected, setRegionSelected] = useState<any>(false);
  const [selectedOption, setSelectedOption] = useState<any>("");
  const [selectedCities, setSelectedCities] = useState<any>([]);
  const handleCity = (selectedOptions) => {
    setSelectedCities(selectedOptions.map((option) => option.value));
  };
  useEffect(() => {
    setSelectedOption(selectedCities.join(", "));
  }, [selectedCities]);

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
    setSelectedOption(value);
    setRegionSelected(index);
    getCountries(value);
  };

  const states = data
    .filter((item) => item.country === country)
    .map((item) => item.subcountry)
    .filter((state, index, self) => self.indexOf(state) === index)
    .sort();

  const cities = data
    .filter((item) => item.country === country && item.subcountry === state)
    .map((item) => item.name)
    .filter((city, index, self) => self.indexOf(city) === index)
    .sort();

  const handleCountry = (value: any) => {
    setCountry(value?.value);
    setSelectedOption(value?.value);
  };

  const handleState = (value: any) => {
    setState(value?.value);
    setSelectedOption(value?.value);
  };

  return (
    <div className="p-2">
      <div
        onClick={() => localStorage.removeItem("open")}
        className="flex items-center ml-[-10px]"
      >
        <Link href="/videodetail">
          <IconButton>
            <KeyboardBackspaceIcon className="bg-black text-white p-1 rounded" />
          </IconButton>
        </Link>
      </div>
      <div>
        <div className="flex py-2">
          View Brand Sponsor for<b className="px-1">Drake</b>in
          <b>{selectedOption}</b>
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
            onChange={(value) => handleCountry(value)}
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
            onChange={handleState}
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
            onChange={handleCity}
            noOptionsMessage={() => "Please Select a State First"}
          />
        </div>
        <br />
        <Button
          variant="contained"
          className="green-gradient w-full"
          onClick={submitCity}
        >
          View Brand Sponsors
        </Button>
      </div>
      <br />
      <br />
      <>
        <div className="w-full">
          <ScrollContainer className="cursor-grab">
            <div className="flex w-full gap-6">
              {ary.map((item, key) => (
                <div key={key}>
                  <div
                    className={
                      item.color +
                      " shadow-lg w-64 h-40 rounded-lg p-3 text-center"
                    }
                  >
                    <Image
                      src="/assets/mcdoland-black.svg"
                      width={80}
                      height={140}
                    ></Image>
                  </div>
                  <div className="p-3 my-4 background-shadow">
                    <b className="text-red">
                      {key + 1}. {item.name}
                    </b>
                    <div className="flex items-center justify-between">
                      <p className="font-[500]">Top Bid</p>
                      <p>{item.min}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="font-[500]">{item.minbid}</p>
                      <p>{item.avl}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="font-[500]">{item.timeRem}</p>
                      <p>{item.time}</p>
                    </div>
                  </div>
                  <Link href="/bidding">
                    <Button
                      variant="contained"
                      className="green-gradient w-full text-white h-[30px]"
                    >
                      {item.btn}
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </ScrollContainer>
        </div>
        <br />
      </>
    </div>
  );
};
