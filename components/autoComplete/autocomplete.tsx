import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Avatar, Box, styled } from "@mui/material";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Link from "next/link";
import { selectedUserType } from "../../store/user";
import { useDispatch } from "react-redux";

const Text = styled((props: any) => <TextField {...props} />)(
  ({ theme }) => ({})
);

const useStyles = makeStyles({
  customTextField: {
    "& input::placeholder": {
      fontSize: "10.5px",
    },
  },
});

export const AutocompleteComponent = ({ openOptions, width, navigate }) => {
  const [selectedItem, setSelectedItem] = React.useState(0);
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleListItemClick = (value: string) => {
    dispatch(selectedUserType(value === "Music Artist" ? "Artist" : value));
  };

  return (
    <Autocomplete
      id="combo-box-demo"
      popupIcon={false}
      open={openOptions}
      options={top100Films}
      onChange={(event: any) =>
        setSelectedItem(Number(event.target?.dataset.optionIndex))
      }
      ListboxProps={{
        style: { maxHeight: "100vh", boxShadow: "none", border: "none" },
      }}
      renderOption={(props, option) =>
        navigate === true ? (
          <div onClick={() => handleListItemClick(option?.account)}>
            <Link
              href={
                option.account === "Music Artist"
                  ? "/artist"
                  : option.account === "Investor"
                  ? "/investor"
                  : option.account === "Business"
                  ? "/myBusiness"
                  : "/artist"
              }
            >
              <Box
                component="li"
                sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                {...props}
                className="flex items-center px-3 py-1 cursor-pointer"
              >
                <Avatar src={option.img} sx={{ width: 50, height: 50 }} />{" "}
                &nbsp;
                <div className="flex gap-1 flex-col pl-3">
                  <div className="font-[500] text-[12px] lg:text-[14px] customBlack">
                    {option.label}
                  </div>
                  <div className="flex items-center justify-between text-[10px] lg:text-[12px] mt-[-3px] w-[75vw] lg:w-72 customBlack">
                    <p>{option.account}</p>
                    <p>{option.type}</p>
                  </div>
                </div>
              </Box>
            </Link>
          </div>
        ) : (
          <Box
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
            className="flex items-center px-3 py-1 cursor-pointer"
          >
            <Avatar src={option.img} sx={{ width: 50, height: 50 }} /> &nbsp;
            <div className="flex gap-1 flex-col pl-3">
              <div className="font-[500] text-[12px] lg:text-[14px] customBlack">
                {option.label}
              </div>
              <div className="flex items-center justify-between text-[10px] lg:text-[12px] mt-[-3px] w-[75vw] lg:w-72 customBlack">
                <p>{option.account}</p>
                <p>{option.type}</p>
              </div>
            </div>
          </Box>
        )
      }
      renderInput={(params) => {
        return (
          <div
            className={`${width} ml-[-16px] text-[20px] lg:px-2 px-3 mb-[-2px]`}
          >
            <Text
              classes={{ root: classes.customTextField }}
              {...params}
              inputProps={{
                ...params.inputProps,
              }}
              variant="standard"
              placeholder="Search for music artist, investors & business profiles on valyou x"
            />
          </div>
        );
      }}
    />
  );
};

