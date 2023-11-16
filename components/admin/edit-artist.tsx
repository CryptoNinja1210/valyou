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
  return (
    <RadioGroup
      aria-labelledby="demo-radio-buttons-group-label"
      defaultValue="yes"
      name="radio-buttons-group"
    >
      <FormControlLabel value="eoi" control={<Radio />} label="EOI Profile" />
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

export const EditArtistComponent = () => {
  const [countryCodes, setCountryCodes] = useState([]);
  const [value, setValue] = useState("Select Country");
  const [countryCode, setcountryCode] = React.useState("AU");
  const options = useMemo(() => countryList().getData(), []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setcountryCode(event.target.value);
  };

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
  return (
    <div className="p-3">
      <p className="text-pink-400">
        <b>Edit Artist</b>
      </p>
      <br />
      <p className="text-xs">
        What artist category do you think that are you applying for please note
        you may not yet currently be eligible
      </p>
      <RadioButtons />
      <p>
        <b>Country</b>
      </p>
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
      <p>
        <b>
          What is your brand, music artist, influencer or stage name. What do fans call you? This will be your company brand business name that is or will be registered.
        </b>
      </p>
      <InputBox />
         <p>
        <b>
            Are you a Rapper, Singer or DJ?        
        </b>
      </p>
      <Select
        className="w-full"
        id="outlined-select-currency"
        value="singer"
      >
        
          <MenuItem value="singer">
            Singer
          </MenuItem>
            <MenuItem  value="dj">
            Dj
          </MenuItem>
             <MenuItem  value="rapper">
            Rapper
          </MenuItem>
       
      </Select>
      <p>
        <b>
          Profile Bio, Please tell us a little big about yourself and music.
        </b>
      </p>
      <TextareaAutosize
        className="border border-gray-400 py-2 my-2	border-solid border-2 w-full pl-2"
        minRows={5}
        placeholder=" Description"
      />
      <br />
      <p>
        <b>Website link</b>
      </p>
      <InputBox />
      <p>
        <b>Spotify</b>
      </p>
      <InputBox />
      <p>
        <b>Sound Cloud</b>
      </p>
      <InputBox />
      <p>
        <b>Apple Music</b>
      </p>
      <InputBox />
      <p>
        <b>Youtube</b>
      </p>
      <InputBox />
      <p>
        <b>Facebook</b>
      </p>
      <InputBox />
      <p>
        <b>Instagram</b>
      </p>
      <InputBox />
      <p>
        upload your photo. Please name the file with your name. Make sure there
        is nothing in the background picture we want the spot light to be on you
      </p>
      <UploadCard text="Tap to Upload" />
      <br />
       <p>
        <b>Stock value ($)</b>
      </p>
      <InputBox />
       <br />
          <p>
        <b>Market Value (cap) ($)</b>
      </p>
      <InputBox />
       <br />
        <p>
        <b>Dividend Payments (%)</b>
      </p>
      <InputBox />
       <br />
          <p>
        <b>Current Price</b>
      </p>
      <InputBox />
       <br />
        <p>
        <b>Total Remaining Supply</b>
      </p>
      <InputBox />
       <br />
            <p>
        <b>Circulating Supply</b>
      </p>
      <InputBox />
       <br />
     <p>
        <b>Artist (%)</b>
      </p>
      <InputBox />
       <br />
            <p>
        <b>Music Fans Investors (%)</b>
      </p>
      <InputBox />
       <br />
               <p>
        <b>Sell Restrictions (number of stocks)</b>
      </p>
      <InputBox />
       <br />
                     <p>
        <b>Market Maker Price(%)</b>
      </p>
      <InputBox />
       <br />
                       <p>
        <b>Sell Limit(%)</b>
      </p>
      <InputBox />
       <br />
      <Button variant="contained" className="pinkGradient">
        Submit
      </Button>
    </div>
  );
};
