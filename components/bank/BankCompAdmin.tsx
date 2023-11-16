import { BankCard } from "./bank_card";
import { MobileTable } from "./mobile_table";
import { SendMoney } from "./sendMoney";
import { WebTable } from "./webTable";
import { Button, Card, styled } from "@mui/material";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ArtistBand } from "./artistBrand";
import { Deposit } from "./deposit";
import Trade from "./Trade";
import { AdminDashboard } from "../admin/dashboard";
import Link from "next/link";

const AntTab = styled((props: any) => (
  <Tab className="customBlack" disableRipple {...props} />
))(({ theme }) => ({
  textTransform: "none",
  color: "#050F2F",
}));

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const BankCompAdmin = () => {
  const [value, setValue] = React.useState(0);
  const [showForm, setShowForm] = React.useState(false);
  const [openDeposit, setOpenDeposit] = React.useState<any>(false);

  const handleDeposit = () => {
    setOpenDeposit(!openDeposit);
  };
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="p-0 text-center w-full">
        <Box sx={{ width: "100%" }}>
          <div className="p-2">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <AntTab
                disableRipple
                label="Valyou X Dollar (VXD) Reserve Currency"
                {...a11yProps(0)}
              />
              <AntTab
                disableRipple
                label="Valyou X Dollar (VXD) Circulating Supply"
                {...a11yProps(1)}
              />
              <AntTab
                disableRipple
                label={
                  <span style={{ width: "350px" }}>
                    Security Compliance Account VXD backed by Asset
                  </span>
                }
                {...a11yProps(2)}
              />
              <AntTab
                disableRipple
                label="Personal Account"
                {...a11yProps(3)}
              />
              <AntTab
                disableRipple
                label="Artist Company Funding"
                {...a11yProps(4)}
              />
              <AntTab disableRipple label="Investments" {...a11yProps(5)} />
              <AntTab disableRipple label="Business" {...a11yProps(6)} />
              <AntTab disableRipple label="Revenues" {...a11yProps(7)} />
            </Tabs>
          </div>
          <TabPanel value={value} index={0}>
            <Card className="p-20 my-4">
              <b className="mb-2 lg:text-4xl md:text-2xl text-xl text-center font-bold tracking-tight">
                $ 399,999,787,288.21 VXD
              </b>
            </Card>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Card className="p-20 my-4">
              <b className="mb-2 lg:text-4xl md:text-2xl text-xl text-center font-bold tracking-tight">
                $ 212,711.79 VXD
              </b>
            </Card>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Card className="p-20 my-4">
              <b className="mb-2 lg:text-4xl md:text-2xl text-xl text-center font-bold tracking-tight">
                $ 0.00 VXD
              </b>
            </Card>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <BankCard
              onClick={() => setShowForm(!showForm)}
              walletAddress="Personal Wallet Address"
              showButton={false}
            />
            <br />
            {showForm && <SendMoney />}
            <br />
            <Button
              variant="contained"
              sx={{ backgroundColor: "black" }}
              className="w-full bg-black mx-1"
              onClick={() => setOpenDeposit(!openDeposit)}
            >
              Deposit / Buy VXD
            </Button>
            &nbsp;&nbsp;
            <br />
            {openDeposit && <Deposit handleDeposit={handleDeposit} />}
            <br />
            <Link href="/investments">
              <Button variant="contained" className="w-full mx-1">
                Transactions &amp; Earning History
              </Button>
            </Link>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <BankCard
              onClick={() => setShowForm(!showForm)}
              walletAddress="Wallet Address"
              showButton={false}
            />
            <br />
            {showForm && <SendMoney />}
            <br />
            <Link href="/investments">
              <Button variant="contained" className="w-full mx-1">
                Transactions &amp; Earning History
              </Button>
            </Link>
          </TabPanel>
          <TabPanel value={value} index={5}>
            <BankCard
              onClick={() => setShowForm(!showForm)}
              walletAddress="TOTAL VALUE OF YOUR ARTIST'S INVESTMENT PORTFOLIO"
              showButton={true}
            />
            <br />
            {showForm && <SendMoney />}
            <br />
            <Link href="/investments">
              <Button variant="contained" className="w-full mx-1">
                Transactions &amp; Earning History
              </Button>
            </Link>
          </TabPanel>
          <TabPanel value={value} index={6}>
            <BankCard
              onClick={() => setShowForm(!showForm)}
              walletAddress="Wallet Address"
              showButton={false}
            />
            <br />
            {showForm && <SendMoney />}
            <br />
            <Link href="/investments">
              <Button variant="contained" className="w-full mx-1">
                Transactions &amp; Earning History
              </Button>
            </Link>
          </TabPanel>
          <TabPanel value={value} index={7}>
            {/* <Revenue /> */}
            <AdminDashboard />
          </TabPanel>
        </Box>
      </div>
    </>
  );
};
export default BankCompAdmin;

