import Button from "@mui/material/Button";
import Link from "next/link";

export const BankCard = ({ walletAddress, onClick, showButton }) => {
  return (
    <>
      <div className="block p-6  bg-white rounded-lg border border-gray-200 shadow-md">
        <br />
        <br />
        <br />
        <h5 className="mb-2 lg:text-4xl text-3xl text-center font-bold tracking-tight ">
          $ 999,293.0757 VXD
        </h5>
        <br />
        <br />
        <br />
        <Link href="">{walletAddress}</Link>
        <br />
        <br />
        {!showButton && (
          <div className="flex justify-between">
            <Button
              variant="contained"
              className="pinkGradient w-60 lg:w-96"
              onClick={onClick}
            >
              Send
            </Button>
            &nbsp;&nbsp;
            <Button
              variant="contained"
              className="green-gradient mx-1 w-60 lg:w-96"
              onClick={onClick}
            >
              {" "}
              Receive
            </Button>
            &nbsp;&nbsp;
            <Button
              variant="contained"
              className="bg-pink-500 w-60 lg:w-96"
              onClick={onClick}
            >
              Currency Exchange
            </Button>
          </div>
        )}
        <br />
        <br />
      </div>
    </>
  );
};
