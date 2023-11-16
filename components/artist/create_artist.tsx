import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import {
  TextField,
  Button,
  Box,
  Card,
  CardContent,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextareaAutosize,
  MenuItem,
} from "@mui/material";
import React, { useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";
import countryList from "react-select-country-list";
import { DropzoneArea } from "material-ui-dropzone";

const RadioButtons = () => {
  const userProfile = localStorage.getItem("userProfile");
  return (
    <RadioGroup
      aria-labelledby="demo-radio-buttons-group-label"
      defaultValue="yes"
      name="radio-buttons-group"
    >
      {userProfile === "Admin" ? (
        <>
          <FormControlLabel
            value="eoi"
            control={<Radio />}
            label="Express Interest (EOI)"
          />
          <FormControlLabel
            value="upcoming"
            control={<Radio />}
            label="Upcoming"
          />
          <FormControlLabel
            value="professional"
            control={<Radio />}
            label="Professional"
          />
          <FormControlLabel
            value="major"
            control={<Radio />}
            label="Major Artist"
          />
        </>
      ) : (
        <>
          <FormControlLabel
            value="eoi"
            control={<Radio />}
            label="Express Interest to List (EOI)"
          />
          <FormControlLabel
            disabled
            value="upcoming"
            control={<Radio />}
            label="Upcoming"
          />
          <FormControlLabel
            disabled
            value="professional"
            control={<Radio />}
            label="Professional"
          />
          <FormControlLabel
            disabled
            value="major"
            control={<Radio />}
            label="Major Artist"
          />
        </>
      )}
    </RadioGroup>
  );
};

const InputBox = () => {
  return (
    <div>
      <Box
        className="py-2"
        component="form"
        sx={{
          "& > :not(style)": { width: "100%" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" variant="outlined" />
      </Box>
    </div>
  );
};

const UploadCard = ({ text }) => {
  const [files, setFiles] = useState([]);

  const handleChange = (files) => {
    setFiles(files);
  };
  return (
    <DropzoneArea onChange={(event) => handleChange(event)} />
    //  <Card sx={{height:"120px",border:"1px solid gray"}}>
    //   <CardContent>
    //       <div className=' w-full h-full'>
    //       <p className='flex justify-center items-center h-[97px]'><b>{text}</b></p>
    //       </div>
    //       <input type="file"
    //             ref={hiddenFileInput}
    //             onChange={handleChange}

    //             accept="image/*"
    //             style={{ display: 'none' }} />
    //   </CardContent>
    //  </Card>
  );
};

const SelectBox = () => {
  const [value, setValue] = React.useState("dj");

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <FormControl className="py-2" sx={{ width: "100%" }}>
        <Select
          value={value}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="dj">DJ</MenuItem>
          <MenuItem value="rapper">Rapper</MenuItem>
          <MenuItem value="rapper">Singer</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export const CreateArtist = () => {
  const [countryCodes, setCountryCodes] = useState([]);
  const [value, setValue] = useState("Select Country");
  const [countryCode, setcountryCode] = React.useState("AU");
  const options = useMemo(() => countryList().getData(), []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setcountryCode(event.target.value);
  };
  const userProfile = localStorage.getItem("userProfile");

  useEffect(() => {
    getCountryDetails();
  }, []);

  useEffect(() => {
    if (options.length) {
      setValue("PK");
    }
  }, [options]);

  const getCountryDetails = () => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((res) => {
        const response = res.data.map((country) => ({
          value: `+${country.callingCodes[0]}`,
          flag: country.flag,
          name: country.name,
          code: country.alpha2Code,
        }));
        setCountryCodes(response);
      })
      .catch((err) => console.log({ err }));
  };
  const [stock, setStock] = useState("");
  const [market, setMarket] = useState("");
  const [dividend, setDividend] = useState("");
  const [currPrice, setCurrPrice] = useState("");
  const [totalSupply, setTotalSupply] = useState("");
  const [circulatingSupply, setCirculatingSupply] = useState("");
  const [artist, setArtist] = useState("");
  const [investors, setInvestors] = useState("");
  const [sellRestriction, setSellRestriction] = useState("");
  const [marketPrice, setMarketPrice] = useState("");
  const [sellLimit, setSellLimit] = useState("");

  return (
    <div className="p-3">
      <p className="text-pink-400">
        <b>Create Music Artist Brand / List on the Stock Market </b>
      </p>
      <br />
      <b>1. Category</b>
      <br />
      <br />
      <b>
        <p className="underline">
          Welcome to Valyou X Music Artist Brand Listing.
        </p>
        <br />
        Currently, you can only list your brand under the Expression of Interest
        category. Our brand listing team will contact you to determine which
        music artist brand listing category you are eligible to apply for.
        <br />
        <br />
        Please keep in mind that you may not be eligible to list until we
        complete our verification and evaluation process to determine your
        brand&apos;s eligibility.
      </b>
      <RadioButtons />
      <br />
      <b>2. Country</b>
      <br />
      <br />
      <Select
        className="w-full"
        id="outlined-select-currency"
        value={countryCode}
        onChange={handleChange}
      >
        {countryCodes.map((option, index) => (
          <MenuItem key={index} value={option.code}>
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
      <br />
      <b>
        3. What is the name of your music artist brand, influencer, or stage
        name? What do your fans refer to you as? This will be your music artist
        company&apos;s brand name registered & listed with Valyou X.
      </b>
      <br />
      <br />
      <InputBox />
      <br />
      <b>
        4. Profile Bio, Please tell us a little big about yourself and music.
      </b>
      <br />
      <br />
      <TextareaAutosize
        className="border border-gray-400 py-2 my-2	border-solid w-full pl-2"
        minRows={5}
        placeholder=" Description"
      />
      <br />
      <br />
      <b>5. Website link</b>
      <InputBox />
      <br />
      <b>Spotify</b>
      <InputBox />
      <br />
      <b>Sound Cloud</b>
      <InputBox />
      <br />
      <b>Apple Music</b>
      <InputBox />
      <br />
      <b>Youtube</b>
      <InputBox />
      <br />
      <b>Facebook</b>
      <InputBox />
      <br />
      <b>Instagram</b>
      <InputBox />
      <br />
      <b>
        6. Upload a photo with your name as the file name. Ensure the background
        is clear and only you are in focus.
      </b>
      <br />
      <br />
      <UploadCard text="Tap to Upload" />
      <br />
      {userProfile === "Admin" && (
        <>
          <b>7. Stock value ($)</b>
          <TextField
            sx={{ width: "100%" }}
            value={stock}
            onChange={(e) => setStock(e.target.value.replace(/\D/g, ""))}
          />
          <br />
          <br />
          <b>8. Market Value (cap) ($)</b>
          <TextField
            sx={{ width: "100%" }}
            value={market}
            onChange={(e) => setMarket(e.target.value.replace(/\D/g, ""))}
          />
          <br />
          <br />
          <b>9. Dividend Payments (%)</b>
          <TextField
            sx={{ width: "100%" }}
            value={dividend}
            onChange={(e) => setDividend(e.target.value.replace(/\D/g, ""))}
            inputProps={{ maxLength: 2 }}
          />{" "}
          <br />
          <br />
          <b>10. Current Price</b>
          <br />
          <TextField
            sx={{ width: "100%" }}
            value={currPrice}
            onChange={(e) => setCurrPrice(e.target.value.replace(/\D/g, ""))}
          />
          <br />
          <br />
          <b>11. Total Remaining Supply</b>
          <TextField
            sx={{ width: "100%" }}
            value={totalSupply}
            onChange={(e) => setTotalSupply(e.target.value.replace(/\D/g, ""))}
          />
          <br />
          <br />
          <b>12. Circulating Supply</b>
          <TextField
            sx={{ width: "100%" }}
            value={circulatingSupply}
            onChange={(e) =>
              setCirculatingSupply(e.target.value.replace(/\D/g, ""))
            }
          />
          <br />
          <br />
          <b>13. Artist (%)</b>
          <TextField
            sx={{ width: "100%" }}
            value={artist}
            onChange={(e) => setArtist(e.target.value.replace(/\D/g, ""))}
            inputProps={{ maxLength: 2 }}
          />
          <br />
          <br />
          <b>14. Music Fans Investors (%)</b>
          <TextField
            sx={{ width: "100%" }}
            value={investors}
            onChange={(e) => setInvestors(e.target.value.replace(/\D/g, ""))}
            inputProps={{ maxLength: 2 }}
          />
          <br />
          <br />
          <b>15. Sell Restrictions (number of stocks)</b>
          <TextField
            sx={{ width: "100%" }}
            value={sellRestriction}
            onChange={(e) =>
              setSellRestriction(e.target.value.replace(/\D/g, ""))
            }
          />
          <br />
          <br />
          <b>16. Market Maker Price (%)</b>
          <TextField
            sx={{ width: "100%" }}
            value={marketPrice}
            onChange={(e) => setMarketPrice(e.target.value.replace(/\D/g, ""))}
            inputProps={{ maxLength: 2 }}
          />
          <br />
          <br />
          <b>17. Sell Limit (%)</b>
          <TextField
            sx={{ width: "100%" }}
            value={sellLimit}
            onChange={(e) => setSellLimit(e.target.value.replace(/\D/g, ""))}
            inputProps={{ maxLength: 2 }}
          />
          <br />
          <br />
        </>
      )}
      <Button variant="contained" className="pinkGradient w-full">
        Submit
      </Button>
    </div>
  );
};
