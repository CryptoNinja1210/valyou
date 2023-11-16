import { Button } from "@mui/material";
import Image from "next/image";
import { Grid } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
// import Alibaba from "../../../public/assets/alibaba_group.svg";
import Icons from "../../utils/icons";

const AwardsWinningComponent = () => {
  const ShowWeb = () => {
    return (
      // <div className="md:block hidden">
      //   <Image
      //     src="/assets/web_awards.svg"
      //     height={500}
      //     width={2000}
      //     alt="mobile"
      //   ></Image>
      // </div>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-5 place-content-between">
        <div className="box_shadow flex flex-col items-center justify-center gap-3">
            <Image
              src={Icons.ALIBABA_ICON}
              height={65}
              width={120}
              alt="awards"
              objectFit="contain"
              quality={100}
            />
            <p className="font-8">Alibaba Group Award Winner</p>
        </div>
        <div className="box_shadow flex flex-col items-center justify-center gap-3">
            <Image
              src="/assets/alibabacloud_icon.svg"
              height={75}
              width={200}
              quality={100}
              objectFit="contain"
              alt="awards"
            />
            <p className="font-8">Official Cloud Service Partner</p>
        </div>
        <div className="box_shadow flex flex-col items-center justify-center gap-3">
            <Image
              src={Icons.MELBOURDME}
              height={75}
              width={90}
              quality={100}
              objectFit="contain"
              alt="awards"
            />
            <p className="font-8">People Choice Award</p>
        </div>
        <div className="box_shadow flex flex-col items-center justify-center gap-3">
            <Image
              src={Icons.STARTUP_SHOW}
              height={85}
              width={120}
              quality={100}
              objectFit="contain"
              alt="awards"
            />
            <p className="font-8">Wildcard Finalist</p>
        </div>
        <div className="box_shadow flex flex-col items-center justify-center gap-3">
            <Image
              src={Icons.VIRGIN_AUS}
              height={65}
              width={180}
              quality={100}
              objectFit="contain"
              alt="awards"
            />
            <p className="font-8">
              As Seen On Inflight entertainment
            </p>
        </div>
        <div className="box_shadow flex flex-col items-center justify-center gap-3">
            <Image
              src={Icons.MSARAAT_DUBAI}
              height={65}
              width={180}
              quality={100}
              objectFit="contain"
              alt="awards"
            />
            <p className="font-8">
              Top 20 Global Finalist / 700
            </p>
        </div>
        <div className="box_shadow flex flex-col items-center justify-center gap-3">
            <Image
              src={Icons.MIDEM}
              height={65}
              width={180}
              quality={100}
              objectFit="contain"
              alt="awards"
            />
            <p className="font-8">
              As seen at Midem France
            </p>
        </div>
        <div className="box_shadow flex flex-col items-center justify-center gap-3">
            <Image
              src={Icons.TRADE_VICTORIA}
              height={100}
              width={150}
              quality={100}
              objectFit="contain"
              alt="awards"
            />
            <p className="font-8 relative top-[-10px]">Award Winner</p>
        </div>
        <div className="box_shadow flex flex-col items-center justify-center gap-3">
            <Image
              src={Icons.VIC_UP}
              height={55}
              width={85}
              quality={100}
              objectFit="contain"
              alt="awards"
            />
            <p className="font-8">Award Winner</p>
        </div>
        <div className="box_shadow flex flex-col items-center justify-center gap-3">
          <Image
            src="/assets/fintech_logo.webp"
            layout="fill"
            objectFit="contain"
           
            alt="awards"
          />
        </div>
      </div>
    );
  };

  const ShowMobile = () => {
    return (
      <div className="block md:hidden">
        {/* <Image
          src="/assets/mobile_awards.svg"
          height={2200}
          width={2000}
          alt="mobile"
        ></Image> */}
      </div>
    );
  };

  return (
    <>
      <ShowWeb />
      <ShowMobile />
      <br />

      {/* <div className="grid gap-4 grid-cols-2"> */}
      {/* <div className="md:flex grid gap-4 grid-cols-2  container place-content-between">
        <div className="box_shadow">
          <Image
            src="/assets/peoples_choices.svg"
            width={2600}
            height={1200}
           
            alt="awards"
          />
        </div>
        <div className="box_shadow">
          <Image
            src="/assets/that_startup_show.svg"
            width={2600}
            height={1200}
           
            alt="awards"
          />
        </div>
        <div className="box_shadow">
          <Image
            src="/assets/trade_victoria.svg"
            width={2600}
            height={1200}
           
            alt="awards"
          />
        </div>
        <div className="box_shadow">
          <Image
            src="/assets/vic_award_winner.svg"
            width={2600}
            height={1200}
           
            alt="awards"
          />
        </div>
        <div className="box_shadow">
          <Image
            src="/assets/fintech_logo.webp"
            width={2600}
            height={1200}
           
            alt="awards"
          />
        </div>
      </div> */}
      {/* </div> */}
    </>
  );
};

export default AwardsWinningComponent;
