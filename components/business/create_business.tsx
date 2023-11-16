import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ReactSelect from "react-select";
import {
  TextField,
  Button,
  Box,
  Card,
  CardContent,
  TextareaAutosize,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import Image from "next/image";

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
  return (
    <Card sx={{ height: "120px", border: "1px solid gray" }}>
      <CardContent>
        <div className=" w-full h-full">
          <p className="flex justify-center items-center h-[97px]">
            <b>{text}</b>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

const SelectBox = () => {
  const [value, setValue] = React.useState("Actor");

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ width: "100%", padding: "10px 0" }}>
        <Select
          value={value}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="Actor">Actor</MenuItem>
          <MenuItem value="Arranger">Arranger</MenuItem>
          <MenuItem value="Art Director">Art Director</MenuItem>
          <MenuItem value="Audio Engineer">Audio Engineer</MenuItem>
          <MenuItem value="Audiologist">Audiologist</MenuItem>
          <MenuItem value="Brand Sponsor">Brand Sponsor</MenuItem>
          <MenuItem value="Choreographer">Choreographer</MenuItem>
          <MenuItem value="Composer">Composer</MenuItem>
          <MenuItem value="Conductor">Conductor</MenuItem>
          <MenuItem value="Disc Jockey">Disc Jockey</MenuItem>
          <MenuItem value="Designer">Designer</MenuItem>
          <MenuItem value="Drummer">Drummer</MenuItem>
          <MenuItem value="Film Score Composer">Film Score Composer</MenuItem>
          <MenuItem value="Film Director">Film Director</MenuItem>
          <MenuItem value="Film Producer">Film Producer</MenuItem>
          <MenuItem value="Freelance Writer">Freelance Writer</MenuItem>
          <MenuItem value="Guitar Tech">Guitar Tech</MenuItem>
          <MenuItem value="Guitarist">Guitarist</MenuItem>
          <MenuItem value="Lighting Designer">Lighting Designer</MenuItem>
          <MenuItem value="Lyricist">Lyricist</MenuItem>
          <MenuItem value="Minister of Religion">Minister of Religion</MenuItem>
          <MenuItem value="Mix Engineer">Mix Engineer</MenuItem>
          <MenuItem value="Music Educator">Music Educator</MenuItem>
          <MenuItem value="Music Electronics Technician">
            Music Electronics Technician
          </MenuItem>
          <MenuItem value="Music Executive">Music Executive</MenuItem>
          <MenuItem value="Music Journalist">Music Journalist</MenuItem>
          <MenuItem value="Music Therapist">Music Therapist</MenuItem>
          <MenuItem value="Music Editor">Music Editor</MenuItem>
          <MenuItem value="Music Manager">Music Manager</MenuItem>
          <MenuItem value="Model">Model</MenuItem>
          <MenuItem value="Orchestrator">Orchestrator</MenuItem>
          <MenuItem value="Pianist">Pianist</MenuItem>
          <MenuItem value="Photographer">Photographer</MenuItem>
          <MenuItem value="Production Manager (Band)">
            Production Manager (Band)
          </MenuItem>
          <MenuItem value="Promoter">Promoter</MenuItem>
          <MenuItem value="Publicist">Publicist</MenuItem>
          <MenuItem value="Radio Personality">Radio Personality</MenuItem>
          <MenuItem value="Record Label">Record Label</MenuItem>
          <MenuItem value="Record Producer">Record Producer</MenuItem>
          <MenuItem value="Saxophonist">Saxophonist</MenuItem>
          <MenuItem value="Session Musician">Session Musician</MenuItem>
          <MenuItem value="Singer">Singer</MenuItem>
          <MenuItem value="Singer-Songwriter">Singer-Songwriter</MenuItem>
          <MenuItem value="Song Writer">Song Writer</MenuItem>
          <MenuItem value="Sound Editor">Sound Editor</MenuItem>
          <MenuItem value="Sound Engineer">Sound Engineer</MenuItem>
          <MenuItem value="Talent Agent">Talent Agent</MenuItem>
          <MenuItem value="Talent Manager">Talent Manager</MenuItem>
          <MenuItem value="Teacher">Teacher</MenuItem>
          <MenuItem value="Therapist">Therapist</MenuItem>
          <MenuItem value="Tour Manager">Tour Manager</MenuItem>
          <MenuItem value="Tour promoter">Tour promoter</MenuItem>
          <MenuItem value="Tutor">Tutor</MenuItem>
          <MenuItem value="Video Director">Video Director</MenuItem>
          <MenuItem value="Video Grapher">Video Grapher</MenuItem>
          <MenuItem value="Voice Actor">Voice Actor</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export const CreateBusinessComponent = () => {
  const [url, setUrl] = useState("/assets/mcdoland-black.svg");
  const handleChangeLogo = (e) => {
    setUrl(URL.createObjectURL(e.target.files[0]));
  };
  const BusinessAccount = [
    { value: "Music Artist Account", label: "Music Artist Account" },
    { value: "Brand Sponsor Account", label: "Brand Sponsor Account" },
  ];
  const MusicTypes = [
    { value: "Actor", label: "Actor" },
    { value: "Arranger", label: "Arranger" },
    { value: "Art Director", label: "Art Director" },
    { value: "Audio Engineer", label: "Audio Engineer" },
    { value: "Audiologist", label: "Audiologist" },
    { value: "Brand Sponsor", label: "Brand Sponsor" },
    { value: "Choreographer", label: "Choreographer" },
    { value: "Composer", label: "Composer" },
    { value: "Conductor", label: "Conductor" },
    { value: "Disc Jockey", label: "Disc Jockey" },
    { value: "Designer", label: "Designer" },
    { value: "Drummer", label: "Drummer" },
    { value: "Film Score Composer", label: "Film Score Composer" },
    { value: "Film Director", label: "Film Director" },
    { value: "Film Producer", label: "Film Producer" },
    { value: "Freelance Writer", label: "Freelance Writer" },
    { value: "Guitar Tech", label: "Guitar Tech" },
    { value: "Guitarist", label: "Guitarist" },
    { value: "Lighting Designer", label: "Lighting Designer" },
    { value: "Lyricist", label: "Lyricist" },
    { value: "Minister of Religion", label: "Minister of Religion" },
    { value: "Mix Engineer", label: "Mix Engineer" },
    { value: "Music Educator", label: "Music Educator" },
    {
      value: "Music Electronics Technician",
      label: "Music Electronics Technician",
    },
    { value: "Music Executive", label: "Music Executive" },
    { value: "Music Journalist", label: "Music Journalist" },
    { value: "Music Therapist", label: "Music Therapist" },
    { value: "Music Editor", label: "Music Editor" },
    { value: "Music Manager", label: "Music Manager" },
    { value: "Model", label: "Model" },
    { value: "Orchestrator", label: "Orchestrator" },
    { value: "Pianist", label: "Pianist" },
    { value: "Photographer", label: "Photographer" },
    { value: "Production Manager (Band)", label: "Production Manager (Band)" },
    { value: "Promoter", label: "Promoter" },
    { value: "Publicist", label: "Publicist" },
    { value: "Radio Personality", label: "Radio Personality" },
    { value: "Record Label", label: "Record Label" },
    { value: "Record Producer", label: "Record Producer" },
    { value: "Saxophonist", label: "Saxophonist" },
    { value: "Session Musician", label: "Session Musician" },
    { value: "Singer", label: "Singer" },
    { value: "Singer-Songwriter", label: "Singer-Songwriter" },
    { value: "Song Writer", label: "Song Writer" },
    { value: "Sound Editor", label: "Sound Editor" },
    { value: "Sound Engineer", label: "Sound Engineer" },
    { value: "Talent Agent", label: "Talent Agent" },
    { value: "Talent Manager", label: "Talent Manager" },
    { value: "Teacher", label: "Teacher" },
    { value: "Therapist", label: "Therapist" },
    { value: "Tour Manager", label: "Tour Manager" },
    { value: "Tour promoter", label: "Tour promoter" },
    { value: "Tutor", label: "Tutor" },
    { value: "Video Director", label: "Video Director" },
    { value: "Video Grapher", label: "Video Grapher" },
    { value: "Voice Actor", label: "Voice Actor" },
  ];
  const BrandSponsors = [
    { value: "agriculture", label: "Agriculture" },
    { value: "apparel", label: "Apparel" },
    { value: "automotive", label: "Automotive" },
    { value: "banking", label: "Banking" },
    { value: "biotechnology", label: "Biotechnology" },
    { value: "chemicals", label: "Chemicals" },
    { value: "construction", label: "Construction" },
    { value: "consulting", label: "Consulting" },
    { value: "consumer_electronics", label: "Consumer Electronics" },
    { value: "education", label: "Education" },
    { value: "energy", label: "Energy" },
    { value: "entertainment", label: "Entertainment" },
    { value: "environmental_services", label: "Environmental Services" },
    { value: "financial_services", label: "Financial Services" },
    { value: "food_and_beverage", label: "Food and Beverage" },
    { value: "gaming", label: "Gaming" },
    { value: "healthcare", label: "Healthcare" },
    { value: "hospitality", label: "Hospitality" },
    { value: "information_technology", label: "Information Technology" },
    { value: "insurance", label: "Insurance" },
    { value: "internet_services", label: "Internet Services" },
    { value: "legal_services", label: "Legal Services" },
    { value: "manufacturing", label: "Manufacturing" },
    { value: "marketing_and_advertising", label: "Marketing and Advertising" },
    { value: "media", label: "Media" },
    { value: "mining", label: "Mining" },
    { value: "non_profit_organizations", label: "Non-profit Organizations" },
    { value: "pharmaceuticals", label: "Pharmaceuticals" },
    { value: "real_estate", label: "Real Estate" },
    { value: "retail", label: "Retail" },
    { value: "telecommunications", label: "Telecommunications" },
    { value: "transportation", label: "Transportation" },
    { value: "travel_and_tourism", label: "Travel and Tourism" },
    { value: "utilities", label: "Utilities" },
    { value: "aerospace", label: "Aerospace" },
    { value: "architecture", label: "Architecture" },
    { value: "art_and_design", label: "Art and Design" },
    { value: "beauty_and_cosmetics", label: "Beauty and Cosmetics" },
    { value: "e_commerce", label: "E-commerce" },
    { value: "event_planning", label: "Event Planning" },
    { value: "fitness_and_wellness", label: "Fitness and Wellness" },
    { value: "graphic_design", label: "Graphic Design" },
    { value: "home_improvement", label: "Home Improvement" },
    { value: "human_resources", label: "Human Resources" },
    { value: "interior_design", label: "Interior Design" },
    { value: "logistics", label: "Logistics" },
    { value: "photography", label: "Photography" },
    { value: "public_relations", label: "Public Relations" },
    { value: "sports_and_recreation", label: "Sports and Recreation" },
  ];
  const [selectedOption, setSelectedOption] = useState("") as any;
  const [showOptions, setShowOptions] = useState(true);
  const handleAccountType = (selectedOptions) => {
    setSelectedOption(selectedOptions);
    setShowOptions(false);
  };
  return (
    <div className="flex flex-col gap-3 p-3">
      <p className="text-red">
        <b>Create Business</b>
      </p>
      <br />
      <b>What type of business account would you like to create?</b>
      <ReactSelect
        isClearable={false}
        isSearchable={false}
        isDisabled={false}
        menuPortalTarget={document.body}
        styles={{
          control: (styles) => ({
            ...styles,
            height: "60px",
          }),
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
        options={BusinessAccount}
        onChange={handleAccountType}
      />
      <b>What is your business name?</b>
      {selectedOption.value === BusinessAccount[0].value ? (
        <ReactSelect
          isClearable={true}
          isSearchable={true}
          isDisabled={showOptions}
          menuPortalTarget={document.body}
          styles={{
            control: (styles) => ({
              ...styles,
              height: "60px",
            }),
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
          options={MusicTypes}
        />
      ) : (
        <ReactSelect
          isClearable={true}
          isSearchable={true}
          isDisabled={showOptions}
          menuPortalTarget={document.body}
          styles={{
            control: (styles) => ({
              ...styles,
              height: "60px",
            }),
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
          options={BrandSponsors}
        />
      )}
      <b>
        About your business - what is the purpose of your business or services
        you provide words 250 words.
      </b>
      <TextareaAutosize
        className="border-gray-400 py-2 my-2	border-solid border w-full pl-2 focus:border-none rounded"
        minRows={5}
        placeholder="Business Description"
      />
      <b>Website link</b>
      <InputBox />
      <b>Spotify</b>
      <InputBox />
      <b>Sound Cloud</b>
      <InputBox />
      <b>Apple Music</b>
      <InputBox />
      <b>Youtube</b>
      <InputBox />
      <b>Facebook</b>
      <InputBox />
      <b>Instagram</b>
      <InputBox />
      <b>
        Upload your logo. Name the file with your business name before you
        upload it.
        <span className="mb-10 text-sm text-red px-2">
          (This is Optional. You can upload your Brand Logo later.)
        </span>
      </b>
      <div className="my-10 background-shadow p-2">
        <div className="w-full mb-3">
          <ScrollContainer className="cursor-grab">
            <div className="flex md:justify-center mx-[-15px] w-full">
              <div className="p-2 flex-col">
                <div className="green-gradient shadow-lg w-64 h-40 rounded-lg p-3 text-center">
                  <Image src={url} width={80} height={140}></Image>
                </div>
                <p className="font-bold px-2 text-red">White Logo</p>
              </div>
              <div className="p-2 flex-col">
                <div className="bg-black shadow-lg w-64 h-40 rounded-lg p-3 text-center">
                  <Image src={url} width={80} height={140}></Image>
                </div>
                <p className="font-bold text-red">Black Logo</p>
              </div>
              <div className="p-2 flex-col">
                <div className="w-64 bg-slate-100 shadow-lg h-40 rounded-lg p-3 text-center">
                  <Image src={url} width={80} height={140}></Image>
                </div>
                <p className="font-bold text-red">Original Logo</p>
              </div>
            </div>
          </ScrollContainer>
        </div>
        <Button
          variant="contained"
          component="label"
          className="!bg-black text-white w-[100%]"
        >
          Upload Logo
          <input
            hidden
            accept="image/svg+xml"
            multiple
            type="file"
            onChange={(e) => handleChangeLogo(e)}
          />
        </Button>
      </div>
      <Button variant="contained" className="pinkGradient">
        Submit
      </Button>
    </div>
  );
};
