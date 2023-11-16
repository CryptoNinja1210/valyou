import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

const FooterComponent = () => {
  return (
    <>
      <div className="bg-black ml-[-10px]">
        <div className="flex flex-col items-center justify-center container mx-auto pt-10 pb-6">
          <div className="ml-[-50px]">
            <Image
              src="/assets/logo_white.svg"
              width={250}
              height={80}
              alt="valyoux"
            />
          </div>
          <div className="flex justify-center items-center">
            <InstagramIcon className="color-white icon-margin"></InstagramIcon>
            &nbsp;&nbsp;
            <FacebookIcon className="color-white icon-margin"></FacebookIcon>
            &nbsp;&nbsp;
            <TwitterIcon className="color-white icon-margin"></TwitterIcon>
            &nbsp;&nbsp;
            <GitHubIcon className="color-white icon-margin"></GitHubIcon>
            &nbsp;&nbsp;
          </div>
          <br />
          <hr />
          <div className="footer_text text-white">
            <p className="text-white p-5 text-[12px]">
              All images with or without permission and its terms of use as
              modified are simply for demo purposes. Valyou X isn’t intending to
              mislead or misrepresent any artist listed. We just want the world
              to be able to better understand the idea, our vision and to better
              assist us with its execution.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterComponent;
