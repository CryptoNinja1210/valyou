import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import {
  TextField,
  Box,
  Card,
  CardContent,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextareaAutosize,
  Button,
  IconButton,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { ConnectingAirportsOutlined } from "@mui/icons-material";

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

const AudioFileds = () => {
  const [earningValue, setEarningValue] = React.useState("yes");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEarningValue((event.target as HTMLInputElement).value);
  };

  return (
    <div>
      <p>
        <b>Song Title</b>
      </p>
      <InputBox />
      <p>
        <b>Music Artist Name</b>
      </p>
      <InputBox />
      <p>
        <b>Featuring</b>
      </p>
      <InputBox />
      <p>
        <b>Produced by</b>
      </p>
      <InputBox />
      <p>
        <b>Song Written by</b>
      </p>
      <InputBox />
      <p>
        <b>Lyrics</b>
      </p>
      <InputBox />
      <br />
      <UploadCard text="Tap to Upload" />
      <br />
      <UploadCard text="Tap to Upload Image / Song Cover" />
      <br />
      <p>
        <b>
          Do you own the songs master in its entirely and with all of tis
          copyrights; and are you entitled to 100% of earnings?
        </b>
      </p>
      <br />
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="yes"
        name="radio-buttons-group"
        value={earningValue}
        onChange={handleChange}
      >
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel
          value="no"
          control={<Radio />}
          label="No (Co-Owner)"
        />
      </RadioGroup>
      {earningValue == "no" ? <CoOwner /> : null}
    </div>
  );
};

const CoOwner = () => {
  const [invite, setInvite] = React.useState([inviteArr]);
  const [inviteCo, setInviteCo] = React.useState([inviteArr2]);

  var inviteArr = [];

  var inviteArr2 = [];

  function InviteArray() {
    var newInviteArr = [];

    newInviteArr = [
      <div key={1} className="w-full block">
        <div className="w-full">
          <p>
            <b>Co-Owner name in valyou x</b>
          </p>
          <br />
          <br />
          <InputBox />
        </div>
        <div className="w-full">
          <p>
            <b>Percent revenue they entitled to (%)</b>
          </p>
          <InputBox />
        </div>
      </div>,
    ];
    setInvite((inviteArr) => [...inviteArr, newInviteArr]);
  }

  function InviteArrayCo() {
    var newInviteArr2 = [];
    newInviteArr2 = [
      <div key={2} className="lg:flex w-full block">
        <div className="w-full px-2">
          <p>
            <b>
              Enter email address. Please invite them to Valyou X to claim their
              earnings
            </b>
          </p>
          <InputBox />
        </div>
        <div className="w-full">
          <p>
            <b>Percent revenue they entitled to (%)</b>
          </p>
          <InputBox />
        </div>
      </div>,
    ];
    setInviteCo((inviteArr2) => [...inviteArr2, newInviteArr2]);
  }

  return (
    <div>
      <br />
      <p>
        <b>
          Who else collaborated with you on this song and is eligible for
          royalties or earnings?
        </b>
      </p>
      <br />
      <br />
      <p>
        <b>
          If they have an existing Valyou X account, could you please enter
          their information select their profile?
        </b>
      </p>

      {invite.map((val, key) => {
        return <div key={key}>{val}</div>;
      })}
      <div className=" w-full block">
        <div className="w-full">
          <p>
            <b>Co-Owner name in valyou x</b>
          </p>
          <br />
          <br />
          <InputBox />
        </div>
        <div className="w-full">
          <p>
            <b>Percent revenue they entitled to (%)</b>
          </p>
          <InputBox />
        </div>
      </div>

      <br />
      <p>
        Do you have another Co-Owner?
        <IconButton aria-label="Example" onClick={InviteArray}>
          <AddCircleOutlineIcon></AddCircleOutlineIcon>
        </IconButton>{" "}
      </p>
      <br />
      <br />
      <p>
        <b>
          Please invite them to Valyou X to claim their earnings if they
          don&apos;t have a Valyou X account,
        </b>
      </p>
      <br />

      {inviteCo.map((val, key) => {
        return <div key={key}>{val}</div>;
      })}

      <div className="lg:flex w-full block">
        <div className="w-full px-2">
          <p>
            <b>
              Enter email address. Please invite them to Valyou X to claim their
              earnings
            </b>
          </p>
          <InputBox />
        </div>
        <div className="w-full">
          <p>
            <b>Percent revenue they entitled to (%)</b>
          </p>
          <InputBox />
        </div>
      </div>
      <br />
      <p>
        Do you have another Co-Owner?
        <IconButton onClick={InviteArrayCo} aria-label="Example">
          <AddCircleOutlineIcon></AddCircleOutlineIcon>
        </IconButton>{" "}
      </p>
    </div>
  );
};

const VideoFields = () => {
  return (
    <div>
      <p>
        <b>Description</b>
      </p>
      <TextareaAutosize
        className="border border-gray-400	border-solid border-2 w-full pl-2"
        minRows={5}
        placeholder="Video Description"
      />
      <br />
      <UploadCard text="Tap to Upload" />
      <br />
      <p>
        <b>
          Do you own the songs master in its entirely and with all of tis
          copyrights; and are you entitled to 100% of earnings?
        </b>
      </p>
      <br />
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="yes"
        name="radio-buttons-group"
      >
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel
          value="no"
          control={<Radio />}
          label="No (Co-Owner)"
        />
      </RadioGroup>
    </div>
  );
};

export const UploadComponent = () => {
  const [track, setTrack] = React.useState("audio");

  const handleChange = (event: SelectChangeEvent) => {
    setTrack(event.target.value);
  };

  return (
    <div className="p-2">
      <p>
        <b>Are you uploading a music video or audio track?</b>
      </p>
      <br />
      <FormControl className="py-2" sx={{ width: "100%" }}>
        <Select
          value={track}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="audio">Audio Track</MenuItem>
          <MenuItem value="video">Video Track</MenuItem>
        </Select>
      </FormControl>
      {track == "audio" ? <AudioFileds /> : <VideoFields />}
      <br />

      <Button variant="contained" className="bg-black text-pink-500">
        Submit
      </Button>
    </div>
  );
};
