import { Button, Drawer, MenuItem } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import React from "react";
const drawerWidth = 340;

const GetItems = ({ isOpen, handleClose }) => {
  return (
    <Drawer
      sx={{
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
      anchor="left"
      open={isOpen}
      onClose={handleClose}
    >
      <Link href="/">
        <span className="block lg:hidden items-center py-6">
          <Image
            src="/assets/logo_black.svg"
            width={180}
            height={38}
            alt="valyoux logo"
          />
        </span>
      </Link>
      <Link href="/">
        <span className="hidden lg:block items-center py-5  ml-[10px]">
          <Image
            src="/assets/logo_black.svg"
            width={200}
            height={50}
            alt="valyoux logo"
          />
        </span>
      </Link>
      <div className="flex flex-col gap-4 text-[#050f2f] px-6">
        <Link href="/pricing">
          <span className="text-lg font-bold cursor-pointer">
            Token Subscription presale
          </span>
        </Link>
        <Link href="/signup">
          <span className="text-lg font-bold cursor-pointer">
            Login / sign up
          </span>
        </Link>
        <Link href="/">
          <span className="text-lg font-bold cursor-pointer">Home</span>
        </Link>
        <Link href="/market">
          <span className="text-lg font-bold cursor-pointer">Market</span>
        </Link>
        <Link href="/market">
          <span className="text-lg font-bold cursor-pointer">Contact us</span>
        </Link>
      </div>
    </Drawer>
  );
};

const NavComponent = () => {
  const [isOpen, setOpen] = React.useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-white border-gray-200 px-2  py-2.5 rounded">
        <div className="flex justify-between items-center mx-1">
          <Link href="/">
            <span className="flex lg:hidden items-center ml-[-10px]">
              <Image
                src="/assets/logo_black.svg"
                width={180}
                height={38}
                alt="valyoux logo"
              />
            </span>
          </Link>
          <Link href="/">
            <span className="hidden lg:block items-center">
              <Image
                src="/assets/logo_black.svg"
                width={200}
                height={50}
                alt="valyoux logo"
              />
            </span>
          </Link>
          <div className="flex py-5 md:order-2">
            <div
              className="hidden w-full text-center  md:block md:w-auto space-x-4"
              id="mobile-menu-4"
            >
              <Button
                className="text-[#050f2f] focus:ring-4 focus:outline-none"
                variant="outlined"
              >
                <Link href="/login">Login/sign up</Link>
              </Button>
              <Button
                className="token text-white focus:ring-4 focus:outline-none"
                color="primary"
                variant="contained"
              >
                <Link href="/pricing">Token Subscription presale</Link>
              </Button>
            </div>
            <Button
              sx={{ minWidth: "0" }}
              data-collapse-toggle="mobile-menu-4"
              type="button"
              onClick={toggleMenu}
              className="items-center p-2 text-sm text-gray-500 rounded-lg  hover:bg-white"
              aria-controls="mobile-menu-4"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Button>
            <>
              <GetItems isOpen={isOpen} handleClose={toggleMenu} />
            </>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavComponent;