const top100Films = [
  {
    label: "Ghayyas Mubashir",
    img: "https://avatars.githubusercontent.com/u/10868787?v=4",
    account: "Business",
    type: "Developer",
  },
  ,
  {
    label: "Bobby Oparaocha",
    img: "https://startup.info/wp-content/uploads/2021/04/1526560396264.jpg",
    account: "Music Artist",
    type: "Rapper",
  },
  {
    label: "Drake",
    img: "https://www.geo.tv/assets/uploads/updates/2022-09-04/437959_6865361_updates.jpg",
    account: "Music Artist",
    type: "Rapper",
  },
  {
    label: "Atif Aslam",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRANVpKWIgI58IFtqoQCw9hX7RPpV-0HNWALA&usqp=CAU",
    account: "Music Artist",
    type: "Singer",
  },
  {
    label: "Sahir Azeem Chaudary",
    img: "https://pbs.twimg.com/profile_images/1075665599227932672/GHr-4BwY_400x400.jpg",
    account: "Music Artist",
    type: "Singer",
  },
  {
    label: "Bagga",
    img: "https://starsunfolded.com/wp-content/uploads/2020/06/Gagan-Arora.jpg",
    account: "Music Artist",
    type: "DJ",
  },
  {
    label: "Justin Bieber",
    img: "https://i.ytimg.com/vi/kffacxfA7G4/maxresdefault.jpg",
    account: "Music Artist",
    type: "Singer",
  },
  {
    label: "Charles Kellers",
    img: "https://image.cnbcfm.com/api/v1/image/107116152-16627367932022-09-09t151223z_891698929_rc2qdw9joceg_rtrmadp_0_britain-royals-queen.jpeg?v=1662803397&w=929&h=523",
    account: "Investor",
    type: "Music Fan",
  },
  {
    label: "Barack Obama",
    img: "https://www.whitehouse.gov/wp-content/uploads/2021/01/44_barack_obama.jpg",
    account: "Investor",
    type: "Music Fan",
  },
  {
    label: "Mary J. Blige",
    img: "https://i.ytimg.com/vi/znlFu_lemsU/mqdefault.jpg",
    account: "Music Artist",
    type: "Singer",
  },
  {
    label: "Steven Tyler",
    img: "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-05/220525-steven-tyler-aerosmith-se-435p-467647.jpg",
    account: "Investor",
    type: "Music Fan",
  },
  {
    label: "Stevie Nicks",
    img: "https://i.guim.co.uk/img/media/070e07496d159dd5ecd0819abea65114a7fed783/0_8_2444_1466/master/2444.jpg?width=1300&quality=85&fit=max&s=afb1be38ac2ac490674643cdc532a4f8",
    account: "Music Artist",
    type: "Rapper",
  },
  {
    label: "Neha Kakkar",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Neha_Kakkar_Birthday_Bash.jpg/220px-Neha_Kakkar_Birthday_Bash.jpg",
    account: "Music Artist",
    type: "Singer",
  },
  {
    label: "Taylor Swift",
    img: "https://media.glamour.com/photos/618e9260d0013b8dece7e9d8/master/pass/GettyImages-1236509084.jpg",
    account: "Music Artist",
    type: "Singer",
  },
  {
    label: "McDonald",
    img: "data:image/png;base64,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",
    account: "Business",
    type: "Brand Sponsor",
  },
  {
    label: "Pepsi",
    img: "https://www.pepsi.com/en-us/uploads/images/social-share.jpg?mtime=20180110134930",
    account: "Business",
    type: "Brand Sponsor ",
  },
  {
    label: "Coca Cola",
    img: "https://us.coca-cola.com/content/dam/nagbrands/us/coke/en/participating-brands/logo_coke.jpg",
    account: "Business",
    type: "Brand Sponsor",
  },
  {
    label: "Sprite",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6GVusXoBX3hxCV1jpZqOefGNvjdO6BZFWLQ&usqp=CAU",
    account: "Business",
    type: "Brand Sponsor ",
  },
  {
    label: "Mango World",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3xQs8HmLXZFRIXahTGoydZy9ifP6NFo-CZg&usqp=CAU",
    account: "Business",
    type: "Brand Sponsor",
  },
  {
    label: "Habbit",
    img: "https://www.citysearch.pk/uf/companies/6195/habitt-logo.jpg",
    account: "Business",
    type: "Brand Sponsor",
  },
  {
    label: "InterWood",
    img: "https://image.shutterstock.com/image-photo/logo-interwood-furniture-chain-on-600w-1839932521.jpg",
    account: "Business",
    type: "Brand Sponsor",
  },
  {
    label: "California Pizza",
    img: "http://www.citysearch.pk/UF/Companies/7503/california-pizza-logo.png",
    account: "Business",
    type: "Brand Sponsor ",
  },
  {
    label: "Pizza Hut",
    img: "data:image/png;base64,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",
    account: "Business",
    type: "Brand Sponsor ",
  },
  {
    label: "American Resturant",
    img: "https://eatbook.sg/wp-content/uploads/2021/06/Jojis-Diner-wide-angle.jpg",
    account: "Business",
    type: "Brand Sponsor ",
  },
  {
    label: "Friends Biryani",
    img: "https://i.ytimg.com/vi/dK5zIq_prfA/maxresdefault.jpg",
    account: "Business",
    type: "Brand Sponsor ",
  },
  {
    label: "",
    img: "https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg",
    account: "",
    type: "",
  },
];
