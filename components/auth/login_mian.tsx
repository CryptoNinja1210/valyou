import { Button, Grid } from "@mui/material";
import * as React from "react";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Link from "next/link";
import { shallowEqual, useDispatch } from "react-redux";
import {
  errorStatusSelector,
  statusSelector,
  tokenSelector,
} from "../../store/Modules/Auth/selector.auth";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { SignIn } from "../../store/Modules/Auth/action.auth";
import { LoginRequest } from "pages/api/auth";
import { responseTypes } from "src/_constants";

const LoginComponent = () => {
  const [loginData, setLoginData] = useState<any>({
    email: "",
    password: "",
  });
  const { email, password } = loginData;
  const onChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();

  const status = useSelector(statusSelector, shallowEqual);
  const error = useSelector(errorStatusSelector, shallowEqual);
  const token = useSelector(tokenSelector, shallowEqual);
  const router = useRouter();

  const Login = async (e) => {
    e.preventDefault();
    const result = await LoginRequest(loginData);
    dispatch(SignIn(result?.success));
  };
  React.useEffect(() => {
    console.log(status);
    if (status === 200) {
      toast.success("Account Login successfully!", {
        hideProgressBar: true,
      });
      Cookies.set("token", token);
      console.log(token);
      router.push("/investor");
      // window?.location?.reload();
    }
    if (error === 401) {
      toast.error("Incorrect Credentials!", {
        hideProgressBar: true,
      });
    }
  }, [status, error, token]);
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
              <p className="font-bold text-lg text-center sm:text-left">
                Sign in to continue to Valyou X
              </p>
              <br />
              <form onSubmit={Login}>
                <div className="flex flex-col gap-6">
                  <TextField
                    required
                    className="w-11/12"
                    id="email"
                    placeholder="Email address"
                    value={email}
                    name="email"
                    onChange={(e) => onChange(e)}
                  />
                  <TextField
                    required
                    className="w-11/12"
                    id="password"
                    placeholder="Password"
                    value={password}
                    type="password"
                    name="password"
                    onChange={(e) => onChange(e)}
                  />
                  <p className="text-center text-[13px]">
                    Forget your password ?
                    <Link href="/reset_password">
                      <span className="text-[#FF0093] bold cursor-pointer px-1">
                        Reset Here
                      </span>
                    </Link>
                  </p>
                  <br />
                  <div className="w-11/12">
                    <Button
                      className="token w-[100%] text-white mx-2.5 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm py-2.5 text-center "
                      color="primary"
                      variant="contained"
                      type="submit"
                    >
                      Login
                    </Button>
                    <br />
                  </div>
                </div>
              </form>
              <p className="text-center pt-8">
                Don&apos;t have an account ?
                <Link href="/signup">
                  <span className="text-[#FF0093] bold cursor-pointer px-1">
                    Signup
                  </span>
                </Link>
              </p>
            </div>
          </Grid>
        </Grid>
        <br />
        <br />
        <br />
        <br />
      </main>
    </>
  );
};

export default LoginComponent;
