import { NextPage } from "next";
import FooterComponent from "../components/footer";
import LoginComponent from "../components/auth/login_mian";
import NavComponent from "../components/navbar";

const LoginPage: NextPage = () => {
  return (
    <>
      <NavComponent />
      <LoginComponent />
      <FooterComponent />
    </>
  );
};

export default LoginPage;