const Revenue = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="p-0 text-center w-full">
        <Box sx={{ width: "100%" }}>
          <Box sx={{}}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <AntTab label="Users Selling Stocks Revenue" {...a11yProps(0)} />
              <AntTab label="Users Buying Stocks Revenue" {...a11yProps(1)} />
              <AntTab label="Video Streaming Revenue" {...a11yProps(2)} />
              <AntTab label="Audio Streaming Revenue" {...a11yProps(3)} />
              <AntTab
                label="Products/Store Merchandise Sales Revenue"
                {...a11yProps(4)}
              />
              <AntTab
                label="User Buying VXD (Fiat/Debit Card) Revenue"
                {...a11yProps(5)}
              />
              <AntTab
                label="User Selling VXD (Fiat/Debit Card) Revenue"
                {...a11yProps(6)}
              />
              <AntTab
                label="User Buying VXD (Crypto) Revenue"
                {...a11yProps(7)}
              />
              <AntTab
                label="User Selling VXD ( Crypto) Revenue"
                {...a11yProps(8)}
              />
              <AntTab
                label="Brand Sponsors Video Advertising Revenue"
                {...a11yProps(9)}
              />
              <AntTab
                label="Valyou X Users Visitors to Brand Sponsors Website revenue"
                {...a11yProps(10)}
              />
              <AntTab
                label="Brand Logo Sponsoring Artist revenue"
                {...a11yProps(11)}
              />
              <AntTab
                label="Artist Promoting their Audio Revenue"
                {...a11yProps(12)}
              />
              <AntTab
                label="Artist Promoting  their Video Revenue"
                {...a11yProps(13)}
              />
              <AntTab label="User Valyou A song Revenue" {...a11yProps(14)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Card className="p-20 my-4">
              <b className="mb-2 lg:text-4xl md:text-2xl text-xl text-center font-bold tracking-tight">
                $ 999,293.0757 VXD
              </b>
            </Card>
            <WebTable />
            <MobileTable />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Card className="p-20 my-4">
              <b className="mb-2 lg:text-4xl md:text-2xl text-xl text-center font-bold tracking-tight">
                $ 24242493.0757 VXD
              </b>
            </Card>
            <WebTable />
            <MobileTable />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Card className="p-20 my-4">
              <b className="mb-2 lg:text-4xl md:text-2xl text-xl text-center font-bold tracking-tight">
                $ 46549293.0757 VXD
              </b>
            </Card>
            <WebTable />
            <MobileTable />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Card className="p-20 my-4">
              <b className="mb-2 lg:text-4xl md:text-2xl text-xl text-center font-bold tracking-tight">
                $ 93546293.0757 VXD
              </b>
            </Card>
            <WebTable />
            <MobileTable />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Card className="p-20 my-4">
              <b className="mb-2 lg:text-4xl md:text-2xl text-xl text-center font-bold tracking-tight">
                $ 68593.0757 VXD
              </b>
            </Card>
            <WebTable />
            <MobileTable />
          </TabPanel>
          <TabPanel value={value} index={5}>
            <Card className="p-20 my-4">
              <b className="mb-2 lg:text-4xl md:text-2xl text-xl text-center font-bold tracking-tight">
                $ 968653.0757 VXD
              </b>
            </Card>
            <WebTable />
            <MobileTable />
          </TabPanel>
          <TabPanel value={value} index={6}>
            <Card className="p-20 my-4">
              <b className="mb-2 lg:text-4xl md:text-2xl text-xl text-center font-bold tracking-tight">
                $ 9698543.0757 VXD
              </b>
            </Card>
            <WebTable />
            <MobileTable />
          </TabPanel>
          <TabPanel value={value} index={7}>
            <Card className="p-20 my-4">
              <b className="mb-2 lg:text-4xl md:text-2xl text-xl text-center font-bold tracking-tight">
                $ 657493.0757 VXD
              </b>
            </Card>
            <WebTable />
            <MobileTable />
          </TabPanel>
          <TabPanel value={value} index={8}>
            <Card className="p-20 my-4">
              <b className="mb-2 lg:text-4xl md:text-2xl text-xl text-center font-bold tracking-tight">
                $ 999,293.0757 VXD
              </b>
            </Card>
            <WebTable />
            <MobileTable />
          </TabPanel>
          <TabPanel value={value} index={9}>
            <Card className="p-20 my-4">
              <b className="mb-2 lg:text-4xl md:text-2xl text-xl text-center font-bold tracking-tight">
                $ 956784293.0757 VXD
              </b>
            </Card>
            <WebTable />
            <MobileTable />
          </TabPanel>
          <TabPanel value={value} index={10}>
            <Card className="p-20 my-4">
              <b className="mb-2 lg:text-4xl md:text-2xl text-xl text-center font-bold tracking-tight">
                $ 999,293.0757 VXD
              </b>
            </Card>
            <WebTable />
            <MobileTable />
          </TabPanel>
          <TabPanel value={value} index={11}>
            <Card className="p-20 my-4">
              <b className="mb-2 lg:text-4xl md:text-2xl text-xl text-center font-bold tracking-tight">
                $ 9954334293.0757 VXD
              </b>
            </Card>
            <WebTable />
            <MobileTable />
          </TabPanel>
          <TabPanel value={value} index={12}>
            <Card className="p-20 my-4">
              <b className="mb-2 lg:text-4xl md:text-2xl text-xl text-center font-bold tracking-tight">
                $ 74349293.0757 VXD
              </b>
            </Card>
            <WebTable />
            <MobileTable />
          </TabPanel>
          <TabPanel value={value} index={13}>
            <Card className="p-20 my-4">
              <b className="mb-2 lg:text-4xl md:text-2xl text-xl text-center font-bold tracking-tight">
                $ 999,293.0757 VXD
              </b>
            </Card>
            <WebTable />
            <MobileTable />
          </TabPanel>
          <TabPanel value={value} index={14}>
            <Card className="p-20 my-4">
              <b className="mb-2 lg:text-4xl md:text-2xl text-xl text-center font-bold tracking-tight">
                $ 32564293.0757 VXD
              </b>
            </Card>
            <WebTable />
            <MobileTable />
          </TabPanel>
        </Box>
      </div>
    </>
  );
};
