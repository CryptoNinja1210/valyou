/* eslint-disable react/no-unknown-property */
import { Button } from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import { Grid } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AwardsWinningComponent from "./landingPage/awards_winning";
import icons from "../utils/icons";
import { DropDownComponent } from "./dropDown/dropDownComponent";

const MainLandingComponent = () => {
  const [openVideo, setOpenVideo] = useState(false)

  const earlyAccess = () => {
    window.open("https://forms.gle/JgzGnxYopcPo4f6Q8", "_blank");
  };

  const watchVideo = () => {
    // window.open(
    //   "https://drive.google.com/file/d/1ul1z217vLUFmPQWKF5X8TYnSULl1TPpW/view",
    //   "_blank"
    // );
    setOpenVideo(true)
  }

  const closeVideo = () => {
    setOpenVideo(false)
  }

  var summary1 = [
    {
      link: "",
      text: "Cost to launch music career Independently is very expensive, estimated around $500K to $2M",
    },
    {
      link: "",
      text: "An exchange where Music artists list as their own startups, music fans can invest.",
    },
    {
      link: "",
      text: "Streaming platforms significantly shortchanges the value of the average music artist.",
    },
    {
      link: "",
      text: "DEFI pay per/view streaming with increased NFT value for unlimited song access.",
    },
    {
      link: "",
      text: "No way to connect with quality assured reputable music industry professionals.",
    },
    {
      link: "",
      text: "Marketplace to connect businesses offering pro services to listed artists brands.",
    },
    {
      link: "",
      text: "Artists lack a business mindset and understanding of music industry contracts.",
    },
    {
      link: "",
      text: `Smart Contract & Fund Management, reduce risk & still maximise profits for investors.`,
    },
    {
      link: "",
      text: `Upcoming, Independent & Major Artists. All artists can get listed and raise the capital they need to launch or enhance their music careers or brand. Imagine 20,000 of your true fans invested $100 that is $2,000,000 for you to build your brand and stay in control of your business independent or signed inside a new global music Industry and artist focused economy.`,
    },
  ];

  return (
    <>
      {openVideo && (
        <div onClick={closeVideo} className="fixed w-screen h-screen bg-opacity-0 flex items-center justify-center z-50 top-0 left-0 bottom-0 overflow-hidden">
          {/* <video className=" " src="/assets/video/valyou_.mp4" autoPlay></video> */}
          <iframe className="w-3/5 h-3/5" src="https://mega.nz/embed/rAtVnbqS#9_JpHURUBHSFmr7T1KjhjP6VwNqAT2VSQvSf4ANVkRY!1a" allowFullScreen allow="autoplay;"></iframe>
        </div>
      )}
      <div className="my-24 mx-10">
        <Grid
          className="flex justify-center items-center space-between"
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item md={6}>
            <div className="p-4 lg:p-6">
              <div className="blockchain_bck">
                <p className="text-[#00B8BA] text-center font-[800]">
                  The World&apos;s First Blockchain Powered
                </p>
              </div>
              <p className="font-bold musicArtistFont">
                Music Artist{" "}
                <span className="financial_stk musicArtistFont">
                  Financial Stock
                </span>{" "}
                Market
              </p>
              <div className="ms_desc">
                Linked to a new global music industry &amp; economy powered by
                decentralised finance. Purchase NFT digital asset stocks in any
                Upcoming, Independent &amp; Major Artist brand &amp; receive a
                portion of their revenue as dividends for holding their stock.
              </div>
              <br />
              <div className="flex items-center justify-center lg:justify-start  flex-row space-x-6 w-[100%]">
                <Button
                  onClick={earlyAccess}
                  variant="contained"
                  className="getEarlyAccess2 w-[200px] h-14 text-[8px]"
                >
                  Get early access
                </Button>
                <button className="flex items-center">
                  <div onClick={watchVideo} className="ellipse my-[1px] mr-6">
                    <div className="playArrow">
                      <PlayArrowIcon color="primary" />
                    </div>
                  </div>
                  <div onClick={watchVideo} className="watch_video mt-[-10px]">
                    <p className="text-[14px]">Watch Video</p>
                  </div>
                </button>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
          </Grid>

          <Grid item md={6} className="md:p-0">
            <div>
              <Image
                src="/assets/valyoux_img.jpeg"
                alt="iphone image"
                width={800}
                height={500}
              />
            </div>
          </Grid>
        </Grid>

        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="box_shadow m-2 flex items-center justify-center">
          <div className="text-center">
            <p className="lg:text-4xl text-lg font-bold">
              Valyou X - Is A Multi Award Winning Start-Up
            </p>
          </div>
        </div>
        <div className="awards px-2">
          <AwardsWinningComponent></AwardsWinningComponent>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="mx-2 box_shadow2">
          <Grid
            className="flex justify-center items-center space-between"
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item md={6}>
              <div className="md:flex px-2 rounded-lg hidden">
                <Image
                  src={icons.SINGER}
                  width={600}
                  height={500}
                  className="rounded-lg"
                  quality={100}
                  alt="awards"
                />
              </div>
            </Grid>

            <Grid className="text-center" item md={6}>
              <div className="p-8">
                <div className="building">
                  <p className="building-font font-bold ">
                    We are <span className="rebuilding"> rebuilding </span> the{" "}
                    <span className="rebuild_music">music</span> industry
                  </p>
                </div>
                <br />
                <div className="desc_text text-justify">
                  Valyou X is creating the world’s first music artist stock and
                  financial market, where you can invest in music artists’
                  brands, as listed stocks. Blockchain Technology is at the
                  heart of it. However, first to begin, we must rebuild the
                  entire music industry in order to serve as a globally scalable
                  digital hub for the entire music industry. A platform that
                  enables aspiring artists to use their music to launch a
                  profitable business and then connects to the financial markets
                  trusted by Blockchain.
                </div>
              </div>
            </Grid>
            <Grid item md={6}>
              {/* <div className="md:flex px-2 rounded-lg hidden">
              <Image
                src={icons.SINGER}
                width={600}
                height={500}
                className="rounded-lg"
                quality={100}
                alt="awards"
              />
            </div> */}
              <div className="rounded-lg md:hidden">
                <Image
                  src={icons.SINGER}
                  width="542px"
                  height="455px"
                  className="rounded-lg w-max"
                  quality={100}
                  alt="awards"
                />
              </div>
            </Grid>
          </Grid>
        </div>

        <br />
        <div className="text-center lg:m-10">
          <h3 className="font-bold text-5xl">
            See <span className="how-it font-bold">how it</span> works
          </h3>
          <p className="font-light p-4 text-center">
            <span className="w-2/5">
              All users, Music Artists, Fans as investors and Businessess buy
              Valyou X tokens for access into the app.{" "}
            </span>
          </p>
          <Image
            src="/assets/howitworks.svg"
            width={800}
            height={800}
            alt="how it works"
          />
          {/* <p className="text-3xl font-bold">
            See <span className="green_gradient">how it</span> works
          </p>
          <p className="p-28">
            Integer vehicula turpis etiam egestas massa diam diam blandit
            facilisis sit rhoncus aliquam sapien etiam velit consectetur
            ultrices
          </p> */}
          <br />
          <br />
          <p className="text-4xl m-10 font-bold p-4">
            Main <span className="pink_gradient">Problems</span> &amp; Solutions
          </p>

          <div className="detail">
            <DropDownComponent
              icon=""
              image=""
              detail="Music Artist."
              summary={summary1}
              musicClass="music"
              musicSummary="music-summary"
            />

            {/* <details className="text-left">
              <summary>
                <p className="text-left text-3xl font-bold">
                  {" "}
                 Music Artist.{" "}
                </p>
              </summary>
              <ul>
                <li>
                Cost to launch music career Independently is very expensive, estimated around $500K to $2M{" "}.
                </li>
                <li>
                  An exchange where Music artists list as their own startups, music fans can invest.

                </li>
                <br />
                <li>
                  Streaming platforms significantly shortchanges the value of the average music artist.

                </li>
                <li>
                  DEFI pay per/view streaming with increased NFT value for unlimited song access.
                </li>
                <br />
                <li>
                  No way to connect with quality assured reputable music industry professionals.
                </li>
                <li>
                  Marketplace to connect businesses offering pro services to listed artists brands. </li>
                <br />
                <li>
                  Artists lack a business mindset and understanding of music industry contracts. </li>
                <li>
                  Smart Contract &amp; Fund Management, reduce risk &amp; still maximise profits for investors.</li>
                <br/>
                <li>
                  Upcoming, Independent &amp; Major Artists. All artists can get listed and raise the capital they need to launch or enhance their music careers or brand. Imagine 20,000 of your true fans invested $100 that is $2,000,000 for you to build your brand and stay in control of your business independent or signed inside a new global music Industry  and artist focused economy.
                </li>
             
              </ul>
      
            </details> */}

            <details className="text-left music">
              <summary className="music-summary">
                <p className="text-left text-3xl font-bold "> Investors. </p>
              </summary>
              <ul>
                <li>
                  Imagine at the click of a button you could own a share in
                  Justin Bieber, Beyonce&apos;s brand? Most importantly imagine
                  investing in your friend, or favourite upcoming artists that
                  you discovered or follow online and got paid a profit share of
                  the royalties generated from that artist brand directly into
                  your account digital wallet, as a return on investment from
                  their brands growth in revenue generated across the industry.
                </li>
                <br />
                <li>
                  Most people have a friend or family aspiring to become music
                  artists. Record labels simply cannot sign every single artist
                  on the planet.
                </li>
                <br />
                <li>
                  Artist brands, such as Jay Z, Kanye West who are worth
                  billions through successful music careers, the establishment
                  and funding of their own music label, and making smart
                  investments. Assume you had the option to invest into it, into
                  their brand when they were upcoming startup artists and held
                  that stock till now with an opportunity for generating passive
                  income from royalties &amp; being a true fan with skin in the
                  game automatically sharing in their success.{" "}
                </li>
              </ul>
            </details>
            <details className="text-left music">
              <summary className="music-summary">
                <p className="text-left text-3xl font-bold "> Business. </p>
              </summary>
              All businesses, freelancers services can connect and grow with
              artist brands, such as Producers, Song writers, Beat maker,
              Advertisers, Radio, Influencers, Artist managers, Record labels,
              Spotify, YouTube, Soundcloud + more.{" "}
            </details>

            <details className="text-left music">
              <summary className="music-summary">
                <p className="text-left text-3xl font-bold"> Blockchain. </p>
              </summary>
              The Valyou X Token is a cryptocurrency that is required for entry
              into the new global Global Music Industry.By staking Valyou X
              tokens against the platform&apos; s stable currency VXD. It may be
              used for payments, streaming, and investment in tokenised music
              artist brands as a new type of digital asset, enhancing investor
              confidence and preventing fraud.{" "}
            </details>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLandingComponent;
