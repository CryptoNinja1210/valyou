import { Avatar, Button, Card, CardContent } from "@mui/material";

import StarRateIcon from "@mui/icons-material/StarRate";

const CollaborateCard = () => {
  return (
    <Card>
      <CardContent>
        <h3>
          <b>Want to Collaborate with Drake?</b>
        </h3>
        <div className="my-2">
          <StarRateIcon sx={{ color: "yellow" }}></StarRateIcon>
          <StarRateIcon sx={{ color: "yellow" }}></StarRateIcon>
          <StarRateIcon sx={{ color: "yellow" }}></StarRateIcon>
          <StarRateIcon sx={{ color: "yellow" }}></StarRateIcon>
        </div>
        <div className="mt-2 text-xs text-gray-400">
          <p>1 spmg Feature - $100,000 + 20% royalites split</p>
          <p>1 song feature - $0.50% royalties split( subject to approval)</p>
          <p>1 song feature plus music video apperance $120,000</p>
        </div>
        <div className="flex justify-between my-2">
          <Button variant="contained" className="pinkGradient">
            Message Me
          </Button>
          <Button variant="contained" className="green-gradient">
            Hire Me
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const PreviousHistory = () => {
  return (
    <div className="my-2">
      <div className="my-3">
        <p className="text-center">Previous Collaborated History</p>
      </div>
      <Card>
        <CardContent>
          <div className="flex mx-2 items-center">
            <Avatar
              className="w-[70px] h-[70px]"
              alt="Travis Howard"
              src="/assets/drakeDp.png"
            />
            <div className="flex-col mx-2 items-center">
              <p>
                <b>Bobby</b>
              </p>
              <p>Rapper</p>
            </div>
          </div>
          <div className="my-2">
            <StarRateIcon sx={{ color: "yellow" }}></StarRateIcon>
            <StarRateIcon sx={{ color: "yellow" }}></StarRateIcon>
            <StarRateIcon sx={{ color: "yellow" }}></StarRateIcon>
            <StarRateIcon sx={{ color: "yellow" }}></StarRateIcon>
          </div>
          <p className="text-gray-400">
            <i>Working with this guy is an amazing experience</i>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export const Collaborate = () => {
  return (
    <>
      <CollaborateCard />
      <PreviousHistory />
    </>
  );
};
