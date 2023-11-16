import { Button } from "@mui/material";
import Image from "next/image";
import { Grid } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const MainTokenComponent = () => {
  return (
    <>
      <main className="container mx-auto p-5">
        <Grid
          className="flex justify-center items-center space-between"
          container
          spacing={{ xs: 1, md: 1 }}
          columns={{ xs: 3, sm: 8, md: 12 }}
        >
          <Grid item md={6} xs={3}>
            <div>
              <div className="blockchain_bck">
                <p className="blockchain_text">
                  Get early access to Valyou X tokens pre-launch!
                </p>
              </div>
              <p className="font-bold musicArtistFont">
                <span className="financial_stk">Valyou X</span> token
              </p>
              <div className="ms_desc">
                Send $USDC to the address below or scan the QR code. All early
                investors will receive an airdrop of Valyou X Tokens at a future
                date and will be granted early access on the platform.
              </div>
              <br />
              <div>
                <p>Copy wallet or scan</p>
                <div className="border-2 border-gray-900 p-4 rounded">
                  <p className="text-justify overflow-scroll">
                    0x589603e0fF0c9d84C57925C8771f6dc45158cf38
                  </p>
                </div>
              </div>

              <br />
              <Image
                src="/assets/valyoux_barcode.svg"
                height={150}
                width={150}
                alt="barcode token"
              />
            </div>
          </Grid>
          <Grid item md={6}>
            <Image
              src="/assets/token_side.svg"
              alt="valyoux image"
              width={800}
              height={800}
            />
          </Grid>
        </Grid>

        <div className="text-center">
          <p className="font-bold text-4xl">
            Dual
            <span className="pink_gradient"> token </span>
            ecosystem
          </p>
          <br />
          <p>Introducing VXD Cryptocurrency &amp; Valyou X Tokens</p>
        </div>
        <Grid
          className="px-2 flex justify-center items-center space-between"
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item md={6}>
            <Image
              src="/assets/vxd_img.svg"
              width={600}
              height={600}
              alt="awards"
            />
          </Grid>
          <Grid className="px-7 text-center" item md={6}>
            <div className="building">
              <p className="text-6xl font-bold rebuilding">The VXD coin</p>
            </div>
            <br />
            <div className="desc_text text-justify">
              is a stable price 1:1 utility global currency that is
              interoperable with the blockchain digital currency ecosystem It
              will fuel the Valyou X music industry economy by facilitating
              payments and investments in music artist brands, while also
              safeguarding investors within the app against fraud.
            </div>
          </Grid>
        </Grid>
        <br />
        <Grid
          className="px-2 flex flex-row-reverse justify-center items-center space-between"
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item md={6}>
            <Image
              src="/assets/valyoux_black_logo.svg"
              width={600}
              height={600}
              alt="awards"
            />
          </Grid>
          <Grid className="px-7 text-center" item md={6}>
            <div className="building">
              <p className="text-6xl font-bold rebuilding">
                Valyou X Subscription token
              </p>
            </div>
            <br />
            <div className="desc_text text-justify">
              To be a member of the new music industry Valyou X Ecosystem, you
              must hold ValyouX Token. Purchasing the Valyou X Token gives
              individuals and businesses the opportunity to join the Valyou X
              team. A group of early adopter supporters known as Valyou X
              citizens who help with the platform’s growth, support, and
              development. Depending on Valyou X’s success. The value of this
              token may increase or decrease
            </div>
          </Grid>
        </Grid>
        <br />
        <div>
          <div className="flex justify-between">
            <div className="flex-col">
              <p className="team_member_color">Active team member</p>
              <p className="text-4xl"> $10,0000</p>
            </div>
            <div className="flex-col">
              <p className="team_member_color">Non active team member</p>
              <p className="text-4xl"> $500-5000</p>
            </div>
          </div>

          {/* <Image
            src="/assets/valyoux_token_team.png"
            width={800}
            height={800}
            alt="how it works"
          /> */}
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
          <p className="text-5xl font-bold">
            Presale <span className="pink_gradient">Fund</span> &amp; breakdown
          </p>

          <br />
          <Grid
            className="px-2 flex justify-center items-center space-between"
            container
            spacing={{ xs: 3, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item md={4}>
              <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight pink_gradient">
                  Software Engineering
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  35% of the cash will be used to continue to develop the Valyou
                  X platform and undertake system updates, which will include
                  budgets for team recruitment, training, and development.
                </p>
              </div>
            </Grid>
            <Grid className="text-center" item md={4}>
              <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight pink_gradient">
                  Branding &amp; Marketing
                </h5>
                <p className="font-normal text-justify text-gray-700 dark:text-gray-400">
                  50% of the funds will be utilised to promote and educate the
                  public about Valyou X and blockchain advancements through
                  industry outlets. A significant advertising budget to assist
                  Valyou X in gaining investor interest and attracting active
                  users to the platform.
                </p>
              </div>
            </Grid>
            <Grid className="px-7 text-center" item md={4}>
              <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight pink_gradient">
                  Reserve
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  15% will be set aside in reserve to deal with any emergency or
                  unexpected circumstances that may arise.
                </p>
              </div>
            </Grid>
          </Grid>

          {/* <div className="flex md:h-full md:w-full justify-center items-center space-x-4">
            <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight pink_gradient">
                Software Engineering
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                35% of the cash will be used to continue to develop the Valyou X
                platform and undertake system updates, which will include
                budgets for team recruitment, training, and development.
              </p>
            </div>
            <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight pink_gradient">
                Branding &amp; Marketing
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                50% of the funds will be utilised to promote and educate the
                public about Valyou X and blockchain advancements through
                industry outlets. A significant advertising budget to assist
                Valyou X in gaining investor interest and attracting active
                users to the platform.
              </p>
            </div>
            <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight pink_gradient">
                Reserve
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                15% will be set aside in reserve to deal with any emergency or
                unexpected circumstances that may arise.
              </p>
            </div>
          </div> */}
          <br />
        </div>
      </main>
    </>
  );
};

export default MainTokenComponent;
