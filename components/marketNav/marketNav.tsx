import { Drawer, Tab, Tabs, Modal, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/router";
import { DropDownComponent, DirectLink } from "../dropDown/dropDownComponent";
import {
  StockMarketNav,
  BankNav,
  StoreNav,
  AccountNav,
  AuthNav,
  AdminBankNav,
  InvestorBankNav,
} from "./sideNav";
import Avatar from "@mui/material/Avatar";
import { DropDownMenu } from "./dropDownMenu";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { toggleSideMenu } from "../../store/flags";
import { CloseOutlined, SearchOutlined } from "@mui/icons-material";
import { AutocompleteComponent } from "../autoComplete/autocomplete";
import Cookies from "js-cookie";
import { UserDetail } from "../../store/Modules/Profile/action.user";
import { userSelector } from "../../store/Modules/Profile/selector.user";

const pages = [
  { name: "Bank", link: "/bank" },
  { name: "Market", link: "/market" },
  { name: "Social Media", link: "/socialmedia" },
  { name: "Watch & Earn", link: "/watch_earn" },
  { name: "Listen & Earn", link: "/listen_earn" },
  { name: "Store", link: "/store" },
];

const drawerWidth = 325;

const MarketNavComponent = () => {
  const state: any = useSelector((state) => state);

  const {
    flags: { isMenuOpen },
    users,
  } = state;

  const [isOpen, setOpen] = React.useState(isMenuOpen);
  const [image, setImage] = React.useState(users?.navigationOptions.image);
  const dispatch = useDispatch();

  const router = useRouter();
  var follwingArray = [
    { name: "Following You", link: "" },
    { name: "You Are Following", link: "" },
  ];

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {children}
      </div>
    );
  }

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const PanelValue = () => {
    return (
      <>
        <div className="p-4 bg-black">
          <div className="flex justify-between">
            <div className="flex-col">
              <p className="text-center text-green-600 font-[800]">2</p>
              <p className="text-white ">Artist</p>
              <hr />
            </div>
            <div className="flex-col">
              <p className="text-center text-green-600 font-[800]">100</p>
              <p className="text-white ">Investors</p>
              <hr />
            </div>
            <div className="flex-col">
              <p className="text-center text-green-600 font-[800]">4</p>
              <p className="text-white ">Business</p>
              <hr />
            </div>
          </div>
        </div>
      </>
    );
  };

  const FollowTab = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
    return (
      <>
        <Box
          className="p-0"
          sx={{ width: "100%", height: "50%", backgroundColor: "black" }}
        >
          <Box sx={{ paddingBottom: "10px" }}>
            <Tabs
              variant="scrollable"
              scrollButtons="auto"
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              {follwingArray.map((arrayValue, key) => {
                return (
                  <Tab
                    key={key}
                    disableRipple
                    className="text-sm font-medium whitespace-nowrap animate-none"
                    sx={{ fontWeight: "bold", color: "white" }}
                    label={arrayValue.name}
                    {...a11yProps(key)}
                  />
                );
              })}
            </Tabs>
          </Box>
          <TabPanel className="overflow-x-hidden" value={value} index={0}>
            <PanelValue />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <PanelValue />
          </TabPanel>
        </Box>
      </>
    );
  };

  React.useEffect(() => {
    setImage(users?.navigationOptions.image);
  }, []);

  useEffect(() => {
    setOpen(isMenuOpen);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setOpen(!isOpen);
    dispatch(toggleSideMenu(!isOpen));
  };

  const [openSearch, setOpenSearch] = React.useState(false);
  const [openOptions, setOpenOptions] = React.useState(false);
  const handleSearchOpen = () => {
    setOpenSearch(true);
    setOpenOptions(true);
  };
  const handleSearchClose = () => setOpenSearch(false);

  const ChangeImage = ({ text }) => {
    switch (text) {
      case "admin":
        return (
          <Image
            src="/assets/valyoux_black_logo.svg"
            width={30}
            height={30}
            alt="artist icon"
          ></Image>
        );
      case "investor":
        return (
          <Avatar
            src="/assets/bobby_dp.jpeg"
            className="!h-8 !w-8 mt-[-6px]"
            alt="artist icon"
          ></Avatar>
        );
      case "business":
        return (
          <Image
            src="/assets/mcdonald.png"
            width={30}
            height={30}
            alt="artist icon"
          ></Image>
        );
      case "artist":
        return (
          <Image
            src="/assets/drakeDp.png"
            width={30}
            height={30}
            alt="artist icon"
          ></Image>
        );
      default:
        return (
          <Image
            src="/assets/drakeDp.png"
            width={30}
            height={30}
            alt="artist icon"
          ></Image>
        );
    }
  };

  const handleLogout = () => {
    Cookies.remove("token");
    location.reload();
  };

  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowMenu(window.innerWidth > 1360);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    dispatch(UserDetail());
  }, []);
  const userData = useSelector(userSelector, shallowEqual);
  const name =
    userData?.toJS()[0]?.first_name + " " + userData?.toJS()[0]?.last_name;
  const email = userData?.toJS()[0]?.email;
  return (
    <div className="flex items-center justify-between gap-2 p-2">
      <Modal
        open={openSearch}
        onClose={handleSearchClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        hideBackdrop
      >
        <Box
          sx={{
            position: "absolute" as "absolute",
            left: "50%",
            width: "100%",
            height: "100%",
            top: "50%",
            marginBottom: "50px",
            outline: "none",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
          }}
        >
          <div className="lg:hidden flex items-center justify-between background-shadow shadow-2xl bg-[white] pb-[1px] p-1">
            <AutocompleteComponent
              openOptions={openOptions}
              width="w-[106vw]"
              navigate={true}
            />
            <div className=" ml-[-65PX] mt-[-3px]" onClick={handleSearchClose}>
              <IconButton>
                <CloseOutlined />
              </IconButton>
            </div>
          </div>
        </Box>
      </Modal>
      <Link href="/">
        <Image src="/assets/logo_black.svg" width="100px" height="50"></Image>
      </Link>
      {showMenu && (
        <div className="hidden gap-6 lg:flex">
          {pages.map((page, index) => (
            <div
              key={index}
              className={router.pathname == page.link ? "active" : ""}
            >
              <Link key={index} href={page.link}>
                {page.name}
              </Link>
            </div>
          ))}
        </div>
      )}
      <div className="hidden md:flex items-center border-2 border-[#444444] rounded-full px-2">
        <SearchOutlined className="text-[#444444]" />
        <AutocompleteComponent
          openOptions={undefined}
          width="w-[402px]"
          navigate={true}
        />
      </div>
      <div className="flex items-center gap-2">
        <div className="border-[1px] rounded-full p-1 flex justify-center items-center border-gray-600 md:hidden">
          <SearchOutlined
            style={{ width: "20px", height: "20px" }}
            onClick={handleSearchOpen}
            className="text-[#444444]"
          ></SearchOutlined>
        </div>
        <div className="border-[1px] rounded-full p-1 flex justify-center items-center border-gray-600">
          <Link href="/wallet">
            <AccountBalanceWalletIcon
              style={{ width: "20px", height: "20px" }}
              className="text-[#444444]"
            ></AccountBalanceWalletIcon>
          </Link>
        </div>
        <div className="border-[1px] rounded-full p-1 flex justify-center items-center border-gray-600">
          <Link href="/messages">
            <MailOutlineOutlinedIcon
              style={{ width: "20px", height: "20px" }}
              className="text-[#444444]"
            ></MailOutlineOutlinedIcon>
          </Link>
        </div>
        <div className="mt-1 background-shadow rounded-full flex items-center justify-around w-28 px-1 gap-1 text-sm md:text-base text-red">
          <DropDownMenu image={image} />
          <div>
            {localStorage.getItem("userProfile") === "Investor"
              ? "Investor"
              : localStorage.getItem("userProfile") === "Artist"
              ? "Artist"
              : localStorage.getItem("userProfile") === "Business"
              ? "Business"
              : "Admin"}
          </div>
        </div>
        <div
          className="mt-2"
          onClick={() => router.push(users?.navigationOptions.link)}
        >
          <ChangeImage text={users?.navigationOptions.text} />
        </div>
        <div onClick={toggleMenu} className="text-gray-600">
          <MenuIcon style={{ width: "30px", height: "30px" }} />
        </div>
      </div>
      <Drawer
        sx={{
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            paddingBottom: "280px",
            width: drawerWidth,
            boxSizing: "border-box",
            overflow: "auto",
            height: "100vh",
          },
        }}
        anchor="left"
        open={isOpen}
        onClose={toggleMenu}
      >
        <div className="p-4 bg-black">
          <div className="flex items-center">
            <div className="border-4 rounded-full">
              <Avatar
                alt="Remy Sharp"
                src={
                  localStorage.getItem("userProfile") === "Investor"
                    ? "/assets/bobby_dp.jpeg"
                    : localStorage.getItem("userProfile") === "Artist"
                    ? "/assets/drakeDp.png"
                    : localStorage.getItem("userProfile") === "Business"
                    ? "/assets/mcdonald.png"
                    : "/assets/valyoux_black_logo.svg"
                }
              />
            </div>
            &nbsp;&nbsp;&nbsp;
            <div className="flex-col">
              <p className="text-sm font-bold text-white">{name}</p>
              <p className="text-xs text-white">{email}</p>
              <p className="text-xs text-pink-600"> Verify Account ID</p>
            </div>
          </div>
        </div>
        <FollowTab />
        <div className="p-4">
          {users.selectedUser !== "Admin" ? (
            <DropDownComponent
              image={users?.navigationOptions.image}
              detail={users?.navigationOptions.detail}
              isSideMenu={true}
              summary={users?.navigationOptions.options}
              musicClass="sidemenu"
              musicSummary="sidemenu-summary"
            />
          ) : (
            <>
              {users?.navigationOptions?.userOptions?.options?.map(
                (item, key) => {
                  return (
                    <DropDownComponent
                      key={key}
                      image={item.image}
                      detail={item.detail}
                      isSideMenu={true}
                      summary={item.options}
                      musicClass="sidemenu"
                      musicSummary="sidemenu-summary"
                    />
                  );
                }
              )}
              {users?.navigationOptions?.adminOptions?.options?.map(
                (item, key) => {
                  return (
                    <DropDownComponent
                      key={key}
                      image={item.image}
                      detail={item.detail}
                      isSideMenu={true}
                      summary={item.options}
                      musicClass="sidemenu"
                      musicSummary="sidemenu-summary"
                    />
                  );
                }
              )}
            </>
          )}
          <br />
          <hr />
          <br />
          <DropDownComponent
            image="/assets/stock_market.svg"
            detail="Stock Market"
            isSideMenu={true}
            summary={StockMarketNav}
            musicClass="sidemenu"
            musicSummary="sidemenu-summary"
          />
          {localStorage.getItem("userProfile") === "Admin" ? (
            <DropDownComponent
              image="/assets/bank_icon.svg"
              icon=""
              detail="Bank"
              isSideMenu={true}
              summary={AdminBankNav}
              musicClass="sidemenu"
              musicSummary="sidemenu-summary"
            />
          ) : localStorage.getItem("userProfile") === "Investor" ? (
            <DropDownComponent
              image="/assets/bank_icon.svg"
              icon=""
              detail="Bank"
              isSideMenu={true}
              summary={InvestorBankNav}
              musicClass="sidemenu"
              musicSummary="sidemenu-summary"
            />
          ) : (
            <DropDownComponent
              image="/assets/bank_icon.svg"
              icon=""
              detail="Bank"
              isSideMenu={true}
              summary={BankNav}
              musicClass="sidemenu"
              musicSummary="sidemenu-summary"
            />
          )}
          <DirectLink
            icon=""
            image="/assets/newspaper.svg"
            link="/socialmedia"
            text="Social Media"
          />
          <DirectLink
            icon=""
            image="/assets/eye.svg"
            link="/watch_earn"
            text="Watch &amp; Earn"
          />
          <DirectLink
            icon=""
            image="/assets/listen_earn.svg"
            link="/listen_earn"
            text="Listen &amp; Earn"
          />
          <hr />
          <br />
          <DropDownComponent
            icon=""
            image="/assets/store_icon.svg"
            detail="Store"
            isSideMenu={true}
            summary={StoreNav}
            musicClass="sidemenu"
            musicSummary="sidemenu-summary"
          />
          <hr />
          <br />
          <DropDownComponent
            image="/assets/accounts.svg"
            detail="Accounts"
            isSideMenu={true}
            summary={AccountNav}
            musicClass="sidemenu"
            musicSummary="sidemenu-summary"
          />
          {localStorage.getItem("userProfile") === "Admin" && (
            <DropDownComponent
              icon=""
              image="/assets/authentication.svg"
              detail="Security / Compliance"
              isSideMenu={true}
              summary={AuthNav}
              musicClass="sidemenu"
              musicSummary="sidemenu-summary"
            />
          )}
          <DirectLink
            icon=""
            image="/assets/support.svg"
            link="/messages"
            text="Support"
          />
          <DirectLink icon="" image="/assets/home.svg" link="/" text="Home" />
          <div onClick={handleLogout}>
            <DirectLink
              icon=""
              image="/assets/logout.svg"
              link=""
              text="Logout"
            />
          </div>
        </div>
      </Drawer>
    </div>
  );
};
export default MarketNavComponent;
