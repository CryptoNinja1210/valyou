import Link from "next/link";

import { Avatar, Button, Card, CardContent } from "@mui/material";

import StarRateIcon from "@mui/icons-material/StarRate";

const ServiceCard = ({ title,price }) => {
  return (
    <Card className="my-3">
      <CardContent>
        <h3>
          <b>{title}</b>
        </h3>
        <div>
          <StarRateIcon sx={{ fill: "yellow" }}></StarRateIcon>
          <StarRateIcon sx={{ fill: "yellow" }}></StarRateIcon>
          <StarRateIcon sx={{ fill: "yellow" }}></StarRateIcon>
          <StarRateIcon sx={{ fill: "yellow" }}></StarRateIcon>
        </div>

        <div className="mt-2 text-xs text-gray-400">
          <p>1 spmg Feature - $100,000 + 20% royalites split</p>
          <p>1 song feature - $0.50% royalties split( subject to approval)</p>
          <p>1 song feature plus music video apperance $120,000</p>
        </div>
        <div className="flex justify-between items-center my-2">
            <button className="border-2 rounded p-1 border-black">
              <b className="text-[#050f2f] text-2xl">{price}</b>
            </button>
          <Button variant="contained" className="green-gradient">
            Hire Me
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export const Services = () => {
  return (
    <>
      <ServiceCard title="I will record your song" price="$20,000" />
      <ServiceCard title="I will mix your song" price="$10,000" />
      <ServiceCard title="I will master your song" price="$16,000" />
    </>
  );
};
