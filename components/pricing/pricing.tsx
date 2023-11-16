import { Grid } from "@mui/material";
import TokenPresale from "../../pages/token_presale";
import Image from "next/image";

const PricingComponent = () => {
  return (
    <>
      <main className="container mx-auto p-5">
        <Grid
          className="flex justify-center items-center space-between"
          container
          //   spacing={{ xs: 1, md: 1 }}
          columns={{ xs: 1, sm: 1, md: 12 }}
        >
          <Grid item md={6} xs={3}>
            <div>
              <div className="blockchain_bck">
                <p className="blockchain_text">
                  Get early access to Valyou X tokens pre-launch!
                </p>
              </div>
              <p className="font-bold musicArtistFont">
                <span className="financial_stk">Valyou X</span> Subscription
                token
              </p>
              <div className="ms_desc text-justify">
                To be a member of the new music industry Valyou X Ecosystem, you
                must hold ValyouX Token. Purchasing the Valyou X Token gives
                individuals and businesses the opportunity to join the Valyou X
                team. A group of early adopter supporters known as Valyou X
                citizens who help with the platform’s growth, support, and
                development. Depending on Valyou X’s success. The value of this
                token may increase or decrease
              </div>
              <br />

              <br />
            </div>
          </Grid>
          <Grid item md={6}>
            <Image
              src="/assets/valyoux_black_logo.svg"
              width={500}
              height={400}
              alt="awards"
            />
          </Grid>
        </Grid>

        <br />
      </main>

      <div className="bg-white dark:bg-gray-800">
        <div className="container px-6 py-8 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-8 lg:-mx-4 lg:flex-row lg:items-stretch lg:space-y-0">
            <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4">
              <div className="flex-shrink-0">
                <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-[#050f2f]-400 uppercase rounded-lg bg-gray-50 ">
                  Standard
                </h2>
              </div>
              <div className="flex-shrink-0">
                <span className="pt-2 text-4xl font-bold text-gray-800 uppercase ">
                  $10.00
                </span>
              </div>
              <ul className="flex-1 space-y-4">
                <li className="text-gray-500">5 Valyou X Tokens</li>
                <li className="text-gray-500">Non Active Team Member</li>
              </ul>

              <button className="inline-flex items-center justify-center px-4 py-2 font-semibold text-white uppercase transition-colors token rounded-lg hover:bg-pink-300 focus:outline-none">
                PreSale
              </button>
            </div>

            <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4">
              <div className="flex-shrink-0">
                <h2 className="inline-flex items-center justify-center px-2 font-semibold  text-[#050f2f]-400 uppercase rounded-lg bg-gray-50">
                  Gold
                </h2>
              </div>
              <div className="flex-shrink-0">
                <span className="pt-2 text-4xl font-bold text-gray-800 uppercase">
                  $10,000.00
                </span>
              </div>
              <ul className="flex-1 space-y-4">
                <li className="text-gray-500">20,000 Valyou X Tokens</li>
                <li className="text-gray-500">Active Team Member</li>
              </ul>

              <button className="inline-flex items-center justify-center px-4 py-2 font-semibold text-white uppercase transition-colors token rounded-lg hover:bg-pink-300 focus:outline-none">
                PreSale
              </button>
            </div>

            <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4">
              <div className="flex-shrink-0">
                <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-[#050f2f]-400 uppercase rounded-lg bg-gray-50">
                  Platinum
                </h2>
              </div>
              <div className="flex-shrink-0">
                <span className="pt-2 text-4xl font-bold text-gray-800 uppercase">
                  $100,000.00
                </span>
              </div>
              <ul className="flex-1 space-y-4">
                <li className="text-gray-500">200,000 Valyou X Tokens</li>
                <li className="text-gray-500">Founding Member Investor</li>
              </ul>

              <button className="inline-flex items-center justify-center px-4 py-2 font-semibold text-white uppercase transition-colors token rounded-lg hover:bg-pink-300 focus:outline-none">
                PreSale
              </button>
            </div>
          </div>
          <br />
          <br />

          <p className="px-3 text-center lg:text-left text-5xl font-bold">
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
              <div className="block lg:h-80 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
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
              <div className="block  lg:h-80  p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
                <h5 className="mb-2 text-2xl font-bold tracking-tight pink_gradient">
                  Branding &amp; Marketing
                </h5>
                <p className="font-normal text-justify text-gray-700">
                  50% of the funds will be utilised to promote and educate the
                  public about Valyou X and blockchain advancements through
                  industry outlets. A significant advertising budget to assist
                  Valyou X in gaining investor interest and attracting active
                  users to the platform.
                </p>
              </div>
            </Grid>
            <Grid className="lg:px-7 text-center" item md={4}>
              <div className="block lg:h-80  p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
                <h5 className="mb-2 text-2xl font-bold tracking-tight pink_gradient">
                  Reserve
                </h5>
                <p className="font-normal text-gray-700">
                  15% will be set aside in reserve to deal with any emergency or
                  unexpected circumstances that may arise.
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};
export default PricingComponent;
