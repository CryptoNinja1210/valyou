import {
  Button,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import Select from "react-select";
import * as React from "react";
import { SignUp } from "../../store/Modules/Auth/action.auth";
import TextField from "@mui/material/TextField";
import { useState, useMemo, useEffect } from "react";
import countryList from "react-select-country-list";
import axios from "axios";
import Link from "next/link";
import { shallowEqual, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  errorSelector,
  statusSelector,
  tokenSelector,
} from "../../store/Modules/Auth/selector.auth";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SignupRequest } from "pages/api/auth";
import { SignupTypes, responseTypes } from "src/_constants";

const InviteAlert = (props) => {
  const { open, onClose } = props;

  return (
    <>
      <Dialog onClose={onClose} open={open}>
        <DialogTitle>Success!</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            We’ll invite you soon in to a new global music industry &amp;
            economy.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};

const SignupComponent = () => {
  const [countryCodes, setCountryCodes] = useState([]);

  const options = useMemo(() => countryList().getData(), []);
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    getCountryDetails();
  }, []);

  const router = useRouter();

  const status = useSelector(statusSelector, shallowEqual);
  const error = useSelector(errorSelector, shallowEqual);
  const token = useSelector(tokenSelector, shallowEqual);

  const getCountryDetails = () => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((res) => {
        const response = res.data.map((country) => ({
          value: `+${country.callingCodes[0]}`,
          flag: country.flags.png,
          name: country.name,
          code: country.alpha2Code,
        }));
        setCountryCodes(response);
      })
      .catch((err) => console.log({ err }));
  };

  const skipQue = () => {
    window.open("https://forms.gle/JgzGnxYopcPo4f6Q8", "_blank");
  };

  const [first_name, setFirstName] = useState<any>("");
  const [last_name, setLastName] = useState<any>("");
  const [email, setEmail] = useState<any>("");
  const [password, setPassword] = useState<any>("");
  const [numCode, setNumCode] = useState<any>("");
  const [number, setNumber] = useState<any>("");
  const [country, setCountry] = useState<any>("");
  const [url, setUrl] = useState("");
  const handleChange = (e) => {
    setUrl(URL.createObjectURL(e.target.files[0]));
  };
  const signupData:SignupTypes = {
    first_name,
    last_name,
    email,
    password,
    phone_number: numCode + number,
    country,
    avatar: url,
  };

  const dispatch = useDispatch();
  const handleClickOpen = async(e) => {
    e.preventDefault();
    // const response = await SignupRequest(signupData);
    dispatch(SignUp(signupData));
  };

  useEffect(() => {
    if (status === 200) {
      toast.success("Account registered successfully!", {
        hideProgressBar: true,
      });
      router.push("/investor");
      Cookies.set("token", token);
      // window?.location?.reload();
    }
    if (error === "User Already Exist") {
      toast.error(error, {
        hideProgressBar: true,
      });
    }
  }, [status, error, token]);

  const FlagOption = (props) => {
    return (
      <div className="flex items-center gap-4">
        <img src={props.flag} alt={props.value} className="w-5" />
        {props.value}
      </div>
    );
  };

  const CodeOption = (props) => {
    return (
      <div className="flex items-center gap-4">
        <img src={props.flag} alt={props.value} className="w-5" />
        {props.value}
      </div>
    );
  };
  return (
    <>
      <div className="!sticky top-0 z-10">
        <ToastContainer />
      </div>
      <main className="container mx-auto">
        <Grid
          className="flex justify-center items-center space-between"
          container
          spacing={{ xs: 1, md: 1 }}
          columns={{ xs: 3, sm: 8, md: 12 }}
        >
          <Grid item md={6} xs={3}>
            <div className="p-8">
              <p className="font-bold musicArtistFont">
                Welcome to <span className="financial_stk">Valyou X</span>
              </p>
              <p className="font-medium text-lg text-rose-800">
                Be the first to know when we launch!
              </p>
              <div className="ms_desc">
                If you’re interested in participating as an early adopter, you
                can fill out the survey and apply to get exclusive access. We
                have over 50,000+ in our email list would you like to skip the
                queue?
              </div>
              <br />
            </div>
          </Grid>
          <Grid item md={6}>
            <div className="p-4">
              <p className="font-bold text-lg text-center sm:text-left lg:ml-4 cursor-pointer">
                Get early access
              </p>
              <br />
              <form onSubmit={handleClickOpen}>
                <div className="flex flex-col gap-6">
                  <TextField
                    required
                    className="w-11/12"
                    placeholder="First name"
                    id="outlined-required"
                    value={first_name}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <TextField
                    required
                    className="w-11/12"
                    placeholder="Last name"
                    id="outlined-required"
                    value={last_name}
                    name="last_name"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <TextField
                    required
                    className="w-11/12"
                    id="outlined-required"
                    placeholder="Email address"
                    type="email"
                    value={email}
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField
                    required
                    className="w-11/12"
                    id="outlined-required"
                    placeholder="Password"
                    value={password}
                    type="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="flex items-center w-11/12 gap-4">
                    <Select
                      required
                      isClearable={false}
                      isSearchable={false}
                      menuPortalTarget={document.body}
                      styles={{
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
                        control: (styles) => ({
                          ...styles,
                          height: "55px",
                          minWidth: "140px",
                          "&:active": {
                            borderColor: "#ff0093",
                          },
                        }),
                      }}
                      onChange={(value: any) =>
                        setNumCode(value?.label?.props?.value)
                      }
                      options={countryCodes.map((option) => ({
                        value: option?.name,
                        label: (
                          <CodeOption flag={option.flag} value={option.value} />
                        ),
                      }))}
                    />
                    <TextField
                      required
                      className="flex-1"
                      id="outlined-required"
                      placeholder="your mobile"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                    />
                  </div>
                  <p className="text-[14px]">Select your Country</p>
                  <Select
                    className="w-11/12"
                    isClearable={false}
                    isSearchable={false}
                    menuPortalTarget={document.body}
                    styles={{
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
                      control: (styles) => ({
                        ...styles,
                        height: "55px",
                        minWidth: "100px",
                        "&:active": {
                          borderColor: "#ff0093",
                        },
                      }),
                    }}
                    onChange={(value: any) =>
                      setCountry(value?.label?.props?.value)
                    }
                    options={countryCodes.map((option) => ({
                      value: option?.name,
                      label: (
                        <FlagOption flag={option.flag} value={option.name} />
                      ),
                    }))}
                  />
                  <br />
                  <div className="w-11/12 border-2  p-2  text-center rounded">
                    <div className="text-[14px]">
                      Tab on the below Box to Upload Your Profile Photo
                    </div>
                    <Button component="label">
                      <input
                        hidden
                        accept="image/*"
                        multiple
                        type="file"
                        onChange={(e) => handleChange(e)}
                      />
                      <img
                        src={url}
                        width={200}
                        height={200}
                        className="object-contain border-black rounded-full h-[200px] bg-white border-2"
                      ></img>
                    </Button>
                  </div>
                  <br />
                  <div className="w-11/12">
                    <Button
                      className="token w-[100%] text-white mx-2.5 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm py-2.5 text-center "
                      color="primary"
                      variant="contained"
                      type="submit"
                    >
                      Join Waitlist
                    </Button>
                    <InviteAlert open={open} onClose={handleClose} />
                    <br />
                    <br />
                    <Button
                      onClick={skipQue}
                      className="skip_que w-[100%] text-white mx-2.5 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm py-2.5 text-center "
                      variant="contained"
                    >
                      Skip the Queue
                    </Button>
                  </div>
                </div>
              </form>
              <p className="text-center pt-8">
                Already have an account?
                <Link href="/login">
                  <span className="text-[#FF0093] bold cursor-pointer px-1">
                    Login
                  </span>
                </Link>
              </p>
            </div>
          </Grid>
        </Grid>
        <br />
      </main>
    </>
  );
};

export default SignupComponent;
