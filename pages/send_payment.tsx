import { NextPage } from "next";
import MarketNavComponent from "../components/marketNav/marketNav";
import { withAuth } from "../components/withAuth";
import { SendMoney } from "../components/bank/sendMoney";
import Link from "next/link";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const Transfer: NextPage = () => {
  return (
    <>
      <div className="p-2">
        <div className="flex items-center gap-4 py-4">
          <div className="p-1 text-white bg-black rounded-full">
            <Link href="/wallet">
              <KeyboardBackspaceIcon />
            </Link>
          </div>
          <b className="text-2xl">SEND VXD</b>
        </div>
        <SendMoney />
      </div>
    </>
  );
};

export default withAuth(Transfer);
