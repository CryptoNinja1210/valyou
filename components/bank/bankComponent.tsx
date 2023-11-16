import { BankCard } from "./bank_card";
import { MobileTable } from "./mobile_table";
import { SendMoney } from "./sendMoney";
import { WebTable } from "./webTable";
import { Button, styled } from "@mui/material";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ArtistBand } from "./artistBrand";
import { Deposit } from "./deposit";
import Trade from "./Trade";
import { useSelector } from "react-redux";
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

const BankComponent = () => {
  const [value, setValue] = React.useState(0);
  const [showForm, setShowForm] = React.useState(false);
  const [openDeposit, setOpenDeposit] = React.useState<any>(false);

  const handleDeposit = () => {
    setOpenDeposit(!openDeposit);
  };
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const state: any = useSelector((state) => state);
  const {
    flags: { selectedTab },
  } = state;

  React.useEffect(() => {
    setValue(selectedTab);
  }, [selectedTab]);

  return (
    <div className="text-center w-full">
      <Box sx={{ width: "100%" }}>
        <div className="p-2">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <AntTab disableRipple label="Personal Account" {...a11yProps(0)} />
            <AntTab
              disableRipple
              label="Artist Company Funding"
              {...a11yProps(1)}
            />
            <AntTab disableRipple label="Investments" {...a11yProps(2)} />
            <AntTab disableRipple label="Business" {...a11yProps(3)} />
          </Tabs>
        </div>
        <TabPanel value={value} index={0}>
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
            className="w-full mx-1"
            onClick={() => setOpenDeposit(!openDeposit)}
          >
            Deposit / Buy VXD
          </Button>
          <br />
          {openDeposit && <Deposit handleDeposit={handleDeposit} />}
          <br />
          <Link href="/investments">
            <Button variant="contained" className="w-full mx-1">
              Transactions &amp; Earning History
            </Button>
          </Link>
        </TabPanel>
        <TabPanel value={value} index={1}>
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
        <TabPanel value={value} index={2}>
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
        <TabPanel value={value} index={3}>
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
      </Box>
    </div>
  );
};

export default BankComponent;
