import { Box, Button, Card, CardContent, TextField } from "@mui/material";
import { DropzoneArea } from "material-ui-dropzone";
import { useState } from "react";

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

const UploadCard = () => {
  const [files, setFiles] = useState([]);

  const handleChange = (files) => {
    setFiles(files);
  };
  return <DropzoneArea onChange={(event) => handleChange(event)} />;
};
export const Academy = () => {
  return (
    <div>
      <h3>
        <b>Welcome to ValyouX Academy, Upload a video of how to use this app</b>
      </h3>
      <br />
      <p>
        <b>Add Input for video</b>
      </p>
      <InputBox />
      <UploadCard />
      <br />
      <Button variant="contained" className="w-full bg-black text-white">
        Upload
      </Button>
    </div>
  );
};
