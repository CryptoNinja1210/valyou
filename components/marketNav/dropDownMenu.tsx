import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { selectedUserType } from "../../store/user";
import { useRouter } from "next/router";
import Link from "next/link";

const accountList = [
  { text: "Investor", image: "/assets/investor_icon.svg", link: "/investor" },
  { image: "/assets/artist_icon.svg", text: "Artist", link: "/artist" },
  { text: "Business", image: "/assets/business_icon.svg", link: "/myBusiness" },
  { text: "Admin", image: "/assets/admin_icon.svg", link: "/admin" },
];

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  selectedIndex: number;
  onClose: (value: string, index: number) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open, selectedIndex } = props;

  const handleClose = () => {
    onClose(selectedValue, selectedIndex);
  };

  const handleListItemClick = (value: string, key: number) => {
    onClose(value, key);
  };

  return (
    <Dialog className="h-screen" onClose={handleClose} open={open}>
      <div className="w-[325px]">
        <DialogTitle>Switch Account To</DialogTitle>
        <List sx={{ pt: 0 }}>
          {accountList.map((account, key) => (
            <Link href={account.link} key={key}>
              <ListItem
                button
                onClick={() => handleListItemClick(account.text, key)}
                key={key}
              >
                <div className="flex">
                  <ListItemAvatar>
                    <Image
                      src={account.image}
                      width={30}
                      height={30}
                      alt="artist icon"
                    ></Image>
                  </ListItemAvatar>
                  <ListItemText primary={account.text} />
                </div>
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
    </Dialog>
  );
}

export const DropDownMenu = ({ image }) => {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("Investor");
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const router = useRouter();

  const dispatch = useDispatch();

  const changeUserProfile = ({ value }) => {
    switch (value) {
      case "Artist":
        router.push("/artist");
        localStorage.setItem("userProfile", "Artist");
        break;
      case "Business":
        router.push("/myBusiness");
        localStorage.setItem("userProfile", "Business");
        break;
      case "Investor":
        router.push("/investor");
        localStorage.setItem("userProfile", "Investor");
        break;
      case "Admin":
        router.push("/admin");
        localStorage.setItem("userProfile", "Admin");
        break;
      default:
        break;
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: any, index: number) => {
    setOpen(false);
    setSelectedValue(value);
    setSelectedIndex(index);
    dispatch(selectedUserType(value));
    changeUserProfile({ value });
  };

  return (
    <>
      <div onClick={handleClickOpen} className="mt-1">
        <Image src={image} width={30} height={30} alt="artist icon"></Image>
      </div>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        selectedIndex={selectedIndex}
        onClose={handleClose}
      />
    </>
  );
};
