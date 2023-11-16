import { Avatar, Card, CardContent } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

export const Investments = () => {
  const [showHolding, setShowHolding] = useState(true);

  const toogleHolding = () => {
    setShowHolding((showHolding) => !showHolding);
  };

  return (
    <div>
      <div className="background-shadow">
        <CardContent sx={{ paddingBottom: "16px !important" }}>
          <div className="flex justify-between">
            <div className="flex">
              <Link href="artist">
                <Avatar
                  className="w-[40px] h-[40px]"
                  alt="Travis Howard"
                  src="/assets/drakeDp.png"
                />
              </Link>
              <div className="flex flex-col items-start px-2">
                <p className="lg:text-1xl font-bold">Beyonce</p>
                {showHolding ? (
                  <p onClick={toogleHolding} className="text-sm">
                    Stocks Holding
                  </p>
                ) : (
                  <p onClick={toogleHolding} className="text-sm">
                    Dividends
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col items-end px-2">
              <p className="lg:text-1xl font-bold">$10,000</p>
              {showHolding ? (
                <p className="text-sm">50</p>
              ) : (
                <p className="text-sm"> 50%</p>
              )}
            </div>
          </div>
        </CardContent>
      </div>
    </div>
  );
};

export const Reward = () => {
  return (
    <div>
      <Card>
        <CardContent className="flex justify-between p-2">
          <div className="flex items-center gap-2">
            <Avatar
              className="w-[40px] h-[40px]"
              alt="Travis Howard"
              src="/assets/drakeDp.png"
            />
            <div className="flex flex-col">
              <p className="lg:text-1xl font-bold">Drake</p>
              <p className="text-sm">Reward Earned</p>
            </div>
          </div>
          <div>
            <p className="lg:text-1xl font-bold mt-5">$10,000</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export const VipPoints = () => {
  return (
    <div>
      <Card>
        <CardContent className="flex justify-between p-2">
          <div className="flex items-center gap-2">
            <Avatar
              className="w-[40px] h-[40px]"
              alt="Travis Howard"
              src="/assets/drakeDp.png"
            />
            <div className="flex flex-col">
              <p className="lg:text-1xl font-bold">Drake</p>
              <p className="text-sm">VIP Points</p>
            </div>
          </div>
          <div>
            <p className="lg:text-1xl font-bold mt-5">10,000</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
