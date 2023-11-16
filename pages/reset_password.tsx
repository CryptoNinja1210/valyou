import { NextPage } from "next";
import FooterComponent from "../components/footer";
import ResetPasswordComponent from "../components/auth/resetpassword_main";
import NavComponent from "../components/navbar";

const ResetPassword: NextPage = () => {
  return (
    <>
      <NavComponent />
      <ResetPasswordComponent />
      <FooterComponent />
    </>
  );
};

export default ResetPassword;
