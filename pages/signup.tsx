import { NextPage } from "next";
import FooterComponent from "../components/footer";
import NavComponent from "../components/navbar";
import SignupComponent from "../components/auth/signup_main";

const LoginPage: NextPage = () => {
  return (
    <>
      <NavComponent />
      <SignupComponent />
      <FooterComponent />
    </>
  );
};

export default LoginPage;
