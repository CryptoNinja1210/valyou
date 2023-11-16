import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import StarRateIcon from "@mui/icons-material/StarRate";

export const BusinessCard = () => {
  return (
    <>
      <div>
        <div className="green-gradient text-white rounded">
          <CardContent>
            <div className="flex justify-between items-center">
              <div className="flex px-2">
                <Avatar
                  sx={{ width: 60, height: 60 }}
                  className="relative top-1"
                  alt="Travis Howard"
                  src="/assets/drakeDp.png"
                />
                <div className="flex-col px-2">
                  <p className="lg:text-1xl font-bold text-white">T-Series</p>
                  <p className="text-sm text-white">Recording Studio</p>
                  <p className="text-sm">
                    <div className="flex items-center text-white">
                      <StarRateIcon sx={{ fill: "yellow " }}></StarRateIcon>
                      <StarRateIcon sx={{ fill: "yellow " }}></StarRateIcon>
                      <StarRateIcon sx={{ fill: "yellow " }}></StarRateIcon>
                      30 Reviews
                    </div>
                  </p>
                </div>
              </div>
              <div className="flex-col">
                <Button className="!bg-white !text-[#050f2f] w-20">Follow</Button>
              </div>
            </div>
          </CardContent>
        </div>
      </div>
    </>
  );
};
