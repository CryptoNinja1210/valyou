import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
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
  Avatar,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { AutocompleteComponent } from "../autoComplete/autocomplete";

const InputBox = () => {
  const [input, setInput] = React.useState<number>();
  const onChange = (e) => {
    setInput(e.target.value.replace(/\D/g, ""));
  };
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { width: "100%" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          variant="outlined"
          value={input}
          onChange={(e) => onChange(e)}
          inputProps={{ maxLength: 2 }}
        />
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
      <br />
      <b>Song Audio Title</b>
      <InputBox />
      <br />
      <b>Music Artist Name</b>
      <InputBox />
      <br />
      <b>Featuring</b>
      <InputBox />
      <br />
      <b>Produced by</b>
      <InputBox />
      <br />
      <b>Song Written by</b>
      <InputBox />
      <br />
      <b>Lyrics</b>
      <InputBox />
      <br />
      <br />
      <UploadCard text="Tap to Upload" />
      <br />
      <UploadCard text="Tap to Upload Image / Song Cover" />
      <br />
      <b>
        Do you have full ownership of the song&#39;s master, including all of
        its copyrights, and do you have a right to 100% of the proceeds?
      </b>
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

  const CoOwner = () => {
    return (
      <>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-helper-label"></InputLabel>
          <Select defaultValue="" placeholder="Select Investors on Valyou X">
            <MenuItem value={10}>
              <div className="flex items-center">
                <Avatar
                  className="!w-[26px] !h-[24px]"
                  alt="Travis Howard"
                  src="/assets/drakeDp.png"
                ></Avatar>
                &nbsp; Bobby
              </div>
            </MenuItem>
            <MenuItem value={20}>
              <div className="flex items-center">
                <Avatar
                  className="!w-[26px] !h-[24px]"
                  alt="Travis Howard"
                  src="/assets/drakeDp.png"
                ></Avatar>
                &nbsp; Bobby
              </div>
            </MenuItem>
            <MenuItem value={30}>
              <div className="flex items-center">
                <Avatar
                  className="!w-[26px] !h-[24px]"
                  alt="Travis Howard"
                  src="/assets/drakeDp.png"
                ></Avatar>
                &nbsp; Bobby
              </div>
            </MenuItem>
          </Select>
        </FormControl>
      </>
    );
  };

  function InviteArray() {
    var newInviteArr = [];

    newInviteArr = [
      <div key={1}>
        <b>Do they have existing Valyou X account?</b>
        <br />
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="yes"
          name="radio-buttons-group"
          value={account}
          onChange={handleChange}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>

        {account === "yes" ? (
          <>
            <div className="my-5">
              <div className="mb-10 font-[700] text-red">
                If they have an existing Valyou X account, could you please
                select their profile?
              </div>
              <div className="w-full flex flex-col gap-5">
                <div className="w-full flex flex-col gap-2">
                  <b>1. Co-Owner name in Valyou X</b>
                  <div className="lg:hidden rounded border-[1px] pt-4 pl-[3px] border-black">
                    <AutocompleteComponent
                      openOptions={undefined}
                      width="w-[102vw]"
                      navigate={false}
                    />
                  </div>
                  <div className="hidden lg:block rounded border-[1px] pt-4 pl-[10px] border-black">
                    <AutocompleteComponent
                      openOptions={undefined}
                      width="w-[99vw]"
                      navigate={false}
                    />
                  </div>
                </div>
                <div className="w-full flex flex-col gap-2">
                  <b>2. Percent revenue they entitled to (%)</b>
                  <InputBox />
                </div>
              </div>
            </div>
            <p className="font-[700] my-5 px-2">
              Do you have another Co-Owner?
              <IconButton aria-label="Example" onClick={InviteArray}>
                <AddCircleOutlineIcon></AddCircleOutlineIcon>
              </IconButton>
            </p>
          </>
        ) : account === "no" ? (
          <>
            <div className="py-10 font-[700] text-red">
              Please invite them to Valyou X to claim their earnings if they
              don&apos;t have a Valyou X account,
            </div>
            <div className="w-full flex flex-col gap-5">
              <div className="w-full">
                <b>
                  1. Enter email address to invite them to Valyou X to claim
                  their earnings
                </b>
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
              <div className="w-full flex flex-col gap-2">
                <b>2. Percent revenue they entitled to (%)</b>
                <InputBox />
              </div>
            </div>
            <p className="font-[700] my-5 px-2">
              Do you have another Co-Owner?
              <IconButton aria-label="Example" onClick={InviteArray}>
                <AddCircleOutlineIcon></AddCircleOutlineIcon>
              </IconButton>
            </p>
          </>
        ) : (
          <></>
        )}
      </div>,
    ];
    setInvite((inviteArr) => [...inviteArr, newInviteArr]);
  }

  function InviteArrayCo() {
    var newInviteArr2 = [];
    newInviteArr2 = [
      <div key={2} className="lg:flex w-full block">
        <div className="w-full">
          <b>
            Enter email address. Please invite them to Valyou X to claim their
            earnings
          </b>
          <InputBox />
        </div>
        <br />
        <div className="w-full flex flex-col gap-2">
          <b>Percent revenue they entitled to (%)</b>
          <InputBox />
          <br />
        </div>
      </div>,
    ];
    setInviteCo((inviteArr2) => [...inviteArr2, newInviteArr2]);
  }
  const [account, setAccount] = React.useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAccount((event.target as HTMLInputElement).value);
  };
  return (
    <div>
      <br />
      <b>
        Who else collaborated with you on this song and is eligible for
        royalties or earnings?
      </b>
      <br />
      <br />
      <b>Do they have existing Valyou X account?</b>
      <br />
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="yes"
        name="radio-buttons-group"
        value={account}
        onChange={handleChange}
      >
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="no" control={<Radio />} label="No" />
      </RadioGroup>

      {account === "yes" ? (
        <>
          <div className="my-5">
            <div className="mb-10 font-[700] text-red">
              If they have an existing Valyou X account, could you please select
              their profile?
            </div>
            <div className="w-full flex flex-col gap-5">
              <div className="w-full flex flex-col gap-2">
                <b>1. Co-Owner name in Valyou X</b>
                <div className="lg:hidden rounded border-[1px] pt-4 pl-[3px] border-black">
                  <AutocompleteComponent
                    openOptions={undefined}
                    width="w-[102vw]"
                    navigate={false}
                  />
                </div>
                <div className="hidden lg:block rounded border-[1px] pt-4 pl-[10px] border-black">
                  <AutocompleteComponent
                    openOptions={undefined}
                    width="w-[99vw]"
                    navigate={false}
                  />
                </div>
              </div>
              <div className="w-full flex flex-col gap-2">
                <b>2. Percent revenue they entitled to (%)</b>
                <InputBox />
              </div>
            </div>
          </div>
          <p className="font-[700] my-5 px-2">
            Do you have another Co-Owner?
            <IconButton aria-label="Example" onClick={InviteArray}>
              <AddCircleOutlineIcon></AddCircleOutlineIcon>
            </IconButton>
          </p>
        </>
      ) : account === "no" ? (
        <>
          <div className="py-10 font-[700] text-red">
            Please invite them to Valyou X to claim their earnings if they
            don&apos;t have a Valyou X account,
          </div>
          <div className="w-full flex flex-col gap-5">
            <div className="w-full">
              <b>
                1. Enter email address to invite them to Valyou X to claim their
                earnings
              </b>
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
            <div className="w-full flex flex-col gap-2">
              <b>2. Percent revenue they entitled to (%)</b>
              <InputBox />
            </div>
          </div>
          <p className="font-[700] my-5 px-2">
            Do you have another Co-Owner?
            <IconButton aria-label="Example" onClick={InviteArray}>
              <AddCircleOutlineIcon></AddCircleOutlineIcon>
            </IconButton>
          </p>
        </>
      ) : (
        <></>
      )}
      {invite.map((val, key) => {
        return <div key={key}>{val}</div>;
      })}
    </div>
  );
};

const VideoFields = () => {
  const [earningValue, setEarningValue] = React.useState("yes");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEarningValue((event.target as HTMLInputElement).value);
  };
  return (
    <div>
      <br />
      <p>
        <b>Song Video Title</b>
      </p>
      <br />
      <TextareaAutosize
        className="border-gray-400	border-solid border-2 w-full pl-2"
        minRows={5}
        placeholder="Video Description"
      />
      <br />
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

      <Button variant="contained" className="bg-black text-pink-500 w-full">
        Submit
      </Button>
    </div>
  );
};
