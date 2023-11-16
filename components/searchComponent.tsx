import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

export const SearchComponent = () => {
  return (
    <TextField
      size="small"
      className="lg:w-96 w-full inputRounded m-0 p-0"
      placeholder="Search for Products"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};
